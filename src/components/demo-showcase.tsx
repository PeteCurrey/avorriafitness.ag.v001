import { Button } from "@/components/ui/button";
import { FadeIn } from "./fade-in";

export function DemoShowcase() {
  return (
    <section id="demo" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wide">
            See it live. <br className="hidden md:block" />
            <span className="text-brand-accent">This is what your gym could look like.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Forge Fitness is our showcase — a fully-built boutique gym website with live timetable, member login and full management system. Click around it.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} className="mb-16">
          <Button size="lg" className="bg-brand-accent text-white hover:bg-brand-accent/90 text-lg px-8 py-6 rounded-sm">
            Visit Forge Fitness →
          </Button>
        </FadeIn>

        <FadeIn delay={0.6} direction="up" className="max-w-5xl mx-auto relative mt-12">
          {/* Flat Device Mockup */}
          <div className="relative pt-[56.25%] bg-brand-panel border border-white/10 rounded-t-xl overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-8 bg-black/50 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="mx-auto bg-white/10 h-4 w-1/3 rounded-sm" />
            </div>
            <div className="absolute top-8 left-0 w-full h-[calc(100%-2rem)] bg-brand-dark p-8 flex flex-col gap-4">
              <div className="w-full h-1/2 bg-white/5 rounded-sm" />
              <div className="flex gap-4 h-1/2">
                <div className="w-1/3 h-full bg-white/5 rounded-sm" />
                <div className="w-2/3 h-full bg-white/5 rounded-sm" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
