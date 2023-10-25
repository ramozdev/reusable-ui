import { Input } from "@/ui/html/input";

export function InputDemo() {
  return (
    <>
      <label className="sr-only" htmlFor="name">
        Lorem Ipsum
      </label>
      <Input placeholder="Enter your name" name="name" id="name" />
    </>
  );
}
