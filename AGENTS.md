<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Re:ForMe project context

- Purpose: explain the Re:ForMe concept and guide visitors to a preview of the app design. The product itself is planned for mission 6; this repository is a landing page.
- Target audience: people who find it difficult to name a complex feeling or decide where to begin talking about it.
- Core message: talk freely, reflect on emotions and real-life difficulty, then discover a personal sensory tool.
- Stack: Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui. Keep semantic sections in `src/app/page.tsx` and reusable UI in `src/components`.
- Design source: Figma file `QmteRU5R1QhuKLhJJlqHcu`, especially nodes `1:4` (splash), `35:484` (onboarding), and `1:248` (first home). These are app screens, so adapt their visual language into a responsive marketing page.
- Design tokens: Noto Sans KR, ink `#32325d`, primary `#5e72e4`, pale canvas `#f8f9fe`, white cards, rounded corners. Use the exact exported Figma assets in `public/figma` for the logo and phone preview.
- Keep claims faithful to the Figma concept. Do not imply a working therapy or signup service; the current CTA leads to a design preview. Do not introduce medical outcome claims.
- Preserve keyboard access, descriptive alt text, meaningful links, mobile layout, page metadata, and reduced-motion behavior. Check `npm run lint` and `npm run build` after changes.
