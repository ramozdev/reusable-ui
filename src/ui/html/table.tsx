import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ROUNDED } from "@/ui/globals";

const table = cva(
  twMerge(
    `w-full
     text-sm
     text-left
     overflow-hidden`,
    ROUNDED,
  ),
  {
    defaultVariants: {
      variant: `default`,
    },
    variants: {
      variant: {
        default: ``,
        outline: `bg-transparent`,
      },
    },
  },
);

const TableRoot = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement> & VariantProps<typeof table>
>(({ className, variant, ...props }, ref) => {
  return (
    <table
      {...props}
      ref={ref}
      className={twMerge(table({ variant }), className)}
    />
  );
});
TableRoot.displayName = "Table";

const caption = cva(
  `mt-4 
  text-sm`,
  {
    variants: {
      variant: {
        top: `bg-white p-5 text-left text-lg font-semibold`,
        bottom: `caption-bottom p-2`,
      },
    },
    defaultVariants: {
      variant: "bottom",
    },
  },
);

const TCaption = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof caption>
>(({ className, variant, ...props }, ref) => {
  return (
    <caption
      {...props}
      ref={ref}
      className={twMerge(caption({ variant }), className)}
    />
  );
});
TCaption.displayName = "Caption";

const Tbody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <tbody
      {...props}
      ref={ref}
      className={twMerge(`[&_tr:last-child]:border-0`, className)}
    />
  );
});
Tbody.displayName = "Tbody";

const Tfoot = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => {
  return (
    <tfoot
      {...props}
      ref={ref}
      className={twMerge(
        `border-t font-medium [&>tr]:last:border-b-0`,
        className,
      )}
    />
  );
});
Tfoot.displayName = "Tfoot";

const Tr = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => {
  return (
    <tr
      {...props}
      ref={ref}
      className={twMerge(
        `border-b border-neutral-200 bg-neutral-100 text-neutral-900 transition-colors hover:bg-neutral-200 data-[state=selected]:bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-50
       dark:hover:bg-neutral-900 dark:data-[state=selected]:bg-neutral-900`,
        className,
      )}
    />
  );
});
Tr.displayName = "Tr";

const Th = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  return (
    <th
      {...props}
      ref={ref}
      className={twMerge(
        `bg-neutral-200 px-6 py-3 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50`,
        className,
      )}
    />
  );
});
Th.displayName = "Th";

const Td = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => {
  return (
    <td
      {...props}
      ref={ref}
      className={twMerge(`px-6 py-4 [&:has([role=checkbox])]:pr-0`, className)}
    />
  );
});
Td.displayName = "Td";

const thead = cva(
  twMerge(
    `[&_tr]:border-b 
    text-xs`,
    ROUNDED,
  ),
  {
    defaultVariants: {
      color: `neutral`,
    },
    variants: {
      color: {
        neutral: `bg-neutral-50 [&_tr]:border-neutral-200 dark:[&_tr]:border-neutral-600`,
      },
    },
  },
);

const Thead = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & VariantProps<typeof thead>
>(({ className, color, ...props }, ref) => {
  return (
    <thead
      {...props}
      ref={ref}
      className={twMerge(thead({ color }), className)}
    />
  );
});
Thead.displayName = "Thead";

const Root = TableRoot;
const Caption = TCaption;
const Head = Thead;
const Body = Tbody;
const Foot = Tfoot;
const Row = Tr;
const Cell = Td;
const Header = Th;

const Table = {
  Root,
  Caption,
  Head,
  Body,
  Foot,
  Row,
  Cell,
  Header,
  table,
  caption,
};

export default Table;
