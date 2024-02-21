import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";

// const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DinDin",
  description: "Aplicativo DinDin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>
        {/* <NextAuthSessionProvider> */}
          {children}
        {/* </NextAuthSessionProvider> */}
        </body>
    </html>
  );
}
