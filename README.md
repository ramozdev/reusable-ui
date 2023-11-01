# Papel UI

Papel UI is a collection of re-usable React components for quick prototyping. Instead of installing a dependency, you copy and paste the components into your project.

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

### ui/globals.ts

We use `globals.ts` to make global changes to the components. You can change the border radius, shadow and border for all targeted components by changing the values in this file.

Each variable must be equal to a TailwindCSS class or classes.

```ts filename="globals.ts"
const ROUNDED = "rounded-md";
const SHADOW = "shadow-none";
const BORDER = "border";

export { ROUNDED, SHADOW, BORDER };
```

The use of `globals.ts` is optional, but highly recommended. You can exclude or include any component to use `globals.ts`.

### TailwindCSS Configuration

Certain components, such as the `<Dialog>`, require animations. We use `tailwindcss.config.ts` to add animations to the components. You can add animations to all targeted components by changing the values in this file.

```ts copy filename="tailwind.config.ts" showLineNumbers {2,10,14}
import type { Config } from "tailwindcss";
import { dialog } from "./src/ui/radix/dialog/tailwind";

const config: Config = {
  // ...
  theme: {
    extend: {
      // ...
      keyframes: {
        ...dialog?.keyframes,
        // ...
      },
      animation: {
        ...dialog?.animation,
        // ...
      },
    },
  },
};

module.exports = config;
```

Now you're ready to use Papel UI in your project.
