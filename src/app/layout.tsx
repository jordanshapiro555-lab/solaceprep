import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solace | Commercial Insurance Advocates",
  description:
    "Don't navigate your insurance alone. A Solace advocate handles claim denials, prior authorizations, surprise bills, and more — so you get the care you deserve.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
