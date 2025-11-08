"use client";

import { ArrowRight, Phone, Bookmark } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const CtaBook = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax(0.5);

  return (
    <section
      className="relative bg-cover bg-center text-white py-20 md:py-28 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/kKJfMEkulKZsfdg43ESPRDSmCk-13.jpeg')`,
          y: parallaxOffset,
        }}
        aria-hidden="true"
      />
      
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      />

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border-2 border-primary/30 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div ref={ref} className="relative z-10 container mx-auto px-5 text-center flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isVisible ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-primary rounded-full bg-primary/10 text-primary"
        >
          <Bookmark className="h-4 w-4" aria-hidden="true" />
          <h6 className="uppercase tracking-wider text-sm font-semibold">
            Book Now
          </h6>
        </motion.div>

        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight mb-4"
        >
          Ready to Start Your <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-primary"
          >Renovation?</motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Let's bring your space to life with craftsmanship, clarity, and care.
          Whether it&apos;s a full remodel or a custom home build, ASL Realtors
          makes the process smooth, transparent, and beautifully executed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="request-quote-button w-full sm:w-auto"
          >
            <span className="request-quote-text">Request Free Quote</span>
            <span className="request-quote-icon">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.a>

          <motion.a
            href="tel:+19512390523"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-[14px] border-2 border-primary text-white text-base font-medium leading-tight rounded-full transition-colors duration-300 hover:bg-primary group"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Phone className="h-5 w-5" />
            </motion.div>
            Call Us Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBook;