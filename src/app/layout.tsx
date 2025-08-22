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
        <link rel="icon" href="data:image/png;base64,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" type="image/png" />
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
