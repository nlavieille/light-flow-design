import chatIcon from "@/assets/chat-icon.png";
import calendarIcon from "@/assets/calendar-icon.png";
import clockIcon from "@/assets/clock-icon.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: chatIcon,
      title: "Friendly Conversations",
      description: "Your AI assistant chats naturally with clients, answering their questions about your services, hours, and pricing.",
    },
    {
      icon: calendarIcon,
      title: "Easy Booking",
      description: "Clients can book appointments directly through the conversation. The system checks your calendar and confirms instantly.",
    },
    {
      icon: clockIcon,
      title: "Always Available",
      description: "Whether it's early morning or late at night, your assistant is ready to help—so you never miss an opportunity.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple. Natural. Helpful.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's how our AI assistant makes your business more accessible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 animate-gentle-float">
                <img 
                  src={step.icon} 
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
