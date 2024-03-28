import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Connection from "@/database/Connection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sistema de Tickets",
  description: "Proyecto integrador sistema de tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  Connection();

  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
