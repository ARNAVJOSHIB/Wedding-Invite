"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section id="story" className="py-24 md:py-32 flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto"
      >
        <svg className="w-12 h-12 mx-auto text-wedding-gold/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <h2 className="text-5xl md:text-6xl lg:text-[68px] corinthia-regular text-wedding-maroon leading-tight">
          Two hearts.<br />
          One beautiful beginning.
        </h2>
        
        <div className="flex items-center justify-center mt-12">
          <div className="w-16 h-px bg-wedding-border" />
          <div className="w-2 h-2 mx-4 rotate-45 border border-wedding-gold" />
          <div className="w-16 h-px bg-wedding-border" />
        </div>
      </motion.div>
    </section>
  );
}
