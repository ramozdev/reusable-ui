import Badge from "@/ui/html/badge";

export default function Badges() {
  return (
    <div className="flex justify-around gap-4">
      <Badge.Subtle>free</Badge.Subtle>
      <Badge.Subtle variant="ghost">admin</Badge.Subtle>
      <Badge.Solid>critical</Badge.Solid>
      <Badge.Solid variant="ghost">warning</Badge.Solid>
    </div>
  );
}
