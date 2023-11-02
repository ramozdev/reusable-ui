# Papel UI (Next.js Example)

Papel UI is a collection of reusable React components for quick prototyping. Instead of installing a dependency, you copy and paste the components into your project.

## Installation

Papel UI requires the following dev dependencies.

- [TailwindCSS](https://tailwindcss.com/docs/installation/framework-guides)
- [TypeScript](https://www.typescriptlang.org/download)
- [class-variance-authority](https://cva.style/docs/getting-started/installation)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge#readme)

Use this command to install class-variance-authority and tailwind-merge.

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

Copy and paste the `/ui` folder from this repository into your project.

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
    │   │   │   ├── tailwind.ts
    │   │   │   ├── trigger.ts
    │   │   │   └── variants.ts
    │   │   ├── alert-dialog/
    │   │   └── ...
    │   ├── animations.ts
    │   ├── globals.ts
    │   └── plugins.ts
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

### ui/globals.ts

We use `globals.ts` to make global changes to the components. You can change the border radius, shadow and border for all targeted components by changing the values in this file.

Each variable must be equal to a TailwindCSS class or classes.

```ts filename="globals.ts"
const ROUNDED = "rounded-md";
const SHADOW = "shadow-none";
const BORDER = "border";

export { ROUNDED, SHADOW, BORDER };
```

### ui/animations.ts

Contains all the animations created for any of the components.

```ts filename="globals.ts"
import { type Config } from "tailwindcss";
import { dropdownMenu } from "./radix/dropdown-menu/tailwind";
// ...

const animations: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    ...dropdownMenu?.keyframes,
    // ...
  },
  animation: {
    ...dropdownMenu?.animation,
    // ....
  },
};

export { animations };
```

### ui/plugins.ts

Contains all the plugins created for any of the components.

```ts filename="plugins.ts"
import { navigationMenuPlugin } from "./radix/navigation-menu/tailwind";

const plugins = [...navigationMenuPlugin];

export { plugins };
```

The use of `globals.ts` is optional, but highly recommended. You can exclude or include any component to use `globals.ts`.

### TailwindCSS Configuration

Certain components, such as the `<Dialog>`, require animations. We use `tailwindcss.config.ts` to add animations to the components. Import the animations and plugins from `ui/animations.ts` and `ui/plugins.ts` respectively.

```ts filename="tailwind.config.ts"
import { type Config } from "tailwindcss";
import { animations } from "./src/ui/animations";
import { plugins } from "./src/ui/plugins";

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

Now you're ready to use Papel UI in your project.
