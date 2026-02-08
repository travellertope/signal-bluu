import { ShieldCheck, Zap, Search, UserCheck, CreditCard, Building, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const FintechPage = () => {
  const painPoints = [
    {
      title: 'The Regulatory Risk',
      description: 'Standard LLMs frequently hallucinate compliance details. They might promise "instant settlement" when you really mean "T+1," or misstate FDIC insurance limits. That\'s not a typo; that\'s a UDAAP violation.',
    },
    {
      title: 'The "Surface Level" Trap',
      description: 'AI explains what payments are. It fails to explain why your specific orchestration layer reduces decline rates by 4%.',
    },
    {
      title: 'The Trust Gap',
      description: 'Your buyers are CFOs and Developers. If your blog sounds like it was written by a robot, they assume your code was too.',
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "The Regulatory Strategy",
      description: "We don't guess topics. We analyze the market to find the specific pain points your product solves—whether it's Cross-Border Liquidity, Embedded Lending, or Reconciliation Automation.",
    },
    {
      number: "02",
      icon: Zap,
      title: "The Core Generation (AI)",
      description: "We utilize a custom stack (Claude 3.5 Sonnet + Real-Time Search) to draft the structural skeleton of the article at high speed, ensuring perfect formatting and SEO density.",
    },
    {
      number: "03",
      icon: UserCheck,
      title: "The Accuracy Verification (Human)",
      description: "This is our moat. A human subject-matter expert (typically a former Analyst, Banker, or FinTech PM) manually audits the draft. They verify every interchange rate, compliance citation (PCI-DSS v4.0, KYC/AML), and technical claim before it leaves our environment.",
    },
  ];

  const capabilities = [
    {
      icon: CreditCard,
      title: "Payment Infrastructure",
      focus: "Real-Time Payments (RTP), FedNow, ACH modernization, and ISO 20022 migration.",
      angle: '"Developer-First." We explain the API calls and settlement cycles, not just the marketing fluff.',
    },
    {
      icon: Building,
      title: "Embedded Finance & Banking-as-a-Service",
      focus: "API-driven lending, card issuance, and ledgering.",
      angle: '"Unit Economics." We write about how your platform improves margins and reduces float.',
    },
    {
      icon: FileText,
      title: "Regulatory & Compliance Guides",
      focus: "KYB/KYC workflows, PCI-DSS v4.0 readiness, and Open Banking (Dodd-Frank 1033).",
      angle: '"The Guidebook." Authoritative, cited content that helps your clients navigate the law.',
    },
  ];

  const comparisonData = [
    { feature: "Financial Depth", generalist: "Low (Generic finance terms)", chatgpt: "Hallucinates rates/regs", us: "Verified (Expert Loop)" },
    { feature: "Speed", generalist: "2 weeks per post", chatgpt: "Instant (but risky)", us: "48 hours" },
    { feature: "Compliance Check", generalist: "None", chatgpt: "None", us: "Included" },
    { feature: "Cost", generalist: "$600 - $1,200 / post", chatgpt: "$20 / mo", us: "$250 / post" },
  ];

  const faqs = [
    {
      question: "Do you use AI?",
      answer: "Yes. We use AI for speed and structure. We use humans for truth and nuance. If we wrote this 100% manually, it would cost you $800/post. Our hybrid model gives you the same quality for $250.",
    },
    {
      question: "Can you handle our specific niche (e.g., Invoice Factoring)?",
      answer: 'Likely yes. Our research phase uses "Search Grounding" tools to ingest your specific documentation before we write. We train the model on your product docs.',
    },
    {
      question: "What if we find a compliance error?",
      answer: "We offer unlimited revisions. If we mess up a regulatory detail, you don't pay for that article. Period.",
    },
  ];

  const FintechPage = () => {
    // ... existing code ...

    return (
      <div className="min-h-screen bg-white text-gray-900">
        <SEO
          title="Signal | FinTech Content Marketing"
          description="Scale Your Content Without Triggering a SEC Audit. Enterprise AI speed with CFA-level verification."
          canonical="/fintech"
        />
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-violet-600" />
                <span className="text-xl font-bold text-gray-900">Signal</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <a href="#pain" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">The Problem</a>
                <a href="#protocol" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Our Protocol</a>
                <a href="#capabilities" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">Capabilities</a>
                <a href="#faq" className="text-sm text-gray-600 hover:text-violet-600 transition-colors">FAQ</a>
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-br from-white via-violet-50/30 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full mb-8">
                <CreditCard className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-medium text-violet-700">FinTech & Payments</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Scale Your Content Without Triggering a{" "}
                <span className="text-violet-600">SEC Audit</span>.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                Generic AI struggles with the nuance of ISO 20022, FedNow, and Interchange Fees. We combine enterprise AI speed with CFA-level verification to write technical FinTech content that builds trust, not liability.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8">
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  Deploy a Pilot Article
                </Button>
                <Button size="lg" variant="outline" className="border-violet-300 text-violet-700 hover:bg-violet-50 hover:text-violet-800 font-semibold">
                  View Payments Samples
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                100% Compliance Accuracy Guarantee. Verified by Finance Professionals. NDA Protected.
              </p>
            </div>
          </div>
        </section>

        {/* Pain Section */}
        <section id="pain" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
                "ChatGPT Doesn't Know the Difference Between{" "}
                <span className="text-red-500">APY</span> and{" "}
                <span className="text-violet-600">APR</span>."
              </h2>

              <p className="text-lg text-gray-600 text-center mb-12">
                In FinTech, precision isn't just a preference—it's a legal requirement. When you use raw AI to write your content, you face three critical risks:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {painPoints.map((point, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-xl font-semibold text-gray-900">
                  The Reality: <span className="text-violet-600">You don't need a copywriter. You need a financial translator.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Section */}
        <section id="protocol" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Protocol: <span className="text-violet-600">"The Compliance Firewall"</span>
              </h2>
              <p className="text-lg text-gray-600">
                We don't just "edit" AI. We audit it.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-2xl border border-violet-100 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-4xl font-bold text-violet-200">{step.number}</span>
                        <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Capabilities & Coverage
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                    <cap.icon className="w-7 h-7 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{cap.title}</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600"><span className="font-medium text-gray-900">Focus:</span> {cap.focus}</p>
                    <p className="text-gray-600"><span className="font-medium text-gray-900">The Angle:</span> {cap.angle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Neobanks & Payment Processors Choose Us
              </h2>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-violet-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-500">Generalist Agencies</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-500">"Raw" ChatGPT/Jasper</th>
                    <th className="text-left py-4 px-4 font-semibold text-violet-600">Signal (Us)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-violet-50/30 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                      <td className="py-4 px-4 text-gray-500">{row.generalist}</td>
                      <td className="py-4 px-4 text-red-500">{row.chatgpt}</td>
                      <td className="py-4 px-4 text-violet-600 font-medium flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        {row.us}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sample Teaser Section */}
        <section className="py-24 bg-gradient-to-br from-violet-600 to-violet-800">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Don't Trust. <span className="text-violet-200">Verify.</span>
              </h2>
              <p className="text-lg text-violet-100 mb-8 leading-relaxed">
                We know you are skeptical. You should be. That's why we created a public library of sample work covering Cross-Border Rails, Stablecoin Settlement, and Ledgering Logic.
              </p>
              <p className="text-violet-200 mb-8">
                Read a sample. Look for the jargon. Try to find a mistake.
              </p>
              <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 font-semibold">
                Browse Samples
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-6 bg-gray-50">
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Build Authority Without The Risk.
              </h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                High-volume, technically accurate content is the only way to win organic search in FinTech. Start your pilot for just $250.
              </p>
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-10 py-6 text-lg">
                Start Pilot Project
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <Link to="/" className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-violet-600" />
                <span className="text-lg font-bold text-gray-900">Signal</span>
              </Link>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Signal. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  export default FintechPage;
