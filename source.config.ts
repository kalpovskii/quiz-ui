/**
 * Wires `content/docs/*.mdx` into a queryable source for the docs routes.
 *
 * 8bitcn's own site uses fumadocs (content/docs + source.config.ts +
 * mdx-components.tsx is exactly fumadocs' convention). This file is left
 * as a scaffold rather than a full implementation: fumadocs' loader API
 * has moved fast across versions, and hand-writing it without being able
 * to install/run it here risks shipping something that looks right but
 * silently breaks. To finish wiring it:
 *
 *   pnpm add fumadocs-core fumadocs-mdx fumadocs-ui
 *   pnpm dlx fumadocs-mdx init
 *
 * and follow https://fumadocs.dev/docs/mdx — it will generate/update this
 * file, `mdx-components.tsx`, and the `.source` directory for you against
 * whatever the current fumadocs version expects.
 */
export {};
