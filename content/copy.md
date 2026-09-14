# Sitrep landing page copy, 14 September 2026

Replacement copy for `index.html`, section by section in page order. Each changed string shows the
exact current text and the replacement. "keep" means the current string stays. Nothing here is
applied to the page; the founder decides.

Rules applied: short direct sentences, the subject does the verb, no em dashes, no hype words, no
"leverage". Two-line headings stay at or under 26 characters a line (counts shown). Card bodies
run 20 to 35 words, FAQ answers 40 to 70, mono tags 3 to 6 words. Every number is one the research
tree already states; the two retrieval percentages come from `docs/21-filing-boilerplate.md` and are
flagged at the end.

---

## Head and meta

Title: keep. "Sitrep. Cursor for equity analysts."

Meta description
Current: "Sitrep is an AI-native operating system for investment teams. Agents research, cite every number to its source, and every call is graded against the market after the fact. The team decides."
New: "Sitrep is an AI-native operating system for investment teams. Agents research at 100x the speed of an analyst and cite every number to the document it came from. The market scores every call after the fact. The team decides."

og:title: keep.

og:description
Current: "Cited research, precedent evidence and thesis tracking for investment teams. Built to disagree. Graded by the market."
New: "Cited research, precedent evidence and graded theses for investment teams. 877,067 measured events. India first."

---

## Nav

Links (Home, Product, Method, Pricing, Research, Changelog 3): keep.
"Talk to us": keep.

---

## Hero

Version tag "v0.1-beta": keep.
"Scroll for more": keep.

h1: keep. "[Cursor]" + "for equity analysts."

Trust line "Design partner YES Securities" and "877K events measured": keep.

Lead
Current: "Sitrep is an AI-native operating system for investment teams. Agents research at 100 times the speed of an analyst, cite every number to its source, and every call is scored when the market answers. The team decides."
New: "Sitrep is an AI-native operating system for investment teams. Agents research at 100x the speed of an analyst. Every number cites the document it came from. The market scores every call after the fact. The team decides."

Buttons "Request access" and "Read the research": keep.

Data-source strip (BSE filings, NSE prices, GDELT, Google News, IIM-A factors, India VIX): keep.

Positioning marquee
Line 1 "Agents research → the team decides": keep.
Line 2
Current: "Every number → cited to its source"
New: "Every number → cited to its document"

### Rotating bracketed words

Current: [Cursor], [Claude Code], [Evidence], [Precedents]
Proposed: [Cursor], [Claude Code], [Precedents], [Base rates]

Rationale, one line each:
- [Cursor]: the founder's anchor; names the category in one word and stays first.
- [Claude Code]: the agentic pair to Cursor; says "agents do the work" without saying it.
- [Precedents]: the product's actual output; "Precedents for equity analysts" is the whole pitch.
- [Base rates]: replaces [Evidence], which is abstract; "Base rates for equity analysts" names a concrete thing the corpus gives (per class, cap band and regime) and reads as a sentence.

Width note: [Base rates] is 12 characters, the same as [Precedents], so the pixel line does not grow.
If the line can take 16 characters, [877,067 events] is the most specific option of all and worth
trying in place of [Base rates].

---

## 01 What it does

Section label "> What it does": keep.

h2
Current: "Agents do the research." / "The team makes the decisions."  (23 / 28)
New: "Agents do the work." / "The team decides."  (19 / 17)

Button "Request access": keep.

### Card 001

Title "Cited research": keep.

Body
Current: "Agents read filings, transcripts, prices and the team's own documents, and return writeups with every number cited to the document it was read from."
New: "Agents read 150,045 BSE filings in full text, 43 news feeds, prices and the desk's own documents. Every number in the writeup names the document and the panel it came from."

Tag
Current: "Numbers from the data, never a model"
New: "No number from a model"

### Card 002

Title "Precedent evidence": keep.

Body
Current: "For any news item, the similar past events and what each did to the stock, its sector and the market at +1, +3, +5 and +10 days. Cases that went the other way are shown, not filtered."
New: "Paste a news item. Sitrep returns the similar past events and what each did to the stock, sector and market at +1, +3, +5 and +10 days. The cases that disagree stay in."

Tag "Shows the cases that disagree": keep.

### Card 003

Title
Current: "Thesis tracking"
New: "Graded theses"

