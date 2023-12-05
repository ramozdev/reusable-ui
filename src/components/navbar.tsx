import React from "react";
import Link from "next/link";
import {
  Component1Icon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Navbar = () => (
  <nav className="h-16 border-b border-neutral-800 bg-white text-sm dark:bg-black">
    <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between gap-2 px-4">
      <div className="hidden flex-wrap items-center space-x-4 md:flex">
        <Link href="/">
          <Component1Icon className="h-7 w-7" />
        </Link>
        <Link href="/examples/swap">Examples</Link>
        <Link
          href="https://github.com/ramozdev/reusable-ui/tree/main/src/ui"
          target="_blank"
        >
          Components
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="https://github.com/ramozdev/reusable-ui" target="_blank">
          <GitHubLogoIcon className="h-6 w-6" />
        </Link>

        <Link href="https://x.com/ramozdev" target="_blank">
          <TwitterLogoIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
