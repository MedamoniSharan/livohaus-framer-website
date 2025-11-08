"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax motion for watermark text
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden bg-[#0B0B0B] text-white transition-colors duration-300"
    >
      {/* Background ASL Realtors Watermark */}
      <motion.div
        style={{ y }}
        className="absolute bottom-[10%] inset-x-0 flex justify-center pointer-events-none z-0"
      >
        <span className="font-black text-white/10 leading-none tracking-tight select-none text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] whitespace-nowrap translate-y-[15%]">
          ASL Realtors
        </span>
      </motion.div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 pt-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white/90 p-1 shadow-md dark:bg-white/10">
                <Image
                  src="/logo.jpg"
                  alt="ASL Realtors logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-semibold tracking-wide text-white">ASL Realtors</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-snug text-white mb-8">
              Your trusted partner in
              <br /> home renovation & interiors.
            </h2>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="request-quote-button"
              aria-label="Request a free quote"
            >
              <span className="request-quote-text">Request Free Quote</span>
              <span className="request-quote-icon">
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-5 text-base">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-[#A3A3A3] hover:text-[#FF5C28] transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold text-white mb-5 text-base">
              Contact Us
            </h3>
            <ul className="space-y-3 text-[#A3A3A3] text-base">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>California, United States</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="tel:617-555-0192"
                  className="hover:text-[#FF5C28] transition-colors"
                >
                  (617) 555-0192
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="mailto:contact@livohaus.com"
                  className="hover:text-[#FF5C28] transition-colors"
                >
                  contact@livohaus.com
                </a>
              </li>
            </ul>

            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "#FF5C28",
                    rotate: 360,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#1F1F1F] text-white p-2.5 rounded-full transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#A3A3A3] gap-4"
        >
          <p>
            © 2025 ASL Realtors ✦ Designed by{" "}
            <a
              href="#"
              className="text-[#FF5C28] hover:underline transition-colors"
            >
              OptiWebtrix Team
            </a>
          </p>
          <p>
            Crafted with care ✦ Powered by{" "}
            <a
              href="#"
              className="text-[#FF5C28] hover:underline transition-colors"
            >
              Framer
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
