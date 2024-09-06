import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppWrapper } from "@/context";
import ModalSelectState from "@/components/others/ModalSelectState";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sky Automobile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <ModalSelectState />
          {children}
        </AppWrapper>
        <Toaster />
      </body>
    </html>
  );
}
