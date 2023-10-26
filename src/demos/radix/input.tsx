import Fieldset from "@/ui/html/fieldset";
import Input from "@/ui/html/input";

export function InputDemo() {
  return (
    <Fieldset>
      <Input type="text" />
      <Input type="text" placeholder="Placeholder" />
      <Input type="text" placeholder="Placeholder" disabled />
    </Fieldset>
  );
}
