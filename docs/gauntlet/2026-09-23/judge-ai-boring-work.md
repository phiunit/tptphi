# Judge — ai-boring-work (Robots Do the Boring Work, AI Literacy Lesson 5 of 6)

Judged 2026-09-23 by a fresh, blind critic. Inputs read: corpus/VOICE.md, brand/BRAND.md, docs/COPY.md,
docs/ANTI_SLOP.md, docs/GAUNTLET.md, the CLAUDE.md quality bar; every PNG in dist/review/ (cover, plan p1–2,
worksheet p1–2, guide p1–3, slides 01–12); text of every shipped PDF (pymupdf); the fillable PDF's 41 widgets;
the preview PDF (4 pages); the .pptx speaker notes (unzipped, all 12 present); src/*.html; src/slides.yaml;
product.yaml; UPLOAD_SHEET.md. The dist files are newer than the src files, so the render is fresh.

## Verdict

This is a strong four-star lesson that is one careful pass short of five. The core design works. The
three-column sort (automate / augment / keep human) is a real thinking tool, and the key says "grade the trade,
not the column", which is the right call. The studio tasks are well chosen and argue well. The teacher lines
are quotable ("'Because robots' is not a reason"; "Bus driver — repeats the route, but notices who's crying in
row six"). The guide also shows real care for the kid whose parent's job is on the board. What costs the star
is mechanics, not ideas. First, the Defend It step, the part the speaking standard is assessed on, fails the
house's own peer-step rule. Nothing says who Speaker 1 is. "Pairs of pairs" collapses into across-the-desk
dyads, and the odd-number fix makes no sense. The claim students must "fill in first" gets zero minutes. The
listener is asked to judge "voice reached the back" from two feet away while about 15 other kids talk at once.
Second, the write-in space is roughly one third of what the guide's own exemplars need (trade cards and the
exit ticket's AUTOMATE line), and the trade-card block is under-timed against handwriting speed. Third, the
lesson's central honest claim, "AI takes over tasks, not whole jobs", is stated unhedged on four surfaces,
which breaks ANTI_SLOP rule 17. Add a handful of rule-18 drift (the exit ticket reads differently on slide and
sheet), one false speaker note, and a listing hook with no analogy in it. Every one of these has a concrete fix
below. None needs a new page.

## Top 5 moves

1. **Rebuild Defend It as a traceable procedure** (worksheet.html:144, 150, 152; lesson-plan.html:121–122;
   slides.yaml:69–75; teacher-guide.html:85, 106). Replace with: "1. Write your claim in the box (2 min).
   2. Two pairs push desks together. Face the person across from you from the other pair. 3. Whoever's first
   name comes first in ABC order is Speaker 1. Speaker 1 reads (30 sec) and slides the sheet across.
   4. Listener checks the boxes, writes one keep and one fix (30 sec), and slides it back. 5. Swap roles and
   repeat." Re-split the plan's 8 minutes as 1 teach + 2 write + 3 pairs + 2 whole class. Rename the box
   "Voice reached the back" to "Heard every word" (the guide's own definition). Fix the odd-number case to:
   "Odd number of students → one group of three at a table: A speaks to B, B to C, C to A, 30 seconds each."
   Cut the separate "Listener:" line (worksheet.html:150). It repeats the procedure and frees about 40px.
2. **Size the write-ins to the exemplars, and time the trade cards honestly** (worksheet.html:124–139,
   163–168; teacher-guide.html:83, 86). The trade-card "Who loses something?" exemplar is 134 characters, about
   three handwritten lines, and the card gives about 1.5 half-width lines. The exit-ticket AUTOMATE exemplar is
   182 characters, about four lines, and the sheet gives two. Within the two-page limit: (a) put the space freed
   by move 1 into the exit ticket, giving AUTOMATE three lines and AUGMENT two; (b) cut the p.1 sort boxes from
   208px to about 150px (twelve letters never need eight rows) and push the p.2 content down; (c) cut the key's
   trade-card exemplar to proficient length, about 25 words per card, for example "Who wins? Jaylen gets his
   mornings back. / Who loses? The kid with the sixth question, and Jaylen's daily hellos. / What could go
   wrong? The bot says there's parking the week the lot is closed." The current exemplar needs 106 handwritten
   words across two cards, 8–11 minutes, against the 7 on the page.
3. **Hedge the headline claim everywhere it appears** (lesson-plan.html:83; slides.yaml:20; teacher-guide.html:50,
   91; product.yaml:29). "AI takes over tasks, not whole jobs" is a universal claim about AI (ANTI_SLOP 17). Use
   one line on every surface: "So far, AI mostly takes over tasks, not whole jobs." This also fixes the bridge
   saying "nobody can promise" twice in four sentences. The cover's "AI takes tasks first, not whole jobs" is
   already hedged, so keep it.
4. **Make every assessed and mirrored line read identically, and fix the false note** (slides.yaml:80–83 vs
   worksheet.html:161–167; slides.yaml:37; slides.yaml:26; teacher-guide.html:85). The slide says "one somebody
   in your life" and "— and why."; the sheet says "one someone" and ", and why:". Copy the worksheet text onto the
   slide. Delete "The worksheet repeats the line on p.2." The worksheet never prints the "because robots" line.
   Set slide 4's AUGMENT card to the worksheet's "A human makes the call, AI helps out." It currently wraps to a
   line that starts with a dash. In the guide's listener key, change "Listeners" to "Listener" twice, and drop
   "and 'the trade is'" from Pace, since students are only told to slow down on "because."
5. **Let Phi's own culture carry the thesis, and lead the listing with it** (lesson-plan.html:83–84 or
   teacher-guide.html:92; product.yaml:25; product.cover.html:46–54). VOICE.md #12 is this lesson in one breath.
   DJs used to count BPM by hand; the boring work taught them to mix; now the software tells you the BPM. Add it
   as a what-if or discussion move: "Old-school DJs counted every song's beats per minute by hand. Boring. It's
   also how they learned to mix. Now the software just tells you. Who won? Who lost something?" In the listing,
   replace the hook with "Your class runs a recording studio that just got an AI assistant." (12 words, analogy
   up front). On the cover, put a microphone in the KEEP HUMAN hand so the studio shows at thumbnail size.

## Lens 1 — Writing

### worksheet.html (student-facing)

- `worksheet.html:75` · "Every decision (grown-ups say "a call") helps someone and costs someone." · "Heads up: "making the call" means deciding. Every call helps someone and costs someone." · clunky — **MUST**. The parenthetical is backwards (it glosses a word the sentence doesn't use), and it's the first of two "grown-ups say" glosses on a sheet for 13-year-olds.
- `worksheet.html:75` · "— a small recording studio. … Your job: decide what it does — and what it never touches." (two em-dashes in one panel paragraph) · "You're on the crew at Big Dream Studio, a small recording studio. … Your job: decide what it does, and what it never touches." · dashes — **COULD**.
- `worksheet.html:97` (and `slides.yaml:61`) · "Type up the lyrics from yesterday's made-up-on-the-spot rap session" · "Type up the lyrics from yesterday's freestyle rap session" · culture — **COULD**. Kids say "freestyle"; the hyphen chain is a gloss wearing a costume. Change both surfaces together (cross-surface text). ELL support can gloss it in the plan.
- `worksheet.html:104` · "Write each task's letter in the column where it belongs — as many letters as belong there." · "Write each task's letter in the column where it belongs. A column can hold as many letters as you want." · clarity — **COULD**. "As many letters as belong there" repeats "belongs", and a 12-year-old reads it as a riddle.
- `worksheet.html:108` · "Keep Human — humans only" · "Keep Human — the person is the point" · redundant — **COULD**.
- `worksheet.html:118` · "Every choice helps someone, costs someone, and could go wrong — grown-ups call that a **tradeoff**; we say **the trade**." · "Every choice has a **trade**: someone wins, someone loses something, and something could go wrong. (Grown-ups call it a *tradeoff*.)" · order — **MUST**. It matches the three questions below it, in the same order.
- `worksheet.html:118` · "Pick **TWO** choices from your board and write the trade for each." · "Pick **TWO** letters from your board, the two you argued about most, and write the trade for each." · clarity — **MUST**. "Choices" is ambiguous (the column? the task?), and the teacher's transition already says "the TWO choices you argued about most."
- `worksheet.html:144` · the whole Defend It paragraph (5 procedure sentences, no Speaker-1 rule, "Face the person across from you" right after "two pairs face each other") · numbered steps as in Top move 1 · procedure — **MUST** (ANTI_SLOP 14).
- `worksheet.html:144` · "First, fill in your claim — the sentence in the box below (what you say is true, and why)." · "First, write your claim in the box below. A claim says what you think is true, and why." · plain — **COULD**.
- `worksheet.html:144` vs `:150` · "writes keep or fix" vs "write one thing to keep and one thing to fix" · use "writes one keep and one fix" on every surface · contradiction — **MUST**. The strip has a field for each.
- `worksheet.html:150` · "Listener: check the box for each move you saw, then write one thing to keep and one thing to fix. Then slide the sheet back." · cut it; the numbered steps carry it · duplicate — **MUST**. It restates :144, and the space is needed for write-ins.
- `worksheet.html:152` · "Voice reached the back" · "Heard every word" · honest — **MUST**. The listener sits across the desk, so the box asks for something they can't observe.
- `worksheet.html:161` · "Sort a real job — one someone in your life really has (family, neighbor, coach, teacher)." · "Pick a real job someone in your life has (family, neighbor, coach, teacher). Sort three of its tasks." · accuracy — **COULD**. You sort a job's tasks, not the job. If changed, copy it verbatim onto slide 11 (rule 18).
- `worksheet.html:163` · "**AUTOMATE** — one boring, repeating task AI should take — and who loses something when it does:" · "**AUTOMATE**: one boring, repeating task AI should take. Who loses something when it does?" · dashes — **COULD**. Two em-dashes in one line; mirror it on slide 11.

### lesson-plan.html (teacher-facing)

- `lesson-plan.html:83` · "nobody can promise which jobs change, or how many. So far, it's the boring, repeating parts that get automated — AI takes over tasks, not whole jobs, and nobody can promise the final count." · "nobody can promise which jobs change, or how many. So far, AI mostly takes over the boring, repeating tasks, not whole jobs." · repeat + hedge — **MUST** (ANTI_SLOP 17; mirror in slides.yaml:20).
- `lesson-plan.html:88` · "Draw three columns on the board (slide 4 if projecting) and define them. Say it out loud once: a "call" is a decision." · keep, but add slide 3 to the Warm-Up: "Slide 3: 30 seconds with a partner, then the Bridge." · sync — **COULD**. The deck has a partner-talk moment the plan never mentions.
- `lesson-plan.html:101` · "**Watch one get sorted** (Direct Instruction, continued) — model the tradeoff lens ("the trade") on one task." · move this block up to p.1, which has about 110px of empty space under the column panel · layout — **COULD**. The DI section is split across the page break.
- `lesson-plan.html:112` · "Pairs write each letter A–L in one of the three tall columns — as many as belong; every column gets at least two." · "Pairs agree, and each student writes every letter A–L on their own board. Every column gets at least two." · clarity — **COULD**. It currently never says whose sheet the sort goes on.
- `lesson-plan.html:115` · "Each pair picks TWO choices; each student writes the trade on their own sheet — who wins, who loses something, what could go wrong." · add: "Aim for one short sentence per line. If time runs out, card #2 can be a phrase." · timing — **MUST** (ANTI_SLOP 16; see Lens 2 #3).
- `lesson-plan.html:121` · the 8-sentence Defend It paragraph, including "two pairs face each other, one student across from each" · three labeled lines: "**Write (2 min):** students fill the claim box. **Pairs of pairs (3 min):** each student faces one person from the other pair. The partner whose first name comes first alphabetically speaks first… **Whole class (2 min):** …" · sub-proof — **MUST**. A sub can't parse "one student across from each."
- `lesson-plan.html:121` · "you sample 3–4 pairs with the Defense Rubric" · "you sample 3–4 groups with the Defense Rubric" · accuracy — **COULD**. The talking unit is the group of four.
- `lesson-plan.html:122` · "**Odd number of pairs** → one trio of pairs rotates; sample that group. Trio: 20 seconds each, listeners mark the boxes only." · "**Odd number of students** → one group of three: A speaks to B, B to C, C to A, 30 seconds each." · broken — **MUST**. An odd number of pairs already works (six students make three across-dyads). The real problem is an odd student, and the current fix doesn't say who faces whom.
- `lesson-plan.html:134` · "Built in — the whole lesson runs on paper and talk; the slides are optional. With devices: none needed; optionally project the task board." · "Built in. The whole lesson runs on paper and talk. If you have a projector, the deck shows the task list during the sort." · muddled — **COULD**. "With devices: none needed" contradicts itself.
- `lesson-plan.html:131` · "the definitions and claim frame are printed on the sheet." · "…and give them starters for the trade cards: "___ wins because ___." / "___ loses ___." / "It could go wrong if ___."" · support — **COULD**. The printed frames are on everyone's sheet, so they aren't a support move.

### teacher-guide.html

- `teacher-guide.html:41` · "Robots Do the Boring Work — the sort key for all 12 tasks, a key or exemplar for every student item (trade cards, the claim, the listener strip, the exit ticket), discussion moves, the Defense Rubric, what to do when it goes sideways, and full standards text." · "Everything you need to grade and steer: the sort key for all 12 tasks, a model answer for every student item, the Defense Rubric, and what to do when it goes sideways." · inventory — **COULD**.
- `teacher-guide.html:50–51` · "The honest middle-school version, hedged on purpose: AI takes over tasks, not whole jobs — nobody can promise the final count — and every automation choice carries a tradeoff (CSTA 2-IC-20)." · "The honest version, hedged on purpose: so far, AI mostly takes over tasks, not whole jobs. Nobody can promise the final count. Every automation choice carries a tradeoff (CSTA 2-IC-20)." · dashes + hedge — **MUST** (two em-dashes in one sentence; ANTI_SLOP 10 and 17).
- `teacher-guide.html:57` · ""Two per column" is satisfiable from this key, including the Support set (skip B, F, J, L)." · "Every column can get two letters from this key, even in the Support set (skip B, F, J, L)." · stiff — **COULD**.
- `teacher-guide.html:83` · the trade-card exemplar (53 words per card) · cut to proficient length as in Top move 2 · sizing — **MUST** (ANTI_SLOP 15). The model can't fit the lines the student gets.
- `teacher-guide.html:85` · "the Speaker looked at the Listeners … the Listeners heard every word" · "the Speaker looked at the Listener … the Listener heard every word" · agreement — **MUST**. The procedure has one listener.
- `teacher-guide.html:85` · "*Pace* = the Speaker slowed or paused on "because" and "the trade is."" · "*Pace* = the Speaker slowed or paused on "because."" · contradiction — **MUST**. Students are told only "because."
- `teacher-guide.html:91` · "Some parts of almost every job get automated — usually the repeating parts. AI takes over tasks, not whole jobs — and nobody can promise the final count." · "Some parts of most jobs will probably change, usually the repeating parts. So far, AI mostly takes over tasks, not whole jobs. Nobody can promise more than that." · hedge — **MUST**. It's said to a kid about their mom.
- `teacher-guide.html:93` · "Sit in that tension; it IS the standard." · "Don't resolve it. That tension is exactly what CSTA 2-IC-20 asks them to weigh." · jargon — **COULD**.
- `teacher-guide.html:106` · "tell the Listeners to check the second try" · "tell the Listener to check the second try" · agreement — **MUST**.
- `teacher-guide.html:114` · "**Beginning:** restates the column with no because, or reads to the desk." · "**Beginning:** restates the column with no because, or still reads to the desk on the second try." · contradiction — **MUST**. The what-if says a first read-to-desk isn't scored.

### slides.yaml (deck + speaker notes)

- `slides.yaml:4` · "You decide what the AI does, what it helps with, and what it never touches — and you own the trade behind every choice." · "You decide what the AI does, what it helps with, and what it never touches. Every choice has a trade." · adult — **COULD**. "Own the trade" is boardroom talk.
- `slides.yaml:20` · the bridge, identical to lesson-plan.html:83 · same fix as the plan, applied to both · repeat + hedge — **MUST**.
- `slides.yaml:26` · "A human makes the call — the decision — and AI helps out." · "A human makes the call, AI helps out." (the worksheet's exact line; the notes already gloss "call") · dashes/wrap — **MUST**. On slide-04.png a line starts with "— the decision —".
- `slides.yaml:33` · "take a guess from the room before you read each answer on the right" · "Cover the right card, or hold on this slide's title, and take a guess from the room before you reveal each answer." Better still, split it into two slides (column / trade) · honest — **COULD**. slide-05.png shows all three answers at once, so there is nothing to guess.
- `slides.yaml:37` · "The worksheet repeats the line on p.2." · delete · false — **MUST**. The worksheet never prints "because robots."
- `slides.yaml:43` · "Pick TWO of your choices. On page 2, write the trade for each…" · mirror the worksheet's revised line: "Pick TWO letters, the two you argued about most…" · sync — **COULD**.
- `slides.yaml:69–74` · six bullets, no Speaker-1 rule · "Write your claim (2 min)." / "Two pairs sit together. Face one person from the other pair." / "ABC-first first name = Speaker 1. Read your claim (30 sec). Slide the sheet across." / "Listener: check the boxes, write one keep + one fix (30 sec). Slide it back." / "Swap roles." / "Three moves: eyes up · heard every word · slow down on "because."" · procedure — **MUST**.
- `slides.yaml:80` · "The job: one somebody in your life really has — family, neighbor, coach, teacher." · the worksheet's exact line · rule 18 — **MUST**.
- `slides.yaml:83` · "KEEP HUMAN — one task that should stay fully human — and why." · "KEEP HUMAN — one task that should stay fully human, and why." · rule 18 + dashes — **MUST**.
- `slides.yaml:87` · "The people who win with AI tend to be the ones who decide what it does." · "Like Jaylen: he decides what the bot answers, the bot answers, and Jaylen takes the sixth question." · ground it — **COULD**. It turns a generic claim into the lesson's own example of human → AI → human.

### product.yaml (listing) and UPLOAD_SHEET.md

- `product.yaml:25` · "Your students are already asking whether AI will take all the jobs. This lesson answers honestly." · "Your class runs a recording studio that just got an AI assistant." · shape — **MUST** (COPY.md: the hook line is the analogy, one sentence, ≤ 16 words). Move the "already asking" idea into the How-it-runs paragraph.
- `product.yaml:29` · "The honest frame comes first, hedged the way a middle schooler deserves." · "It starts with the honest version." · press-release — **MUST**.
- `product.yaml:29` · "AI takes over tasks, not whole jobs, and nobody can promise the final count." · "So far, AI mostly takes over tasks, not whole jobs, and nobody can promise the final count." · hedge — **MUST**.
- `product.yaml:29` · "a winner, a loser and a way it could go wrong" · "a winner, a loser, and a way it could go wrong" · serial comma — **MUST** (COPY.md fixed form).
- `product.yaml:33` · "Students then write the trade behind 2 of their choices" · "Students then write the trade behind two of their choices" · numerals — **MUST** (COPY.md uses this exact phrase as its example).
- `product.yaml:33` · "They defend one out loud with a claim frame while the listening pair scores eyes, voice and pace." · "Each student defends one choice out loud with a claim frame, and a listener from the other pair scores eyes, voice, and pace." · accuracy — **MUST**. One listener scores, not a pair; also a missing serial comma.
- `product.yaml:37` · "Real write-in space on every part." · keep it only after Top move 2 lands; until then, "Write-in space on every part." · checkable — **MUST** (COPY: every claim checkable).
- `product.yaml:40` · "It opens in PowerPoint, Keynote or Google Slides." · "It opens in PowerPoint, Keynote, or Google Slides." · serial comma — **COULD**.
- `product.yaml:41` · "Support, Extension, ELL and no-device variants" · "Support, Extension, ELL, and no-device variants" · serial comma — **COULD**.
- `product.yaml:50` · "typeable in any PDF viewer — Chromebooks, iPads, Preview, Acrobat" · "typeable in most PDF viewers (Chromebooks, iPads, Preview, Acrobat)" · overclaim — **COULD**. Some viewers ignore form fields.

### product.cover.html

- `product.cover.html:75` · "AI takes tasks first, not whole jobs." · keep · — the one surface where the claim is already hedged. (No finding.)

## Lens 2 — Buyer, teacher, student

**(a) The tired 7th-grade teacher, 7:40 a.m.**

1. **BLOCKER — Defend It can't be run from the page.** There's no rule for who is Speaker 1, "pairs of pairs" never says who faces whom, and the odd-number fix ("one trio of pairs rotates… Trio: 20 seconds each") makes no sense (worksheet.html:144; lesson-plan.html:121–122; slides.yaml:69–75). This is the SL.6.4 assessment, and GAUNTLET's post-Round-3 bar makes it a hard line. *Fix:* Top move 1.
2. **MAJOR — The claim has no minutes.** Students must "fill in your claim" first (26 words at exemplar length, about 2–3 minutes of handwriting), but Defend It's 8 minutes are split 1 teach + 5 pairs + 2 whole class. Each dyad needs only about 2 minutes (four 30-second turns), so the 5 is padded and the 0 is short. *Fix:* 1 teach + 2 write + 3 pairs + 2 whole class, printed in the plan and in slide 10's notes.
3. **MAJOR — Trade cards under-timed.** The guide's exemplar is 53 words per card, 106 for two, which is 8–11 minutes at 10–13 wpm, against 7 minutes that also include choosing. *Fix:* shorten the exemplar to proficient length (about 25 words per card), and print "one short sentence per line" on the plan.
4. **MAJOR — "Voice to the back wall" is the wrong target for this activity, and the listener can't check it.** About 15 speakers talk at once across desks. If they all project to the back wall, it's chaos, and the listener two feet away can't judge "reached the back." *Fix:* the strip box becomes "Heard every word" (the guide already defines Voice that way). Keep "voice to the back wall" for the 2-minute whole-class share, where it's true.
5. **MINOR — Lesson plan p.1 ends with about 110px blank while p.2 is packed edge to edge,** and Direct Instruction is split across the break (lesson-plan-p1/p2.png). *Fix:* move the "Watch one get sorted" table to p.1.
6. **MINOR — The rubric and the what-if disagree** on read-to-desk (see Lens 1, teacher-guide.html:114).
7. **MINOR — Slide 3 ("Will AI take all the jobs?", with a 30-second partner talk) isn't in the plan.** A teacher on the plan alone skips it; a teacher on the deck alone adds time to a 7-minute warm-up. *Fix:* one line in the plan's Warm-Up.
8. **MINOR — Slide 5 shows the answers the notes tell you to elicit.** *Fix:* see Lens 1, slides.yaml:33.
9. **DELIGHT — The sort key's third column ("the tradeoff worth surfacing") plus "Grade the trade, not the column."** This is what a teacher wants at 7:40: one glance and she can argue any pair's board. Keep it, and keep "Honest note: most tasks are defensibly AUGMENT."
10. **DELIGHT — "A student is upset — a parent's job is on the board."** The guide handles the real emotional risk of this topic with a line a teacher can actually say. It's the most trust-building sentence in the product; consider echoing it in the listing ("includes what to say when a parent's job comes up").
11. **DELIGHT — Quotable lines.** "'Because robots' is not a reason." "Bus driver — repeats the route, but notices who's crying in row six." "Your teacher has one. Sort mine." These are cool-teacher voice. Keep them word for word.
12. **MINOR — Support differentiation isn't support.** "The definitions and claim frame are printed on the sheet" is true for every student. *Fix:* add trade-card sentence starters (Lens 1, lesson-plan.html:131).

**(b) The 12-year-old with the worksheet**

13. **MAJOR — Write-in space.** "Who loses something?" gets a short stub plus one half-width line. The guide's model answer needs about three lines, and the exit ticket's AUTOMATE model needs four where the sheet gives two. The sheet is telling the student to fail (ANTI_SLOP 15). *Fix:* Top move 2. The p.1 sort boxes have spare height to give up, and cutting the duplicate "Listener:" line on p.2 frees another line.
14. **MAJOR — p.2's Defend It paragraph is a wall.** Five procedure sentences, then three moves tacked on. A kid reads "Then two pairs face each other. Face the person across from you." and looks up confused. *Fix:* numbered steps (Top move 1). They take the same space as the paragraph plus the cut line.
15. **MINOR — "grown-ups say 'a call'" and "grown-ups call that a tradeoff; we say the trade"** make two talking-down glosses on one sheet. Eighth graders notice. *Fix:* Lens 1 rewrites at :75 and :118. "We say the trade" can stay as the student-page term, just without the grown-ups aside twice.
16. **DELIGHT — "Disagree with your partner? Good — talk it out. That's the lesson."** Kids love permission to argue. Keep it.
17. **DELIGHT — The task list is fun and specific.** A nervous first-time singer, 300 audio files, the lyrics from a rap session, a group haggling for three days. Every task argues differently. Small lift: "freestyle" instead of "made-up-on-the-spot" (Lens 1).
18. **MINOR — Worksheet p.2 has no spot art beyond the heading card icons,** while p.1 has the board. The house rule gives student pages spot art tied to the analogy. *Fix:* if move 2 frees space, add a small line-art microphone and robot by "Defend It." Otherwise leave it; write-in space wins.
19. **COULD-level MINOR — The culture carries the setting, but not yet the thesis.** The recording studio is Phi's home turf, and taste (G, L) and coaching (E) do carry "keep human." But the lesson's hardest idea (the boring task is sometimes where you learned the craft) is carried only by Jaylen's texts. Phi's own BPM story (VOICE #12) makes it land for any kid who has touched a DJ app. *Fix:* Top move 5.

**(c) The buyer on the listing and preview**

20. **MAJOR — The hook has no hook.** "Your students are already asking whether AI will take all the jobs. This lesson answers honestly." is two sentences with no analogy. It's what every competitor's "AI and jobs" listing says. The recording studio, which is the store's promise ("taught through culture they already love"), first appears in paragraph 4. *Fix:* "Your class runs a recording studio that just got an AI assistant." That puts the analogy in line 2.
21. **MINOR — Listing inaccuracies a buyer could catch:** "the listening pair scores" (one listener scores), "2 of their choices" (house form is "two"), missing serial commas, and "any PDF viewer." *Fix:* Lens 1, product.yaml.
22. **MINOR — The preview sells the wrong third page.** The preview shows cover, worksheet p.1, plan p.1, and guide p.3 (rubric, standards, terms). The best-selling pages aren't in it: worksheet p.2 (trade cards and Defend It, the part no other "AI jobs" lesson has) and guide p.1 (the 12-task key with tradeoffs). *Fix:* swap guide p.3 for worksheet p.2 or guide p.1. UPLOAD_SHEET.md also doesn't list the Preview PDF under files, which is worth adding so the attended upload doesn't miss it.
23. **DELIGHT — The cover works at thumbnail size.** Title in two lines of two to three words, a hedged 7-word sub, all four chips, and the AI / AI + YOU / YOU tiles carry the three-column idea at a glance. *Amplify:* a microphone in the raised hand (KEEP HUMAN) would add the studio without adding words.
24. **DELIGHT — "It is career exploration that starts from tasks, not job titles."** That's a strong closing line for a buyer, and it hits the CSTA "career options" language honestly. Keep it.
25. **MINOR — Title is good, and one keyword is left on the table.** "AI and Future Jobs Lesson: Automation Tradeoffs | Middle School 6-8 | No Prep" (77 characters) follows the house formula. "Career" is in the tags but not the title. At 77 characters there's no room, so leave the title. Just make sure "career exploration" stays in the first paragraph of the description (it's currently in paragraph 5).

## Counts

- **MUST:** 31
- **COULD:** 23
- **BLOCKER:** 1 (item 1)
- **MAJOR:** 6 (items 2, 3, 4, 13, 14, 20)
- **MINOR:** 11 (items 5, 6, 7, 8, 12, 15, 18, 19, 21, 22, 25)
- DELIGHT: 7 (items 9, 10, 11, 16, 17, 23, 24)

---
## Lead rulings (2026-09-23)
Accept the Top 5, the BLOCKER and every MUST, with these decisions:
- **Defend It as numbered steps**, defined by the unit rule: "Speaker 1 is the partner whose first name comes first in the alphabet." Give writing the claim its own minutes by re-splitting inside the existing Defend It block; block totals and the 45 do not change. Make the group-of-three fallback actually work, and write it out.
- "Heard every word" replaces "Voice reached the back" on the listener checks — mirror it on worksheet, plan, slide and rubric identically.
- Size the trade-card and exit-ticket write-in space to the model answers, taking the height from where the judge says it is spare; cut the model answers to proficient length so they model what a student can write in the time. Floors hold.
- **The claim, hedged, one wording on every surface where it is stated as fact:** "So far, AI mostly takes over tasks, not whole jobs." The cover sub "AI takes tasks first, not whole jobs." stays: it is a thumbnail decision, and "first" already carries the hedge.
- **Phi's BPM story goes in as a teacher move** (corpus/VOICE.md #12): he used to count BPMs by hand as a DJ; now the software does it; doing it by hand is what taught him how mixing works. It is this lesson's whole argument in one anecdote — the boring task got automated, and the human skill it built is what matters. Place it where it carries the concept (the bridge or Direct Instruction), in first person as "a DJ I know" or as Phi's own line only if the teacher guide frames it as a story the teacher can tell. Fit it inside existing minutes.
- Listing hook leads with the studio: "Your class runs a recording studio that just got an AI assistant." Keep COPY.md's order (filter line first).
- A mic in the cover robot's hand: build it only if it reads at a 200px downscale and ties to the studio; iterate at least three times, and drop it if it clutters.

**Unit-wide rulings:** turn order by the alphabetical first-name rule (role labels may fit the activity); one hedged AI sentence reused word for word; Lens 2 BLOCKER/MAJOR accepted, MINOR at discretion, DELIGHT kept; nothing that changes minutes, pages, slides, standards or names; listing length is free (2048 is not a TPT limit).
