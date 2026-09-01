/**
 * Custom component overrides for rendering content/docs/*.mdx (fumadocs'
 * `useMDXComponents` convention — see the note in source.config.ts for why
 * this is a scaffold rather than a filled-in implementation).
 */
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
