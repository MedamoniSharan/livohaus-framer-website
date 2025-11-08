"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const target = value;
          const duration = 2000;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(current));
            }
          }, stepTime);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-start"
    >
      <p className="text-4xl md:text-5xl font-bold text-text-dark dark:text-white transition-colors duration-300">
        {count}
        {suffix && <span className="text-primary">{suffix}</span>}
      </p>
      <p className="mt-2 text-body-regular text-text-body dark:text-neutral-400 transition-colors duration-300">{label}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="about"
      className="bg-secondary dark:bg-[#0B0B0B] py-20 lg:py-[120px] relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated background patterns */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 border-4 border-primary/10 dark:border-white/5 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 border-4 border-primary/10 dark:border-white/5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-20 py-16 lg:py-24"
        >
          
          {/* Image Grid */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -20 }}
              animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full sm:w-auto flex-shrink-0 group perspective-1000"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl w-full h-[360px] sm:w-[388px] sm:h-[582px] shadow-2xl border border-white/10 dark:border-white/10 bg-white dark:bg-neutral-900/60 backdrop-blur-md transition-colors duration-300"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/vFndoLcfA59aVF8pqjh2ugiHfE-2.jpeg"
                  alt="A serene outdoor seating area with two chairs, surrounded by lush greenery and a glassed-in structure."
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </motion.div>
            </motion.div>
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl w-full h-[282px] sm:w-[282px] sm:h-[282px] shadow-xl border border-white/10 dark:border-white/10 bg-white dark:bg-neutral-900/60 backdrop-blur-md transition-colors duration-300"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/tdbYj955g6CmqYHaCPdteCGNbQ8-3.webp"
                    alt="Modern bathroom featuring wooden cabinetry, a bathtub, a sleek sink, and natural light from a window."
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateZ: -2 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl w-full h-[282px] sm:w-[282px] sm:h-[282px] shadow-xl border border-white/10 dark:border-white/10 bg-white dark:bg-neutral-900/60 backdrop-blur-md transition-colors duration-300"
                >
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/0boRvvQ1DjJHQaXT7ksu9cmVRA-4.png"
                    alt="Modern living room with abstract art, beige sectional sofa, indoor plants, and large windows."
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-6 lg:pl-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 self-start py-1.5 pl-2.5 pr-4 border border-primary/60 dark:border-white/10 rounded-full bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Home className="w-5 h-5 text-primary" />
              </motion.div>
              <h6 className="text-sm font-semibold uppercase tracking-[0.05em] text-primary">About ASL Realtors</h6>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-text-dark dark:text-white leading-tight transition-colors duration-300"
            >
              Transforming California Homes with <span className="text-primary">Vision, Craft, and Care.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-body-large text-text-body dark:text-neutral-400 transition-colors duration-300"
            >
              At ASL Realtors, we specialize in bringing your renovation dreams to life — with thoughtful design, expert craftsmanship, and an obsessive attention to detail. Based in California and proudly serving homeowners since 2008, we're more than just a renovation firm.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6"
            >
              <StatCounter value={15} suffix="+" label="Years of Experience" />
              <StatCounter value={40} suffix="+" label="Projects Completed" />
              <StatCounter value={100} suffix="%" label="Client Satisfaction" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;