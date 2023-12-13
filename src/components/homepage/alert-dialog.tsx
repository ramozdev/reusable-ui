"use client";

import AlertDialog from "@/ui/radix/alert-dialog";
import Button from "@/ui/html/button";
import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";
import { Fragment } from "react";

export function AlertDialogDemo() {
  return (
    <div>
      <Text.H3>Alert Dialog</Text.H3>

      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={`alert-dialog-${color}`}>
            <p className="font-semibold">{color}</p>
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <Button.Solid color={color}>Delete account</Button.Solid>
              </AlertDialog.Trigger>
              <AlertDialog.Content color={color}>
                <AlertDialog.Title color={color}>
                  Are you absolutely sure?
                </AlertDialog.Title>
                <AlertDialog.Description color={color}>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialog.Description>
                <div className="flex justify-end gap-[25px]">
                  <AlertDialog.Cancel asChild>
                    <Button.Subtle variant="outline" color={color}>
                      Cancel
                    </Button.Subtle>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <Button.Subtle variant="outline" color={color}>
                      Yes, delete account
                    </Button.Subtle>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
