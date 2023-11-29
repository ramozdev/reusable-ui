"use client";

import * as React from "react";
import Command from "@/ui/cmdk";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const tokens = {
  ETH: {
    name: "Ethereum",
    symbol: "ETH",
    icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
  },
  USDC: {
    name: "USD Coin",
    symbol: "USDC",
    icon: "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
  },
  DAI: {
    name: "Dai",
    symbol: "DAI",
    icon: "https://assets.coingecko.com/coins/images/9956/small/dai-multi-collateral-mcd.png?1574218774",
  },
  UNI: {
    name: "Uniswap",
    symbol: "UNI",
    icon: "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604",
  },
  AAVE: {
    name: "Aave",
    symbol: "AAVE",
    icon: "https://assets.coingecko.com/coins/images/12645/small/AAVE.png?1601374110",
  },
};

export function TokenCommand() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <ChevronDownIcon /> ETH
      </button>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <Command.Root>
          <Command.Input placeholder="Type a command. or search..." />
          <Command.Separator />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <div className="flex gap-2 px-4 py-2">
              {Object.entries(tokens).map(([symbol, token]) => (
                <Command.Item key={symbol} className="flex items-center">
                  <Image
                    src={token.icon}
                    alt=""
                    width="24"
                    height="24"
                    className="mr-2 h-6 w-6 rounded-full"
                  />
                  <span className="text-sm">{token.symbol}</span>
                </Command.Item>
              ))}
            </div>
            <Command.Separator />
            <Command.Group>
              {Object.entries(tokens).map(([symbol, token]) => (
                <Command.Item key={symbol}>
                  <Image
                    src={token.icon}
                    alt=""
                    width="24"
                    height="24"
                    className="mr-2 h-6 w-6 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm">{token.symbol}</span>
                    <span className="text-xs text-neutral-400">
                      {token.name}
                    </span>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command.Root>
      </Command.Dialog>
    </>
  );
}