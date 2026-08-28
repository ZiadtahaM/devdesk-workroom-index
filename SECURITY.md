# Security Policy

## Supported source branch

Security corrections should be made on the current default branch. Never include passwords, API keys, user data, access tokens, or deployment configuration in issues or commits.

## Reporting a vulnerability

Report suspected vulnerabilities privately to the repository owner. Include the affected component, clear reproduction steps, impact, and a proposed remediation where possible. Coordinate a fix before public disclosure.

## Development guidance

Keep secrets outside the client bundle, validate all external input, enforce authorization on server-side operations, and review dependency changes before release. Run the project’s TypeScript and production-build checks for each change.

