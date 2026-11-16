import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Química PAU | Prepara les PAU 2027",
  description: "Aprèn, practica i prepara la prova de Química de les PAU de Catalunya 2027.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ca"><body>{children}</body></html>;
}
