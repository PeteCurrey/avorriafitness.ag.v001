import { Button } from "@/components/ui/button";
import { FadeIn } from "./fade-in";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-dark overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn delay={0.1}>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white tracking-wider leading-[0.9] mb-8">
            YOUR GYM.<br />
            <span className="text-brand-accent">FULLY LOADED.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            We build complete digital platforms for independent gyms and fitness studios — website, class booking, member portal and management system. Everything the big chains have. Built for you.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-brand-accent text-white hover:bg-brand-accent/90 w-full sm:w-auto text-lg px-8 py-6 rounded-sm">
            See the Demo
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white w-full sm:w-auto text-lg px-8 py-6 rounded-sm bg-transparent">
            View Packages
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
