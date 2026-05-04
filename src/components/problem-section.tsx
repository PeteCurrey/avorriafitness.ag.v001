import { FadeIn } from "./fade-in";

export function ProblemSection() {
  return (
    <section className="py-24 bg-white text-brand-dark">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wide">
            You're a great gym. <br className="hidden md:block" />
            <span className="text-brand-muted">Nobody can find you online.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            "62% of gym members research and book online before ever visiting",
            "Independent gyms are losing members to chains with slicker apps",
            "Most gym software costs £200+/mo and still looks terrible"
          ].map((stat, i) => (
            <FadeIn key={i} delay={0.2 + (i * 0.1)} className="bg-brand-light p-8 border border-brand-border rounded-sm">
              <div className="text-brand-accent font-display text-2xl mb-4">0{i + 1}</div>
              <p className="font-medium text-lg leading-snug">{stat}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-center max-w-3xl mx-auto text-lg md:text-xl text-brand-muted">
            Independents win on community, coaching quality and culture — but only if they show up online as professionally as they train.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
