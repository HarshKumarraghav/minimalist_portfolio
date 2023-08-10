"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
interface ProviderProps {
  children: ReactNode;
}
export default function ThemeProviders({ children }: ProviderProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{children}</>;
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
