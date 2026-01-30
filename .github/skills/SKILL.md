# Git Check (Project Health Check)

## Goal
Detect and fix project errors by running a strict health-check loop:
install → lint → typecheck → tests → build (and repeat until green).

## When to use
- Before refactors, optimizations, or using other skills.
- When Vercel build fails or dependencies are outdated.
- After pulling changes or switching branches.

## Safety rules
- Do not change user-facing behavior unless necessary to fix a failing check.
- Prefer minimal fixes. Avoid large refactors in this skill.
- If a breaking change is required, explain why and isolate it in a separate commit.

## What you must do (order matters)
1) Check repository state:
   - `git status` and current branch.
   - Identify uncommitted changes; propose a safe commit plan (or stash) before risky fixes.
2) Confirm tooling:
   - Read `package.json` scripts.
   - Detect whether the project uses npm / pnpm / yarn via lockfiles.
3) Run health-check loop (stop only when green):
   A) Install:
      - Use the package manager detected.
   B) Lint:
      - Run `npm run lint` if present.
   C) Typecheck:
      - Run `npm run typecheck` or `tsc --noEmit` if configured.
   D) Tests:
      - Run `npm test` if present.
   E) Build:
      - Run `npm run build`.
4) Fix failures:
   - Fix the root cause, not just symptoms.
   - Re-run the failing step until it passes, then continue.
5) Report:
   - Provide a short summary: what failed, what changed, what commands now pass.
   - Suggest next steps (performance/UI/deploy skills).

## Output format
- Commands run (bulleted)
- Failures found (bulleted)
- Fixes applied (bulleted)
- Current status: ✅ All checks passing / ❌ Still failing with next action

## Notes
- If Vercel build fails, focus on Node version, lockfiles, and build scripts.
- Keep changes small and reversible.
