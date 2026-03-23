import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Hobi — Lead Product Designer",
  description:
    "Designer with 14+ years of experience crafting digital products that balance user needs and business goals. Lead Product Designer at Renault LATAM.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "UX Research",
    "Alex Hobi",
    "Renault LATAM",
  ],
  authors: [{ name: "Alex Hobi" }],
  openGraph: {
    title: "Alex Hobi — Lead Product Designer",
    description:
      "Designer with 14+ years of experience crafting digital products that balance user needs and business goals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Hobi — Lead Product Designer",
    description:
      "Designer with 14+ years of experience crafting digital products that balance user needs and business goals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="bg-white text-[#1a1a1a] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
