import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";


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
          {children}
        </body>
    </html>
  );
}
