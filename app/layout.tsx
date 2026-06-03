import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Creative Strategist | AI Creative Strategy for Ecommerce",
  description:
    "Creative Strategist is an AI-powered creative strategy and ad production agency helping ecommerce brands in Cyprus scale faster.",
  keywords: [
    "creative strategist",
    "AI creative strategy",
    "ecommerce ads",
    "Cyprus marketing",
    "UGC ads",
  ],
  openGraph: {
    title: "Creative Strategist",
    description:
      "Transform your ecommerce ads with AI-powered strategy, ad production, and conversion-focused messaging.",
    type: "website",
  },
  metadataBase: new URL("https://creative-strategist.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
