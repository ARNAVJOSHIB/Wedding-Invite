"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const familyGroups = [
  {
    title: "With Blessings Of",
    members: [
      "Smt. Vijayatai Ramanlal Solanke",
      "Smt. Ratnaprabhatai Ramanlal Solanke",
      "Shri Gopal Motilalsa Solanke",
    ]
  },
  {
    title: "Eager to welcome you",
    members: [
      "Mrs. Priyanka Kapil Mamarde",
      "Mr. Kapil Sanjaysa Mamarde (Nagpur)",
    ]
  },
  {
    title: "Yours sincerely",
    members: [
      "Dr. Mr. Swami Gopalsa Solanke",
      "Mrs. Sapna Swami Solanke",
      "Mr. Mahendra Ramakrishnasa Pandhare (Amravati)",
      "Mr. Ashish Prakashsa Parihar (Pune)",
      "Mr. Chetak Chandrakantsa Bhangage (Thane)",
    ]
  },
  {
    title: "Event Coordinators",
    members: [
      "Shri Prashant Dingabarsa Chavan",
      "Shri Nilesh Dingabarsa Chavan",
      "Shri Datta Dingabarsa Chavan",
      "Shri Mangesh Dingabarsa Chavan",
      "Shri Gajanan Dingabarsa Chavan",
      "Shri Pradip Manoharsa Barad",
    ]
  }
];

export default function Family() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="people" className="py-24 bg-wedding-paper relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="corinthia-regular text-wedding-gold text-4xl mb-1">Our Loved Ones</p>
          <h2 className="text-5xl md:text-6xl font-ballet text-wedding-maroon">Family & Friends</h2>
        </motion.div>

        {/* Desktop Layout - Cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {familyGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-wedding-bg p-8 rounded-[24px] border border-wedding-border/40 shadow-sm flex flex-col h-full"
            >
              <h3 className="corinthia-bold text-4xl text-wedding-maroon mb-4 text-center">{group.title}</h3>
              <ul className="space-y-3 flex-grow text-center text-wedding-text/80 text-sm">
                {group.members.map((member, idx) => (
                  <li key={idx}>{member}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout - Accordion */}
        <div className="md:hidden space-y-4">
          {familyGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-wedding-bg rounded-[20px] border border-wedding-border/40 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="corinthia-bold text-4xl text-wedding-maroon">{group.title}</h3>
                <ChevronDown 
                  className={cn("text-wedding-gold transition-transform duration-300", openIndex === index ? "rotate-180" : "")} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <ul className="px-6 pb-6 space-y-3 text-wedding-text/80 text-sm">
                  {group.members.map((member, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-wedding-gold mr-2 mt-1 text-xs">•</span>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
