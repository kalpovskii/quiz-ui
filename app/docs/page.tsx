/**
 * Placeholder docs index. Once source.config.ts is wired up via fumadocs
 * (see that file's header comment), replace this with fumadocs-ui's
 * <DocsPage> reading from content/docs/ via the generated source loader.
 */
export default function DocsIndexPage() {
  return (
    <main style={{ maxWidth: 640, margin: "4rem auto", padding: "0 1.5rem" }}>
      <h1>Docs</h1>
      <p>
        Source content lives in <code>content/docs/</code> — see{" "}
        <code>getting-started.mdx</code> and <code>components/*.mdx</code>.
      </p>
    </main>
  );
}
