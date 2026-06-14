# `books/` — Michael's Library PDF storage

This folder holds the actual book PDFs that the reader renders inline.

## Two files per book

| File | Who sees it | What it is |
|---|---|---|
| `<id>.pdf` | Owners (after purchase) | The full book |
| `<id>-preview.pdf` | Everyone (free) | Chapter 1 only |

`<id>` must match the book's `id` in `js/data.js` exactly.
Example: Wayne Grudem's *Bible Doctrine* has id `bible-doctrine-grudem`, so:

```
books/bible-doctrine-grudem.pdf          (full)
books/bible-doctrine-grudem-preview.pdf  (Chapter 1)
```

## Adding a new book PDF

1. Drop the full book in as `books/<id>.pdf`.
2. Make the Chapter-1 preview:
   ```
   python3 tools/split_preview.py books/<id>.pdf
   ```
   It auto-detects Chapter 1 from the PDF's bookmarks. If the book has no
   bookmarks, force it: `--pages 14` (first 14 pages, for example).
3. Commit and push. GitHub Pages serves both files automatically.

If a PDF is missing, the reader shows a clean "being uploaded" message instead
of breaking — so you can add books one at a time.

## Current status

- The **8 original books** ship with real Chapter-1 previews and an **interim**
  full PDF (Chapter 1 + Chapter 2) generated from the extracted text. Replace
  each `<id>.pdf` with the complete book when ready — same filename, no code change.
- The **9 new Christian books** are in the catalogue but their PDFs are not
  uploaded yet. Drop them in using the steps above and they go live instantly.

## Heads-up on access (Phase 3)

GitHub Pages is public static hosting. Any file in this folder is reachable by
its direct URL, so the full PDFs are technically downloadable by anyone who
guesses the path. The in-app paywall is UI-level only. Real gating (full PDFs
served only to paid users) arrives in **Phase 3** with the backend + M-Pesa.
The Chapter-1 previews are *meant* to be public, so those are safe as-is.

---
*DRACO iNC — A DRACO DYNASTY Technology Department · Nairobi, Kenya*
