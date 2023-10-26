import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const CONTENT_SIDE_OFFSET: MenubarPrimitive.MenubarContentProps["sideOffset"] = 5;
const CONTENT_ALIGN: MenubarPrimitive.MenubarContentProps["align"] = "start";
const CONTENT_ALIGN_OFFSET: MenubarPrimitive.MenubarContentProps["alignOffset"] =
  -3;

const SUB_CONTENT_SIDE_OFFSET: MenubarPrimitive.MenubarSubContentProps["sideOffset"] = 2;
const SUB_CONTENT_ALIGN_OFFSET: MenubarPrimitive.MenubarSubContentProps["alignOffset"] =
  -9;

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarArrow = MenubarPrimitive.Arrow;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const MenubarRoot = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
MenubarRoot.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> &
    VariantProps<typeof variants.trigger>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    {...props}
    ref={ref}
    className={twMerge(variants.trigger({ color }), className)}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> &
    VariantProps<typeof variants.subTrigger>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    {...props}
    ref={ref}
    className={twMerge(variants.subTrigger({ color }), className)}
  />
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> &
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
    <MenubarPrimitive.SubContent
      {...props}
      ref={ref}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={twMerge(variants.content({ color }), className)}
    />
  ),
);
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> &
    VariantProps<typeof variants.content>
>(
  (
    {
      className,
      color,
      sideOffset = CONTENT_SIDE_OFFSET,
      alignOffset = CONTENT_ALIGN_OFFSET,
      align = CONTENT_ALIGN,
      ...props
    },
    ref,
  ) => (
    <MenubarPrimitive.Content
      {...props}
      ref={ref}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      align={align}
      className={twMerge(variants.content({ color }), className)}
    />
  ),
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.Item
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color }), className)}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color, className }), "pl-6")}
  />
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color, className }), "pl-6")}
  />
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> &
    VariantProps<typeof variants.label>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.Label
    {...props}
    ref={ref}
    className={twMerge(variants.label({ color }), className)}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> &
    VariantProps<typeof variants.separator>
>(({ className, color, ...props }, ref) => (
  <MenubarPrimitive.Separator
    {...props}
    ref={ref}
    className={twMerge(variants.separator({ color }), className)}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarItemIndicator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.ItemIndicator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.ItemIndicator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.ItemIndicator
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
MenubarItemIndicator.displayName = MenubarPrimitive.ItemIndicator.displayName;

const MenubarRightSlot = React.forwardRef<
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
MenubarRightSlot.displayName = "MenubarRightSlot";

const Root = MenubarRoot;
const Menu = MenubarMenu;
const Trigger = MenubarTrigger;
const Content = MenubarContent;
const Item = MenubarItem;
const Arrow = MenubarArrow;
const CheckboxItem = MenubarCheckboxItem;
const ItemIndicator = MenubarItemIndicator;
const RadioGroup = MenubarRadioGroup;
const RadioItem = MenubarRadioItem;
const Separator = MenubarSeparator;
const Label = MenubarLabel;
const Portal = MenubarPortal;
const SubContent = MenubarSubContent;
const SubTrigger = MenubarSubTrigger;
const Group = MenubarGroup;
const Sub = MenubarSub;
const RightSlot = MenubarRightSlot;

const Menubar = {
  Root,
  Menu,
  Trigger,
  Content,
  Item,
  Arrow,
  CheckboxItem,
  ItemIndicator,
  RadioGroup,
  RadioItem,
  Separator,
  Label,
  Portal,
  SubContent,
  SubTrigger,
  Group,
  Sub,
  RightSlot,
};

export default Menubar;
