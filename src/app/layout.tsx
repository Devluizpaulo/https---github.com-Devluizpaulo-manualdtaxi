import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "D-Táxi | Manual de Operações – Congonhas",
  description: "Manual de Operações da D-Táxi no Aeroporto de Congonhas – versão interativa e responsiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230a7d32' d='M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Zm0 2.2a7.8 7.8 0 1 0 0 15.6a7.8 7.8 0 0 0 0-15.6Zm-.2 2.4c.5 0 .9.4.9.9v4.6l3.3 1.9c.43.25.58.8.33 1.22a.9.9 0 0 1-1.22.33l-3.7-2.1a1.4 1.4 0 0 1-.64-1.2V7.5c0-.5.4-.9.9-.9Z'/%3E%3C/svg%3E" type="image/svg+xml" />
      </head>
      <body className={cn("font-body antialiased", inter.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
