import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowstate-webdesign.com"),
  title: {
    default: "Flowstate",
    template: "%s · Flowstate",
  },
  description:
    "We rebuild the website you already have, and we build new ones. Montreal. Brandon Leroux.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-bg text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

