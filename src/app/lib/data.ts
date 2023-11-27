import { unstable_noStore as noStore } from "next/cache";
import z from "zod";
import { env } from "@/env.mjs";

const Schema = z.object({
  tokens: z
    .object({
      token: z.object({
        contract: z.string(),
        tokenId: z.string(),
        name: z.string(),
        image: z.string(),
      }),
    })
    .array(),
});

async function fetchTokens() {
  noStore();

  const options = {
    headers: {
      "x-api-key": env.API_KEY,
    },
  };

  try {
    const payload = await fetch(
      "https://api.reservoir.tools/users/0xd9463b55af194D4fa22A532a52F5bDd45b66d290/tokens/v7",
      options,
    );
    const result = Schema.parse(await payload.json());

    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export { fetchTokens as fetchToken };
