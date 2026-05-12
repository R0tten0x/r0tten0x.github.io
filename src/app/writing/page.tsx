import Link from "next/link";
import { getAllArticles } from "@/lib/writing";
import SectionLabel from "@/app/components/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing | R0tten0x",
  description:
    "Technical articles on building SaaS products solo, full-stack engineering, Stripe, Supabase, and indie development.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-4xl mx-auto px-6 py-32">
      <SectionLabel label="Writing" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Notes from the build.
      </h1>
      <p className="text-white/40 text-lg font-light mb-14 max-w-lg">
        Technical articles on building SaaS products solo, full-stack engineering, and the indie dev experience.
      </p>

      {articles.length === 0 ? (
        <p className="text-white/30 font-mono text-sm">Articles coming soon.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="group glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(79,126,255,0.07)] transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/25">
                    {article.date}
                  </span>
                  <span className="text-[10px] font-mono text-white/15">·</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/25">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-base font-semibold tracking-tight mb-1.5 group-hover:text-primary transition-colors duration-200">
                  {article.title}
                </h2>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  {article.description}
                </p>
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
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
              </div>
              <span className="text-primary/40 group-hover:text-primary transition-colors duration-200 text-lg font-light shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-16 pt-10 border-t border-white/[0.05]">
        <Link
          href="/"
          className="text-[11px] font-mono tracking-wider uppercase text-white/30 hover:text-white/70 transition-colors"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
