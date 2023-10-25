import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { twMerge } from "tailwind-merge";

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(`w-[300px]`, className)}
  />
));
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

const Root = Collapsible;
const Trigger = CollapsibleTrigger;
const Content = CollapsibleContent;

export { Root, Trigger, Content };
