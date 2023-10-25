import * as AlertDialog from "@/ui/radix/alert-dialog";
import * as Button from "@/ui/html/button";

export function AlertDialogDemo() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button.Solid color="neutral">Delete account</Button.Solid>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialog.Description>
        <div className="flex justify-end gap-[25px]">
          <AlertDialog.Cancel asChild>
            <Button.Subtle variant="outline" color="neutral">
              Cancel
            </Button.Subtle>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button.Subtle variant="outline" color="neutral">
              Yes, delete account
            </Button.Subtle>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
