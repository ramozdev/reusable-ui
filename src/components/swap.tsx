import { TokenCommand } from "@/components/token-cmdk";
import Button from "@/ui/html/button";
import Card from "@/ui/html/card";
import Label from "@/ui/html/label";

export default function Swap() {
  return (
    <Card className="w-80 bg-black">
      <div className="mb-4">
        <Label htmlFor="you-pay">Swap</Label>
        <div className="flex items-center gap-2">
          <TokenCommand />
          <input
            placeholder="0.0"
            id="you-pay"
            className="appearance-none border-none bg-transparent focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="you-receive">Swap</Label>
        <div className="flex items-center gap-2">
          <TokenCommand />
          <input
            placeholder="0.0"
            id="you-receive"
            className="appearance-none border-none bg-transparent focus:outline-none"
          />
        </div>
      </div>

      <Button.Solid className="w-full">Swap</Button.Solid>
    </Card>
  );
}
