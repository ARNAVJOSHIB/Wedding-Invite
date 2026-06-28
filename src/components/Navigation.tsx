"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, Calendar, MapPin, Image as ImageIcon, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Story", href: "#story", icon: BookOpen },
  { name: "Events", href: "#events", icon: Calendar },
  { name: "Venue", href: "#venue", icon: MapPin },
  { name: "Gallery", href: "#gallery", icon: ImageIcon },
  { name: "People", href: "#people", icon: Users },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Basic scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-center py-4 transition-colors duration-500",
          isScrolled ? "bg-wedding-paper/95 backdrop-blur-md shadow-sm border-b border-wedding-border/50" : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "font-serif tracking-widest text-sm uppercase transition-colors duration-300",
                activeSection === item.href.substring(1)
                  ? "text-wedding-maroon font-semibold"
                  : "text-wedding-text hover:text-wedding-maroon"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </motion.header>

      {/* Mobile Floating Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          className="bg-wedding-paper/70 backdrop-blur-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-wedding-border/50 rounded-full py-3 px-6 w-full max-w-sm pointer-events-auto"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <ul className="flex items-center justify-between">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex flex-col items-center p-2 relative"
                    aria-label={item.name}
                  >
                    <item.icon
                      size={20}
                      className={cn(
                        "transition-colors duration-300",
                        isActive ? "text-wedding-maroon" : "text-wedding-text/60"
                      )}
                      strokeWidth={1.5}
                    />
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 w-1 h-1 bg-wedding-maroon rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </div>
    </>
  );
}
