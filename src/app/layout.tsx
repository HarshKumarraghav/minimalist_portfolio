import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProviders from "@/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Harsh K. Raghav",
  description:
    "Software Engineer, Full Stack Developer, Go, React.js, and Next.js enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
