# DevDesk Workroom Index

**DevDesk Workroom Index** is a developer-workspace and decision-support portal built with React, TypeScript, Vite, and an Express companion server. It is positioned as an operational workroom rather than a generic landing page.

## What is in this repository

The source contains a routed React client, reusable interface primitives, an application shell, error handling, theme infrastructure, and server entry points. The dependency set includes React, Wouter, Radix UI, Tailwind, Framer Motion, Zod, and Express, providing a solid starting point for a typed, production-facing workspace.

## Local development

```bash
pnpm install
pnpm dev
```

Create a release candidate only after running:

```bash
pnpm check
pnpm build
```

## Operational standards

Keep decision logic isolated from visual components, validate external input at the application boundary, and avoid shipping secrets in client bundles. Add a dedicated test command before expanding critical decision or workflow features. For deployment, use the generated production build and supply configuration through the hosting environment rather than committed files.

## Contribution expectations

Each feature should include an explicit user journey, an accessible loading/error/empty state, and a clear path back to the primary workroom. This keeps the project legible to both users and technical reviewers.

