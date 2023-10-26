"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    VariantProps<typeof variants.overlay>
>(({ className, color, ...props }, ref) => (
  <DialogPrimitive.Overlay
    {...props}
    ref={ref}
    className={twMerge(variants.overlay({ color }), className)}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof variants.content>
>(({ className, color, ...props }, ref) => (
  <DialogPrimitive.Content
    {...props}
    ref={ref}
    className={twMerge(variants.content({ color }), className)}
  />
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> &
    VariantProps<typeof variants.title>
>(({ className, color, ...props }, ref) => (
  <DialogPrimitive.Title
    {...props}
    ref={ref}
    className={twMerge(variants.title({ color }), className)}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> &
    VariantProps<typeof variants.description>
>(({ className, color, ...props }, ref) => (
  <DialogPrimitive.Description
    {...props}
    ref={ref}
    className={twMerge(variants.description({ color }), className)}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Root = DialogRoot;
const Trigger = DialogTrigger;
const Content = DialogContent;
const Title = DialogTitle;
const Description = DialogDescription;
const Portal = DialogPortal;
const Overlay = DialogOverlay;
const Close = DialogClose;

const Dialog = {
  Root,
  Trigger,
  Content,
  Title,
  Description,
  Portal,
  Overlay,
  Close,
};

export default Dialog;
