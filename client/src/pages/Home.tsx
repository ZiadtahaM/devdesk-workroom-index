/** Workroom Index public page: evidence-led DevDesk product story and privacy-aware conversion path. */
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  Github,
  GitBranch,
  LoaderCircle,
  MailCheck,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  X,
} from "lucide-react";
import {
  comparisonRows,
  comparisonTools,
  decisionSignals,
  faqs,
  integrationFacts,
  navigation,
  proofCards,
  SurfaceId,
  surfaces,
  ToolId,
} from "@/data/siteContent";

type EmailState = "idle" | "invalid" | "valid";

function SectionIndex({ number, label }: { number: string; label: string }) {
  return <div className="section-index" aria-hidden="true"><strong>{number}</strong><span>{label}</span></div>;
}

function FocusBars({ value, tone }: { value: number; tone: "devdesk" | "tool" }) {
  return <span className="focus-bars" aria-label={`${value} of 3 relative focus`}>
    {Array.from({ length: 3 }).map((_, index) => <i key={index} className={index < value ? `is-on ${tone}` : ""} />)}
  </span>;
}

export default function Home() {
  const [activeSurface, setActiveSurface] = useState<SurfaceId>("pulse");
  const [activeTool, setActiveTool] = useState<ToolId>("linear");
  const [connectionState, setConnectionState] = useState<"idle" | "connecting" | "connected">("idle");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeSurfaceData = surfaces[activeSurface];
  const activeToolData = comparisonTools[activeTool];
  const emailState: EmailState = useMemo(() => {
    if (!email) return "idle";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "valid" : "invalid";
  }, [email]);

  function scrollTo(id: string) {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function connectGithub() {
    setConnectionState("connecting");
    window.setTimeout(() => setConnectionState("connected"), 720);
  }

  function submitBeta(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmailTouched(true);
    if (emailState !== "valid") return;
    setSubmitted(true);
  }

  return (
    <div className="workroom-shell" id="top">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="DevDesk home">
          <img src="/manus-storage/devdesk-workroom-mark_27453950.png" alt="" />
          <span>Dev<span>Desk</span><i aria-hidden="true" /></span>
        </a>
        <button className="menu-trigger" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={`topnav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
        <button type="button" className="nav-cta" onClick={() => scrollTo("#beta")}>Request beta <ArrowUpRight size={14} /></button>
      </header>

      <main>
        <section className="hero-index" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="overline"><span /> OPERATING CONTEXT FOR SOFTWARE TEAMS</p>
            <h1 id="hero-title">Find the decision <em>before the meeting finds you.</em></h1>
            <p className="hero-summary">DevDesk turns work, people, blockers, and trusted tool signals into one clear operating picture for teams who are done reconstructing the day from six places.</p>
            <div className="hero-actions"><button type="button" className="primary-action" onClick={() => scrollTo("#beta")}>Request beta access <ArrowUpRight size={16} /></button><button type="button" className="text-action" onClick={() => scrollTo("#workspace")}>Inspect the workspace <ArrowDownRight size={16} /></button></div>
            <div className="hero-conditions"><span><Check size={14} /> Built for 5–30 person teams</span><span><Check size={14} /> No forced migration</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract Workroom Index visual">
            <div className="hero-coordinate"><span>01 / SIGNAL</span><span>WORKROOM INDEX</span></div>
            <div className="hero-image-frame"><img className="hero-image-ambient" src="/manus-storage/devdesk-workroom-hero_18362e38.jpg" alt="" /><div className="hero-workspace-proof"><div className="hero-proof-head"><span>DAILY PULSE / NORTHSTAR</span><small>WHAT CHANGED?</small></div><div className="hero-proof-grid"><div className="hero-proof-list"><span className="mini-kicker">ATTENTION</span><p><i className="signal" /> API rate limit <small>Owner needed today</small></p><p><i className="calm" /> Platform redesign <small>65% · delivery moving</small></p><p><i className="blue" /> Review waiting <small>Maya has capacity</small></p></div><div className="hero-proof-decision"><span>NEXT DECISION</span><strong>Route the review to Maya before standup.</strong><b>CAPACITY 45%</b></div></div></div><div className="image-stamp"><span className="stamp-dot" /> DAILY PULSE, NOT DECORATION</div></div>
          </div>
        </section>

        <section id="method" className="signal-ledger" aria-labelledby="method-title">
          <div className="ledger-intro"><SectionIndex number="02" label="Method" /><div><p className="overline on-dark">THE COORDINATION TAX</p><h2 id="method-title">Your team does not have a work-tracking problem. <em>It has a context problem.</em></h2></div><p className="ledger-copy">The task is rarely finding one more update. It is making sense of movement, attention, capacity, and ownership at the same time.</p></div>
          <div className="signal-grid">{decisionSignals.map((signal) => <article key={signal.code} className={`signal-card ${signal.tone}`}><span>{signal.code}</span><strong>{signal.title}</strong><p>{signal.detail}</p><CircleDot size={18} /></article>)}</div>
          <div className="ledger-closing"><span>DEV DESK ADDS</span><strong>A people-aware decision field above the records your team already trusts.</strong><MoveUpRight size={22} /></div>
        </section>

        <section id="workspace" className="surface-section" aria-labelledby="workspace-title">
          <div className="section-header"><SectionIndex number="03" label="Workspace" /><div><p className="overline">THE OPERATING LAYER</p><h2 id="workspace-title">One workspace. <em>Four questions that change the day.</em></h2></div><p>Each surface starts with an operating question—not a generic feature category—then makes the next action easier.</p></div>
          <div className="surface-layout">
            <div className="surface-tabs" role="tablist" aria-label="Explore DevDesk workspace surfaces">
              {(Object.keys(surfaces) as SurfaceId[]).map((surfaceId) => { const surface = surfaces[surfaceId]; return <button key={surfaceId} type="button" role="tab" aria-selected={activeSurface === surfaceId} className={activeSurface === surfaceId ? "active" : ""} onClick={() => setActiveSurface(surfaceId)}><span>{surface.index}</span><strong>{surface.label}</strong><ArrowRight size={15} /></button>; })}
              <p><Sparkles size={17} /> The product keeps the question visible while the team decides.</p>
            </div>
            <article className="surface-proof">
              <div className="proof-topline"><span>{activeSurfaceData.index} / {activeSurfaceData.label}</span><span>ILLUSTRATIVE PRODUCT STATE</span></div>
              <div className="surface-copy"><p className="surface-question">{activeSurfaceData.question}</p><h3>{activeSurfaceData.headline}</h3><p>{activeSurfaceData.detail}</p></div>
              <div className="workspace-window"><div className="window-chrome"><span><i /><i /><i /></span><b>NORTHSTAR / {activeSurfaceData.label.toUpperCase()}</b><small>Today</small></div><div className="window-body"><div className="window-list">{activeSurfaceData.rows.map((row) => <div className="window-row" key={row.title}><span className={`status-dot ${row.status}`} /><p><strong>{row.title}</strong><small>{row.meta}</small></p><ArrowRight size={14} /></div>)}</div><div className="decision-panel"><span>FIELD READOUT</span><strong>{activeSurfaceData.answer}</strong><i>READ THE SIGNAL →</i></div></div></div>
            </article>
          </div>
        </section>

        <section className="proof-strip" aria-label="DevDesk operating proof">
          {proofCards.map((card) => <article key={card.index} className={`proof-card ${card.index === "B" ? "reverse" : ""}`}><div className="proof-image"><img src={card.asset} alt="Abstract DevDesk operating-context visual" /><span>{card.index}</span></div><div className="proof-copy"><p className="overline">{card.kicker}</p><h3>{card.title}</h3><p>{card.detail}</p><button type="button" onClick={() => scrollTo("#beta")}>Bring this workflow to beta <ArrowUpRight size={14} /></button></div></article>)}
        </section>

        <section id="connections" className="connections-section" aria-labelledby="connection-title">
          <div className="connection-art"><div className="connection-orbit"><span className="orbit-label code">CODE</span><span className="orbit-label plan">PLAN</span><span className="orbit-label chat">CHAT</span><span className="orbit-label time">TIME</span><div className="orbit-center"><span className="stamp-dot" /> NEXT DECISION</div></div><p><span className="stamp-dot" /> Connect context. Keep systems of record.</p></div>
          <div className="connection-copy"><SectionIndex number="04" label="Connect" /><p className="overline">READ-ONLY BY DESIGN</p><h2 id="connection-title">Keep the records. <em>Add the operating layer.</em></h2><p>DevDesk is not a migration project. It starts by reading the context that makes a delivery decision clearer and linking the team back to the tool that owns the work.</p><div className="connection-facts">{integrationFacts.map((fact, index) => <div key={fact.title}><span>0{index + 1}</span><p><strong>{fact.title}</strong><small>{fact.detail}</small></p></div>)}</div></div>
          <aside className={`connect-demo ${connectionState}`} aria-live="polite"><div className="connect-head"><span><Github size={17} /> GitHub context</span><small>SIMULATED</small></div>{connectionState === "idle" && <div className="connect-idle"><p><strong>Read signals. Do not replicate work.</strong><span>Pull requests, review waits, and project references are enough to begin.</span></p><button type="button" className="primary-action" onClick={connectGithub}>Connect GitHub <ArrowUpRight size={15} /></button></div>}{connectionState === "connecting" && <div className="connect-loading"><LoaderCircle size={28} /><strong>Checking repository context…</strong><span>Preparing a simulated read-only connection</span></div>}{connectionState === "connected" && <div className="connect-done"><div><Check size={15} /> CONTEXT LINKED <small>Illustrative state</small></div><p><GitBranch size={16} /><span><strong>northstar/web</strong><small>3 pull requests need a reviewer</small></span></p><p><GitBranch size={16} /><span><strong>northstar/api</strong><small>1 decision waiting on capacity</small></span></p><button type="button" onClick={() => setConnectionState("idle")}>Reset preview</button></div>}</aside>
        </section>

        <section className="comparison-section" aria-labelledby="comparison-title">
          <div className="comparison-intro"><SectionIndex number="05" label="Compare" /><p className="overline on-dark">PRODUCT BOUNDARY</p><h2 id="comparison-title">Not another system of record. <em>The layer between them.</em></h2><p>Choose an adjacent tool to inspect the product boundary. This is a focus comparison, not a feature checklist or a claim of replacement.</p><div className="tool-tabs" role="tablist" aria-label="Select an adjacent software tool">{(Object.keys(comparisonTools) as ToolId[]).map((id) => <button key={id} type="button" role="tab" aria-selected={activeTool === id} className={activeTool === id ? "active" : ""} onClick={() => setActiveTool(id)}>{comparisonTools[id].name}</button>)}</div></div>
          <div className="comparison-card"><div className="comparison-card-top"><span>FOCUS LENS</span><strong>DEV DESK × {activeToolData.name.toUpperCase()}</strong></div><div className="tool-context"><strong>{activeToolData.name}</strong><span>{activeToolData.category} · {activeToolData.focus}</span></div>{comparisonRows.map((row) => <div className="comparison-row" key={row.label}><span>{row.label}</span><div><small>DEV DESK</small><FocusBars value={row.devdesk} tone="devdesk" /></div><div><small>{activeToolData.name.toUpperCase()}</small><FocusBars value={row[activeTool]} tone="tool" /></div></div>)}<p className="comparison-note">DevDesk is strongest where delivery context meets people capacity, attention, and the next decision.</p></div>
        </section>

        <section id="beta" className="beta-section" aria-labelledby="beta-title">
          <div className="beta-copy"><SectionIndex number="06" label="Beta" /><p className="overline">THE FIELD TEST</p><h2 id="beta-title">Bring one workflow that still <em>costs your team a status meeting.</em></h2><p>Standup preparation. Finding a reviewer. Tracking a blocker. Coordinating a handoff. The beta is for teams willing to test whether a shared operating picture changes the work around that moment.</p><div className="fit-notes"><span><b>5–30</b> people</span><span><b>2–8</b> active projects</span><span><b>1</b> honest workflow</span></div></div>
          <form className="beta-form" onSubmit={submitBeta} noValidate>{submitted ? <div className="submission-state"><div className="confirmation-mark"><Check size={25} /></div><p className="overline">PREVIEW COMPLETE</p><h3>Your workflow is ready for a beta conversation.</h3><p>This static preview did not transmit your information. A production program would present its data-use notice before collection.</p><button type="button" className="text-action" onClick={() => { setSubmitted(false); setEmail(""); setEmailTouched(false); }}>Start another preview <ArrowRight size={15} /></button></div> : <><div className="form-heading"><span>REQUEST BETA ACCESS</span><small>NO DATA TRANSMITTED IN THIS PREVIEW</small></div><label>Work email<div className={`email-control ${emailTouched ? emailState : "idle"}`}><input value={email} onChange={(event) => setEmail(event.target.value)} onBlur={() => setEmailTouched(true)} type="email" placeholder="you@company.com" aria-describedby="email-message" aria-invalid={emailTouched && emailState === "invalid"} />{emailTouched && emailState === "valid" && <MailCheck size={18} />}{emailTouched && emailState === "invalid" && <TriangleAlert size={18} />}</div></label><p className={`email-message ${emailTouched ? emailState : "idle"}`} id="email-message">{emailTouched && emailState === "invalid" ? "Enter a valid email format to continue the preview." : emailTouched && emailState === "valid" ? "Format confirmed. This static preview stores nothing." : "This prototype does not collect or send form data."}</p><label>Role<select defaultValue=""><option value="" disabled>Select your role</option><option>Engineering manager</option><option>Technical lead</option><option>Head of Engineering</option><option>Founder</option></select></label><label>Workflow to test<textarea rows={3} placeholder="What still takes too much manual status work?" /></label><button type="submit" className="primary-action form-action">Preview beta request <ArrowUpRight size={16} /></button><p className="privacy-line"><ShieldCheck size={14} /> Privacy boundary: no personal information is transmitted from this static prototype.</p></>}</form>
        </section>

        <section className="faq-section" aria-labelledby="faq-title"><div className="faq-heading"><SectionIndex number="07" label="FAQ" /><p className="overline">THE HONEST VERSION</p><h2 id="faq-title">Clear enough to <em>trust the boundary.</em></h2></div><div className="faq-list">{faqs.map((item, index) => <article key={item.question} className={openFaq === index ? "open" : ""}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{item.question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{item.answer}</p>}</article>)}</div></section>
      </main>

      <footer className="site-footer"><a className="wordmark" href="#top" aria-label="Back to DevDesk home"><img src="/manus-storage/devdesk-workroom-mark_27453950.png" alt="" /><span>Dev<span>Desk</span><i aria-hidden="true" /></span></a><p>Daily operating context for small software teams.</p><button type="button" onClick={() => scrollTo("#top")}>Back to top <ArrowUpRight size={14} /></button></footer>
    </div>
  );
}
