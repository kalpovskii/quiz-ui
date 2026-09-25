import type { MetadataRoute } from "next";

const SITEMAP_URL = "https://quiz-ui-phi.vercel.app/sitemap.xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: allow everything
      { userAgent: "*", allow: "/" },
      // Explicit AI citation bots (ensures intent is documented)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: SITEMAP_URL,
  };
}