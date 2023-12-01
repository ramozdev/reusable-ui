"use client";

import { useEffect } from "react";
import Profile from "@/components/profile";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex justify-between py-20">
        <Profile />
        <div className="grid w-full grid-cols-1 gap-4 px-10">
          <div className="flex items-center justify-center">
            <div>
              <h2>Something went wrong!</h2>
              <div className="flex justify-center">
                <button
                  className="mt-4 rounded-md bg-red-500 px-4 py-2 text-sm text-white transition-colors hover:bg-red-400"
                  onClick={() => reset()}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
