import { Shield, Landmark, Truck, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Zero-Trust, SOC2, and Threat Hunting. We verify every CVE reference.",
    href: "/cybersecurity",
  },
  {
    icon: Landmark,
    title: "FinTech & Payments",
    description: "Embedded Finance, DeFi, and ISO 20022. No financial advice errors.",
    href: "/fintech",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description: "Drayage, Scope 3, and 4PL. We understand the jargon.",
    href: "/supply-chain",
  },
  {
    icon: Stethoscope,
    title: "HealthTech",
    description: "EHR interoperability and patient data. HIPAA-compliant workflows.",
    href: "/healthtech",
  },
];

const IndustrySelector = () => {
  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Speak Your Language.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep expertise in high-compliance industries where accuracy isn't optional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to={industry.href}
              className="group bg-card rounded-xl p-6 border border-border card-glow cursor-pointer block"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <industry.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySelector;
