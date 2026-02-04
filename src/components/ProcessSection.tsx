import { ClipboardList, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "The Brief",
    description: "You give us the topic. Our Strategist maps the angle.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "The Engine",
    description: "We use Claude 3.5 & Perplexity to generate the 'Meat'.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "The Shield",
    description: "A human expert (JD, MD, or Engineer) manually edits for accuracy and tone.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-sm font-medium uppercase tracking-wider mb-4">
            The Sandwich Model
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            How We Deliver Accuracy at Scale
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            AI generates the foundation. Humans ensure it's bulletproof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-primary-foreground/20 -translate-x-1/2" />
              )}
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-accent text-sm font-mono mb-2">Step {step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary-foreground">{step.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
