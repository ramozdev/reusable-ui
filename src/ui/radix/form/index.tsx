import * as React from "react";
import * as FormPrimitive from "@radix-ui/react-form";
import { type VariantProps } from "class-variance-authority";

import { twMerge } from "tailwind-merge";
import * as variants from "./variants";

const FormValidityState = FormPrimitive.ValidityState;

const FormSubmit = FormPrimitive.Submit;

const Form = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Root>
>(({ className, ...props }, ref) => (
  <FormPrimitive.Root
    {...props}
    ref={ref}
    className={twMerge(`w-[260px]`, className)}
  />
));
Form.displayName = FormPrimitive.Root.displayName;

const FormField = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Field>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Field>
>(({ className, ...props }, ref) => (
  <FormPrimitive.Field
    {...props}
    ref={ref}
    className={twMerge(`mb-4`, className)}
  />
));
FormField.displayName = FormPrimitive.Field.displayName;

const FormLabel = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Label> &
    VariantProps<typeof variants.label>
>(({ className, required, color, ...props }, ref) => (
  <FormPrimitive.Label
    {...props}
    ref={ref}
    className={twMerge(variants.label({ color, required }), className)}
  />
));
FormLabel.displayName = FormPrimitive.Label.displayName;

const FormControl = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Control>
>(({ className, ...props }, ref) => (
  <FormPrimitive.Control
    {...props}
    ref={ref}
    className={twMerge(`w-[260px]`, className)}
  />
));
FormControl.displayName = FormPrimitive.Control.displayName;

const FormMessage = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Message>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Message>
>(({ className, ...props }, ref) => (
  <FormPrimitive.Message
    {...props}
    ref={ref}
    className={twMerge(`text-sm opacity-80`, className)}
  />
));
FormMessage.displayName = FormPrimitive.Message.displayName;

const Root = Form;
const Field = FormField;
const Label = FormLabel;
const Control = FormControl;
const Message = FormMessage;
const ValidityState = FormValidityState;
const Submit = FormSubmit;

export { Root, Field, Label, Control, Message, ValidityState, Submit };
