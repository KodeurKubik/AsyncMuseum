import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../header";
import Footer from "../footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AsyncMuseum - Un musée par comme les autres",
  description: "Fait en 4 heures pour L'AsyncLeague #4 par Kubik !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 dark`}
      >
        <div className="flex min-h-screen flex-col mx-auto px-4 sm:px-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
