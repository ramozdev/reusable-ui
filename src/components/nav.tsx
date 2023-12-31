import React from "react";
import Link from "next/link";

const links = [
  { href: "/swap", name: "Swap" },
  { href: "/tokens", name: "Tokens" },
  { href: "/nfts/collection", name: "NTF Collection" },
  { href: "/nfts/token", name: "NTF" },
  { href: "/forms", name: "Forms" },
  { href: "/cards", name: "Cards" },
  { href: "/typography", name: "Typography" },
  { href: "/buttons", name: "Buttons" },
  { href: "/playground", name: "Playground" },
];

const Nav = () => (
  <nav className="h-16 border-b border-neutral-200 bg-white text-sm dark:border-neutral-800 dark:bg-black">
    <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between gap-2 px-4">
      <div className="hidden flex-wrap items-center space-x-4 md:flex">
        {links.map(({ name, href }, index) => (
          <Link key={index} href={`/examples${href}`}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Nav;
