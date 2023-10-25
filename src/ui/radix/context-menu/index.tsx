import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const SUB_CONTENT_SIDE_OFFSET: ContextMenuPrimitive.ContextMenuSubContentProps["sideOffset"] = 2;
const SUB_CONTENT_ALIGN_OFFSET: ContextMenuPrimitive.ContextMenuSubContentProps["alignOffset"] =
  -9;

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuArrow = ContextMenuPrimitive.Arrow;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> &
    VariantProps<typeof variants.subTrigger>
>(({ className, color, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    {...props}
    ref={ref}
    className={twMerge(variants.subTrigger({ color }), className)}
  />
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> &
    VariantProps<typeof variants.content>
>(
  (
    {
      className,
      color,
      sideOffset = SUB_CONTENT_SIDE_OFFSET,
      alignOffset = SUB_CONTENT_ALIGN_OFFSET,
      ...props
    },
    ref,
  ) => (
    <ContextMenuPrimitive.SubContent
      {...props}
      ref={ref}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={twMerge(variants.content({ color }), className)}
    />
  ),
);
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, color, ...props }, ref) => (
  <ContextMenuPrimitive.Content
    {...props}
    ref={ref}
    className={twMerge(variants.content({ color }), className)}
  />
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color }), className)}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color, className }), "pl-6")}
  />
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color, className }), "pl-6")}
  />
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> &
    VariantProps<typeof variants.label>
>(({ className, color, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    {...props}
    ref={ref}
    className={twMerge(variants.label({ color }), className)}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> &
    VariantProps<typeof variants.separator>
>(({ className, color, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    {...props}
    ref={ref}
    className={twMerge(variants.separator({ color }), className)}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuItemIndicator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.ItemIndicator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.ItemIndicator
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
ContextMenuItemIndicator.displayName =
  ContextMenuPrimitive.ItemIndicator.displayName;

const ContextMenuRightSlot = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof variants.rightSlot>
>(({ className, color, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    data-role="right-slot"
    className={twMerge(variants.rightSlot({ color }), className)}
  />
));
ContextMenuRightSlot.displayName = "ContextMenuRightSlot";

const Root = ContextMenu;
const Trigger = ContextMenuTrigger;
const Content = ContextMenuContent;
const Arrow = ContextMenuArrow;
const Item = ContextMenuItem;
const CheckboxItem = ContextMenuCheckboxItem;
const RadioItem = ContextMenuRadioItem;
const Label = ContextMenuLabel;
const Separator = ContextMenuSeparator;
const RightSlot = ContextMenuRightSlot;
const Group = ContextMenuGroup;
const Portal = ContextMenuPortal;
const Sub = ContextMenuSub;
const SubContent = ContextMenuSubContent;
const SubTrigger = ContextMenuSubTrigger;
const RadioGroup = ContextMenuRadioGroup;
const ItemIndicator = ContextMenuItemIndicator;

export {
  Root,
  Trigger,
  Content,
  Item,
  Arrow,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  RightSlot,
  Group,
  Portal,
  Sub,
  SubContent,
  SubTrigger,
  RadioGroup,
  ItemIndicator,
};
