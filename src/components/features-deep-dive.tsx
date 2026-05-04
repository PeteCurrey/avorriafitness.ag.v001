import Image from "next/image";
import { FadeIn } from "./fade-in";

export function FeaturesDeepDive() {
  const features = [
    {
      title: "Timetable & Booking",
      description: "Live schedule, real-time availability, waitlist, online payment.",
      image: "/images/features_timetable.png",
    },
    {
      title: "Member Portal",
      description: "Class history, membership status, upcoming bookings, progress tracking.",
      image: "/images/features_portal.png",
    },
    {
      title: "Admin Dashboard",
      description: "Class management, member CRM, PT scheduling, revenue overview.",
      image: "/images/features_dashboard.png",
    },
    {
      title: "PT Management",
      description: "PT profiles, direct booking, session tracking.",
      image: "/images/features_pt.png",
    }
  ];

  return (
    <section className="py-24 bg-white text-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-24">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                <FadeIn direction={isEven ? "right" : "left"} className="flex-1 w-full">
                  <div className="w-full aspect-[4/3] bg-brand-light border border-brand-border rounded-md shadow-sm relative overflow-hidden flex flex-col">
                    <div className="h-8 border-b border-brand-border bg-white flex items-center px-4 gap-2 z-10 relative">
                      <div className="w-3 h-3 rounded-full bg-brand-border" />
                      <div className="w-3 h-3 rounded-full bg-brand-border" />
                      <div className="w-3 h-3 rounded-full bg-brand-border" />
                    </div>
                    <div className="flex-1 relative">
                      <Image 
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </FadeIn>
                <FadeIn direction={isEven ? "left" : "right"} className="flex-1">
                  <div className="max-w-xl">
                    <h3 className="font-display text-4xl mb-6 tracking-wide">{feature.title}</h3>
                    <p className="text-xl text-brand-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
