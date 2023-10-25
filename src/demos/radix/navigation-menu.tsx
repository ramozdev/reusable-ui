import * as NavigationMenu from "@/ui/radix/navigation-menu";

const links: { title: string; href: string; children: React.ReactNode }[] = [
  {
    title: "Introduction",
    href: "#",
    children: "Build high-quality, accessible design systems and web apps.",
  },
  {
    title: "Getting started",
    href: "#",
    children:
      "A quick tutorial to get you up and running with Radix Primitives.",
  },
  {
    title: "Styling",
    href: "#",
    children: "Unstyled and compatible with any styling solution.",
  },
  {
    title: "Animation",
    href: "#",
    children: "Use CSS keyframes or any animation library of your choice.",
  },
  {
    title: "Accessibility",
    href: "#",
    children: "Tested in a range of browsers and assistive technologies.",
  },
  {
    title: "Releases",
    href: "#",
    children: "Radix Primitives releases and their changelogs.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Learn <NavigationMenu.CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="m-0 grid list-none gap-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.ListItemNextjs
                  color="white_black"
                  href="#"
                  variant="spotlight"
                >
                  <svg
                    aria-hidden
                    width="38"
                    height="38"
                    viewBox="0 0 25 25"
                    className="fill-white"
                  >
                    <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                    <path d="M12 0H4V8H12V0Z"></path>
                    <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                  </svg>
                  <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-black">
                    Radix Primitives
                  </div>
                  <p className="text-mauve4 text-[14px] leading-[1.3]">
                    Unstyled, accessible components for React.
                  </p>
                </NavigationMenu.ListItemNextjs>
              </li>

              <NavigationMenu.ListItem href="#" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </NavigationMenu.ListItem>
              <NavigationMenu.ListItem href="#" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </NavigationMenu.ListItem>
              <NavigationMenu.ListItem
                href="https://icons.radix-ui.com/"
                title="Icons"
              >
                A crisp set of 15x15 icons, balanced and consistent.
              </NavigationMenu.ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Overview <NavigationMenu.CaretDown />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="m-0 grid list-none gap-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              {links.map(({ children, href, title }) => (
                <li key={href}>
                  <NavigationMenu.ListItemNextjs
                    {...{ children, href, title }}
                  />
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://twitter.com/MomentumLabz"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator>
          <NavigationMenu.Arrow />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport />
      </div>
    </NavigationMenu.Root>
  );
}
