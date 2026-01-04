import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Layer Seven Studio | Full Stack Web Development Agency",
  description: "Premium full-stack web development agency specializing in modern web applications, frontend, backend, CI/CD, and cloud infrastructure. Building exceptional digital experiences.",
  keywords: ["web development", "full stack", "frontend", "backend", "CI/CD", "software agency"],
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
        <CursorEffect />
        {children}
      </body>
    </html>
  );
}
