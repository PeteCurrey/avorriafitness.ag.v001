import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn } from "./fade-in";

export function FooterCta() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
          <h2 className="font-display text-5xl md:text-7xl mb-6 tracking-wide text-brand-accent">
            Ready to take your gym to the next level?
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10">
            Book a free 30-minute discovery call. No hard sell.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-accent text-white hover:bg-brand-accent/90 text-lg px-10 py-8 rounded-sm font-bold tracking-wide">
              Book Your Call
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
