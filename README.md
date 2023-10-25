# Paper Design System

Basic components for quick prototyping.

## Installation

Create a React app from scratch and add the Paper Design System.

If you already have a React app and want to add Paper to it, follow the
**[Add to project](/add-to-project)** guide.

## Steps

### Create a React.js project

We will be using [Next.js](https://nextjs.org) to create a React app. You can use any other React framework.

Execute the following command to create a new Next.js project:

```bash
pnpm create next-app --ts --tailwind --eslint --src-dir --import-alias "@/*"
```

```bash
npx create-next-app@latest --ts --tailwind --eslint --src-dir --import-alias "@/*"
```

```bash
yarn create next-app --ts --tailwind --eslint --src-dir --import-alias "@/*"
```

If you have any problems, follow the official guide to [create a new Next.js app](https://nextjs.org/docs/getting-started).

### Install dependencies

Add [class-variance-authority](https://cva.style/docs) and [tailwind-merge](https://github.com/dcastil/tailwind-merge#readme) as dev dependencies:

```bash
pnpm install -D class-variance-authority tailwind-merge
```

```bash
npm install -D class-variance-authority tailwind-merge
```

```bash
yarn add -D class-variance-authority tailwind-merge
```

These dependencies are required to use Paper. They allow us to create reusable components and to conditionally add Tailwind CSS classes.
