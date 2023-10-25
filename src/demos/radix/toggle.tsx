import * as Toggle from "@/ui/radix/toggle";
import { FontItalicIcon } from "@radix-ui/react-icons";

export function ToggleDemo() {
  return (
    <Toggle.Root aria-label="Toggle italic">
      <FontItalicIcon />
    </Toggle.Root>
  );
}
