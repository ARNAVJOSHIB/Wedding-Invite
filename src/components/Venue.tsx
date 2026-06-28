"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarPlus, Navigation } from "lucide-react";
import Image from "next/image";

export default function Venue() {
  return (
    <section id="venue" className="py-24 bg-wedding-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-wedding-paper mx-auto flex items-center justify-center border border-wedding-border mb-6 text-wedding-gold shadow-sm">
            <MapPin size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-5xl md:text-6xl font-ballet text-wedding-maroon mb-4">The Venue</h2>
          <div className="w-12 h-px bg-wedding-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-wedding-paper rounded-[32px] p-4 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-wedding-border/40">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-full min-h-[400px] w-full rounded-[24px] overflow-hidden"
          >
            {/* We use an image placeholder for the map to keep it elegant, or a grayscale iframe */}
            <Image
              src="/images/venue.jpg"
              alt="Venue"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center p-8 md:p-12"
          >
            <h3 className="text-5xl corinthia-bold text-wedding-maroon mb-1">Parinay Bandh</h3>
            <p className="text-xl font-serif text-wedding-text/80 mb-6">Vyankatesh Lawn</p>
            <p className="text-wedding-text mb-12 max-w-sm">
              Shilangan Road, Amravati
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Parinay+Bandh,+Vyankatesh+Lawn,+Shilangan+Road,+Amravati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-wedding-maroon text-wedding-paper font-sans text-sm tracking-widest uppercase shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony:+Bhagyashree+%26+Shrikant&dates=20260703T065300Z/20260703T100000Z&details=Join+us+in+celebrating+the+wedding+of+Bhagyashree+%26+Shrikant&location=Parinay+Bandh,+Vyankatesh+Lawn,+Shilangan+Road,+Amravati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-transparent border border-wedding-gold text-wedding-maroon font-sans text-sm tracking-widest uppercase hover:bg-wedding-gold/5 transition-all duration-300"
              >
                <CalendarPlus size={16} />
                <span>Save to Calendar</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
