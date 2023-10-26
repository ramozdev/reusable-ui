import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const CONTENT_SIDE_OFFSET: DropdownMenuPrimitive.DropdownMenuContentProps["sideOffset"] = 5;

const SUB_CONTENT_SIDE_OFFSET: DropdownMenuPrimitive.DropdownMenuSubContentProps["sideOffset"] = 2;
const SUB_CONTENT_ALIGN_OFFSET: DropdownMenuPrimitive.DropdownMenuSubContentProps["alignOffset"] =
  -9;

const DropdownMenuRoot = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> &
    VariantProps<typeof variants.subTrigger>
>(({ className, color, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    {...props}
    ref={ref}
    className={twMerge(variants.subTrigger({ color }), className)}
  />
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> &
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
    <DropdownMenuPrimitive.SubContent
      {...props}
      ref={ref}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={twMerge(variants.content({ color }), className)}
    />
  ),
);
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, color, sideOffset = CONTENT_SIDE_OFFSET, ...props }, ref) => (
  <DropdownMenuPrimitive.Content
    {...props}
    ref={ref}
    sideOffset={sideOffset}
    className={twMerge(variants.content({ color }), className)}
  />
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color }), className)}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color, className }), "pl-6")}
  />
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color, className }), "pl-6")}
  />
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> &
    VariantProps<typeof variants.label>
>(({ className, color, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    {...props}
    ref={ref}
    className={twMerge(variants.label({ color }), className)}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> &
    VariantProps<typeof variants.separator>
>(({ className, color, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    {...props}
    ref={ref}
    className={twMerge(variants.separator({ color }), className)}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuItemIndicator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.ItemIndicator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.ItemIndicator
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
DropdownMenuItemIndicator.displayName =
  DropdownMenuPrimitive.ItemIndicator.displayName;

const DropdownMenuArrow = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Arrow> &
    VariantProps<typeof variants.arrow>
>(({ className, color, ...props }, ref) => (
  <DropdownMenuPrimitive.Arrow
    {...props}
    ref={ref}
    className={twMerge(variants.arrow({ color }), className)}
  />
));
DropdownMenuArrow.displayName = DropdownMenuPrimitive.Arrow.displayName;

const DropdownMenuRightSlot = React.forwardRef<
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
DropdownMenuRightSlot.displayName = "DropdownMenuRightSlot";

const Root = DropdownMenuRoot;
const Trigger = DropdownMenuTrigger;
const Content = DropdownMenuContent;
const Item = DropdownMenuItem;
const CheckboxItem = DropdownMenuCheckboxItem;
const RadioItem = DropdownMenuRadioItem;
const Label = DropdownMenuLabel;
const Separator = DropdownMenuSeparator;
const Group = DropdownMenuGroup;
const Portal = DropdownMenuPortal;
const Sub = DropdownMenuSub;
const SubContent = DropdownMenuSubContent;
const SubTrigger = DropdownMenuSubTrigger;
const RadioGroup = DropdownMenuRadioGroup;
const ItemIndicator = DropdownMenuItemIndicator;
const Arrow = DropdownMenuArrow;
const RightSlot = DropdownMenuRightSlot;

const DropdownMenu = {
  Root,
  Trigger,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  Group,
  Portal,
  Sub,
  SubContent,
  SubTrigger,
  RadioGroup,
  ItemIndicator,
  Arrow,
  RightSlot,
};

export default DropdownMenu;
