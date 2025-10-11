import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Be More Available?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            See how easy it is to give your clients the instant service they're looking for. Book a quick demo—no pressure, just a friendly walkthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="warm" className="text-lg">
              Book Your Free Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
