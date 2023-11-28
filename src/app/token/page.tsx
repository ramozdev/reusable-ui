"use client";

import Card from "@/ui/html/card";
import Image from "next/image";
import Separator from "@/ui/radix/separator";
import Accordion from "@/ui/radix/accordion";
import Price from "./components/price";
import Footer from "./components/footer";
import { HoverCardDemo } from "./components/hoverCard";
import { TableDemo } from "./components/table";

export default function Page() {
  return (
    <div className="space-y-5">
      <div className="mx-3 grid grid-cols-5 gap-4">
        <div className="col-span-2 space-y-5">
          <div>
            <Card>
              <Image
                width={200}
                height={200}
                src="https://i.pinimg.com/originals/ef/3a/3c/ef3a3cc37140ecfd76fae7db1d8c3f56.jpg"
                alt="Token Image"
                className="w-full"
              />
            </Card>
          </div>
          <div>
            <Card>
              <div>
                <div>Description</div>

                <Separator.Root />

                <div>By A0AE5D</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Totam beatae et architecto, dolorem, deserunt illum provident,
                  dicta nulla ducimus illo voluptatem? Molestiae placeat minus
                  hic quis adipisci corrupti, ratione veniam.. Checkout{" "}
                  <HoverCardDemo prop={{ name: "columpiolabs" }} /> for more
                  details.
                </div>
              </div>
              <Separator.Root />
              <Accordion.Root type="single" className="w-full">
                <Accordion.Item value="item-1">
                  <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                  <Accordion.Content>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                  <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
                  <Accordion.Content>
                    Yes. It&apos;s unstyled by default, giving you freedom over
                    the look and feel.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                  <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
                  <Accordion.Content>
                    Yes! You can animate the Accordion with CSS or JavaScript.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </Card>
          </div>
        </div>
        <div className="col-span-3">
          <Price />
        </div>
      </div>
      <div className="mx-10">
        <TableDemo />
      </div>
      <Footer />
    </div>
  );
}
