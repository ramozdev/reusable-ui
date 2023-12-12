import Badge from "@/ui/html/badge";
import Card from "@/ui/html/card";
import Text from "@/ui/html/text";
import Avatar from "@/ui/radix/avatar";
import Separator from "@/ui/radix/separator";

type CardItem = {
  avatar: string;
  name: string;
  time: string;
  badge: string;
  badgeColor:
    | "neutral"
    | "brand"
    | "slate"
    | "gray"
    | "zinc"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet";
  estOutput: string;
  gasFees: string;
  reason: string;
  reasonDetails: string;
};

export default function Cards() {
  const values: CardItem[] = [
    {
      avatar: "ZK",
      name: "ZKSync",
      time: "~ 3 mins",
      badge: "Best Return",
      badgeColor: "indigo",
      estOutput: "218.043 USDC.E",
      gasFees: "$12.112",
      reason: "1.234",
      reasonDetails: "higher output than any other route",
    },
    {
      avatar: "AT",
      name: "Arbitrun",
      time: "~ 2 mins",
      badge: "Faster",
      badgeColor: "green",
      estOutput: "216.043 USDC.E",
      gasFees: "$14.112",
      reason: "1 min",
      reasonDetails: "faster than any other router",
    },
  ];
  return (
    <div className="my-10 space-y-2">
      {values.map((cardItem) => (
        <Card color="white-black" key={cardItem.avatar}>
          <div className="flex items-center space-x-4">
            <div>
              <Avatar.Root className="bg-red-300">
                <Avatar.Fallback color="indigo">
                  {cardItem.avatar}
                </Avatar.Fallback>
              </Avatar.Root>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <Text.P className="my-0 text-xs [&:not(:first-child)]:mt-0">
                  {cardItem.name}
                  <span className="text-gray-500 dark:text-gray-400">
                    {" "}
                    {cardItem.time}
                  </span>
                </Text.P>
                <Badge.Subtle color={cardItem.badgeColor}>
                  {cardItem.badge}
                </Badge.Subtle>
              </div>
              <div>
                <Text.P className="my-0 text-xs  text-gray-500 dark:text-gray-400 [&:not(:first-child)]:mt-0">
                  Est. Output:{" "}
                  <span className="text-gray-900 dark:text-gray-50">
                    {cardItem.estOutput}
                  </span>{" "}
                  . Gas Fees{" "}
                  <span className="text-gray-900 dark:text-gray-50">
                    {cardItem.gasFees}
                  </span>
                </Text.P>
              </div>
            </div>
          </div>
          <Separator.Root color="neutral" />
          <Text.P className="my-0 text-xs text-gray-500 dark:text-gray-400 [&:not(:first-child)]:mt-0">
            <span className="text-green-600 dark:text-green-200">
              {cardItem.reason}
            </span>{" "}
            {cardItem.reasonDetails}
          </Text.P>
        </Card>
      ))}
    </div>
  );
}
