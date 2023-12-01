"use client";

import Separator from "@/ui/radix/separator";
import { ProfileForm } from "./profile-form";

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6">
      <div className="text-neutral-900 dark:text-neutral-50">
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-muted-foreground text-sm">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator.Root />
      <ProfileForm />
    </div>
  );
}
