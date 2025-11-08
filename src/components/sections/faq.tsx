"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex w-full flex-1 items-center justify-between py-6 text-left text-xl font-medium text-text-dark transition-all hover:no-underline",
        className
      )}
      {...props}
    >
      {children}
      <div className="relative h-6 w-6 flex-shrink-0">
        <Plus
          className="h-6 w-6 shrink-0 text-text-dark opacity-100 transition-all duration-300 group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90"
        />
        <Minus
          className="absolute inset-0 h-6 w-6 shrink-0 text-primary opacity-0 transition-all duration-300 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0"
        />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqData = [
  {
    value: "item-1",
    question: "How do I get started with ASL Realtors?",
    answer: "Just fill out the contact form and we'll schedule a free consultation to understand your space, needs, and goals.",
  },
  {
    value: "item-2",
    question: "Do you offer design services or only construction?",
    answer: "We offer comprehensive end-to-end services, which include both innovative design and expert construction. This integrated approach ensures a seamless and efficient process from the initial concept to the final completion of your project.",
  },
  {
    value: "item-3",
    question: "How long does a typical renovation take?",
    answer: "The duration of a renovation varies depending on the project's scope and complexity. A small bathroom remodel might take a few weeks, while a full home renovation could take several months. We provide a detailed project timeline after the initial consultation.",
  },
  {
    value: "item-4",
    question: "What areas do you serve?",
    answer: "ASL Realtors proudly serves homeowners throughout California. If you are unsure whether your location falls within our service area, please don't hesitate to reach out and we will be happy to confirm.",
  },
  {
    value: "item-5",
    question: "Are your estimates free?",
    answer: "Yes, all our initial consultations and project estimates are completely free and come with no obligation. We believe in providing transparent pricing and detailed proposals to help you make an informed decision.",
  },
  {
    value: "item-6",
    question: "Do you handle permits and inspections?",
    answer: "Absolutely. We manage the entire process, including securing all necessary building permits and scheduling inspections. Our team ensures that every aspect of your renovation project is fully compliant with all local codes and regulations.",
  },
];

export default function Faq() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="faq"
      className="bg-[#fdf8f3] dark:bg-[#0b0b0b] py-20 lg:py-[120px] relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-20 relative z-10">
        <div ref={ref} className="mx-auto mb-16 max-w-[800px] text-center">
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.05em] text-primary"
          >
            FAQ's
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-[48px] font-bold leading-tight tracking-[-0.01em] text-text-dark dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg leading-relaxed text-muted-foreground dark:text-neutral-300"
          >
            We know home renovation comes with big questions. Here are answers to the ones we hear most — so you can feel confident from the start.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto max-w-[1000px] bg-white dark:bg-neutral-900 rounded-2xl shadow-lg"
        >
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {faqData.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <AccordionItem value={item.value} className="px-6 last:border-b-0">
                  <CustomAccordionTrigger>
                    {item.question}
                  </CustomAccordionTrigger>
                  <AccordionContent className="pr-6">
                    <p className="leading-relaxed text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}