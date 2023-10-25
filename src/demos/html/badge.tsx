import * as Badge from "@/ui/html/badge";

export function BadgeDemo() {
  return (
    <div className="grid gap-6">
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Subtle</h2>
        </header>
        <div className="flex flex-wrap gap-4 py-2">
          <Badge.Subtle>default</Badge.Subtle>
          <Badge.Subtle variant="outline">outline</Badge.Subtle>
        </div>
      </div>
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Solid</h2>
        </header>
        <div className="flex flex-wrap gap-4 py-2">
          <Badge.Solid>default</Badge.Solid>
          <Badge.Solid variant="outline">outline</Badge.Solid>
        </div>
      </div>
    </div>
  );
}
