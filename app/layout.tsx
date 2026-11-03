import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhrtika Bhatia | Dentistry and Research",
  description: "Internationally trained dentist, Temple University DMD candidate and clinical researcher."
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
