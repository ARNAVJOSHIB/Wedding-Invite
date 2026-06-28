"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Utensils, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const details = [
  {
    title: "Wedding Ceremony",
    description: "The sacred union of two souls.",
    icon: Heart,
    time: "12:23 PM (Abhijit Muhurat)",
    date: "Friday, 03.07.2026",
    delay: 0.1
  },
  {
    title: "Lunch Reception",
    description: "Lunch will be served immediately after the wedding ceremony.",
    icon: Utensils,
    time: "",
    date: "",
    delay: 0.3
  }
];

export default function WeddingInfo() {
  return (
    <section id="events" className="py-24 bg-wedding-paper relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="corinthia-regular text-wedding-gold text-4xl mb-1">Our Wedding</p>
          <h2 className="text-5xl md:text-6xl font-ballet text-wedding-maroon">The Celebration</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: detail.delay }}
              className="bg-wedding-bg rounded-[24px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-wedding-border/40 hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-shadow duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-wedding-paper flex items-center justify-center border border-wedding-border mb-6 text-wedding-gold shadow-sm">
                  <detail.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-4xl corinthia-bold text-wedding-maroon mb-2">{detail.title}</h3>
                <p className="text-wedding-text/80 mb-8">{detail.description}</p>
                
                <div className="w-full space-y-4">
                {detail.time && (
                  <div className="flex items-center justify-center space-x-3 text-wedding-text">
                    <Clock size={18} className="text-wedding-gold" />
                    <span>{detail.time}</span>
                  </div>
                )}
                {detail.date && (
                  <div className="flex items-center justify-center space-x-3 text-wedding-text">
                    <Calendar size={18} className="text-wedding-gold" />
                    <span>{detail.date}</span>
                  </div>
                )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
