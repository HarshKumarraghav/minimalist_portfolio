import "./globals.css";
import type { Metadata } from "next";
import ThemeProviders from "@/Providers/ThemeProvider";
import { SoundProvider } from "@/Providers/SoundProvider";
export const metadata: Metadata = {
  title: "Harsh K. Raghav",
  description:
    "Software Engineer, Full Stack Developer, Go, React.js, and Next.js enthusiast",
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProviders>
          <SoundProvider>{children}</SoundProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
