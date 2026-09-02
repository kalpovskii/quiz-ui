import type { MetadataRoute } from "next";

const SITEMAP_URL = "https://quiz-ui-phi.vercel.app/sitemap.xml"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: SITEMAP_URL,
  };
}