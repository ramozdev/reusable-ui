import Badge from "@/ui/html/badge/index";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge.Subtle>default</Badge.Subtle>
      <Badge.Subtle variant="outline">outline</Badge.Subtle>
      <Badge.Solid>default</Badge.Solid>
      <Badge.Solid variant="outline">outline</Badge.Solid>
    </div>
  );
}
