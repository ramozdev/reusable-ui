"use client";

import { colors } from "@/lib/colors";
import Label from "@/ui/html/label";
import Text from "@/ui/html/text";
import Slider from "@/ui/radix/slider";
import { Fragment } from "react";

export default function SliderDemo() {
  return (
    <div>
      <Text.H3>Slide</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-3">
        {colors.map((color) => (
          <Fragment key={`slider-${color}`}>
            <Label className="capitalize">{color}</Label>
            <form>
              <Slider.Root
                className="w-[200px]"
                defaultValue={[50]}
                max={100}
                step={1}
                aria-label="Volume"
              >
                <Slider.Track>
                  <Slider.Range color={color} />
                </Slider.Track>

                <Slider.Thumb />
              </Slider.Root>
            </form>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
