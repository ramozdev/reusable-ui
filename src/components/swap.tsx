import { TokenCommand } from "@/components/token-cmdk";
import Button from "@/ui/html/button";
import Card from "@/ui/html/card";
import Label from "@/ui/html/label";

export default function Swap() {
  return (
    <Card className="w-96 bg-black">
      <div className="mb-4">
        <Label htmlFor="you-pay" className="mb-1 block text-sm">
          You pay
        </Label>
        <div className="flex items-center gap-2">
          <TokenCommand />
          <input
            placeholder="0.0"
            id="you-pay"
            type="number"
            className="w-full appearance-none border-none bg-transparent text-xl focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="you-receive" className="mb-1 block text-sm">
          You receive
        </Label>
        <div className="flex items-center gap-2">
          <TokenCommand />
          <input
            placeholder="0.0"
            id="you-receive"
            type="number"
            className="w-full appearance-none border-none bg-transparent text-xl focus:outline-none"
          />
        </div>
      </div>

      <Button.Solid className="w-full">Swap</Button.Solid>
    </Card>
  );
}
