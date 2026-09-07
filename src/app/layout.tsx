import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackgroundAccent from "@/components/BackgroundAccent";
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
  title: "Bucketus — Plan your dream trips",
  description:
    "Plan trips, invite friends, and manage expenses together with Bucketus.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <BackgroundAccent />
        {children}
      </body>
    </html>
  );
}
