import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de Tickets",
  description: "Proyecto integrador sistema de tickets",
};

export default function RootLayout({
  children
}: Readonly<{
  children: JSX.Element | JSX.Element[];
}>) {

<<<<<<< HEAD
 

=======
>>>>>>> b1b66d9bc41c8d79a1ec2232285bee6ababb2b88
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
