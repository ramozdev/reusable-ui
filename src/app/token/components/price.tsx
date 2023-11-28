import Button from "@/ui/html/button";
import Card from "@/ui/html/card";
import React from "react";
import { HoverCardDemo } from "./hoverCard";
import { TableDemo } from "./table";

export default function Price() {
  return (
    <div className="space-y-5">
      <div className="my-5 space-y-5 dark:text-neutral-50">
        <HoverCardDemo prop={{ name: "Columpio Labs" }} />
        <div className="text-2xl font-semibold">Columpio Labs</div>

        <div className="flex space-x-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <HoverCardDemo key={i} prop={{ name: "2.2K owners" }} />
          ))}
        </div>
      </div>
      <Card className="space-y-5">
        <div>Current Price</div>
        <div>0.002 ETH</div>
        <div>
          Listed by <HoverCardDemo prop={{ name: "columpiolabs" }} />
        </div>

        <div className="grid w-full grid-cols-2 gap-4">
          <Button.Solid color="blue">Buy 1 now</Button.Solid>
          <Button.Solid>Make offer</Button.Solid>
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni at,
          voluptatum consequuntur consequatur asperiores tenetur sed expedita
          praesentium quis amet error eius suscipit explicabo totam veniam cum
          sapiente inventore quos.
        </div>
      </Card>
      <TableDemo />
    </div>
  );
}
