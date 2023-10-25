import * as HoverCard from "@/ui/radix/hover-card";
import Image from "next/image";

export function HoverCardDemo() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          className="inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
          href="https://twitter.com/MomentumLabz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className="block h-[45px] w-[45px] rounded-full"
            src="https://github.com/MomentumLabz.png"
            alt="Radix UI"
            width={400}
            height={400}
          />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>
          <div className="flex flex-col gap-[7px]">
            <Image
              className="block h-[60px] w-[60px] rounded-full"
              src="https://github.com/MomentumLabz.png"
              alt="Radix UI"
              width={400}
              height={400}
            />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="m-0 text-[15px] font-medium leading-[1.5]">
                  Momentum Labz
                </div>
                <div className="m-0 text-[15px] leading-[1.5]">
                  @MomentumLabz
                </div>
              </div>
              <div className="m-0 text-[15px] leading-[1.5]">
                Components, icons, colors, and templates for building
                high-quality, accessible UI.
              </div>
              <div className="flex gap-[15px]">
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5]">
                    100
                  </div>{" "}
                  <div className="m-0 text-[15px] leading-[1.5]">Following</div>
                </div>
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5]">
                    2,900
                  </div>{" "}
                  <div className="m-0 text-[15px] leading-[1.5]">Followers</div>
                </div>
              </div>
            </div>
          </div>

          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
