"use client";

import Link from "next/link";
import { Cog, ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const servicesData = [
  {
    title: "Full-Home Renovation",
    description: "Complete home transformations tailored to your style and needs.",
    mediaType: "video",
    gridClassName: "lg:col-span-1",
    videoUrl: "https://res.cloudinary.com/dqvsoqsoy/video/upload/v1762633896/WhatsApp_Video_2025-11-08_at_11.21.14_PM_twburd.mp4",
  },
  {
    title: "Kitchen Remodeling",
    description: "Smart, stylish kitchens built for daily living.",
    mediaType: "video",
    gridClassName: "lg:col-span-1",
    videoUrl: "https://res.cloudinary.com/dqvsoqsoy/video/upload/v1762633890/WhatsApp_Video_2025-11-08_at_11.21.17_PM_bxpuvh.mp4",
  },
  {
    title: "Bathroom Renovation",
    description: "Modern, functional bathrooms with lasting comfort and quality.",
    mediaType: "video",
    gridClassName: "lg:col-span-1",
    videoUrl: "https://res.cloudinary.com/dqvsoqsoy/video/upload/v1762633889/WhatsApp_Video_2025-11-08_at_11.17.06_PM_qfymr0.mp4",
  },
  {
    title: "Outdoor Living Spaces",
    description: "Extend your home with inviting patios, decks, and garden zones.",
    mediaType: "video",
    gridClassName: "lg:col-span-1",
    videoUrl: "https://res.cloudinary.com/dqvsoqsoy/video/upload/v1762633905/WhatsApp_Video_2025-11-08_at_11.24.50_PM_qtyd5k.mp4",
  },
  {
    title: "Interior Styling",
    description: "Curated interiors that harmonize aesthetics with everyday comfort.",
    mediaType: "video",
    gridClassName: "lg:col-span-1",
    videoUrl: "https://res.cloudinary.com/dqvsoqsoy/video/upload/v1762633888/WhatsApp_Video_2025-11-08_at_11.17.12_PM_t6k1x5.mp4",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [modalVideoSize, setModalVideoSize] = useState<{ width: number; height: number } | null>(null);

  const viewportPadding = 80;

  const calculateModalSize = useCallback(
    (width: number, height: number) => {
      if (typeof window === "undefined") return { width, height };

      const maxWidth = Math.max(window.innerWidth - viewportPadding, 320);
      const maxHeight = Math.max(window.innerHeight - viewportPadding, 180);

      const widthRatio = maxWidth / width;
      const heightRatio = maxHeight / height;
      const ratio = Math.min(widthRatio, heightRatio, 1);

      return {
        width: Math.round(width * ratio),
        height: Math.round(height * ratio),
      };
    },
    [viewportPadding]
  );

  const updateModalSizeFromVideo = useCallback(() => {
    const videoElement = modalVideoRef.current;
    if (!videoElement) return;

    const { videoWidth, videoHeight } = videoElement;
    if (!videoWidth || !videoHeight) return;

    setModalVideoSize(calculateModalSize(videoWidth, videoHeight));
  }, [calculateModalSize]);

  useEffect(() => {
    if (selectedVideoIndex === null) return;

    const videoElement = modalVideoRef.current;
    if (!videoElement) return;

    const playVideo = async () => {
      videoElement.currentTime = 0;
      updateModalSizeFromVideo();
      try {
        await videoElement.play();
      } catch {
        // Autoplay might be blocked; allow user interaction to resume
      }
    };

    playVideo();

    const handleResize = () => updateModalSizeFromVideo();
    window.addEventListener("resize", handleResize);

    return () => {
      videoElement.pause();
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedVideoIndex, updateModalSizeFromVideo]);

  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setSelectedVideoIndex(null);
    setModalVideoSize(null);
  };

  const modalDimensions = useMemo(
    () => modalVideoSize ?? calculateModalSize(960, 540),
    [modalVideoSize, calculateModalSize]
  );

  const handleCardClick = (index: number) => {
    setModalVideoSize(null);
    setSelectedVideoIndex(index);
  };

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
                <span className="text-primary">Leased Out</span> properties
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleCardClick(index)}
                className={`group relative h-[480px] cursor-pointer overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-none border border-transparent dark:border-white/10 ${service.gridClassName}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <video
                    src={service.videoUrl}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/services-video-placeholder.jpg"
                  />
                </motion.div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent transition-opacity group-hover:from-[#0B0B0B]/95" />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-8 text-white transform transition-transform group-hover:-translate-y-2"
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
          {selectedVideoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-6 py-10"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="relative flex w-full items-center justify-center"
                style={{ width: modalDimensions.width, height: modalDimensions.height }}
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                  <video
                    ref={modalVideoRef}
                    src={servicesData[selectedVideoIndex].videoUrl}
                    className="h-full w-full bg-black object-contain"
                    controls
                    autoPlay
                    playsInline
                    onLoadedMetadata={updateModalSizeFromVideo}
                  />
                </div>
              </motion.div>
              <button
                onClick={closeModal}
                className="absolute inset-0 -z-10 h-full w-full cursor-default"
                aria-hidden="true"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;