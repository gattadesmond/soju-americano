"use client";

import { Description, Link, Separator } from "@heroui/react";

export type BlogIndexPost = {
  slug: string;
  title: string;
  pubDate: string;
  author: string;
};

function formatAgoraStyleDate(pubDate: string): string {
  if (!pubDate) return "";
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return pubDate;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogIndexList({ posts }: { posts: BlogIndexPost[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-muted mt-12 text-[15px] leading-relaxed">
        Chưa có bài viết nào.
      </p>
    );
  }

  return (
    <div className="mt-14">
      {posts.map((post, index) => (
        <div key={post.slug}>
          {index > 0 ? <Separator className="my-9" /> : null}
          <Link
            className="group block no-underline"
            href={`/blog/${encodeURIComponent(post.slug)}`}
          >
            <span className="text-foreground block text-[17px] font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">
              {post.title}
            </span>
            <Description className="mt-2 block text-[13px] leading-normal">
              {post.pubDate
                ? `${post.author} - ${formatAgoraStyleDate(post.pubDate)}`
                : post.author}
            </Description>
          </Link>
        </div>
      ))}
    </div>
  );
}
