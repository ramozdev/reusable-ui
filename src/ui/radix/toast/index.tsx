import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const ToastProvider = ToastPrimitives.Provider;

const ToastClose = ToastPrimitives.Close;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    {...props}
    ref={ref}
    className={twMerge(
      `fixed
    bottom-0
    right-0
    z-50
    m-0
    flex
    w-[450px]
    max-w-[100vw]
    list-none
    flex-col
    gap-3
    p-[var(--viewport-padding)]
    outline-none
    [--viewport-padding:25px]`,
      className,
    )}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <ToastPrimitives.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
ToastRoot.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    {...props}
    ref={ref}
    className={twMerge(`[grid-area:action]`, className)}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    {...props}
    ref={ref}
    className={twMerge(`mb-1 [grid-area:title]`, className)}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    {...props}
    ref={ref}
    className={twMerge(`m-0 [grid-area:description]`, className)}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof ToastRoot>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export type { ToastProps, ToastActionElement };

const Root = ToastRoot;
const Title = ToastTitle;
const Description = ToastDescription;
const Action = ToastAction;
const Close = ToastClose;
const Viewport = ToastViewport;
const Provider = ToastProvider;

const Toast = { Root, Title, Description, Action, Close, Viewport, Provider };

export default Toast;
