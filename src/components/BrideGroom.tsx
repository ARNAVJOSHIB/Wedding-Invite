"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const profiles = [
  {
    role: "Bride",
    name: "Bhagyashree",
    grandparent: "Grand-Daughter of Late Mr. Motilalsa Hiramansa Solanke",
    parents: [
      "Daughter of Smt. Ratnaprabha and",
      "Late Mr. Ramanlal Motilalsa Solanke"
    ],
    location: "Amravati",
    image: "/images/bride.jpg",
    color: "bg-[#7B2327]/5"
  },
  {
    role: "Groom",
    name: "Shrikant",
    grandparent: "Grandson of Late Mr. Vithobasa Narayansa Jesu",
    parents: [
      "Son of Mrs. Karuna and",
      "Mr. Kiran Vithobasa Jesu"
    ],
    location: "Nanded",
    image: "/images/groom.jpg",
    color: "bg-[#C8A25A]/5"
  }
];

export default function BrideGroom() {
  return (
    <section className="py-24 bg-wedding-paper relative overflow-hidden">
      
      {/* Decorative center line on desktop */}
      <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-px bg-wedding-border transform -translate-x-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <h3 className="corinthia-regular text-wedding-gold text-4xl mb-8">{profile.role}</h3>
              
              <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-64 md:h-80 mb-8 rounded-full overflow-hidden shadow-md group cursor-pointer border-4 border-wedding-bg">
                <div className={cn("absolute inset-0 z-10 transition-opacity duration-500", profile.color)} />
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <h2 className="text-5xl md:text-6xl font-ballet text-wedding-maroon mb-6">{profile.name}</h2>
              
              <div className="space-y-4 mb-6">
                <p className="font-serif italic text-wedding-text/60">{profile.grandparent}</p>
                {profile.parents.map((parent, i) => (
                  <p key={i} className="text-wedding-text">{parent}</p>
                ))}
              </div>
              
              <p className="font-sans tracking-widest text-xs uppercase text-wedding-gold mt-2">{profile.location}</p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
