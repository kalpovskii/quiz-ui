import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "quiz-ui — Radix components for quiz funnels",
  description:
    "A shadcn/ui-compatible registry of Radix-based components for building quiz funnels.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
