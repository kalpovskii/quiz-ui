import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const siteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: "quiz-ui — Radix components for quiz funnels",
  description: "A shadcn/ui-compatible registry of Radix-based components for building quiz funnels.",
  verification: siteVerification
    ? { google: siteVerification }
    : undefined,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "quiz-ui",
  url: "https://quiz-ui-phi.vercel.app",
  description:
    "A shadcn/ui-compatible registry of headless Radix-based components for building quiz funnels.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <RootProvider>{children}</RootProvider>
        <Analytics />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}