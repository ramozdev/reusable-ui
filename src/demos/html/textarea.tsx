import Textarea from "@/ui/html/textarea";

export function TextareaDemo() {
  return (
    <>
      <label className="sr-only" htmlFor="textarea-little-boy">
        Lorem Ipsum
      </label>
      <Textarea
        placeholder="There once was a little boy..."
        name="textarea-little-boy"
        id="textarea-little-boy"
      />
    </>
  );
}
