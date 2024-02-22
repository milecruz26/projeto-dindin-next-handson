"use-client";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "DinDin",
  description: "Aplicativo DinDin",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
