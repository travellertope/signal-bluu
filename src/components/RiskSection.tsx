import { Scale, AlertOctagon, Search } from "lucide-react";

const risks = [
  {
    icon: Scale,
    title: "Compliance Risk",
    description: "ChatGPT doesn't know HIPAA or SEC Rule 206(4). We do.",
  },
  {
    icon: AlertOctagon,
    title: "Reputation Risk",
    description: "One hallucinated statistic can ruin your brand's authority.",
  },
  {
    icon: Search,
    title: "SEO Risk",
    description: "Google is de-indexing 'thin' AI content. Our human editing signals expertise (E-E-A-T).",
  },
];

const RiskSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Generic AI is a Liability Risk.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your industry demands precision. Here's what's at stake.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:border-border/80 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                <risk.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{risk.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {risk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
