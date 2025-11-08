"use client";

import Image from "next/image";
import Link from "next/link";
import { Cog, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const servicesData = [
  {
    title: "Full-Home Renovation",
    description: "Complete home transformations tailored to your style and needs.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/Im4wRuRxPa3ij9n8tGFDxaDAys-5.webp",
    gridClassName: "lg:col-span-2",
  },
  {
    title: "Kitchen Remodeling",
    description: "Smart, stylish kitchens built for daily living.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/dQVBhioFSo1V7k0RuZBUvXHww90-6.webp",
    gridClassName: "lg:col-span-2",
  },
  {
    title: "Bathroom Renovation",
    description: "Modern, functional bathrooms with lasting comfort and quality.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/er9ElXqyF4wyN9WZZRVHGgH0IY-7.webp",
    gridClassName: "lg:col-span-2",
  },
  {
    title: "Outdoor Living Spaces",
    description: "Extend your home with inviting patios, decks, and garden zones.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/POxVH1JgZSlrsqIG0tAPuthBD8-8.png",
    gridClassName: "md:col-start-auto lg:col-start-2 lg:col-span-2",
  },
  {
    title: "Custom Finishing",
    description: "Built-ins, trim, flooring, lighting — we sweat the small stuff.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/0hfvpTKH6RiitJ9zFmfivKBBNE-9.jpg",
    gridClassName: "lg:col-span-2",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="services" className="bg-secondary dark:bg-[#0B0B0B] text-text-dark dark:text-white py-16 md:py-20 lg:py-[120px] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20">
        <div ref={ref} className="flex flex-col gap-16">
          <header className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full lg:flex-1 lg:max-w-[600px]"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-primary/10 dark:bg-neutral-900/60 px-4 py-2 mb-6 backdrop-blur-md transition-colors duration-300"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Cog className="h-4 w-4 text-primary" />
                </motion.div>
                <h6 className="text-primary text-sm font-semibold uppercase tracking-[0.05em]">Our Services</h6>
              </motion.div>
              <h2 className="text-[48px] font-bold leading-[1.2] tracking-[-0.01em] text-current dark:text-white transition-colors duration-300">
                Custom <span className="text-primary">Renovation</span> Services Designed to Fit Your Life
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:flex-1 lg:max-w-[480px]"
            >
              <p className="text-body-regular text-text-body dark:text-neutral-400 mb-8 transition-colors duration-300">
                From design to delivery, we offer end-to-end solutions tailored to your space, style, and schedule. Whether you're updating one room or remodeling your entire home, ASL Realtors makes it seamless.
              </p>
              <Link
                href="/#contact"
                className="request-quote-button"
              >
                <span className="request-quote-text">Request Free Quote</span>
                <span className="request-quote-icon">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </motion.div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative h-[480px] overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-none border border-transparent dark:border-white/10 ${service.gridClassName}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent transition-opacity group-hover:from-[#0B0B0B]/95" />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute bottom-0 left-0 right-0 z-10 p-8 text-white transform transition-transform group-hover:-translate-y-2"
                >
                  <h4 className="text-2xl font-semibold leading-[1.4] mb-2">{service.title}</h4>
                  <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.description}</p>
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;