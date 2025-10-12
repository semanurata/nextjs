import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/header";
import { Footer } from "@/shared/components/footer";
import HeartPointer from "@/components/main/heart-pointer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MİYAV MİYAV",
  description: "Sema'nın Kedi Dükkanı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeartPointer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
