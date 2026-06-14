#!/usr/bin/env python3
"""
DRACO iNC — Michael's Library
split_preview.py — make the public Chapter-1 preview from a full book PDF.

The site serves two files per book:
    books/<id>.pdf           full edition  (owners only)
    books/<id>-preview.pdf   Chapter 1     (public free preview)

This tool builds the -preview.pdf from the full .pdf.

USAGE
    # one book, auto-detect Chapter 1 length from the PDF bookmarks/outline
    python3 tools/split_preview.py books/garden-city.pdf

    # force the preview to be the first N pages
    python3 tools/split_preview.py books/garden-city.pdf --pages 14

    # every full PDF in books/ that doesn't already have a preview
    python3 tools/split_preview.py --all

HOW AUTO-DETECT WORKS
    If the PDF has bookmarks, the preview runs from page 1 up to the page
    just before the SECOND top-level bookmark (i.e. the whole of Chapter 1).
    If there are no usable bookmarks, it falls back to --pages (default 15).
"""
import sys, os, glob, argparse
from pypdf import PdfReader, PdfWriter

DEFAULT_PAGES = 15


def chapter_one_page_count(reader):
    """Return number of pages in Chapter 1 using the outline, or None."""
    try:
        outline = reader.outline
    except Exception:
        return None
    tops = [item for item in outline if not isinstance(item, list)]
    if len(tops) < 2:
        return None
    try:
        # page index (0-based) where the 2nd top-level entry begins
        second_start = reader.get_destination_page_number(tops[1])
        if second_start and second_start > 0:
            return second_start  # pages 0..second_start-1  == Chapter 1
    except Exception:
        return None
    return None


def make_preview(full_path, pages=None):
    if not os.path.exists(full_path):
        print("  ! not found:", full_path); return False
    out = full_path[:-4] + "-preview.pdf" if full_path.endswith(".pdf") else full_path + "-preview.pdf"
    reader = PdfReader(full_path)
    n = pages or chapter_one_page_count(reader) or min(DEFAULT_PAGES, len(reader.pages))
    n = max(1, min(n, len(reader.pages)))
    writer = PdfWriter()
    for i in range(n):
        writer.add_page(reader.pages[i])
    with open(out, "wb") as f:
        writer.write(f)
    print(f"  \u2713 {os.path.basename(out)}  ({n} of {len(reader.pages)} pages)")
    return True


def main():
    ap = argparse.ArgumentParser(description="Build Chapter-1 preview PDFs.")
    ap.add_argument("pdf", nargs="?", help="path to a full book PDF (books/<id>.pdf)")
    ap.add_argument("--pages", type=int, help="force preview to first N pages")
    ap.add_argument("--all", action="store_true", help="process every full PDF in books/")
    args = ap.parse_args()

    if args.all:
        books_dir = "books"
        fulls = [p for p in glob.glob(os.path.join(books_dir, "*.pdf"))
                 if not p.endswith("-preview.pdf")]
        if not fulls:
            print("No full PDFs found in books/"); return
        for p in sorted(fulls):
            make_preview(p, args.pages)
        return

    if not args.pdf:
        ap.print_help(); sys.exit(1)
    make_preview(args.pdf, args.pages)


if __name__ == "__main__":
    main()