Body
Current: "Theses are versioned, drift is measured, and every call is scored when the window closes and the market answers. The record is the rationale."
New: "Each thesis carries a version, a date and a window. Sitrep measures drift as the evidence moves. When the window closes, the market scores the call. The record stands as the rationale."

Tag "Graded against the market": keep.

---

## 02 The corpus

Section label "> The corpus": keep.

h2
Current: "Precedents in seconds." / "Not a week of tabs."  (22 / 19)
New: "877,067 events." / "Every one measured."  (15 / 19)

Button "Request access": keep.

Stats
- "877,067" / "Measured events": keep.
- "150,045" / "Filings with full text": keep.
- "+1 / +3 / +5 / +10" / "Day windows, abnormal terms": keep.
- "43 + GDELT"
  Current label: "News feeds, back to 2015"
  New label: "News feeds, titles to 2015"

Chart legend "Without Sitrep < > With Sitrep": keep for now, but see the note at the end. The bars
are seeded random numbers and the legend implies a measured comparison that does not exist.

---

## 03 Core layers

Section label "> Core layers": keep.

### Layer 001

Tags "Measure" / "Precedents": keep.
Title "Evidence layer": keep.

Body
Current: "Abnormal reactions against sector and market, the move as a multiple of what options implied that day, cap band, regime and base rate. Numbers come from the measurement layer and never from a model."
New: "Every event's abnormal move against its sector and the market at +1, +3, +5 and +10 days, as a multiple of the option-implied move, with cap band, regime and class base rate. 877,067 of them."

### Layer 002

Tags "Retrieve" / "Cite": keep.
Title "Agents": keep.

Body
Current: "Agents resolve the entity, classify the event and pull the precedents. The one place a model speaks is grounded in the panels in front of you, and its review mode returns challenges to your reading, not answers."
New: "Agents resolve the entity, classify the event and pull precedents. The resolver scores 95 of 100 on a hand check. The model speaks in one place, grounded in the panels. Review mode challenges your reading."

### Layer 003

Tags "Desk" / "Record": keep.
Title "The desk": keep.

Body
Current: "Coverage with a morning digest, versioned theses with measured drift, a searchable vault, scheduled watches and dated memos. One file, the whole team, no logins to fight."
New: "Coverage with a morning digest. Versioned theses with measured drift. A searchable vault. Scheduled watches that post only when something is new. Dated memos and desk notes. One record for the whole team."

### Layer h2

Current: "Three layers." / "One desk that answers."  (13 / 22)
New: "Three layers." / "One desk, one record."  (13 / 21)

Alternative if the founder prefers the verbs: "Three layers." / "Measure, retrieve, record."  (13 / 26, at the limit)

### Diagram

Inputs (Filings, News, Prices, Positions): keep.
Contexts (Company, Event class, Sector, Regime): keep.
Outputs (Precedent list, Cited writeup, Watch): keep.

### Bottom row

"Works with your data"
Title: keep.
Current: "Connect the market data the team already runs on, plus positions, mandates and internal documents. Nothing leaves your tenant."
New: "Add the desk's coverage, positions and internal documents. Connect the market data you already run on. Sitrep reads. It never places an order."

"Built to disagree"
Title: keep.
Current: "It surfaces what the data does not support and the risks a team would otherwise miss."
New: "Review mode reads your thesis and returns three to six challenges, each anchored to a panel row. It takes no side."

"Graded after the fact"
Title: keep.
Current: "Every output is scored when the market answers. The record cannot be rehearsed or backdated."
New: "The market scores every call once its window closes. Event time and ingestion time sit in separate columns, so nobody can backdate a record."

---

## 04 How it works

Section label "> How it works": keep.

h2
Current: "Understand the flow." / "From news to a graded call."  (20 / 27)
New: "News in. Precedents out." / "The desk decides."  (24 / 17)

Button "Request access": keep.

### Card 001

Title "A news item comes in": keep.
Current: "From any source: a filing, a wire story, a broker note, a message from the desk."
New: "A filing, a wire story, a broker note, a line pasted from the desk chat. Any source. The resolver names the company and the event class."

### Card 002

Title "Agents find the precedents": keep.
Current: "Same company first, then the same event class across the sector, matched on the text itself, within your lookback."
New: "Same company first, then the same event class across the sector, matched on the text itself, inside the lookback you choose. Each precedent carries its measured reaction, cap band and regime."

