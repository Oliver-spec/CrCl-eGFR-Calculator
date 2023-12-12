import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/ui/globals.css";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrCl Calculator",
  description: "Calculate CrCl and eGFR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
