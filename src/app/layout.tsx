import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Columpio Labs",
  description: "Design systems.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-50 font-sans dark:bg-neutral-950 dark:text-neutral-50 ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
