"use client";

import { SelectToken, TokenCommand } from "@/components/token-cmdk";
import Badge from "@/ui/html/badge";
import Button from "@/ui/html/button";
import Card from "@/ui/html/card";
import Label from "@/ui/html/label";
import Select from "@/ui/html/select";
import { ChevronDownIcon, GearIcon, SymbolIcon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";

export default function Swap() {
  return (
    <Card className="w-96 rounded-md bg-black p-0">
      <Tabs.Root defaultValue="swap">
        <Tabs.List
          aria-label="Swap tokens or place a limit order"
          className="flex justify-between border-b border-neutral-100 dark:border-neutral-900"
        >
          <div className="flex">
            <Tabs.Trigger
              value="swap"
              className="select-none border-b-2 border-transparent px-4 py-4
              leading-none
              outline-none first:pl-4 data-[state=active]:border-blue-300 data-[state=active]:text-blue-300"
            >
              Swap
            </Tabs.Trigger>
            <Tabs.Trigger
              value="limit"
              className="select-none border-b-2 border-transparent px-4 
              py-4
              leading-none outline-none first:pl-4 data-[state=active]:border-blue-300 data-[state=active]:text-blue-300"
            >
              Limit Order
            </Tabs.Trigger>
          </div>
          <Tabs.Trigger
            value="settings"
            className="select-none border-b-2 border-transparent px-4 
            py-4
            leading-none outline-none first:pl-4 data-[state=active]:border-blue-300 data-[state=active]:text-blue-300"
          >
            <GearIcon />
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="swap"
          className="divide-y divide-neutral-100  dark:divide-neutral-900"
        >
          <div className="relative p-4 pt-0">
            <Label
              htmlFor="you-pay"
              className="-mx-4 block cursor-pointer px-4 pt-4 text-sm"
            >
              You pay
            </Label>
            <div className="-mr-4 mb-0.5 flex items-center gap-2">
              <TokenCommand />
              <input
                placeholder="0.0"
                id="you-pay"
                type="text"
                className="w-full appearance-none border-none bg-transparent pr-4 text-end text-xl focus:outline-none"
              />
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-xs">
                Balance: 0.3324{" "}
                <span className="font-semibold text-blue-400">Max</span>
              </div>
              <div className="font-mono text-xs text-neutral-300">
                $2,290.33
              </div>
            </div>
            <Button.Subtle
              size="icon"
              className="absolute left-1/2 -translate-x-1/2 rounded-full text-xs"
            >
              <SymbolIcon />
            </Button.Subtle>
          </div>

          <div className="p-4 pt-0">
            <Label
              htmlFor="you-receive"
              className="-mx-4 block cursor-pointer px-4 pt-4 text-sm"
            >
              You receive
            </Label>
            <div className="-mr-4 mb-0.5 flex items-center gap-2">
              <SelectToken />
              <input
                placeholder="0.0"
                id="you-receive"
                type="text"
                className="w-full appearance-none border-none bg-transparent pr-4 text-end text-xl focus:outline-none"
              />
            </div>

            <div className="flex items-baseline justify-between gap-2">
              <div className="text-xs">Balance: 1.54</div>
              <div className="font-mono text-xs text-neutral-300">
                $2,280.33 (-0.1%)
              </div>
            </div>
          </div>
          <div>
            <Accordion.Root type="multiple">
              <Accordion.Item value="item-1" className="">
                <Accordion.Trigger className="flex w-full justify-between p-4 text-xs">
                  <div>
                    1WBTC = 18.51300 ETH{" "}
                    <span className="text-xs text-neutral-200 dark:text-neutral-300">
                      ($42,903.33)
                    </span>
                  </div>
                  <ChevronDownIcon />
                </Accordion.Trigger>
                <Accordion.Content className="grid gap-4 px-4 data-[state=open]:pb-4">
                  {[
                    {
                      metric: "Price Impact",
                      value: "-0.210%",
                    },
                    {
                      metric: "Max Slippage",
                      value: "4.302%",
                    },
                    {
                      metric: "Fee (0.15%)",
                      value: "$6.45",
                    },
                    {
                      metric: "Network Cost",
                      value: "$26.45",
                    },
                    {
                      metric: "Order Routing",
                      value: "Uniswap API",
                    },
                  ].map(({ metric, value }, index, arr) => (
                    <>
                      {(index === arr.length - 1 || index === 0) && (
                        <div className="border-b border-neutral-100 dark:border-neutral-900" />
                      )}
                      <div className="flex justify-between" key={metric}>
                        <div className="text-xs text-neutral-200 dark:text-neutral-300">
                          {metric}
                        </div>
                        <div className="text-right text-xs">{value}</div>
                      </div>
                    </>
                  ))}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
          <div className="p-4">
            <Button.Solid className="w-full py-2">Swap</Button.Solid>
          </div>
        </Tabs.Content>
        <Tabs.Content
          value="limit"
          className="divide-y divide-neutral-100  dark:divide-neutral-900"
        >
          <div className="relative p-4 pt-0">
            <Label
              htmlFor="you-pay"
              className="-mx-4 block cursor-pointer px-4 pt-4 text-sm"
            >
              You pay
            </Label>
            <div className="-mr-4 mb-0.5 flex items-center gap-2">
              <TokenCommand />
              <input
                placeholder="0.0"
                id="you-pay"
                type="text"
                className="w-full appearance-none border-none bg-transparent pr-4 text-end text-xl focus:outline-none"
              />
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-xs">
                Balance: 0.3324{" "}
                <span className="font-semibold text-blue-400">Max</span>
              </div>
              <div className="font-mono text-xs text-neutral-300">
                $2,290.33
              </div>
            </div>
            <Button.Subtle
              size="icon"
              className="absolute left-1/2 -translate-x-1/2 rounded-full text-xs"
            >
              <SymbolIcon />
            </Button.Subtle>
          </div>

          <div className="p-4 pt-0">
            <Label
              htmlFor="you-receive"
              className="-mx-4 block cursor-pointer px-4 pt-4 text-sm"
            >
              You receive
            </Label>
            <div className="-mr-4 mb-0.5 flex items-center gap-2">
              <SelectToken />
              <input
                placeholder="0.0"
                id="you-receive"
                type="text"
                className="w-full appearance-none border-none bg-transparent pr-4 text-end text-xl focus:outline-none"
              />
            </div>

            <div className="flex items-baseline justify-between gap-2">
              <div className="text-xs">Balance: 1.54</div>
              <div className="font-mono text-xs text-neutral-300">
                $2,280.33 (-0.1%)
              </div>
            </div>
          </div>

          <div className="p-4">
            <Label
              htmlFor="limit-price"
              className="mb-1 flex items-center gap-2 text-sm"
            >
              WETH Limit price<Badge.Subtle>+1.9%</Badge.Subtle>
            </Label>
            <div className="-mr-4 mb-2 flex items-center gap-2">
              <Button.Subtle>
                <SymbolIcon />
                ETH
              </Button.Subtle>
              <input
                placeholder="0.0"
                id="limit-price"
                type="text"
                className="w-full appearance-none border-none bg-transparent pr-4 text-end text-xl focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              {[0, 1, 2, 5, 10].map((x) => (
                <Button.Subtle variant="outline" key={x} className="text-sm">
                  {x === 0 ? "Market" : `${x}%`}
                </Button.Subtle>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>Expiry</div>
            <Select>
              {["1 hour", "1 day", "3 days", "7 days", "28 days"].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </Select>
          </div>
          <div className="flex items-center justify-between p-4">
            <div>Ethereum Fee</div>
            <div>0%</div>
          </div>
          <div className="p-4">
            <Button.Solid className="w-full">Submit Limit Order</Button.Solid>
          </div>
        </Tabs.Content>

        <Tabs.Content
          value="settings"
          className="divide-y divide-neutral-100 dark:divide-neutral-900"
        >
          <div className="p-4">
            <label className="mb-2 block text-sm">Max Slippage</label>
            <div className="flex justify-between gap-2">
              {[0.1, 0.5, 1].map((x) => (
                <Button.Subtle
                  variant="outline"
                  key={x}
                  className="w-full text-sm"
                >
                  {x}%
                </Button.Subtle>
              ))}
              <label htmlFor="max-slippage" className="sr-only">
                Custom Max Slippage
              </label>
              <input
                placeholder="0.0"
                id="max-slippage"
                type="text"
                className="w-20 appearance-none border-none bg-transparent pr-4 text-end text-xl focus:outline-none"
              />
            </div>
          </div>

          <div className="p-4">
            <label className="mb-2 block text-sm">Gas Fees</label>
            <div className="space-y-4">
              {[
                {
                  name: "Slow",
                  price: 78.2,
                  usd: 23.08,
                },
                {
                  name: "Normal",
                  price: 78.3,
                  usd: 25.33,
                },
                {
                  name: "Fast",
                  price: 78.4,
                  usd: 32.11,
                },
              ].map((x) => (
                <Card key={x.name}>
                  <div>{x.name}</div>
                  <div className="text-xs">
                    {x.price} Gwei (${x.usd})
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="p-4">
            <div className="mb-2 flex items-baseline justify-between">
              <label className="block text-sm">Transaction mode</label>
              <div className=" block text-end text-xs">
                What is the difference?
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button.Subtle className="w-full text-sm">Standard</Button.Subtle>
              <Button.Subtle className="w-full text-sm">Turbo</Button.Subtle>
            </div>
          </div>

          <div className="p-4">
            <label className="mb-2 block text-sm">Liquidity Sources</label>
            <div className="flex justify-between">
              <label htmlFor="max-slippage" className="sr-only">
                Liquidity Sources
              </label>
              <Select id="liquidity-sources" className="w-full">
                {["0x", "aave", "uniswap", "curve", "balancer"].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </Select>
            </div>
          </div>

          <div className="p-4 ">
            <Button.Subtle>Use Defaults</Button.Subtle>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </Card>
  );
}
