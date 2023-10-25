import { Kbd } from "@/ui/html/kbd";

export function KbdDemo() {
  return (
    <>
      Please press <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>R</Kbd> (MacOS) / <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd>{" "}
      (Windows) to reload this page. Lorem ipsum
      <Kbd>⌘</Kbd>
      <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd>
      dolor sit amet,
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>R</Kbd>
      consectetur adipisicing elit. Dicta eos minus pariatur praesentium nobis
      voluptate atque dolorum fugit veniam quae!
    </>
  );
}
