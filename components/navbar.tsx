"use client";

import { useState } from "react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-separator/80 bg-background/80 sticky top-0 z-40 w-full border-b backdrop-blur-md">
      <header className="mx-auto flex h-14 max-w-[767px] items-center justify-between gap-4 px-5 sm:px-6">
        <div className="flex items-center gap-3">
          <NextLink className="text-foreground flex items-center gap-2.5" href="/">
            <Logo size={26} />
            <span className="text-[15px] font-medium tracking-tight">Soju</span>
          </NextLink>
          <ul className="ml-1 hidden gap-5 md:flex">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  className={clsx(
                    "text-muted hover:text-foreground text-[14px] transition-colors",
                    "data-[active=true]:text-foreground data-[active=true]:font-medium",
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <ThemeSwitch />
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="text-muted hover:text-foreground p-2 md:hidden"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-separator/80 border-t md:hidden">
          <ul className="mx-auto flex max-w-[767px] flex-col gap-0.5 px-5 py-3 sm:px-6">
            {siteConfig.navMenuItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  className="text-foreground block py-2.5 text-[15px] no-underline"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
