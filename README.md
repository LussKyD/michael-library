[README.md](https://github.com/user-attachments/files/27103630/README.md)
# DRACO LIBRARY — Michael Digital Library Platform

> Built by **DRACO iNC — A DRACO DYNASTY Technology Department**
> Nairobi, Kenya · 2026

A full digital library platform serving students, teachers, and parents with educational materials, inspirational books, and Christian content. Chapter 1 of every book is free to read. Full access unlocked with a one-time purchase.

---

## Project Structure

```
michael-library/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # All styling — DRACO visual identity
├── js/
│   ├── data.js             # Book catalogue — titles, authors, chapter texts
│   ├── backgrounds.js      # SVG background scenes for each page
│   └── app.js              # Application logic — reader, cart, audio, filters
├── images/                 # Book covers and assets (Phase 3)
└── README.md
```

---

## Features

### Phase 1 — Core Platform ✅
- Browse catalogue by category (Christian, Inspirational, Educational)
- Full Chapter 1 preview — word for word from source, styled as a PDF document
- Paywall after Chapter 1 — Chapter 2 onwards requires purchase
- One-time purchase per book — KSh 250–480
- My Library — purchased books stored in session
- Search and filter by category and access status
- Drop cap typography, page-style reader, font size controls

### Phase 2 — AI Audio Narration ✅
- 6 AI voices (Marcus, James, Amara, Sophia, Noah, Thembi)
- 5 playback speeds (0.75× to 2.0×)
- Seek bar with time tracking
- Browser Web Speech API — no external API cost

### Phase 3 — Backend (Planned)
- Firebase authentication — Student, Teacher, Parent accounts
- M-Pesa Daraja API — real payment processing
- Persistent library — purchases survive session refresh
- PDF delivery — secure download after purchase

### Phase 4 — Interactive Learning (Planned)
- Quizzes and assignments
- Subscription tiers (KSh 499–1,999/mo)
- CBC curriculum tools for Teachers

---

## Content Pillars

| Pillar | Content |
|---|---|
| **Christian Materials** | Bible study, sermons, devotionals, Christian books |
| **Inspirational Content** | Motivational, personal development, leadership, finance |
| **Educational Materials** | CBC curriculum Grades 1–9, JSS materials, revision papers, teacher guides |

---

## Current Catalogue (8 Books)

### Christian Materials
- Basic Christianity — John Stott · KSh 350
- Beyond Justification — Campbell & DePue · KSh 480
- By Faith Alone — Johnson & Waters · KSh 380
- Holy Fire — R.T. Kendall · KSh 360

### Inspirational Content
- The Richest Man in Babylon — George Clason · KSh 320
- The 10X Rule — Grant Cardone · KSh 420
- How to Motivate Creative People — Mark McGuinness · KSh 250
- How to Win Friends and Influence People — Dale Carnegie · KSh 350

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `--ob` | `#0A0A0F` | Primary background |
| `--gold` | `#C9A84C` | Accent, borders, headings |
| `--parch` | `#F0EDE8` | Primary text |
| `--muted` | `#8A8A9A` | Secondary text |
| `--green` | `#2ECC8A` | Success, owned state |
| `--blue` | `#4A9EFF` | Info, AI audio tag |

**Fonts:** Playfair Display (headings) · DM Sans (UI) · Space Mono (labels/code)

---

## Built By

**DRACO iNC — A DRACO DYNASTY Technology Department**
Nairobi, Kenya

Technology · Media · Fashion · *Daring Reality, Creating Opportunities*
