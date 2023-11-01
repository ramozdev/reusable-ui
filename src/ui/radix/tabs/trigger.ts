import { cva } from "class-variance-authority";

const trigger = cva(
  `px-5
  h-[45px]
  flex-1
  flex
  items-center
  justify-center
  text-[15px]
  leading-none
  select-none
  first:rounded-tl-md
  last:rounded-tr-md
  data-[state=active]:focus:relative
  data-[state=active]:focus:ring-1
  outline-none
  cursor-default
  data-[disabled]:pointer-events-none
  data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0]`,
  {
    defaultVariants: {
      color: "white-black",
    },
    variants: {
      color: {
        "white-black": `bg-white
          text-neutral-950
          hover:bg-neutral-100
          data-[state=active]:focus:ring-neutral-950`,
      },
    },
  },
);

export { trigger };
