import Link from "next/link";
import { getAllArticles, getArticle } from "@/lib/writing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | R0tten0x`,
    description: article.description,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      {/* Back */}
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-white/30 hover:text-white/70 transition-colors mb-12"
      >
        ← Writing
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/25">
            {article.date}
          </span>
          <span className="text-[10px] font-mono text-white/15">·</span>
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/25">
            {article.readTime}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-white/40 text-lg font-light leading-relaxed">
          {article.description}
        </p>
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full border border-white/[0.07] bg-white/[0.03] text-[10px] font-mono text-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="h-px bg-white/[0.06] mb-12" />

      {/* Article body */}
      <article
        className="prose-article"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="h-px bg-white/[0.06] mt-16 mb-10" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <Link
          href="/writing"
          className="text-[11px] font-mono tracking-wider uppercase text-white/30 hover:text-white/70 transition-colors"
        >
          ← All articles
        </Link>
        <Link
          href="/#contact"
          className="text-[11px] font-mono tracking-wider uppercase text-primary/50 hover:text-primary transition-colors"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
