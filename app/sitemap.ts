import type { MetadataRoute } from "next";
import { source } from "@/lib/source";
import { seoPages } from "@/config/seo-keywords";

const BASE_URL = "https://quiz-ui-phi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/example`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const docRoutes: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: `${BASE_URL}${page.url}`,
    changeFrequency: "weekly",
    priority: page.url === "/docs" ? 0.9 : 0.6,
  }));

  const seoRoutes: MetadataRoute.Sitemap = seoPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...docRoutes, ...seoRoutes];
}