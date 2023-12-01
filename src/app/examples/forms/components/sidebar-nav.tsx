"use client";
import Link from "next/link";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ items, ...props }: SidebarNavProps) {
  return (
    <nav
      className="flex space-x-6 lg:flex-col lg:space-x-0 lg:space-y-4"
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className=" w-full rounded px-4 py-2 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
