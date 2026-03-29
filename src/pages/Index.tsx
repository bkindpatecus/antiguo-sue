import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuSection from "@/components/MenuSection";
import ShowsSection from "@/components/ShowsSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import ReservationSection from "@/components/ReservationSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Force scroll to top on load, override browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedDishes />
      <MenuSection />
      <ShowsSection />
      <GallerySection />
      <EventsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
