import * as Anchor from "@/ui/html/anchor";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export function AnchorDemo() {
  return (
    <div className="grid gap-6">
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Subtle</h2>
        </header>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Anchor.Subtle href="#">default</Anchor.Subtle>
            <Anchor.Subtle href="#" size="icon" className="rounded-full">
              <ExternalLinkIcon />
            </Anchor.Subtle>
            <Anchor.Subtle href="#">
              <ExternalLinkIcon />
              default
            </Anchor.Subtle>
            <Anchor.Subtle href="#">
              default
              <ExternalLinkIcon />
            </Anchor.Subtle>
          </div>

          <div className="flex items-center gap-4">
            <Anchor.Subtle href="#" variant="outline">
              outline
            </Anchor.Subtle>
            <Anchor.Subtle
              size="icon"
              className="rounded-full"
              variant="outline"
              href="#"
            >
              <ExternalLinkIcon />
            </Anchor.Subtle>
            <Anchor.Subtle href="#" variant="outline">
              <ExternalLinkIcon />
              outline
            </Anchor.Subtle>
            <Anchor.Subtle href="#" variant="outline">
              outline
              <ExternalLinkIcon />
            </Anchor.Subtle>
          </div>
        </div>
      </div>
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Underline</h2>
        </header>
        <div className="grid gap-6 pt-4">
          <div className="flex items-center gap-4">
            <Anchor.Underline href="#">default</Anchor.Underline>
            <Anchor.Underline href="#">
              <ExternalLinkIcon />
              default
            </Anchor.Underline>
            <Anchor.Underline href="#">
              default
              <ExternalLinkIcon />
            </Anchor.Underline>
          </div>

          <div className="flex items-center gap-4">
            <Anchor.Underline href="#">underline</Anchor.Underline>
            <Anchor.Underline href="#">
              <ExternalLinkIcon />
              underline
            </Anchor.Underline>
            <Anchor.Underline href="#">
              underline
              <ExternalLinkIcon />
            </Anchor.Underline>
          </div>

          <div className="flex items-center gap-4">
            <Anchor.Underline href="#">outline</Anchor.Underline>
            <Anchor.Underline href="#">
              <ExternalLinkIcon />
              outline
            </Anchor.Underline>
            <Anchor.Underline href="#">
              outline
              <ExternalLinkIcon />
            </Anchor.Underline>
          </div>
        </div>
      </div>
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Solid</h2>
        </header>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Anchor.Solid href="#">default</Anchor.Solid>
            <Anchor.Solid href="#" size="icon" className="rounded-full">
              <ExternalLinkIcon />
            </Anchor.Solid>
            <Anchor.Solid href="#">
              <ExternalLinkIcon />
              default
            </Anchor.Solid>
            <Anchor.Solid href="#">
              default
              <ExternalLinkIcon />
            </Anchor.Solid>
          </div>

          <div className="flex items-center gap-4">
            <Anchor.Solid href="#" variant="outline">
              outline
            </Anchor.Solid>
            <Anchor.Solid
              size="icon"
              className="rounded-full"
              variant="outline"
              href="#"
            >
              <ExternalLinkIcon />
            </Anchor.Solid>
            <Anchor.Solid href="#" variant="outline">
              <ExternalLinkIcon />
              outline
            </Anchor.Solid>
            <Anchor.Solid href="#" variant="outline">
              outline
              <ExternalLinkIcon />
            </Anchor.Solid>
          </div>
        </div>
      </div>
    </div>
  );
}
