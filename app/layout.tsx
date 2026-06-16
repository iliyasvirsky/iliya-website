import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Iliya Svirsky | Senior Software Engineer",
  description: "10+ years building scalable Node.js and full-stack systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-zinc-950 text-zinc-200">
        {children}
      </body>
    </html>
  );
}