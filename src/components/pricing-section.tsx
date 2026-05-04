import { FadeIn } from "./fade-in";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const tiers = [
    {
      name: "FOUNDATION",
      price: "£69/mo",
      features: [
        "Gym website",
        "Class timetable display",
        "Local SEO setup",
        "Custom domain & hosting",
        "1 admin account"
      ]
    },
    {
      name: "PRO",
      price: "£129/mo",
      isPopular: true,
      features: [
        "Everything in Foundation",
        "Online class booking",
        "Member portal (login, bookings, history)",
        "PT management",
        "3 staff accounts",
        "Monthly support"
      ]
    },
    {
      name: "ELITE",
      price: "£199/mo",
      features: [
        "Everything in Pro",
        "Membership management & billing",
        "Unlimited staff accounts",
        "Priority support",
        "Custom integrations on request"
      ]
    }
  ];

  return (
    <section id="packages" className="py-24 bg-white text-brand-dark">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4">
            Simple pricing. <br className="hidden md:block" />
            <span className="text-brand-muted">No per-member fees. No surprises.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <FadeIn key={i} delay={0.2 + (i * 0.1)}>
              <Card className={`h-full relative rounded-sm flex flex-col ${tier.isPopular ? 'border-brand-accent shadow-lg scale-105 z-10' : 'border-brand-border shadow-sm bg-brand-light/50'}`}>
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-4 py-1 text-sm font-bold tracking-wider rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center pt-10">
                  <CardTitle className="font-display tracking-widest text-xl text-brand-muted mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-5xl font-display text-brand-dark">{tier.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4 mt-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-brand-dark/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={`w-full rounded-sm py-6 text-lg ${tier.isPopular ? 'bg-brand-accent text-white hover:bg-brand-accent/90' : 'bg-brand-dark text-white hover:bg-brand-dark/90'}`}>
                    Choose {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
