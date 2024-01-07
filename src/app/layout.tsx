import "./globals.css";
import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <body className="flex flex-col min-h-screen">
        <Providers>
          <NavBar />
          {children}
          <Footer />
          <ToastContainer autoClose={1000} hideProgressBar={true} />
        </Providers>
      </body>
    </html>
  );
}
