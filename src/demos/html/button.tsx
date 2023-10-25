import * as Button from "@/ui/html/button";
import { PlusIcon } from "@radix-ui/react-icons";

export function ButtonDemo() {
  return (
    <div className="grid gap-6">
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Subtle</h2>
        </header>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Button.Subtle>default</Button.Subtle>
            <Button.Subtle size="icon" className="rounded-full">
              <PlusIcon />
            </Button.Subtle>
            <Button.Subtle>
              <PlusIcon />
              default
            </Button.Subtle>
            <Button.Subtle>
              default
              <PlusIcon />
            </Button.Subtle>
          </div>

          <div className="flex items-center gap-4">
            <Button.Subtle variant="outline">outline</Button.Subtle>
            <Button.Subtle
              size="icon"
              className="rounded-full"
              variant="outline"
            >
              <PlusIcon />
            </Button.Subtle>
            <Button.Subtle variant="outline">
              <PlusIcon />
              outline
            </Button.Subtle>
            <Button.Subtle variant="outline">
              outline
              <PlusIcon />
            </Button.Subtle>
          </div>
        </div>
      </div>
      <div>
        <header>
          <h2 className="mb-2 text-2xl font-bold">Solid</h2>
        </header>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <Button.Solid>default</Button.Solid>
            <Button.Solid size="icon" className="rounded-full">
              <PlusIcon />
            </Button.Solid>
            <Button.Solid>
              <PlusIcon />
              default
            </Button.Solid>
            <Button.Solid>
              default
              <PlusIcon />
            </Button.Solid>
          </div>

          <div className="flex items-center gap-4">
            <Button.Solid variant="outline">outline</Button.Solid>
            <Button.Solid
              size="icon"
              className="rounded-full"
              variant="outline"
            >
              <PlusIcon />
            </Button.Solid>
            <Button.Solid variant="outline">
              <PlusIcon />
              outline
            </Button.Solid>
            <Button.Solid variant="outline">
              outline
              <PlusIcon />
            </Button.Solid>
          </div>
        </div>
      </div>
    </div>
  );
}
