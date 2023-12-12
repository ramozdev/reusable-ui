import InputDemo from "@/components/homepage/input";
import TextareaDemo from "@/components/homepage/textarea";
import CheckboxDemo from "@/components/homepage/checkbox";
import BadgeDemo from "@/components/homepage/badge";
import Buttons from "@/components/hero/buttons";
import SelectDemo from "@/components/homepage/select";

export default function Page() {
  return (
    <div className="mx-auto my-12 max-w-screen-xl space-y-8">
      <InputDemo />
      <TextareaDemo />
      <CheckboxDemo />
      <BadgeDemo />
      <Buttons />
      <SelectDemo />
    </div>
  );
}
