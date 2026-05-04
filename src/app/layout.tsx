import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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
  metadataBase: new URL("https://fitness.avorria.com"),
  title: {
    default: "Avorria Fitness | Fully Loaded Digital Platforms",
    template: "%s | Avorria Fitness",
  },
  description: "Complete digital platforms for independent gyms and fitness studios. Website, class booking, member portal, and management system.",
  openGraph: {
    title: "Avorria Fitness | Fully Loaded Digital Platforms",
    description: "Complete digital platforms for independent gyms and fitness studios. Website, class booking, member portal, and management system.",
    url: "https://fitness.avorria.com",
    siteName: "Avorria Fitness",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avorria Fitness | Fully Loaded Digital Platforms",
    description: "Complete digital platforms for independent gyms and fitness studios. Website, class booking, member portal, and management system.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
