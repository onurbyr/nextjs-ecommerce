import "./globals.css";
import type { Metadata } from "next";
import { NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