### Card 003

Title
Current: "The desk reads the evidence"
New: "The analyst concludes"

Body
Current: "Median, range, hit rate stated both ways, and n. The analyst draws the conclusion and seals it with the evidence attached."
New: "Median, IQR, hit rate stated both ways, n. The cases that went the other way stay on the list. The analyst reads it, draws the conclusion and seals it with the evidence attached."

### Card 004

Title
Current: "Reality grades the call"
New: "The market grades the call"

Body
Current: "When the window closes the market answers, the thesis is scored, and the record stands as the rationale."
New: "The window closes. The market answers. Sitrep scores the thesis per axis against dated thresholds and files the result next to the sealed evidence. The record is the rationale."

---

## 05 Integration

Section label "> Integration": keep.

Code panes (mcp.json, desk.py, rest) and their comments: keep. The comments already say the right
things: 14 tools, every number carries its panel and document, summary with hit rate both ways.

h2
Current: "Simple to integrate." / "Works where you work."  (20 / 21)
New: "14 tools over MCP." / "Python and REST too."  (18 / 20)

Button "Request access": keep.

Tab "MCP"
Current: "Fourteen tools inside Claude, Cursor and any MCP client. The model reads the panels; it never invents a number."
New: "14 tools inside Claude, Cursor and any MCP client: precedents, base rates, theses, watches, memos, the vault. The model reads the panels. It never invents a number."

Tab "Python"
Current: "A client for notebooks and pipelines. Precedents, base rates and theses as typed objects."
New: "One call in, a precedent list out, as typed objects. Cases, summary and provenance, ready for a notebook or a nightly pipeline."

Tab "REST API"
Current: "Every panel as JSON, with provenance on every number and a frozen as-of mode for audits."
New: "Every panel as JSON. Every number carries measured_at and as_of. Set the as-of date and the API answers with only what the desk could have known that day."

---

## 06 Documentation

Section label "> Documentation": keep.

h2
Current: "Everything documented." / "Method, data, results."  (22 / 22)
New: "Read the method." / "Check the numbers."  (16 / 18)

Button
Current: "Learn more"
New: "Read the whitepaper"

Lead 1
Current: "Everything you need to check us."
New: "The whitepaper lives at research.sitrep.so."

Lead 2
Current: "The method, the data and the measured results, with the cases that went the other way left in."
New: "Method, data and measured results. The cases that went the other way stay in. Every claim names the file it came from."

Doc card "The method" (tags Measurement, Precedents, Grading): keep.
Doc card "The research" (tags Data, Findings, Whitepaper): keep.
"View" links: keep.

---

## 07 Invariants

Section label "> Invariants": keep.

h2
Current: "Built to be checked." / "Seven things that do not move."  (20 / 30)
New: "Seven invariants." / "None of them move."  (17 / 18)

### Card: Two clocks

Name "Two clocks" and handle "@event_time · @ingestion_time": keep.
Current: "When it happened and when we learned it are stored separately. A precedent is only what the desk could have known that morning."
New: "Sitrep stores when it happened and when we learned it in separate columns. A precedent is only what the desk could have known that morning."
"Invariant 01 · enforced in code": keep.

### Tile: Point-in-time membership

Tag "@point_in_time", name "Point-in-time membership": keep.
Current: "Index and sector as they stood on the day. No survivorship."
New: "Index and sector membership as they stood that day. Snapshotted by us. No survivorship."

### Card: Verified at the door

Name and handle "@ingestion": keep.
Current: "Verification status is set when an item is ingested, not when it is read. An unverified item is shown as unverified."
New: "Ingestion sets the verification status, not the reader. An unverified item stays marked unverified on every panel it appears on."
"Invariant 03 · enforced in code": keep.

### Card: Numbers from the data

Name, handle "@measurement_layer", quote and "Invariant 06 · CI-enforced": keep. The quote already
does the job: "Every number on a panel comes from the measurement layer and never from a model. CI fails the build if a model output reaches a number field."

### Tile: Grades stored per axis

Tag "@per_axis", name: keep.
Current: "Dated thresholds. A grade can be re-read years later and mean the same thing."
New: "One grade per axis, against a dated threshold. Re-read it years later and it means the same thing."

