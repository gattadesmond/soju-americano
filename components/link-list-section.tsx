"use client";

import { Link } from "@heroui/react";

export type LinkItem = {
  link: string;
  name: string;
  isFeature: boolean;
};

function LinkListItem({ item }: { item: LinkItem }) {
  return (
    <li>
      <Link
        className="block max-w-full"
        href={item.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {item.isFeature ? (
            <span aria-hidden className="shrink-0 text-warning">
              ★
            </span>
          ) : (
            <span aria-hidden className="text-muted shrink-0">
              ›
            </span>
          )}
          {item.name}
        </span>
      </Link>
    </li>
  );
}

export function LinkListSection({
  title,
  items,
}: {
  title: string;
  items: LinkItem[];
}) {
  return (
    <div>
      <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <ul className="mt-4 grid list-none grid-cols-1 gap-y-1.5 text-[14px] leading-snug">
        {items.map((item) => (
          <LinkListItem key={item.link} item={item} />
        ))}
      </ul>
    </div>
  );
}
