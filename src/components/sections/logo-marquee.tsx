"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const logoFiles = [
  "logo0.jpeg",
  "logo1.jpeg",
  "logo2.jpeg",
  "logo3.jpeg",
  "logo4.jpeg",
  "logo5.jpeg",
  "logo7.jpeg",
  "logo8.jpeg",
  "logo9.jpeg",
  "logo10.jpeg",
  "logo11.jpeg",
  "logo12.jpeg",
  "logo13.jpeg",
  "logo14.jpeg",
  "logo15.jpeg",
  "logo16.jpeg",
];

const logos = logoFiles.map((file, index) => ({
  src: `/${file}`,
  alt: `Partner logo ${index + 1}`,
}));

export default function LogoMarquee() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#0B0B0B] via-[#121212] to-[#0B0B0B] dark:bg-gradient-to-r dark:from-[#050505] dark:via-[#0B0B0B] dark:to-[#050505] border-y border-white/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] uppercase text-primary/70 dark:text-primary/60 mb-6"
        >
          Our Clients
        </motion.p>
        <Marquee
          pauseOnHover
          gradient={false}
          speed={40}
          className="[--tw-marquee-gap:3rem]"
        >
          {logos.map((logo, index) => (
            <div key={logo.src} className="mx-10 flex items-center justify-center">
              <div className="relative h-16 w-40 md:h-20 md:w-44 lg:h-20 lg:w-52 opacity-80 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1200px) 200px, 208px"
                  className="object-contain drop-shadow-[0_8px_25px_rgba(255,100,47,0.15)] dark:drop-shadow-[0_8px_25px_rgba(255,72,0,0.18)]"
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
