import { FadeIn } from "./fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Calendar, LayoutDashboard } from "lucide-react";

export function PillarsSection() {
  const pillars = [
    {
      title: "Gym Website",
      description: "A fast, striking website that reflects your gym's identity. Class timetable, pricing, PT profiles, blog. Built to convert visitors into members.",
      icon: Globe
    },
    {
      title: "Class Booking & Member Portal",
      description: "Members book classes online, manage their membership, track attendance. No more DMs and spreadsheets.",
      icon: Calendar
    },
    {
      title: "Gym Management Dashboard",
      description: "Manage classes, members, PTs and revenue from one admin login. Built for gym owners, not IT managers.",
      icon: LayoutDashboard
    }
  ];

  return (
    <section id="features" className="py-24 bg-brand-light text-brand-dark">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-wide mb-4">
              One platform. <span className="text-brand-accent">Everything you need.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={0.2 + (i * 0.1)}>
              <Card className="h-full rounded-sm border-brand-border bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand-dark text-white rounded-sm flex items-center justify-center mb-4">
                    <pillar.icon size={24} />
                  </div>
                  <CardTitle className="font-display text-2xl tracking-wide">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-muted text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
