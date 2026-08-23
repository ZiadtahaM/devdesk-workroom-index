# DevDesk Beta Landing — Design Direction

## Three directions considered

### Theme Name: Signal Desk
Very Brief Intro: A calm operations-room aesthetic with mint paper, evergreen surfaces, and orange alert markers. It makes coordination feel tangible and immediate without becoming a generic SaaS dashboard.
Probability: 0.07

### Theme Name: Workshop Index
Very Brief Intro: A tactile editorial system inspired by engineering notebooks, work orders, and annotated system maps. It feels precise, practical, and slightly utilitarian.
Probability: 0.03

### Theme Name: Night Shift Console
Very Brief Intro: A dark, high-contrast interface with electric orange signals and quiet motion. It makes the product feel like a command center, but risks overusing the familiar developer-console visual language.
Probability: 0.08

## Chosen direction: Signal Desk

### Design Movement
Contemporary editorial operations design: part product strategy document, part high-trust team control room.

### Core Principles
1. **Context before decoration.** Every visual element must help the visitor understand the coordination problem or the next action.
2. **Calm surfaces, urgent signals.** Mint and evergreen establish trust; orange appears only for attention, blockers, and calls to action.
3. **Asymmetric editorial rhythm.** Use uneven columns, large numerals, rule lines, and framed statements instead of repetitive centered SaaS sections.
4. **Proof over promises.** The landing page should show the daily pulse, capacity view, and handoff logic before explaining features.

### Color Philosophy
Pale mint is the working surface: open, breathable, and human. Deep evergreen is the shared operating room: stable, serious, and information-dense. Orange is ownable attention: it marks a blocker, a decision, or a next action. Avoid purple gradients and generic blue SaaS chrome.

### Layout Paradigm
Use an editorial split-screen: a strong narrative rail on the left and a product proof surface on the right. Let sections alternate between dense operational diagrams and spacious statements. Keep the primary CTA visible but never louder than the pain it resolves.

### Signature Elements
- Orange vertical signal rail on the left edge of major sections.
- Large outlined or solid numerals for section anchors.
- Thin mint-on-evergreen rule lines that connect people, work, and attention.

### Interaction Philosophy
Interactions should reveal context, not entertain. Tabs switch between Home, Inbox, Projects, and Team; hover states expose the next question each surface answers; the beta form should feel like a lightweight workflow review rather than a generic lead form.

### Animation
Use short, interruptible transitions under 300ms for hover, tabs, and accordions. Let the product preview change with a restrained horizontal slide or opacity shift. Respect `prefers-reduced-motion`; never animate the core copy so much that the message becomes hard to scan.

### Typography System
Use **Space Grotesk** for display and interface labels, paired with **DM Sans** for body copy. Display type should be tight and assertive; body copy should stay around 16–18px with generous line-height. Use uppercase micro-labels for category context, not for paragraphs.

### Brand Essence
DevDesk is the daily operating workspace for small software teams that already have tools but lack a truthful human-readable operating picture. Personality: **clear, capable, grounded**.

### Brand Voice
Headlines should be direct and slightly contrarian. CTAs should sound like a useful next step, not a sales funnel. Microcopy should name the operational outcome.

Example lines:
- “See what your team needs next. Not just what is on the board.”
- “Open one workspace. Leave with a clear next decision.”

### Wordmark & Logo
Use a compact mark made of four offset square signals forming an open desk shape. The wordmark should be set in Space Grotesk with a custom orange signal bar replacing the cross-stroke of the “t” in Desk in brand artwork.

### Signature Brand Color
**Signal Orange — #FF5A36.** It appears only where the product asks for attention: blockers, decisions, and primary actions.

## Style Decisions

- The landing page must feel like an operational product brief, not a generic startup template.
- Use the supplied DevDesk workspace screenshot as product proof, but stage it inside a custom frame with a stronger editorial layout.
- Show competitor categories as context, not as logo spam or unsupported superiority claims.

## Premium Reusable System Refinement

### Workroom Index extension

The premium site will evolve Signal Desk into a **Workroom Index**: a vertical field guide where each reusable module provides operational evidence. The educational/editorial references inform the confidence of the sectional rhythm, nested frames, categorical labels, and storytelling range; they are not copied, displayed, or used as DevDesk assets.

### Reusable module system

| Module | Job | Data source shape |
| --- | --- | --- |
| Signal hero | State the daily operating outcome and show one anchored product proof point | `hero` object |
| Context ledger | Explain the coordination tax through named signals and workday symptoms | `signals[]` |
| Surface selector | Let visitors switch among Home, Inbox, Projects, Team, and Connect evidence | `workspaceViews[]` |
| Field proof | Show a concrete operating state, such as capacity, handoff, blocker, or next decision | `proofCards[]` |
| Integration lens | Demonstrate a scoped connection without pretending a live authorization exists | `integrations[]` |
| Focus comparison | Clarify product scope versus adjacent tools without unsupported superiority claims | `comparisonRows[]` |
| Beta fit path | Qualify the visitor and make the privacy boundary explicit before request | `betaFields[]` |

### Expanded palette and motif rules

Add **Index Blue `#2456D4`** as a reserved cue for connected systems and linked evidence. Keep **Signal Orange `#FF5A36`** for decision and conversion moments; orange must never become a general decorative fill outside the beta commitment area. Use a double-rule frame and small section coordinates to make each module feel like a page in a living operations manual.

### Updated public journey

**Signal → System → Proof → Connect → Compare → Qualify.** The visitor should be able to understand DevDesk’s outcome within one screen, inspect how the workspace makes a decision, see how it coexists with current tools, and request beta access without ambiguity about what data is or is not collected.

### Accepted visual-review amendments

- The first screen must lead with a concrete Daily Pulse state—attention, capacity, and next decision—not a decorative product visual.
- Signal Orange remains reserved for a decision, blocker, primary action, signal rail, or the beta commitment field.
- Product evidence panels must show the named question and the resulting operating state, rather than an abstract visual alone.
