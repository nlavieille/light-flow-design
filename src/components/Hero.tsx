import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import ContactFormModal from "./ContactFormModal";

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Always There When Your Clients Need You
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Your business can be available 24/7 with a friendly AI assistant that answers questions and books appointments—no extra staff needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="text-lg" onClick={scrollToHowItWorks}>
              See How It Works
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={() => setIsContactModalOpen(true)}>
              Book a Free Demo
            </Button>
          </div>
        </div>
      </div>
      <ContactFormModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
};

export default Hero;
