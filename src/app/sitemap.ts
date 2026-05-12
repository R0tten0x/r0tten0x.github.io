export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  return [
    {
      url: "https://r0tten0x.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://r0tten0x.dev/writing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles.map((a) => ({
      url: `https://r0tten0x.dev/writing/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
