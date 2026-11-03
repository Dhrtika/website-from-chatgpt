import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "../data/site";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "Dhrtika Bhatia | Dentistry, Research & Innovation",
  description: "Explore the clinical journey, research, and digital dentistry interests of Dhrtika Bhatia, DMD candidate at Temple University, Class of 2027.",
  openGraph: { title: "Dhrtika Bhatia | Dentistry with Precision", description: site.introduction, url: site.domain, type: "website" },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}
