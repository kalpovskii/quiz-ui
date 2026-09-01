import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 640, margin: "4rem auto", padding: "0 1.5rem" }}>
      <h1>quiz-ui</h1>
      <p>Radix-based components for building quiz funnels, distributed shadcn-style.</p>
      <p>
        <Link href="/docs">Read the docs</Link> · <Link href="/example">See a live example</Link>
      </p>
    </main>
  );
}
