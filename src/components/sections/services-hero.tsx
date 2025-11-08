"use client";

import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ServicesHero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-gradient-to-br from-[#FDF8F3] to-[#FFF5E6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary text-primary pl-3 pr-4 py-1.5 text-[13px] font-semibold tracking-wider uppercase mb-6">
            <span>Our Services</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
            Comprehensive <span className="text-primary">Renovation</span> Services
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            From concept to completion, we offer end-to-end renovation services tailored to transform your space into the home of your dreams.
          </p>
          <a
            href="#contact"
            className="request-quote-button"
          >
            <span className="request-quote-text">Request Free Quote</span>
            <span className="request-quote-icon">
            <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
