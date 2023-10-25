import * as Tabs from "@/ui/radix/tabs";
import { Input } from "@/ui/html/input";
import * as Button from "@/ui/html/button";

export function TabsDemo() {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List aria-label="Manage your account">
        <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
        <p className="mb-5 text-[15px] leading-normal">
          Make changes to your account here. Click save when you&apos;re done.
        </p>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none"
            htmlFor="name"
          >
            Name
          </label>
          <Input id="name" defaultValue="Momentum Labz" />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none"
            htmlFor="username"
          >
            Username
          </label>
          <Input id="username" defaultValue="@MomentumLabz" />
        </fieldset>
        <div className="mt-5 flex justify-end">
          <Button.Subtle color="neutral" variant="outline">
            Save changes
          </Button.Subtle>
        </div>
      </Tabs.Content>
      <Tabs.Content value="tab2">
        <p className="mb-5 text-[15px] leading-normal">
          Change your password here. After saving, you&apos;ll be logged out.
        </p>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none"
            htmlFor="currentPassword"
          >
            Current password
          </label>
          <Input id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none"
            htmlFor="newPassword"
          >
            New password
          </label>
          <Input id="newPassword" type="password" />
        </fieldset>
        <fieldset className="mb-[15px] flex w-full flex-col justify-start">
          <label
            className="mb-2.5 block text-[13px] leading-none"
            htmlFor="confirmPassword"
          >
            Confirm password
          </label>
          <Input id="confirmPassword" type="password" />
        </fieldset>
        <div className="mt-5 flex justify-end">
          <Button.Subtle color="neutral" variant="outline">
            Change password
          </Button.Subtle>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
