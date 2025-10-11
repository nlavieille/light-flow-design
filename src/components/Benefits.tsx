import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "More Time for What Matters",
      description: "Stop answering the same questions repeatedly. Your AI assistant handles common inquiries so you can focus on serving your clients.",
    },
    {
      title: "Better Client Experience",
      description: "Clients get instant responses whenever they reach out—no waiting until business hours or playing phone tag.",
    },
    {
      title: "Never Miss an Appointment",
      description: "Bookings happen automatically, syncing directly to your calendar. Clients get immediate confirmation, and you stay organized.",
    },
    {
      title: "Professional & Friendly",
      description: "Your assistant represents your business warmly and professionally, creating a great first impression every time.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What This Means for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real benefits that make a difference every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
