import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <AccordionPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
AccordionRoot.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <AccordionPrimitive.Item
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color }), className)}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header
    {...props}
    ref={ref}
    className={twMerge(`flex`, className)}
  />
));
AccordionHeader.displayName = AccordionPrimitive.Header.displayName;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    VariantProps<typeof variants.trigger>
>(({ className, children, color, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    {...props}
    ref={ref}
    className={twMerge(variants.trigger({ color }), className)}
  >
    {children}
    <ChevronDownIcon
      className={`text-black
        transition-transform
        duration-300
        ease-[cubic-bezier(0.87,_0,_0.13,_1)]
        group-data-[state=open]:rotate-180
        dark:text-white`}
      aria-hidden
    />
  </AccordionPrimitive.Trigger>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, children, color, ...props }, ref) => (
  <AccordionPrimitive.Content
    {...props}
    ref={ref}
    className={twMerge(variants.content({ color }), className)}
  >
    <div className={`px-5 py-4`}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const Root = AccordionRoot;
const Header = AccordionHeader;
const Item = AccordionItem;
const Trigger = AccordionTrigger;
const Content = AccordionContent;

const Accordion = { Root, Header, Item, Trigger, Content };

export default Accordion;
