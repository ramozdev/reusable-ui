import InputDemo from "@/components/homepage/input";
import TextareaDemo from "@/components/homepage/textarea";
import CheckboxDemo from "@/components/homepage/checkbox";
import BadgeDemo from "@/components/homepage/badge";
import Buttons from "@/components/hero/buttons";
import SelectDemo from "@/components/homepage/select";
import ContextMenuDemo from "@/components/homepage/context-menu";
import DropdownMenuDemo from "@/components/homepage/dropdown-menu";
import DialogDemo from "@/components/homepage/dialog";

export default function Page() {
  return (
    <div className="mx-auto my-12 max-w-screen-xl space-y-8">
      <ContextMenuDemo />
      <DropdownMenuDemo />
      <DialogDemo />
      <InputDemo />
      <TextareaDemo />
      <CheckboxDemo />
      <BadgeDemo />
      <Buttons />
      <SelectDemo />
    </div>
  );
}
