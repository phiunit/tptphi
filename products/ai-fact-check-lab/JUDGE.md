# Judge Report v3 — Hallucination Hunters (Lesson 3 of 6)
Judged: 2026-09-04 · docs/JUDGE.md gauntlet + docs/gauntlet/PLAN.md (D1–D9, L3 section) · 21 screenshots in dist/review/

## Verdict: PASS
`npm run audit -- ai-fact-check-lab` GREEN (render → validate → readability FK 6.1 → judge → preview). Fillable PDF: 49 fields,
all render with typed values. Deck content gate passes (RANK card 87 chars; compare 81/110; lists ≤ 98). Minutes 6+10+21+4+4 = 45
in the plan and 6+3+7+21+4+4 = 45 in the deck.

## What changed since v2 (gauntlet round 1, critics L3 / student #17–24 / buyer #4–5)
- **Cover (D1).** One-line sub "Smooth is not the same as true." (7 words, 40px, 600, white); "for grades 6–8" dropped (the chip carries
  it); chip row Grades 6–8 · 45-min lesson · No prep · No devices needed at 24px; art (draft page under a magnifying glass, the gold
  line = the claim the lens caught) fully inside the frame, doc rectangle 0.25, lines in the #FFD27A tint at full opacity, no
  low-opacity gold over the violet. Three render iterations judged against the L1 lamp cover at 200px.
- **Worksheet (D5, D8).** Name / Class / Date are fields; Deja's note leads with the concept and glosses every desk word (run, clear, log,
  second source, "the ending still stands"); RUN / FIX / KILL are tick boxes on every draft; three 28px ruled lines per note; the note
  prompt cues the conclusion judgement ("does her ending still stand?"); "Clock Out" → "Last Check"; "twelve people had walked on the
  Moon by 1972"; curly quotes on h2s; Exit #2 asks for a real checkable claim + a second source that is NOT where they first saw it.
  Blank tails: p1 15%, p2 19%, p3 13%.
- **Lesson plan (D4).** An italic "If …" what-if under every block; a quoted transition at every seam (bridge, hand-out, round change,
  Swap!, swap back, into debrief, into exit ticket); materials list the worksheet, Slides (optional), and the tally board; the genie
  bridge is hedged "(If your class did the genie lesson…)". Blank tails 11% / 10%.
- **Teacher guide (D3).** Key for every student item: warm-up, every planted error grouped by draft (Luna 2 anticipated; Wright
  "first sustained, controlled powered flights — the widely accepted record"), the second-source column per draft (acceptable sources
  + what fails), verdict guidance with an exemplar note, exit ticket key; "When It Goes Sideways" panel with four what-ifs;
  taught/assessed line per standard names a real item. Blank tails 12% / 9% / 11%.
- **Deck (D6).** Question slide never shows the answer; keys live in the notes; "two of those sentences were false"; "not checked
  ones"; Round 1 / Round 2 / Verdicts out loud; closer notes name the next lesson (sold separately).
- **Listing (D2).** Opener "NO STUDENT AI ACCOUNTS NEEDED — this lesson runs fully on paper."; hook names The Fact Desk; standards
  sentence names all three codes; INCLUDES in D2 order with page/slide counts; yaml includes = the five shipped files; closing funnel line.

## Fact audit (re-verified this pass)
Every planted error is keyed and every true claim is true: Mercury closest / Venus hottest / Jupiter–Uranus–Neptune have faint rings /
~8 light-minutes; Apollo 11 (1969), Armstrong first, twelve walkers by 1972 (six landings), the Moon reflects sunlight and is the
brightest night-sky object, Luna 2 (uncrewed, 1959); Pacific largest, Nile north through Egypt, Everest in the Himalayas (Asia),
seven continents, Asia largest, Canberra; Bell patented the telephone in 1876, the Edison quote is fabricated for the exercise,
phonograph 1877 (record + play back), Wright brothers 1903 near Kitty Hawk. No unplanted error found; no slide states a false claim.

## Fix now
(none)

## Nice to have (deferred)
- Buyer #13: previews never show the key page — a scripts/preview.mjs decision, outside this product folder.
