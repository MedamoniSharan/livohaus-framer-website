import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import LogoMarquee from "@/components/sections/logo-marquee";
import StatsSection from "@/components/sections/stats";
import AboutSection from "@/components/sections/about";
import Services from "@/components/sections/services";
import ProjectsCarousel from "@/components/sections/projects-carousel";
import CtaBook from "@/components/sections/cta-book";
import Testimonials from "@/components/sections/testimonials";
import Faq from "@/components/sections/faq";
import ContactFormSection from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-0">
        <Hero />
        <LogoMarquee />
        <StatsSection />
        <AboutSection />
        <Services />
        <ProjectsCarousel />
        <CtaBook />
        <Testimonials />
        <Faq />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}