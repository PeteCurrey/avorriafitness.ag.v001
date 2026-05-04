"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  gymName: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Enquiry sent successfully!", {
          description: "We'll get back to you as soon as possible.",
        });
        reset();
      } else {
        toast.error("Failed to send enquiry.", {
          description: result.error || "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("An error occurred.", {
        description: "Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-brand-light">
      <Navbar />
      
      <section className="flex-1 pt-32 pb-24 flex items-center justify-center bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
            <FadeIn className="flex-1">
              <h1 className="font-display text-5xl md:text-7xl tracking-wide mb-6">
                Let's Build <br />
                <span className="text-brand-accent">Your Platform.</span>
              </h1>
              <p className="text-xl text-brand-muted mb-10 leading-relaxed font-medium">
                Ready to upgrade your gym's digital presence? Fill out the form, and our team will get back to you to schedule a no-obligation discovery call.
              </p>
              
              <div className="space-y-6 text-brand-muted">
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Email Us</h3>
                  <a href="mailto:hello@avorria.com" className="hover:text-brand-accent transition-colors">hello@avorria.com</a>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Our Office</h3>
                  <p>Avorria Digital Agency<br />London, United Kingdom</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left" className="flex-1">
              <div className="bg-white rounded-md p-8 shadow-xl text-brand-dark">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" {...register("name")} className="bg-brand-light" placeholder="John Doe" />
                      {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" {...register("email")} className="bg-brand-light" placeholder="john@example.com" />
                      {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" {...register("phone")} className="bg-brand-light" placeholder="+44 7000 000000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gymName">Gym/Studio Name</Label>
                      <Input id="gymName" {...register("gymName")} className="bg-brand-light" placeholder="Zenith Movement" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      {...register("message")} 
                      className="bg-brand-light min-h-[120px]" 
                      placeholder="Tell us about your current setup and what you're looking for..." 
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-accent text-white hover:bg-brand-accent/90 py-6 text-lg rounded-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Enquiry"
                    )}
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
