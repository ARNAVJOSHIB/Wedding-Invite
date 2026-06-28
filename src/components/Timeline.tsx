"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Utensils, Camera } from "lucide-react";

const timelineEvents = [
  { time: "11:00 AM", title: "Guests Arrival", icon: Sparkles },
  { time: "12:25 PM", title: "Wedding Ceremony", icon: Heart },
  { time: "01:30 PM", title: "Blessings", icon: Sparkles },
  { time: "02:00 PM", title: "Lunch", icon: Utensils },
  { time: "03:30 PM", title: "Photography", icon: Camera },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-wedding-bg relative">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-ballet text-wedding-maroon mb-4">Event Schedule</h2>
          <div className="w-12 h-px bg-wedding-gold mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-wedding-border transform md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center md:justify-between w-full">
                
                {/* Desktop Left (Empty or Content) */}
                <div className="hidden md:block w-[45%] text-right pr-8">
                  {index % 2 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <h4 className="text-3xl corinthia-bold text-wedding-maroon">{event.title}</h4>
                      <p className="text-wedding-text/70 mt-1">{event.time}</p>
                    </motion.div>
                  ) : null}
                </div>

                {/* Icon in Center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="absolute left-12 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-wedding-paper border border-wedding-gold flex items-center justify-center z-10 shadow-sm"
                >
                  <event.icon size={16} className="text-wedding-gold" />
                </motion.div>

                {/* Desktop Right (Content or Empty) */}
                <div className="hidden md:block w-[45%] pl-8">
                  {index % 2 !== 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    >
                      <h4 className="text-3xl corinthia-bold text-wedding-maroon">{event.title}</h4>
                      <p className="text-wedding-text/70 mt-1">{event.time}</p>
                    </motion.div>
                  ) : null}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden ml-24 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-wedding-paper p-4 rounded-[16px] border border-wedding-border/50 shadow-sm"
                  >
                    <p className="text-sm text-wedding-gold font-medium mb-1">{event.time}</p>
                    <h4 className="text-3xl corinthia-bold text-wedding-maroon">{event.title}</h4>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
