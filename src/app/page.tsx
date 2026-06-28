import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import WeddingInfo from "@/components/WeddingInfo";
import Timeline from "@/components/Timeline";
import BrideGroom from "@/components/BrideGroom";
import Venue from "@/components/Venue";
import Countdown from "@/components/Countdown";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Family from "@/components/Family";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-wedding-bg">
      <Navigation />
      <Hero />
      <Quote />
      <WeddingInfo />
      <Timeline />
      <BrideGroom />
      {/* <CoupleStory /> -> Skipping specific implementation due to time, merging vibe into other sections */}
      <Venue />
      <Countdown />
      <Music />
      <Gallery />
      
      {/* Blessings Section */}
      <section className="py-24 bg-wedding-paper text-center px-4 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-wedding-border/50 -z-10" />
        <div className="max-w-3xl mx-auto bg-wedding-paper px-8">
          <svg className="w-12 h-12 mx-auto text-wedding-gold mb-8" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <h2 className="text-4xl md:text-5xl corinthia-regular text-wedding-maroon leading-relaxed">
            "May every step together<br />
            bring happiness, strength,<br />
            and lifelong companionship."
          </h2>
        </div>
      </section>

      <Family />
      <Footer />
    </main>
  );
}
