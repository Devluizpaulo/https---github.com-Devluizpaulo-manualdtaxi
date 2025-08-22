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
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238b5cf6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-car'%3E%3Cpath d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2'/%3E%3Cpath d='M9 17h6'/%3E%3Cpath d='M6 17H4c-.6 0-1-.4-1-1v-6c0-.9.7-1.7 1.5-1.9C4.7 7.6 7 7 7 7s1.3 1.4 2.2 2.3c.5.4 1.1.7 1.8.7h5c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-1'/%3E%3Ccircle cx='7.5' cy='17.5' r='2.5'/%3E%3Ccircle cx='16.5' cy='17.5' r='2.5'/%3E%3C/svg%3E" type="image/svg+xml" />
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
