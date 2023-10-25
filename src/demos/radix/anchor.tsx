import * as Anchor from "@/ui/html/anchor";

export function AnchorDemo() {
  return (
    <div>
      <Anchor.Solid href="#">Link</Anchor.Solid>
      <Anchor.Solid href="#" variant="outline">
        Link
      </Anchor.Solid>
    </div>
  );
}
