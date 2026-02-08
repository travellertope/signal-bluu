import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "The Pilot",
    price: "$250",
    period: "one-time",
    description: "Perfect for testing our quality.",
    features: [
      "1 Deep-Dive Article (2,000 words)",
      "Expert verification included",
      "2 revision rounds",
    ],
    cta: "Start Pilot",
    featured: false,
  },
  {
    name: "Growth",
    price: "$900",
    period: "/month",
    description: "Best for Series A Startups.",
    features: [
      "4 Articles / Month",
      "CMS Upload included",
      "Dedicated editor",
      "Priority turnaround",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Scale",
    price: "$2,000",
    period: "/month",
    description: "Best for Marketing Teams.",
    features: [
      "10 Articles / Month",
      "Topic Strategy included",
      "Quarterly content audits",
      "Slack channel access",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Flat Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No per-word charges. Just quality content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 border ${plan.featured
                  ? "border-accent bg-accent/5 shadow-lg scale-105"
                  : "border-border bg-card"
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="verified-badge px-3 py-1">Most Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.featured
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
