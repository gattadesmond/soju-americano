import { BlogIndexList } from "@/components/blog-index-list";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    pubDate: post.pubDate,
    author: post.author?.trim() || siteConfig.name,
  }));

  return (
    <section>
      <h1 className="scroll-m-20 text-[2rem] font-semibold leading-tight tracking-tight text-balance sm:text-[2.125rem]">
        {siteConfig.name} Blog
      </h1>

      <BlogIndexList posts={posts} />
    </section>
  );
}
