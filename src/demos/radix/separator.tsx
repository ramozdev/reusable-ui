import * as Separator from "@/ui/radix/separator";

export function SeparatorDemo() {
  return (
    <div className="mx-[15px] w-full max-w-[300px]">
      <div className="text-[15px] font-medium leading-5 text-black">
        Radix Primitives
      </div>
      <div className="text-[15px] leading-5 text-black">
        An open-source UI component library.
      </div>
      <Separator.Root />
      <div className="flex h-5 items-center">
        <div className="text-[15px] leading-5 text-black">Blog</div>
        <Separator.Root decorative orientation="vertical" />
        <div className="text-[15px] leading-5 text-black">Docs</div>
        <Separator.Root decorative orientation="vertical" />
        <div className="text-[15px] leading-5 text-black">Source</div>
      </div>
    </div>
  );
}
