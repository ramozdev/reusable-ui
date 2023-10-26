"use client";

import Accordion from "@/ui/radix/accordion";

export function AccordionDemo() {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It&apos;s unstyled by default, giving you freedom over the look
          and feel.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
