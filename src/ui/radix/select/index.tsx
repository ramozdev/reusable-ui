import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";
import { CheckIcon } from "@radix-ui/react-icons";

const CONTENT_SIDE_OFFSET: SelectPrimitive.SelectContentProps["sideOffset"] = 5;

const SelectRoot = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectPortal = SelectPrimitive.Portal;

const SelectItemText = SelectPrimitive.ItemText;

const SelectArrow = SelectPrimitive.Arrow;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> &
    VariantProps<typeof variants.trigger>
>(({ className, color, ...props }, ref) => (
  <SelectPrimitive.Trigger
    {...props}
    ref={ref}
    className={twMerge(variants.trigger({ color }), className)}
  />
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, color, sideOffset = CONTENT_SIDE_OFFSET, ...props }, ref) => (
  <SelectPrimitive.Content
    {...props}
    ref={ref}
    sideOffset={sideOffset}
    className={twMerge(variants.content({ color }), className)}
  />
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectViewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Viewport
    {...props}
    ref={ref}
    className={twMerge("p-1", className)}
  />
));
SelectViewport.displayName = SelectPrimitive.Viewport.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> &
    VariantProps<typeof variants.label>
>(({ className, color, ...props }, ref) => (
  <SelectPrimitive.Label
    {...props}
    ref={ref}
    className={twMerge(variants.label({ color }), className)}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
    VariantProps<typeof variants.item>
>(({ className, children, color, ...props }, ref) => (
  <SelectPrimitive.Item
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color }), className)}
  >
    <SelectItemText>{children}</SelectItemText>
    <SelectItemIndicator>
      <CheckIcon />
    </SelectItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> &
    VariantProps<typeof variants.separator>
>(({ className, color, ...props }, ref) => (
  <SelectPrimitive.Separator
    {...props}
    ref={ref}
    className={twMerge(variants.separator({ color }), className)}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectItemIndicator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ItemIndicator
    {...props}
    ref={ref}
    className={twMerge(
      `absolute
    left-0
    inline-flex
    w-6
    items-center
    justify-center`,
      className,
    )}
  />
));
SelectItemIndicator.displayName = SelectPrimitive.ItemIndicator.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> &
    VariantProps<typeof variants.scrollButton>
>(({ className, color, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    {...props}
    ref={ref}
    className={twMerge(variants.scrollButton({ color }), className)}
  />
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> &
    VariantProps<typeof variants.scrollButton>
>(({ className, color, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    {...props}
    ref={ref}
    className={twMerge(variants.scrollButton({ color }), className)}
  />
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectIcon = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Icon>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Icon
    {...props}
    ref={ref}
    className={twMerge(`ml-2`, className)}
  />
));
SelectIcon.displayName = SelectPrimitive.Icon.displayName;

const Root = SelectRoot;
const Group = SelectGroup;
const Value = SelectValue;
const Trigger = SelectTrigger;
const Content = SelectContent;
const Viewport = SelectViewport;
const Label = SelectLabel;
const Item = SelectItem;
const ItemText = SelectItemText;
const Separator = SelectSeparator;
const Portal = SelectPortal;
const ItemIndicator = SelectItemIndicator;
const ScrollUpButton = SelectScrollUpButton;
const ScrollDownButton = SelectScrollDownButton;
const Icon = SelectIcon;
const Arrow = SelectArrow;

const Select = {
  Root,
  Group,
  Value,
  Trigger,
  Content,
  Viewport,
  Label,
  Item,
  ItemText,
  Separator,
  Portal,
  ItemIndicator,
  ScrollUpButton,
  ScrollDownButton,
  Icon,
  Arrow,
};

export default Select;
