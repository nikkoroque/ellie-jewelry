import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {WixClientContextProvider} from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ellie Jewelry",
  description: "Next JS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar/>
          {children}
          <Footer/>
        </WixClientContextProvider>
        </body>
    </html>
  );
}
