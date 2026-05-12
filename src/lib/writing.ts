import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const contentDir = path.join(process.cwd(), "src/content/writing");

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
};

export type Article = ArticleMeta & {
  content: string;
};

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(contentDir, filename), "utf8"));
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        readTime: (data.readTime as string) ?? "5 min read",
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    readTime: (data.readTime as string) ?? "5 min read",
    content: processed.toString(),
  };
}
