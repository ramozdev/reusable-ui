import Badge from "@/ui/html/badge";
import Card from "@/ui/html/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchToken as fetchTokens } from "./query";
import Label from "@/ui/html/label";

export default async function Tokens() {
  const tokens = await fetchTokens();

  return (
    <div className="grid w-full grid-cols-1 gap-4 px-10 md:grid-cols-2 lg:grid-cols-3">
      {tokens.tokens.map((item) => (
        <Card key={item.token.name}>
          <Link href={item.token.name}>
            <div className="flex justify-end">
              <Badge.Solid className="absolute">
                {item.token.tokenId}
              </Badge.Solid>
            </div>
            <Image
              width={240}
              height={240}
              src={item.token.image}
              className="rounded"
              alt="Picture of the author"
            />

            <div className="flex justify-center">
              <Label>{item.token.name}</Label>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
}
