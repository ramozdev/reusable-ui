import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { twMerge } from "tailwind-merge";

const CollapsibleRoot = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(`w-[300px]`, className)}
  />
));
CollapsibleRoot.displayName = CollapsiblePrimitive.Root.displayName;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

const Root = CollapsibleRoot;
const Trigger = CollapsibleTrigger;
const Content = CollapsibleContent;

const Collapsible = { Root, Trigger, Content };

export default Collapsible;
