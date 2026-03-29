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
    <section>
      <h1 className="scroll-m-20 text-[2rem] font-semibold leading-tight tracking-tight text-balance sm:text-[2.125rem]">
        Blog
      </h1>
      <p className="text-muted mt-3 text-[15px] leading-relaxed">
        Những bài viết tham khảo của tôi.
      </p>

      <ul className="mt-10 grid list-none grid-cols-1 gap-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <div className="bg-surface shadow-surface border-separator hover:border-foreground/12 rounded-2xl border transition-colors">
              <NextLink
                className="block p-5 no-underline sm:p-6"
                href={`/blog/${encodeURIComponent(post.slug)}`}
              >
                <h2 className="text-[17px] font-medium leading-snug text-foreground">
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
                  <p className="text-muted mt-2 line-clamp-2 text-[14px] leading-relaxed">
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
