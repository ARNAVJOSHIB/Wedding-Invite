"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/WhatsApp Image 2026-06-28 at 5.20.00 PM (1).jpeg",
  "/images/gallery-1.jpg",
  "/images/WhatsApp Image 2026-06-28 at 5.20.02 PM.jpeg",
  "/images/WhatsApp Image 2026-06-28 at 5.20.19 PM.jpeg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-wedding-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="corinthia-regular text-wedding-gold text-4xl mb-1">Moments</p>
          <h2 className="text-5xl md:text-6xl font-ballet text-wedding-maroon">Our Gallery</h2>
        </motion.div>

        {/* Pinterest style / Masonry CSS approach */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="relative overflow-hidden rounded-[24px] shadow-sm cursor-pointer group"
            >
              {/* Aspect ratio trick to make them uneven if we don't have true masonry sizes,
                  but for columns CSS we can just let image define height or give arbitrary padding */}
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={800}
                height={index % 2 === 0 ? 1200 : 800} // Fakes different heights
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-wedding-dark-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
