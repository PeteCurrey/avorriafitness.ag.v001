"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-wide group-hover:text-brand-accent transition-colors">
            AVORRIA <span className="text-brand-accent italic">/</span> FITNESS
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#features" className="hover:text-brand-accent transition-colors">Features</Link>
          <Link href="#packages" className="hover:text-brand-accent transition-colors">Packages</Link>
          <Link href="#demo" className="hover:text-brand-accent transition-colors">Demo</Link>
          <Link href="#about" className="hover:text-brand-accent transition-colors">About</Link>
          <Link href="#contact" className="hover:text-brand-accent transition-colors">Contact</Link>
        </nav>
        <Button className="bg-brand-accent text-white hover:bg-brand-accent/90 font-medium rounded-sm">
          Book a Discovery Call
        </Button>
      </div>
    </header>
  );
}
