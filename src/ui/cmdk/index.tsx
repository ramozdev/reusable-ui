import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { type VariantProps } from "class-variance-authority";

import * as variants from "./variants";
import { twMerge } from "tailwind-merge";

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <CommandPrimitive
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
CommandRoot.displayName = CommandPrimitive.displayName;

const CommandDialog = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Dialog>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Dialog> &
    VariantProps<typeof variants.dialog>
>(({ className, color, ...props }, ref) => (
  <CommandPrimitive.Dialog
    {...props}
    ref={ref}
    className={twMerge(variants.dialog({ color }), className)}
  />
));
CommandDialog.displayName = CommandPrimitive.Dialog.displayName;

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> &
    VariantProps<typeof variants.input>
>(({ className, color, ...props }, ref) => (
  <CommandPrimitive.Input
    {...props}
    ref={ref}
    className={twMerge(variants.input({ color }), className)}
  />
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    {...props}
    ref={ref}
    className={twMerge("overflow-y-auto overflow-x-hidden", className)}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    {...props}
    ref={ref}
    className="py-6 text-center text-sm"
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> &
    VariantProps<typeof variants.group>
>(({ className, color, ...props }, ref) => (
  <CommandPrimitive.Group
    {...props}
    ref={ref}
    className={twMerge(variants.group({ color }), className)}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> &
    VariantProps<typeof variants.separator>
>(({ className, color, ...props }, ref) => (
  <CommandPrimitive.Separator
    {...props}
    ref={ref}
    className={twMerge(variants.separator({ color }), className)}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <CommandPrimitive.Item
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color }), className)}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof variants.shortcut>
>(({ className, color, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    data-role="command-shortcut"
    className={twMerge(variants.shortcut({ color }), className)}
  />
));
CommandShortcut.displayName = "CommandShortcut";

const Root = CommandRoot;
const Dialog = CommandDialog;
const Input = CommandInput;
const List = CommandList;
const Empty = CommandEmpty;
const Group = CommandGroup;
const Item = CommandItem;
const Shortcut = CommandShortcut;
const Separator = CommandSeparator;

const Cmdk = {
  Root,
  Dialog,
  Input,
  List,
  Empty,
  Group,
  Item,
  Shortcut,
  Separator,
};

export default Cmdk;
