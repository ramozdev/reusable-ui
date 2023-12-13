import Code from "@/ui/html/code";
import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";

export default function CodeDemo() {
  const defaultCode = colors.map((color) => (
    <div key={`code-${color}`} className="flex space-x-4">
      <Code color={color}>console.log()</Code>
    </div>
  ));

  const outlineCode = colors.map((color) => (
    <div key={color} className="flex space-x-4">
      <Code variant="outline" color={color}>
        console.log()
      </Code>
    </div>
  ));

  const ghostCode = colors.map((color) => (
    <div key={color}>
      <Code variant="ghost" color={color}>
        console.log()
      </Code>
    </div>
  ));

  return (
    <div>
      <Text.H3>Code</Text.H3>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4">
          <Text.H4>Default</Text.H4>
          {defaultCode}
        </div>
        <div className="space-y-4">
          <Text.H4>Outline</Text.H4>
          {outlineCode}
        </div>
        <div className="space-y-4">
          <Text.H4>Ghost</Text.H4>
          {ghostCode}
        </div>
      </div>
    </div>
  );
}
