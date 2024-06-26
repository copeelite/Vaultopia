import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import ProviderTanstack from '@/components/providers/ProviderTanstack'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaultopia",
  description: "For all rental needs",
};
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/../auth'
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={'relative flex h-full flex-col lg:overflow-hidden '}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SessionProvider>
          <ProviderTanstack>
            {children}
          </ProviderTanstack>
          </SessionProvider>  
        </ThemeProvider></body>
    </html>
  );
}