### Card: No order capability

Name, handle "@anywhere", quote and "Invariant 05 · by design": keep.

### Card: The analyst concludes

Name, handle "@the_desk", quote and "Invariant 07 · the whole product": keep.

---

## 08 Pricing

Section label "> Pricing": keep. Prices and the toggle are the founder's draft and stay as they are.

h2
Current: "Simple pricing." / "One seat, one desk."  (15 / 19)
New: "Three plans." / "Priced per seat."  (12 / 16)

Analyst: "For one analyst and their coverage": keep.
Feature "Precedent lookups, every listed company"
New: "Precedent lookups, every NSE-listed company"
Other Analyst features: keep.

Desk: "For a research desk, five seats and up" and all features: keep.

Enterprise: "For funds running Sitrep on their own portfolio" and all features: keep.

---

## 09 Changelog

Section label "> Changelog": keep.

h2
Current: "We ship fast." / "The record is dated."  (13 / 20)
New: "Every change, dated." / "Nothing backdated."  (20 / 18)

Button "View all": keep.

Lead 1 "Every change is a dated commit.": keep.

Lead 2
Current: "What was measured, what moved, and what did not, in the order it happened."
New: "What we measured, what moved and what did not, in the order it happened."

### Sep 14, 2026

Title
Current: "Research whitepaper published"
New: "Whitepaper live at research.sitrep.so"
Body
Current: "The method, the corpus and the measured findings, as a static site at research.sitrep.so. Every claim names its file."
New: "The method, the corpus and the measured findings, as one static site. Every claim names the file it came from."

### Sep 11, 2026

The current entry says the stripping shipped. It did not; docs/21 measured it and left it unshipped.

Title
Current: "Filing boilerplate stripped, retrieval re-measured"
New: "Measured: does stripping filing boilerplate help retrieval?"
Body
Current: "Covering letters removed from BSE filing bodies. Retrieval improves a little on the hand-checked set, and the number is in the note."
New: "Every BSE filing opens with the same covering letter. We stripped it before embedding and re-judged the company list: 59.3% of rows relevant before, 64.0% after. Not shipped yet."

### Sep 09, 2026

Title "Macro mode and the similarity floor": keep.
Body
Current: "460 dated macro events with the Nifty's path after each. Lists drawn across companies now stop at a similarity floor instead of padding."
New: "460 dated macro events, CPI, FOMC, RBI, Budget, GST Council, OPEC+ and elections, with the Nifty's path after each. Cross-company lists now stop at a similarity floor instead of padding."

---

## 10 Research

Section label "> Research": keep.

h2 "Research notes." / "Measured, not argued.": keep.  (15 / 21)

Button "Read all": keep.

### Big post (Retrieval, Sep 11)

Title "Does stripping filing boilerplate improve retrieval? A little.": keep.
Body
Current: "Covering letters and disclaimers make up a large share of a BSE filing. We removed them, re-embedded, and measured the change on the hand-checked set."
New: "Every BSE filing opens with the same covering letter: addressees, scrip code, Regulation 30, sign-off. We stripped it, re-embedded the filings and re-judged the company list. 59.3% relevant before, 64.0% after."

### Small post (Macro, Sep 09)

Title "460 macro events and the Nifty's path after each": keep.

### Small post (Events)

Date
Current: "Sep 05, 2026"
New: "Sep 07, 2026"  (docs/18 is dated 7 September)
Title
Current: "Cashflow events: sizing what the statements say"
New: "Cashflow events, sized against the company"

---

## 11 FAQ

Section label "> FAQs": keep.

h2
Current: "We have answers." / "Plain ones."  (16 / 11)
New: "Five questions." / "Plain answers."  (15 / 14)

### 001

Question "Does Sitrep give a view or a target price?": keep.
Current: "No. Sitrep returns the precedents and the measurement: what similar past events did to the stock, its sector and the market, and the summary across them. The analyst draws the conclusion. There is no drafted view, no target price and no order capability anywhere in the system."
New: "No. Sitrep returns the precedents and the measurements: what similar past events did to the stock, its sector and the market, and the summary across them. The analyst draws the conclusion. Sitrep drafts no view, sets no target price and holds no order capability anywhere. The precedent list is the rationale record."

### 002

