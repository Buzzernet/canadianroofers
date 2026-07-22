import type { MetadataRoute } from "next";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://canadianroofers.ca";
}

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/",                                  changeFrequency: "weekly",  priority: 1.0 },
  { path: "/metal-roofing-installation-ontario/", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog",                              changeFrequency: "weekly",  priority: 0.8 },
];

async function getBlogSlugs(): Promise<Array<{ slug: string; date?: string }>> {
  const contentDir = path.join(process.cwd(), "src", "content");
  try {
    const files = await fs.readdir(contentDir);
    const posts = await Promise.all(
      files
        .filter((f) => f.endsWith(".md"))
        .map(async (file) => {
          const raw = await fs.readFile(path.join(contentDir, file), "utf8");
          const { data } = matter(raw);
          return {
            slug: (data.slug as string) ?? file.replace(/\.md$/, ""),
            date: data.date as string | undefined,
          };
        })
    );
    return posts;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const blogPosts = await getBlogSlugs();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path: route, changeFrequency, priority }) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map(({ slug, date }) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: date ? new Date(date) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
