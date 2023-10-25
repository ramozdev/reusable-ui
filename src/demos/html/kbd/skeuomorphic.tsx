import { Kbd } from "@/ui/html/kbd";

export function Skeuomorphic() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color, index) => (
        <p key={`kbd-skeuomorphic-${color}-${index}`}>
          <Kbd variant="skeuomorphic" color={color}>
            ⌘
          </Kbd>
          <Kbd variant="skeuomorphic" color={color}>
            {color}
          </Kbd>
          <Kbd variant="skeuomorphic" color={color}>
            R
          </Kbd>
        </p>
      ))}
    </div>
  );
}
