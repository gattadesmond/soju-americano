export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Soju",
  description:
    "I design & code things on the web — digital garden, blog, videos, and tools.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Videos", href: "/videos" },
    { label: "Pomodoro", href: "/pomodoro" },
  ],
  navMenuItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Videos", href: "/videos" },
    { label: "Pomodoro", href: "/pomodoro" },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
