import Button from "@/ui/html/button";
import { Link2Icon, TrashIcon } from "@radix-ui/react-icons";

export default function Buttons() {
  return (
    <div className="flex justify-between gap-2">
      <Button.Subtle>Save Changes</Button.Subtle>
      <Button.Subtle variant="outline">
        <TrashIcon />
        Delete
      </Button.Subtle>
      <Button.Solid>
        <Link2Icon /> Copy Link
      </Button.Solid>
    </div>
  );
}
