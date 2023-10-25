"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogAction = AlertDialogPrimitive.Action;

const AlertDialogCancel = AlertDialogPrimitive.Cancel;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> &
    VariantProps<typeof variants.overlay>
>(({ className, color, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    {...props}
    ref={ref}
    className={twMerge(variants.overlay({ color }), className)}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, color, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      {...props}
      ref={ref}
      className={twMerge(variants.content({ color }), className)}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title> &
    VariantProps<typeof variants.title>
>(({ className, color, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    {...props}
    ref={ref}
    className={twMerge(variants.title({ color }), className)}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description> &
    VariantProps<typeof variants.description>
>(({ className, color, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    {...props}
    ref={ref}
    className={twMerge(variants.description({ color }), className)}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const Root = AlertDialog;
const Trigger = AlertDialogTrigger;
const Overlay = AlertDialogOverlay;
const Content = AlertDialogContent;
const Title = AlertDialogTitle;
const Description = AlertDialogDescription;
const Action = AlertDialogAction;
const Cancel = AlertDialogCancel;
const Portal = AlertDialogPortal;

export {
  Root,
  Trigger,
  Overlay,
  Content,
  Title,
  Description,
  Action,
  Cancel,
  Portal,
};
