"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Music as MusicIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let playAttempted = false;

    const tryPlay = async () => {
      if (audioRef.current && audioRef.current.paused && !playAttempted) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          playAttempted = true;
          // Remove listeners once playing
          document.removeEventListener("click", tryPlay);
          document.removeEventListener("scroll", tryPlay);
          document.removeEventListener("touchstart", tryPlay);
        } catch (err) {
          console.log("Autoplay waiting for user interaction:", err);
        }
      }
    };

    // Try immediately (might work if policy allows)
    tryPlay();

    // Fallback: wait for user's first interaction anywhere on the page
    document.addEventListener("click", tryPlay);
    document.addEventListener("scroll", tryPlay, { passive: true });
    document.addEventListener("touchstart", tryPlay, { passive: true });

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("scroll", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 bg-wedding-maroon text-wedding-paper relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-ballet mb-2">Our Playlist</h2>
          <p className="corinthia-regular text-wedding-gold text-4xl">A playlist for our forever</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          
          {/* Vinyl Record */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", bounce: 0 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#111] border-4 border-[#222] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center relative overflow-hidden"
            >
              {/* Grooves */}
              <div className="absolute inset-2 rounded-full border border-[#333] opacity-50" />
              <div className="absolute inset-6 rounded-full border border-[#333] opacity-50" />
              <div className="absolute inset-10 rounded-full border border-[#333] opacity-50" />
              <div className="absolute inset-14 rounded-full border border-[#333] opacity-50" />
              
              {/* Center Label */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-wedding-gold flex items-center justify-center border-2 border-[#111] z-10 relative">
                <MusicIcon size={20} className="text-[#111]" />
                <div className="absolute w-2 h-2 bg-[#111] rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center max-w-[240px] w-full"
          >
            <h3 className="font-serif text-2xl text-wedding-gold mb-1 truncate w-full">Pal Pal Dil Ke Paas</h3>
            <p className="font-sans text-sm tracking-wider text-wedding-gold uppercase mb-8">Kishore Kumar (Instrumental)</p>

            <audio ref={audioRef} src="/audio/YTMP3GG_YouTube_Pal-Pal-Dil-Ke-Paas-Instrumental_Media_0oCwcZy4pVM_007_128k (mp3cut.net).mp3" loop />

            <div className="flex items-center justify-center gap-6 mb-8">
              <button className="text-wedding-paper/60 hover:text-wedding-gold transition-colors">
                <SkipBack size={24} fill="currentColor" />
              </button>
              
              <button 
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-wedding-gold text-wedding-dark-maroon flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause size={24} fill="currentColor" />
                ) : (
                  <Play size={24} fill="currentColor" className="ml-1" />
                )}
              </button>

              <button className="text-wedding-paper/60 hover:text-wedding-gold transition-colors">
                <SkipForward size={24} fill="currentColor" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-wedding-paper/20 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-wedding-gold"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "30%" }}
                transition={{ duration: isPlaying ? 180 : 0, ease: "linear" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
