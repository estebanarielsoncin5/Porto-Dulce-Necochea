
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartSheet from "@/components/CartSheet";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CatalogSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <CartSheet />
    </main>
  );
}
