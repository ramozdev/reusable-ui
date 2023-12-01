import Profile from "@/components/profile";
import { Suspense } from "react";
import Tokens from "@/app/examples/nfts/collection/tokens";
import { CardsSkeleton } from "@/components/card-skeleton";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex justify-between py-20">
        <Profile />
        <Suspense fallback={<CardsSkeleton />}>
          <Tokens />
        </Suspense>
      </div>
    </div>
  );
}
