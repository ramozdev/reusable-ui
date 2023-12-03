# Reusable UI (Next.js Example)

Reusable UI is a collection of reusable React components tailored for web3 development. Instead of installing a dependency, you copy and paste the components into your project.

## Installation

Reusable UI requires the following dev dependencies.

- [TailwindCSS](https://tailwindcss.com/docs/installation/framework-guides)
- [TypeScript](https://www.typescriptlang.org/download)
- [class-variance-authority](https://cva.style/docs/getting-started/installation)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge#readme)

Use this command to install `class-variance-authority` and `tailwind-merge`.

```bash
pnpm install -D class-variance-authority tailwind-merge
```

```bash
npm install -D class-variance-authority tailwind-merge
```

```bash
yarn add -D class-variance-authority tailwind-merge
```

Follow the official guide for your framkework to install [TailwindCSS](https://tailwindcss.com/docs/installation/framework-guides) and [TypeScript](https://www.typescriptlang.org/download).

## Usage

Copy and paste the [`/ui`](https://github.com/ramozdev/reusable-next/tree/main/src/ui) folder from this repository into your project.

### File structure (Recommended)

```
.
└── src/
    ├── components/
    │   ├── navbar.tsx
    │   ├── page-header.tsx
    │   └── ...
    ├── ui/
    │   ├── html/
    │   ├── cmdk/
    │   ├── nextjs/
    │   ├── radix/
    │   │   ├── accordion/
    │   │   │   ├── content.ts
    │   │   │   ├── index.tsx
    │   │   │   ├── item.ts
    │   │   │   ├── root.ts
    │   │   │   ├── trigger.ts
    │   │   │   └── variants.ts
    │   │   ├── alert-dialog/
    │   │   └── ...
    │   ├── animations-plugins.ts
    │   └── globals.ts
    ├── tailwindcss.config.ts
    └── tsconfig.json
```

### Add a Path Alias

The `@/*` path alias should be added to shorten imports from the `ui` directory. Add the following to your `tsconfig.json`:

```json {3-5} filename="tsconfig.json"
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Use a component

Import the component you want to use from the `ui/` directory.

```tsx filename="src/app/page.tsx"
import Button from "@/ui/html/button";

export default function Page() {
  return <Button.Solid>Click me</Button.Solid>;
}
```

### /ui/globals.ts

We use `globals.ts` to make global changes to the components. You can change the border radius, shadow and border for all targeted components by changing the values in this file.

Each variable must be equal to a TailwindCSS class or classes.

```ts filename="globals.ts"
const ROUNDED = "rounded-md";
const SHADOW = "shadow-none";
const BORDER = "border";

export { ROUNDED, SHADOW, BORDER };
```

The use of `globals.ts` is optional, but highly recommended. You can exclude or include any component to use `globals.ts`.

### /ui/animations-plugins.ts

Contains all the animations and plugins created for the components.

```ts filename="animations-plugins.ts"
import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const animations: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    // ACCORDION
    "accordion-slide-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    // ...
  },
  animation: {
    // ACCORDION
    "accordion-slide-down":
      "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    // ....
  },
};

const navigationMenuPlugin: NonNullable<Config["plugins"]> = [
  plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: (value) => ({
        perspective: value,
      }),
    });
  }),
];

const plugins = [...navigationMenuPlugin];

export { animations, plugins };
```

### TailwindCSS Configuration

Certain components, such as the `<Dialog>`, require animations. We use `tailwindcss.config.ts` to add animations to the components. Import the animations and plugins from `ui/animations-plugins.ts`.

```ts filename="tailwind.config.ts"
import { type Config } from "tailwindcss";
import { animations, plugins } from "./src/ui/animations-plugins";

export default {
  // ...
  theme: {
    extend: {
      // ...
      ...animations,
    },
  },
  plugins: [require("@tailwindcss/forms"), ...plugins],
} satisfies Config;
```

Now you're ready to use Reusable UI in your project.
