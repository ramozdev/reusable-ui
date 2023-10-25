import * as Link from "@/ui/nextjs/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export function LinkDemo() {
  return (
    <div className="grid gap-6">
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Subtle</h2>
        </header>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Link.Subtle href="#">default</Link.Subtle>
            <Link.Subtle href="#" size="icon" className="rounded-full">
              <ExternalLinkIcon />
            </Link.Subtle>
            <Link.Subtle href="#">
              <ExternalLinkIcon />
              default
            </Link.Subtle>
            <Link.Subtle href="#">
              default
              <ExternalLinkIcon />
            </Link.Subtle>
          </div>

          <div className="flex items-center gap-4">
            <Link.Subtle href="#" variant="outline">
              outline
            </Link.Subtle>
            <Link.Subtle
              size="icon"
              className="rounded-full"
              variant="outline"
              href="#"
            >
              <ExternalLinkIcon />
            </Link.Subtle>
            <Link.Subtle href="#" variant="outline">
              <ExternalLinkIcon />
              outline
            </Link.Subtle>
            <Link.Subtle href="#" variant="outline">
              outline
              <ExternalLinkIcon />
            </Link.Subtle>
          </div>
        </div>
      </div>
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Underline</h2>
        </header>
        <div className="grid gap-6 pt-4">
          <div className="flex items-center gap-4">
            <Link.Underline href="#">default</Link.Underline>
            <Link.Underline href="#">
              <ExternalLinkIcon />
              default
            </Link.Underline>
            <Link.Underline href="#">
              default
              <ExternalLinkIcon />
            </Link.Underline>
          </div>

          <div className="flex items-center gap-4">
            <Link.Underline href="#">underline</Link.Underline>
            <Link.Underline href="#">
              <ExternalLinkIcon />
              underline
            </Link.Underline>
            <Link.Underline href="#">
              underline
              <ExternalLinkIcon />
            </Link.Underline>
          </div>

          <div className="flex items-center gap-4">
            <Link.Underline href="#">outline</Link.Underline>
            <Link.Underline href="#">
              <ExternalLinkIcon />
              outline
            </Link.Underline>
            <Link.Underline href="#">
              outline
              <ExternalLinkIcon />
            </Link.Underline>
          </div>
        </div>
      </div>
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Solid</h2>
        </header>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Link.Solid href="#">default</Link.Solid>
            <Link.Solid href="#" size="icon" className="rounded-full">
              <ExternalLinkIcon />
            </Link.Solid>
            <Link.Solid href="#">
              <ExternalLinkIcon />
              default
            </Link.Solid>
            <Link.Solid href="#">
              default
              <ExternalLinkIcon />
            </Link.Solid>
          </div>

          <div className="flex items-center gap-4">
            <Link.Solid href="#" variant="outline">
              outline
            </Link.Solid>
            <Link.Solid
              size="icon"
              className="rounded-full"
              variant="outline"
              href="#"
            >
              <ExternalLinkIcon />
            </Link.Solid>
            <Link.Solid href="#" variant="outline">
              <ExternalLinkIcon />
              outline
            </Link.Solid>
            <Link.Solid href="#" variant="outline">
              outline
              <ExternalLinkIcon />
            </Link.Solid>
          </div>
        </div>
      </div>
    </div>
  );
}
