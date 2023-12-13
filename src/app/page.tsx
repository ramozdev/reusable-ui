import InputDemo from "@/components/homepage/input";
import TextareaDemo from "@/components/homepage/textarea";
import CheckboxDemo from "@/components/homepage/checkbox";
import BadgeDemo from "@/components/homepage/badge";
import Buttons from "@/components/hero/buttons";
import SelectDemo from "@/components/homepage/select";
import ContextMenuDemo from "@/components/homepage/context-menu";
import DropdownMenuDemo from "@/components/homepage/dropdown-menu";
import DialogDemo from "@/components/homepage/dialog";
import TootlipDemo from "@/components/homepage/tooltip";
import SwitchDemo from "@/components/homepage/switch";
import SeparatorDemo from "@/components/homepage/separator";
import { ScrollAreaDemo } from "@/components/homepage/scroll-area";
import { AlertDialogDemo } from "@/components/homepage/alert-dialog";
import { AspectRatioDemo } from "@/components/homepage/aspect-ratio";

export default function Page() {
  return (
    <div className="mx-auto my-12 max-w-screen-xl space-y-8">
      <AlertDialogDemo />
      <AspectRatioDemo />
      <ContextMenuDemo />
      <DropdownMenuDemo />
      <DialogDemo />
      <TootlipDemo />
      <SwitchDemo />
      <ScrollAreaDemo />
      <SeparatorDemo />
      <InputDemo />
      <TextareaDemo />
      <CheckboxDemo />
      <BadgeDemo />
      <Buttons />
      <SelectDemo />
    </div>
  );
}
