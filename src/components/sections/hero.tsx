"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useParallax } from "@/hooks/use-parallax";

const heroSlides = [
  {
    image: "/hero-1.png",
    badge: "#1 Choice for Home Renovation in California",
    title: "Building Spaces That Reflect You — With Craft, Care and Complete Control",
    description: "ASL Realtors transforms homes with timeless design, superior materials, and detail-driven construction — all managed with care from concept to completion.",
  },
  {
    image: "/hero-2.webp",
    badge: "Premium Real Estate Solutions",
    title: "Transform Your Vision Into Reality With Expert Craftsmanship",
    description: "Experience luxury living with our comprehensive renovation services designed to exceed your expectations.",
  },
  {
    image: "/hero-3.webp",
    badge: "Award-Winning Designs",
    title: "Creating Dream Homes That Stand The Test of Time",
    description: "From concept to completion, we deliver exceptional results that blend functionality with breathtaking aesthetics.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxOffset = useParallax(0.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] lg:min-h-[900px] text-white overflow-hidden">
      {/* Background Images with Parallax and Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
              >
                <Image
                  src={slide.image}
                  alt="Modern luxury interior"
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/60 to-[#0B0B0B]/90" />
        {/* Soft gradient to keep navbar readable without hiding imagery */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0B0B0B]/75 via-[#0B0B0B]/40 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto">
        <div className="h-full flex flex-col justify-center text-center lg:text-left lg:grid lg:grid-cols-12 lg:gap-x-8 pt-28 md:pt-32 lg:pt-36">
          
          {/* Main Content Area (Left/Top) */}
          <div className="lg:col-span-8 lg:my-auto flex flex-col items-center lg:items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="border border-primary/40 rounded-full py-1.5 px-3.5 inline-block mb-6"
                >
                  <h6 className="text-primary text-[14px] font-semibold uppercase tracking-[0.05em] leading-[1.5]">
                    {heroSlides[currentSlide].badge}
                  </h6>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-[-0.02em] max-w-4xl mb-6 text-white"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-lg text-white max-w-lg mb-8 leading-[1.6]"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="request-quote-button"
                >
                  <span className="request-quote-text">Request Free Quote</span>
                  <span className="request-quote-icon">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex gap-2 mt-8"
            >
              {heroSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          {/* Testimonial Area (Right/Bottom) */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hidden lg:col-start-9 lg:col-span-4 lg:flex lg:items-end lg:pb-20"
          >
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </motion.div>
                ))}
              </div>
              <p className="text-base text-white mb-4">
                "ASL Realtors made our renovation easy and seamless. The results were better than we imagined, and the team was professional from start to finish."
              </p>
              <p className="text-sm text-white/70">
                - Jessica M., San Diego
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;