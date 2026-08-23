/** Workroom Index content model: every public section is evidence-led and reusable. */
export type SurfaceId = "pulse" | "attention" | "capacity" | "connect";
export type ToolId = "linear" | "jira" | "notion" | "github" | "clickup";

export const navigation = [
  { href: "#method", label: "Method" },
  { href: "#workspace", label: "Workspace" },
  { href: "#connections", label: "Connections" },
  { href: "#beta", label: "Beta" },
];

export const decisionSignals = [
  { code: "01", title: "Work", detail: "Projects moving or waiting", tone: "paper" },
  { code: "02", title: "People", detail: "Capacity and ownership", tone: "moss" },
  { code: "03", title: "Attention", detail: "Blockers and decisions", tone: "coral" },
  { code: "04", title: "Connections", detail: "Signals from trusted tools", tone: "blue" },
] as const;

export const surfaces: Record<SurfaceId, { index: string; label: string; question: string; answer: string; headline: string; detail: string; rows: Array<{ title: string; meta: string; status: "calm" | "signal" | "blue" }> }> = {
  pulse: {
    index: "01",
    label: "Daily pulse",
    question: "What changed since the team last looked?",
    answer: "A shared operating picture, not another status report.",
    headline: "Open once. Know where the day needs a decision.",
    detail: "The daily pulse combines delivery movement, high-attention items, and team capacity into one starting point.",
    rows: [
      { title: "Platform redesign", meta: "65% · delivery moving", status: "calm" },
      { title: "API rate limit", meta: "needs an owner today", status: "signal" },
      { title: "Maya Chen", meta: "available for next review", status: "blue" },
    ],
  },
  attention: {
    index: "02",
    label: "Attention field",
    question: "What will become a meeting if nobody acts?",
    answer: "A ranked queue of blockers, waiting work, and decisions.",
    headline: "Turn scattered signals into the next clear move.",
    detail: "DevDesk surfaces the work that needs a decision before status gathering starts again.",
    rows: [
      { title: "Review routing needed", meta: "Platform redesign · today", status: "signal" },
      { title: "Client feedback waiting", meta: "Mobile app · assign owner", status: "blue" },
      { title: "Legal review in progress", meta: "Onboarding flow · monitored", status: "calm" },
    ],
  },
  capacity: {
    index: "03",
    label: "Capacity field",
    question: "Who can take the handoff without creating delivery risk?",
    answer: "People context tied to work, not a generic directory.",
    headline: "See capacity before assigning the next handoff.",
    detail: "Availability, ownership, workload, and open work sit in the same decision surface.",
    rows: [
      { title: "Maya Chen", meta: "45% · backend · review-ready", status: "calm" },
      { title: "James Miller", meta: "95% · frontend · protect focus", status: "signal" },
      { title: "Tina Park", meta: "80% · design · waiting on review", status: "blue" },
    ],
  },
  connect: {
    index: "04",
    label: "Connection field",
    question: "What context exists already that DevDesk should read—not replace?",
    answer: "Read-only signals from the systems the team already trusts.",
    headline: "Keep the records. Add the operating layer.",
    detail: "Start with scoped signals from code, planning, communication, and calendars. Expand only when the context earns trust.",
    rows: [
      { title: "GitHub", meta: "pull requests and review signals", status: "blue" },
      { title: "Linear", meta: "project and issue context", status: "calm" },
      { title: "Calendar", meta: "availability—not surveillance", status: "signal" },
    ],
  },
};

export const proofCards = [
  { index: "A", kicker: "Capacity field", title: "A decision changes when you can see who has room to own it.", detail: "The Team surface carries workload, availability, focus, and handoff context together.", asset: "/manus-storage/devdesk-capacity-field_e2e60b18.jpg" },
  { index: "B", kicker: "Context map", title: "The highest-value question is often between tools, not inside one.", detail: "DevDesk turns work, code, chat, and availability signals into a readable next-decision field.", asset: "/manus-storage/devdesk-context-constellation_61f050ff.jpg" },
] as const;

export const integrationFacts = [
  { title: "Choose the signal", detail: "Connect only the context that makes a decision clearer." },
  { title: "Keep the source", detail: "DevDesk links back to systems of record instead of duplicating them." },
  { title: "Make staleness visible", detail: "A useful operating picture shows when connection context needs attention." },
] as const;

export const comparisonTools: Record<ToolId, { name: string; category: string; focus: string }> = {
  linear: { name: "Linear", category: "Product development", focus: "Issue flow and product execution" },
  jira: { name: "Jira", category: "Work tracking", focus: "Configurable planning and execution records" },
  notion: { name: "Notion", category: "Knowledge workspace", focus: "Documents, databases, and shared knowledge" },
  github: { name: "GitHub", category: "Code collaboration", focus: "Repositories, pull requests, and delivery lifecycle" },
  clickup: { name: "ClickUp", category: "Broad work management", focus: "Cross-functional coordination" },
};

export const comparisonRows: Array<{ label: string; devdesk: number; linear: number; jira: number; notion: number; github: number; clickup: number }> = [
  { label: "Daily operating context", devdesk: 3, linear: 1, jira: 1, notion: 1, github: 1, clickup: 1 },
  { label: "People capacity & handoffs", devdesk: 3, linear: 1, jira: 1, notion: 1, github: 1, clickup: 1 },
  { label: "System-of-record depth", devdesk: 1, linear: 3, jira: 3, notion: 2, github: 3, clickup: 3 },
  { label: "Neutral layer across tools", devdesk: 3, linear: 1, jira: 1, notion: 1, github: 1, clickup: 1 },
];

export const faqs = [
  { question: "Is DevDesk another project manager?", answer: "No. DevDesk is designed as the people-aware operating layer above the team’s systems of record. Its job is to make attention, capacity, handoffs, and next decisions easier to understand." },
  { question: "Does it replace GitHub, Jira, Linear, or Slack?", answer: "No. The product is intentionally positioned to complement existing records and make their combined delivery context easier to read." },
  { question: "What is real in this beta preview?", answer: "The workspace interaction, local-first model, and product surfaces are represented in the prototype. Connections and form submission on this public page are simulated and labelled accordingly." },
  { question: "What happens to a beta request on this preview?", answer: "Nothing is transmitted from this static preview. A production waitlist would need a separate consent, retention, and access-control policy before any data is collected." },
] as const;
