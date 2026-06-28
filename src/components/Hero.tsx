"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const handleExplore = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background decorations - Floral SVGs */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 opacity-5 pointer-events-none origin-top-left"
        animate={{ rotate: 5 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C30,10 70,50 100,100 C50,90 10,60 0,0 Z" fill="currentColor" />
          <path d="M0,50 C20,40 50,40 80,80 C40,70 10,70 0,50 Z" fill="currentColor" />
        </svg>
      </motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none origin-bottom-right rotate-180"
        animate={{ rotate: 185 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C30,10 70,50 100,100 C50,90 10,60 0,0 Z" fill="currentColor" />
          <path d="M0,50 C20,40 50,40 80,80 C40,70 10,70 0,50 Z" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto px-4 text-center mt-24 md:mt-32">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[88px] font-ballet text-wedding-maroon leading-none mb-4 px-2">
            Bhagyashree
            <span className="block text-3xl sm:text-4xl md:text-5xl italic my-2 text-wedding-gold">&</span>
            Shrikant
          </h1>
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans tracking-[0.2em] text-sm md:text-base text-wedding-text uppercase mt-6 mb-8 font-medium"
        >
          3 July 2026
        </motion.p>

        {/* Photo with Circular/Arch Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="relative w-64 h-80 md:w-80 md:h-[26rem] mb-12 rounded-t-full rounded-b-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-4 border-wedding-paper"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <Image
              src="/images/couple.jpg"
              alt="Bhagyashree and Shrikant"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Divider & Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-wedding-gold/50 mb-8" />
          
          <button
            onClick={handleExplore}
            className="px-8 py-3 rounded-full bg-wedding-paper text-wedding-text font-sans font-medium text-sm tracking-widest uppercase border border-wedding-border shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300"
          >
            Explore Invitation
          </button>
        </motion.div>

      </div>
    </section>
  );
}
