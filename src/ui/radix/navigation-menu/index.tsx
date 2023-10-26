"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";
import { CaretDownIcon } from "@radix-ui/react-icons";

import NextLink from "next/link";
import { ROUNDED } from "@/ui/globals";

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuSub = NavigationMenuPrimitive.Sub;

const NavigationMenuRoot = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(
      `relative
    z-10
    flex
    w-screen
    justify-center`,
      className,
    )}
  />
));
NavigationMenuRoot.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> &
    VariantProps<typeof variants.list>
>(({ className, color, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    {...props}
    ref={ref}
    className={twMerge(variants.list({ color }), className)}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> &
    VariantProps<typeof variants.trigger>
>(({ className, color, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    {...props}
    ref={ref}
    className={twMerge(variants.trigger({ color }), className)}
  />
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuCaretDown = React.forwardRef<
  React.ElementRef<typeof CaretDownIcon>,
  React.ComponentPropsWithoutRef<typeof CaretDownIcon> &
    VariantProps<typeof variants.caret>
>(({ className, color, ...props }, ref) => (
  <CaretDownIcon
    {...props}
    ref={ref}
    className={twMerge(variants.caret({ color }), className)}
  />
));
NavigationMenuCaretDown.displayName = "NavigationMenuCaretDown";

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, color, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    {...props}
    ref={ref}
    className={twMerge(variants.content({ color }), className)}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    {...props}
    ref={ref}
    className={twMerge(
      `block
    select-none
    px-3
    py-2
    font-medium
    leading-none
    no-underline
    outline-none`,
      ROUNDED,
      className,
    )}
  />
));
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> &
    VariantProps<typeof variants.viewport>
>(({ className, color, ...props }, ref) => (
  <NavigationMenuPrimitive.Viewport
    {...props}
    ref={ref}
    className={twMerge(variants.viewport({ color }), className)}
  />
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    {...props}
    ref={ref}
    className={twMerge(
      `data-[state=hidden]:animate-fade-out
    data-[state=visible]:animate-fade-in
    top-full
    z-10
    flex
    h-3
    items-end 
    justify-center
    overflow-hidden
    [transition:width,_transform_250ms_ease]`,
      className,
    )}
  />
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

const StyledArrow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants.arrow>
>(({ className, color, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={twMerge(variants.arrow({ color }), className)}
  />
));
StyledArrow.displayName = "StyledArrow";

const NavigationMenuListItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof variants.listItem>
>(({ className, children, title, variant, color, ...props }, ref) => (
  <NavigationMenuPrimitive.Link asChild>
    <a
      {...props}
      ref={ref}
      className={twMerge(variants.listItem({ color, variant }), className)}
    >
      <div className="mb-[5px] font-medium leading-[1.2]">{title}</div>
      <p className="leading-[1.4]">{children}</p>
    </a>
  </NavigationMenuPrimitive.Link>
));
NavigationMenuListItem.displayName = "NavigationMenuListItem";

const NavigationMenuListItemNextjs = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  React.ComponentPropsWithoutRef<typeof NextLink> &
    VariantProps<typeof variants.listItem>
>(({ className, children, title, variant, color, ...props }, ref) => (
  <NavigationMenuPrimitive.Link asChild>
    <NextLink
      {...props}
      ref={ref}
      className={twMerge(variants.listItem({ color, variant }), className)}
    >
      <div className="mb-[5px] font-medium leading-[1.2]">{title}</div>
      <p className="leading-[1.4]">{children}</p>
    </NextLink>
  </NavigationMenuPrimitive.Link>
));
NavigationMenuListItemNextjs.displayName = "NavigationMenuListItemNextjs";

const Root = NavigationMenuRoot;
const List = NavigationMenuList;
const Sub = NavigationMenuSub;
const Item = NavigationMenuItem;
const Trigger = NavigationMenuTrigger;
const Content = NavigationMenuContent;
const Link = NavigationMenuLink;
const Viewport = NavigationMenuViewport;
const Indicator = NavigationMenuIndicator;
const Arrow = StyledArrow;
const CaretDown = NavigationMenuCaretDown;
const ListItem = NavigationMenuListItem;
const ListItemNextjs = NavigationMenuListItemNextjs;

const NavigationMenu = {
  Root,
  List,
  Sub,
  Item,
  Trigger,
  Content,
  Link,
  Viewport,
  Indicator,
  Arrow,
  CaretDown,
  ListItem,
  ListItemNextjs,
};

export default NavigationMenu;
