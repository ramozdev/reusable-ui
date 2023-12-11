import Badge from "@/ui/html/badge/index";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge.Subtle>default</Badge.Subtle>
      <Badge.Subtle variant="ghost">outline</Badge.Subtle>
      <Badge.Solid>default</Badge.Solid>
      <Badge.Solid variant="ghost">outline</Badge.Solid>
    </div>
  );
}
