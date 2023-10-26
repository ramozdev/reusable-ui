import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <TabsPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
TabsRoot.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof variants.list>
>(({ className, color, ...props }, ref) => (
  <TabsPrimitive.List
    {...props}
    ref={ref}
    className={twMerge(variants.list({ color }), className)}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof variants.trigger>
>(({ className, color, ...props }, ref) => (
  <TabsPrimitive.Trigger
    {...props}
    ref={ref}
    className={twMerge(variants.trigger({ color }), className)}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, color, ...props }, ref) => (
  <TabsPrimitive.Content
    {...props}
    ref={ref}
    className={twMerge(variants.content({ color }), className)}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Root = TabsRoot;
const List = TabsList;
const Trigger = TabsTrigger;
const Content = TabsContent;

const Tabs = { Root, List, Trigger, Content };

export default Tabs;