Question "Where do the numbers come from?": keep.
Current: "From the measurement layer, never from a model. Reactions are measured in abnormal terms against the sector and the market at +1, +3, +5 and +10 days, and as a multiple of what options implied that day. A model may quote a number, and when it does it cites the panel and the document it read it from."
New: "From the measurement layer, never from a model. Sitrep measures each reaction in abnormal terms against the sector and the market at +1, +3, +5 and +10 days, and as a multiple of what options implied that day. A CI check fails the build if a model output reaches a number field. When the model quotes a number, it cites the panel and the document it read it from."

### 003

Question
Current: "Which markets are covered?"
New: "Which markets does Sitrep cover?"
Current: "India first. Every NSE-listed company, with BSE filings, adjusted prices, factor data, F&O implied moves and news back to 2015, plus 460 dated macro events for the index itself. Any market with an exchange feed comes next."
New: "India first. Every NSE-listed company: 150,045 BSE filings with full text, adjusted prices, IIM-A factors, F&O implied moves, 43 news feeds plus GDELT and Google News with titles back to 2015, and 460 dated macro events for the index itself. Any market with an exchange feed comes next."

### 004

Question "Can it work with our own data?": keep.
Current: "Yes. Sitrep ingests the team's coverage, positions, mandate and internal documents, and connects to the market data you already run on. Access is read-only, revocable, and single tenant on the Enterprise plan. Nothing is used to train a model."
New: "Yes. Add the desk's coverage, positions, mandate and internal documents, and connect the market data you already run on. Sitrep reads; it holds no order capability, so it cannot act on your book. The Enterprise plan runs single tenant with a frozen as-of mode for audit."

### 005

Question
Current: "How is it graded?"
New: "How does the grading work?"
Current: "Every thesis is sealed with its evidence and a window. When the window closes, the market answers and the thesis is scored per axis against dated thresholds. Sitrep's own panels are graded the same way. Nothing can be rehearsed or backdated."
New: "You seal a thesis with its evidence and a window. When the window closes, the market answers and Sitrep scores the thesis per axis against dated thresholds, so a grade re-read years later means the same thing. Event time and ingestion time sit in separate columns, so nobody can rehearse or backdate a record."

---

## Tickers and CTA card

Ticker items "[#Evidence] & [#Graded] //": keep.
Kicker "Ask for access": keep.
CTA h1 "Research," / "[graded]" / "by the market.": keep.
Button "Request access": keep.

---

## Footer

Newsletter heading
Current: "@Stay in the loop."
New: "@Get the release notes."

Newsletter lead
Current: "Release notes, research drops and method changes, straight from the builders."
New: "Release notes, new research notes and method changes, written by the people who built it."

Placeholder "Enter your email" and button "Join": keep.

Pages column, Follow us column: keep.

Get in touch: "hello@sitrep.so", "India first. Any market with an exchange feed next.", "Design partner: YES Securities, Mumbai": keep.

Footer bottom "© Sitrep 2026", "Privacy Policy / Terms of Service", "Graded by the market.": keep.

---

## Notes for the founder

Things the copy touches that need a decision, not a sentence:

1. **The corpus chart.** `js/main.js` draws seeded random bars under a "Without Sitrep / With Sitrep" legend. No measurement sits behind it. Either feed it real data (events measured by year would be honest and the axis already runs 0 to 800) or drop the legend.
2. **Boilerplate stripping did not ship.** The current changelog and research card say it did. The new copy says "measured, not shipped" and quotes 59.3% to 64.0% from `docs/21-filing-boilerplate.md`. Those two numbers were not in the brief's fact list; drop them if the note is not yet public on research.sitrep.so.
3. **"Sitrep's own panels are graded the same way"** (old FAQ 005) describes the seal, resolve, score loop that `docs/22` lists as still to build. The new copy leaves it out. Put it back when it ships.
4. **"Nothing is used to train a model" and "nothing leaves your tenant"** are security promises the tree does not yet state anywhere. The new copy leaves them out. If they are true, they belong on a security page and in FAQ 004.
5. **The cashflow research card** was dated Sep 05; `docs/18` is dated 7 September. Corrected in the copy.
6. **Code panes** name `mcp.sitrep.so`, `api.sitrep.so` and a `sitrep` Python package that do not exist yet. Left as they are, since they are illustrations, but worth a small "illustrative" marker or a real endpoint before launch.
