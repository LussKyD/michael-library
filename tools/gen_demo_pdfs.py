#!/usr/bin/env python3
"""
DRACO iNC — Michael's Library
Generates DRACO-styled book PDFs from extracted chapter text.

For each book it produces:
  books/{id}-preview.pdf   -> Chapter 1 only   (PUBLIC free preview)
  books/{id}.pdf           -> Chapter 1 + 2    (INTERIM full edition, placeholder
                                                until Danford uploads the real book PDF)

Page design: parchment paper, near-black serif body, gold chapter label,
and a "MICHAEL'S LIBRARY · DRACO iNC" footer watermark on every page.
"""
import json, os, re, sys
from reportlab.lib.pagesizes import A5
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame,
                                Paragraph, Spacer, PageBreak)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER

# ---- DRACO palette ----
PARCH   = HexColor("#F4F1EA")   # paper
INK     = HexColor("#1A1A1A")   # body text
GOLD    = HexColor("#A8842F")   # darker gold so it reads on light paper
GOLDLT  = HexColor("#C9A84C")   # brand gold (watermark)
MUTED   = HexColor("#8A7B55")

PAGE = A5
MARGIN = 16 * mm

books = json.load(open(sys.argv[1] if len(sys.argv) > 1 else "/home/claude/books_dump.json"))
OUT = sys.argv[2] if len(sys.argv) > 2 else "/home/claude/michael-library/books"
os.makedirs(OUT, exist_ok=True)

# ---- styles ----
body = ParagraphStyle("body", fontName="Times-Roman", fontSize=11.5, leading=18,
                      textColor=INK, alignment=TA_JUSTIFY, spaceAfter=9, firstLineIndent=14)
body_first = ParagraphStyle("body_first", parent=body, firstLineIndent=0)
ch_label = ParagraphStyle("ch_label", fontName="Helvetica-Bold", fontSize=9, leading=12,
                          textColor=GOLD, alignment=TA_CENTER, spaceAfter=6, tracking=2)
ch_title = ParagraphStyle("ch_title", fontName="Times-Bold", fontSize=20, leading=24,
                          textColor=INK, alignment=TA_CENTER, spaceAfter=22)
book_title = ParagraphStyle("book_title", fontName="Times-Bold", fontSize=15, leading=19,
                            textColor=INK, alignment=TA_CENTER, spaceAfter=4)
book_author = ParagraphStyle("book_author", fontName="Helvetica", fontSize=10, leading=14,
                             textColor=MUTED, alignment=TA_CENTER, spaceAfter=2)
cover_brand = ParagraphStyle("cover_brand", fontName="Helvetica-Bold", fontSize=8, leading=12,
                             textColor=GOLD, alignment=TA_CENTER, spaceAfter=2, tracking=3)


def esc(t):
    return (t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def split_paras(raw):
    """Turn a long extracted string into readable ~70-110 word paragraphs."""
    if not raw:
        return []
    words = re.split(r"\s+", raw.strip())
    paras, cur, n = [], [], 0
    for w in words:
        if not w:
            continue
        cur.append(w); n += 1
        ends = bool(re.search(r"[.!?][\"'\u2019\u201d]?$", w))
        if (n >= 70 and ends) or n >= 130:
            paras.append(" ".join(cur)); cur, n = [], 0
    if cur:
        paras.append(" ".join(cur))
    return paras


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(GOLDLT)
    canvas.setFont("Helvetica-Bold", 6.5)
    canvas.drawString(MARGIN, 9 * mm, "MICHAEL\u2019S LIBRARY")
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 6.5)
    canvas.drawRightString(PAGE[0] - MARGIN, 9 * mm, "DRACO iNC \u00b7 A DRACO DYNASTY TECHNOLOGY DEPARTMENT")
    # page number centre
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7)
    canvas.drawCentredString(PAGE[0] / 2, 9 * mm, str(doc.page))
    canvas.restoreState()


def build(path, book, chapters):
    """chapters = list of (label, title, text)"""
    doc = BaseDocTemplate(path, pagesize=PAGE,
                          leftMargin=MARGIN, rightMargin=MARGIN,
                          topMargin=18 * mm, bottomMargin=16 * mm,
                          title=book["title"], author=book["author"])
    frame = Frame(doc.leftMargin, doc.bottomMargin,
                  PAGE[0] - 2 * MARGIN, PAGE[1] - 34 * mm, id="main")

    def paint_bg(canvas, d):
        canvas.saveState()
        canvas.setFillColor(PARCH)
        canvas.rect(0, 0, PAGE[0], PAGE[1], fill=1, stroke=0)
        canvas.restoreState()
        footer(canvas, d)

    doc.addPageTemplates([PageTemplate(id="book", frames=[frame], onPage=paint_bg)])

    story = []
    # ---- title page ----
    story.append(Spacer(1, 40 * mm))
    story.append(Paragraph("MICHAEL\u2019S LIBRARY", cover_brand))
    story.append(Spacer(1, 6 * mm))
    story.append(Paragraph(esc(book["title"]), book_title))
    story.append(Paragraph("by " + esc(book["author"]), book_author))
    if book.get("year"):
        story.append(Paragraph(esc(str(book["year"])), book_author))
    story.append(PageBreak())

    # ---- chapters ----
    for label, title, text in chapters:
        story.append(Paragraph(label.upper(), ch_label))
        story.append(Paragraph(esc(title), ch_title))
        paras = split_paras(text)
        if not paras:
            paras = ["(Chapter text will appear here once the full edition is uploaded.)"]
        for i, p in enumerate(paras):
            story.append(Paragraph(esc(p), body_first if i == 0 else body))
        story.append(PageBreak())

    doc.build(story)


count = 0
for b in books:
    chs = b.get("chapters") or []
    t1 = chs[0] if len(chs) > 0 else "Chapter 1"
    t2 = chs[1] if len(chs) > 1 else "Chapter 2"

    # preview = chapter 1 only
    build(os.path.join(OUT, f"{b['id']}-preview.pdf"), b,
          [("Chapter 1", t1, b.get("ch1", ""))])

    # interim full = chapter 1 + chapter 2 (placeholder until real book uploaded)
    full_chs = [("Chapter 1", t1, b.get("ch1", ""))]
    if b.get("ch2"):
        full_chs.append(("Chapter 2", t2, b.get("ch2", "")))
    build(os.path.join(OUT, f"{b['id']}.pdf"), b, full_chs)
    count += 1
    print(f"  {b['id']:24} preview + full")

print(f"\nGenerated PDFs for {count} books in {OUT}")
