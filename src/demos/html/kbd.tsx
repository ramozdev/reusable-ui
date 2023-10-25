import { Kbd } from "@/ui/html/kbd";

export function KbdDemo() {
  return (
    <div className="grid gap-5">
      <p>
        <Kbd>⌘</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>R</Kbd>
      </p>
      <p>
        <Kbd variant="skeuomorphic">⌘</Kbd>
        <Kbd variant="skeuomorphic">Shift</Kbd>
        <Kbd variant="skeuomorphic">R</Kbd>
      </p>
      <p>
        <Kbd variant="plane">⌘</Kbd>
        <Kbd variant="plane">Shift</Kbd>
        <Kbd variant="plane">R</Kbd>
      </p>
    </div>
  );
}
