import * as Dialog from "@/ui/radix/dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Button from "@/ui/html/button";
import { Input } from "@/ui/html/input";

export function DialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button.Solid color="neutral">Edit profile</Button.Solid>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label htmlFor="name">Name</label>
            <Input id="name" defaultValue="Momentum Labz" />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label htmlFor="username">Username</label>
            <Input id="username" defaultValue="@MomentumLabz" />
          </fieldset>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Button.Subtle color="neutral">Save changes</Button.Subtle>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <Button.Subtle
              size="icon"
              color="neutral"
              className="absolute right-[10px] top-[10px] rounded-full"
              aria-label="Close"
            >
              <Cross2Icon />
            </Button.Subtle>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
