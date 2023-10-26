import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const FALLBACK_DELAY_MS: AvatarPrimitive.AvatarFallbackProps["delayMs"] = 600;

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof variants.root>
>(({ className, color, ...props }, ref) => (
  <AvatarPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(variants.root({ color }), className)}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    {...props}
    ref={ref}
    className={twMerge(
      `h-full
      w-full
      rounded-[inherit]
      object-cover
    `,
      className,
    )}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    VariantProps<typeof variants.fallback>
>(({ className, color, delayMs = FALLBACK_DELAY_MS, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    {...props}
    ref={ref}
    delayMs={delayMs}
    className={twMerge(variants.fallback({ color }), className)}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Root = AvatarRoot;
const Image = AvatarImage;
const Fallback = AvatarFallback;

const Avatar = { Root, Image, Fallback };

export default Avatar;
