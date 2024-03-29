import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavbarDemo from "@/components/layout/NavbarDemo";

const inter = Inter({ subsets: ["latin"],  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[100vh]`}>

      <NavbarDemo />
            {children}
            <Footer />
      </body>
    </html>
  );
}
