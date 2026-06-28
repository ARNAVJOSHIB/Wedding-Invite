"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 bg-wedding-dark-maroon text-wedding-paper relative border-t-8 border-wedding-gold/20 pb-40 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Ganesh Illustration SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 flex justify-center text-wedding-gold"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" className="text-wedding-gold">
            {/* Back Envelope (tilted) */}
            <g transform="rotate(15, 65, 50)">
              <rect x="35" y="30" width="50" height="35" rx="3" fill="var(--color-wedding-dark-maroon)" />
              <path d="M 35 30 L 60 48 L 85 30" />
              <path d="M 35 65 L 50 54" />
              <path d="M 85 65 L 70 54" />
            </g>
            {/* Front Envelope (straight) */}
            <g transform="translate(-15, 10)">
              <rect x="25" y="35" width="60" height="42" rx="4" fill="var(--color-wedding-dark-maroon)" />
              <path d="M 25 35 L 55 58 L 85 35" />
              {/* Heart */}
              <path d="M 55 68 C 55 68 41 56 41 47 C 41 40 48 35 55 43 C 62 35 69 40 69 47 C 69 56 55 68 55 68 Z" fill="currentColor" stroke="none" />
            </g>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="corinthia-regular text-wedding-gold text-4xl mb-4">With love,</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-ballet text-wedding-paper mb-8 px-2">Bhagyashree & Shrikant</h2>
          
          <p className="font-serif text-wedding-gold/80 italic text-lg mb-12">
            "It is my aunt's wedding, and the invitation comes earnestly from me...!"<br/>
            - Ms. Siya
          </p>

          <div className="w-24 h-px bg-wedding-gold/30 mx-auto mb-8" />
          
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-wedding-paper/50">
            © {new Date().getFullYear()} • Amravati, Maharashtra
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
