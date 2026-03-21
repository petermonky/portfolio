import type { Metadata } from "next";
import "./globals.css";
import { funnel_sans } from "./fonts";
import DotCursorHighlight from "@/components/layout/DotCursorHighlight";

export const metadata: Metadata = {
  title: "Peter Jung",
  description: "Peter Jung's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnel_sans.className} ${funnel_sans.variable} antialiased`}
      >
        <DotCursorHighlight />
        {children}
      </body>
    </html>
  );
}
