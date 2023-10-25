import * as Slider from "@/ui/radix/slider";

export function SliderDemo() {
  return (
    <form>
      <Slider.Root
        className="w-[200px]"
        defaultValue={[50]}
        max={100}
        step={1}
        aria-label="Volume"
      >
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb />
      </Slider.Root>
    </form>
  );
}
