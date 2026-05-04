import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avorria Fitness | Fully Loaded Digital Platforms",
  description: "Complete digital platforms for independent gyms and fitness studios. Website, class booking, member portal, and management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased smooth-scroll`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">{children}</body>
    </html>
  );
}
