import NextLink from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

function formatDate(pubDate: string): string {
  if (!pubDate) return "";
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return pubDate;
  return d.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(decodeURIComponent(slug));

  if (!post) notFound();

  return (
    <article className="pb-20">
      <NextLink className="text-muted mb-6 inline-block text-sm" href="/blog">
        ← Blog
      </NextLink>

      <header className="mb-8">
        <h1 className="scroll-m-20 text-[1.75rem] font-semibold leading-tight tracking-tight text-balance sm:text-[2rem]">
          {post.title}
        </h1>
        {post.pubDate && (
          <time
            className="text-muted mt-2 block text-sm"
            dateTime={post.pubDate}
          >
            {formatDate(post.pubDate)}
          </time>
        )}
        {post.heroImage && (
          <div className="border-separator mt-4 overflow-hidden rounded-lg border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="w-full object-cover"
              src={post.heroImage}
            />
          </div>
        )}
      </header>

      <div className="blog-prose max-w-none">
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a
                className="text-link underline hover:no-underline"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-separator text-muted my-4 border-l-4 pl-4 italic">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">
                {children}
              </code>
            ),
            h2: ({ children }) => (
              <h2 className="scroll-m-20 mt-8 mb-4 text-2xl font-semibold tracking-tight">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="scroll-m-20 mt-6 mb-3 text-xl font-semibold tracking-tight">
                {children}
              </h3>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            ol: ({ children }) => (
              <ol className="my-4 list-decimal space-y-1 pl-6">{children}</ol>
            ),
            p: ({ children }) => (
              <p className="mb-4 leading-relaxed">{children}</p>
            ),
            pre: ({ children }) => (
              <pre className="bg-muted my-4 overflow-x-auto rounded-lg p-4 text-sm">
                {children}
              </pre>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold">{children}</strong>
            ),
            ul: ({ children }) => (
              <ul className="my-4 list-disc space-y-1 pl-6">{children}</ul>
            ),
          }}
          remarkPlugins={[remarkGfm]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
