"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  { value: 15, suffix: "+", title: "Years of Experience" },
  { value: 40, suffix: "+", title: "Projects Completed" },
  { value: 100, suffix: "%", title: "Client Satisfaction" },
];

function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    let frameId: number | undefined;

    if (isInView) {
      let startTime: number | undefined;
      const animate = (timestamp: number) => {
        if (startTime === undefined) {
          startTime = timestamp;
        }
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / (duration * 1000), 1);
        const easedProgress = easeOutCubic(progress);

        setCount(Math.round(easedProgress * end));

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      frameId = requestAnimationFrame(animate);
    } else {
      setCount(0);
    }

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isInView, end, duration]);

  return { count, ref, isInView };
}

const StatItem = ({
  value,
  suffix,
  title,
  index,
}: {
  value: number;
  suffix: string;
  title: string;
  index: number;
}) => {
  const { count, ref, isInView } = useCountUp(value, 1.5);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.4, scale: 0.85 }}
      transition={{ duration: 0.5, delay: isInView ? index * 0.15 : 0 }}
      className="flex flex-col items-center text-center"
    >
      <motion.p
        ref={ref}
        initial={false}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
        whileHover={{ scale: 1.1, y: isInView ? -5 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="font-serif text-[48px] font-bold text-text-dark dark:text-white leading-[1.2] tracking-[-0.01em] transition-colors duration-300"
      >
        {count}
        <motion.span
          initial={false}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={{ duration: 0.4, delay: isInView ? 0.25 + index * 0.1 : 0 }}
          className="text-primary"
        >
          {suffix}
        </motion.span>
      </motion.p>
      <motion.p
        initial={false}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: isInView ? 0.3 + index * 0.1 : 0 }}
        className="mt-2.5 text-base font-normal text-muted-foreground dark:text-neutral-400 leading-[1.6] transition-colors duration-300"
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-background dark:bg-[#0B0B0B] relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/50 dark:bg-white/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto py-10 sm:py-[60px] md:py-20 lg:py-[120px] relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
          {statsData.map((stat, index) => (
            <StatItem key={stat.title} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;