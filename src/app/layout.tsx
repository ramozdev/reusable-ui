import Nav from "@/components/nav";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Reusable UI",
  description: "Reusable React components.",
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
        className={`bg-white font-sans dark:bg-black dark:text-neutral-50 ${inter.variable}`}
      >
        <Navbar />
        <Nav />
        {children}
      </body>
    </html>
  );
}
