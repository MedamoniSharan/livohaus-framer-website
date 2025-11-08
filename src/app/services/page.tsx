import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import ServicesHero from "@/components/sections/services-hero";
import LogoMarquee from "@/components/sections/logo-marquee";
import Services from "@/components/sections/services";
import CtaBook from "@/components/sections/cta-book";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        <ServicesHero />
        <LogoMarquee />
        <Services />
        <CtaBook />
      </main>
      <Footer />
    </div>
  );
}
