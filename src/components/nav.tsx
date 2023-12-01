import React from "react";
import Link from "next/link";
import Input from "@/ui/html/input";
import Button from "@/ui/html/button";
import { Component1Icon } from "@radix-ui/react-icons";

const links = [
  { href: "/", text: <Component1Icon className="h-7 w-7" /> },
  { href: "/swap", text: "Swap" },
  { href: "/tokens", text: "Tokens" },
  { href: "/nfts", text: "NTFs" },
  { href: "/pools", text: "Pools" },
];

const Nav = () => (
  <div className="mx-10 my-5 flex max-w-screen-xl flex-row items-center justify-between">
    <div className="hidden flex-wrap items-center space-x-4 md:flex">
      {links.map((link, index) => (
        <Link key={index} href={link.href}>
          {link.text}
        </Link>
      ))}
    </div>

    <div className="w-2/5">
      <Input type="text" placeholder="Search" />
    </div>

    <div>
      <Button.Solid color="white-black">Connect wallet</Button.Solid>
    </div>
  </div>
);

export default Nav;
