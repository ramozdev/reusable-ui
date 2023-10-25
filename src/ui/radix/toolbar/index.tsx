"use client";

import * as React from "react";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const Toolbar = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <ToolbarPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
Toolbar.displayName = ToolbarPrimitive.Root.displayName;

const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button> &
    VariantProps<typeof variants.button>
>(({ className, color, ...props }, ref) => (
  <ToolbarPrimitive.Button
    {...props}
    ref={ref}
    className={twMerge(variants.button({ color }), className)}
  />
));
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> &
    VariantProps<typeof variants.link>
>(({ className, color, ...props }, ref) => (
  <ToolbarPrimitive.Link
    {...props}
    ref={ref}
    className={twMerge(variants.link({ color }), className)}
  />
));
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName;

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator> &
    VariantProps<typeof variants.separator>
>(({ className, color, ...props }, ref) => (
  <ToolbarPrimitive.Separator
    {...props}
    ref={ref}
    className={twMerge(variants.separator({ color }), className)}
  />
));
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName;

const ToolbarToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleGroup>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup>
>(({ className, ...props }, ref) => (
  <ToolbarPrimitive.ToggleGroup
    {...props}
    ref={ref}
    className={twMerge(`flex items-center gap-2`, className)}
  />
));
ToolbarToggleGroup.displayName = ToolbarPrimitive.ToggleGroup.displayName;

const ToolbarToggleItem = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> &
    VariantProps<typeof variants.item>
>(({ className, color, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem
    {...props}
    ref={ref}
    className={twMerge(variants.item({ color }), className)}
  />
));
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName;

const Root = Toolbar;
const Button = ToolbarButton;
const Link = ToolbarLink;
const Separator = ToolbarSeparator;
const ToggleGroup = ToolbarToggleGroup;
const ToggleItem = ToolbarToggleItem;

export { Root, Button, Link, Separator, ToggleGroup, ToggleItem };
