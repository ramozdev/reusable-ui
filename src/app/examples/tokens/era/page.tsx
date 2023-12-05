import React from "react";
import TokenDemo, { type Payment } from "../components/token-demo";

export default function page() {
  const data: Payment[] = [
    {
      id: "1",
      name: "Fufu Token",
      price: 316,
      change: "0.3%",
      tvl: "$756.0M",
      volume: "$123.0M",
    },
    {
      id: "2",
      name: "Jesus Coin",
      price: 242,
      change: "0.4%",
      tvl: "$523.0M",
      volume: "$32.0M",
    },
    {
      id: "3",
      name: "Metablox",
      price: 837,
      change: "0.8%",
      tvl: "$752.0M",
      volume: "$71356.0M",
    },
    {
      id: "4",
      name: "Morra Token",
      price: 874,
      change: "0.1%",
      tvl: "$451.0M",
      volume: "$324.0M",
    },
    {
      id: "5",

      name: "Pepe Coin",
      price: 721,
      change: "0.21%",
      tvl: "$153.0M",
      volume: "$512.0M",
    },
  ];
  return (
    <div>
      <TokenDemo data={data} />
    </div>
  );
}
