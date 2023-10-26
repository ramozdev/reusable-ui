import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const SliderRoot = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(
      `relative flex h-5 w-[200px] touch-none select-none items-center`,
      className,
    )}
  />
));
SliderRoot.displayName = SliderPrimitive.Root.displayName;

const SliderTrack = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Track>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Track> &
    VariantProps<typeof variants.track>
>(({ className, color, ...props }, ref) => (
  <SliderPrimitive.Track
    {...props}
    ref={ref}
    className={twMerge(variants.track({ color }), className)}
  />
));
SliderTrack.displayName = SliderPrimitive.Track.displayName;

const SliderRange = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Range>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Range> &
    VariantProps<typeof variants.range>
>(({ className, color, ...props }, ref) => (
  <SliderPrimitive.Range
    {...props}
    ref={ref}
    className={twMerge(variants.range({ color }), className)}
  />
));
SliderRange.displayName = SliderPrimitive.Range.displayName;

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> &
    VariantProps<typeof variants.thumb>
>(({ className, color, ...props }, ref) => (
  <SliderPrimitive.Thumb
    {...props}
    ref={ref}
    className={twMerge(variants.thumb({ color }), className)}
  />
));
SliderThumb.displayName = SliderPrimitive.Thumb.displayName;

const Root = SliderRoot;
const Track = SliderTrack;
const Range = SliderRange;
const Thumb = SliderThumb;

const Slider = { Root, Track, Range, Thumb };

export default Slider;
