import NextLink from "next/link";
import { getAllPosts } from "@/lib/blog";

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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pb-20">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        Blog
      </h1>
      <p className="text-muted mt-2">Những bài viết tham khảo của tôi.</p>

      <ul className="mt-8 grid list-none grid-cols-1 gap-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <div className="bg-surface shadow-surface border-separator hover:border-primary/30 rounded-xl border transition-colors">
              <NextLink
                className="block p-4 no-underline"
                href={`/blog/${encodeURIComponent(post.slug)}`}
              >
                <h2 className="text-lg font-semibold text-foreground">
                  {post.title}
                </h2>
                {post.pubDate && (
                  <time
                    className="text-muted mt-1 block text-sm"
                    dateTime={post.pubDate}
                  >
                    {formatDate(post.pubDate)}
                  </time>
                )}
                {post.description && (
                  <p className="text-muted mt-2 line-clamp-2 text-sm">
                    {post.description}
                  </p>
                )}
              </NextLink>
            </div>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="text-muted mt-8">Chưa có bài viết nào.</p>
      )}
    </section>
  );
}
