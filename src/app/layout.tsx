import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const morrisRoman = localFont({
  src: "./fonts/MorrisRomanBlack.otf",
  variable: "--font-morris-roman",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Beechland Annexe",
  description: "Self catering annexe in the Isle of Lewis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} ${morrisRoman.variable} antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
