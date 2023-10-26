import Kbd from "@/ui/html/kbd";

export function Plane() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color, index) => (
        <p key={`kbd-plane-${color}-${index}`}>
          <Kbd variant="plane" color={color}>
            ⌘
          </Kbd>
          <Kbd variant="plane" color={color}>
            {color}
          </Kbd>
          <Kbd variant="plane" color={color}>
            R
          </Kbd>
        </p>
      ))}
    </div>
  );
}
