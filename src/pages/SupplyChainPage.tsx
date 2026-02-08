import { ShieldCheck, Truck, AlertTriangle, Target, Package, Ship, Leaf, Check, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "@/components/SEO";

const SupplyChainPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      icon: Package,
      title: "Logistics Tech (TMS/WMS)",
      focus: "API integrations, real-time tracking, and 'Exception Management' automation.",
      angle: '"The Fix." We explain how your software turns a late shipment alert into an automatic re-route.',
    },
    {
      icon: Ship,
      title: "Freight Forwarding & Brokerage",
      focus: "Customs brokerage, cross-border compliance, and spot market strategy.",
      angle: '"Market Mastery." We write about navigating volatility and carrier capacity.',
    },
    {
      icon: Leaf,
      title: "ESG & Scope 3 Reporting",
      focus: "Carbon accounting, electric fleets, and sustainable packaging.",
      angle: '"The Audit." We write about regulatory requirements (like California\'s climate laws) without greenwashing.',
    },
  ];

  const comparisonData = [
    { feature: "Operational Depth", generalist: "Low (Writes 'Generic Supply Chain')", chatgpt: "Misses nuance completely", us: "Verified (Expert Loop)" },
    { feature: "Speed", generalist: "2 weeks per post", chatgpt: "Instant (but risky)", us: "48 hours" },
    { feature: "Jargon Accuracy", generalist: "50% (Confuses terms)", chatgpt: "70% (Textbook definitions)", us: "100% (Operator Check)" },
    { feature: "Cost", generalist: "$500 - $1,000 / post", chatgpt: "$20 / mo", us: "$250 / post" },
  ];

  const faqs = [
    {
      question: "Can you write about specialized niches like Cold Chain or Hazmat?",
      answer: "Yes. Our research phase ingests your specific technical documentation and industry regulations (like FSMA for food or IATA for air cargo) before we write a single word.",
    },
    {
      question: "Do you understand the difference between Shipper, Carrier, and Broker?",
      answer: "Absolutely. We know who pays the bill, who owns the asset, and who manages the margin. We never mix up the stakeholders.",
    },
    {
      question: "What if we find a technical error?",
      answer: "We offer unlimited revisions. If we misuse an Incoterm or misexplain a routing guide, you don't pay for that article. Period.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Signal | Supply Chain Content Marketing"
        description="Supply Chain Content Specialists. Stop Publishing 'Fluff' About Supply Chain Resilience."
        canonical="/supply-chain"
      />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Signal</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pain" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">The Problem</a>
            <a href="#protocol" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Our Protocol</a>
            <a href="#capabilities" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">Capabilities</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-orange-600 transition-colors">FAQ</a>
          </div>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
            Deploy a Pilot
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 mb-8">
              <Truck className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Supply Chain Content Specialists</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Stop Publishing "Fluff" About{" "}
              <span className="text-orange-600">Supply Chain Resilience.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Generic AI writes about "optimizing flows." We write about reducing Detention & Demurrage fees, automating Bill of Lading audits, and solving First-Mile fragmentation. We combine enterprise AI speed with Logistics Expert verification to produce content that speaks to operators, not just observers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold gap-2">
                <Truck className="w-5 h-5" />
                Deploy a Pilot Article
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 hover:text-orange-800 font-semibold">
                View Logistics Samples
              </Button>
            </div>

            {/* Trust Signals */}
            <p className="text-sm text-gray-500">
              100% Terminology Accuracy Guarantee. Verified by Supply Chain Pros. NDA Protected.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section id="pain" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              "ChatGPT Thinks a{" "}
              <span className="text-orange-600">'Bill of Lading'</span> is Just a{" "}
              <span className="text-slate-500">Receipt</span>."
            </h2>

            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              In Logistics, credibility is built on detail. One misused term exposes you as an outsider. When you use raw AI to write your content, you face three critical risks:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-red-600">The "Textbook" Risk</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Standard LLMs describe supply chains like a university textbook ("Move goods from A to B"). They miss the messy reality of port congestion, chassis shortages, and spot market volatility.
                </p>
              </div>

              <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-orange-600">The "Dashboard" Fatigue</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI loves to write about "Visibility." But your customers are tired of staring at dots on a map. They want Actionability—and generic AI doesn't know the difference.
                </p>
              </div>

              <div className="bg-white border border-yellow-300 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-700">The Jargon Fail</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If your blog confuses a 3PL (Third-Party Logistics) with a 4PL (Lead Logistics Provider), no VP of Operations will ever schedule a demo with you.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-orange-50 via-orange-100/50 to-orange-50 border border-orange-200 rounded-xl p-8">
              <p className="text-xl text-gray-700">
                <span className="text-gray-900 font-semibold">The Reality:</span>{" "}
                You don't need a content writer. You need an{" "}
                <span className="text-orange-600 font-semibold">Operations Analyst</span>.
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
              Our Protocol: <span className="text-orange-600">"The Operator Loop"</span>
            </h2>
            <p className="text-lg text-gray-600">
              We don't just "generate" text. We validate logic.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-xl font-bold text-white">
                  1
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 pt-10 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-orange-700">The Operational Strategy</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Strategy</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We analyze your specific value wedge. Are you solving Reverse Logistics returns? Cold Chain spoilage? Last-Mile density? We map content to expensive problems, not high-volume keywords.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-xl font-bold text-white">
                  2
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 pt-10 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-orange-700">The Core Generation</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">AI</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We utilize a custom stack (Claude 3.5 Sonnet + Industry Data Feeds) to build the structural draft, ensuring we hit the right semantic entities (e.g., Incoterms, EDI 214, Proof of Delivery).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-xl font-bold text-white">
                  3
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-6 pt-10 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-orange-700">The Reality Verification</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Human</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This is our moat. A human subject-matter expert (typically a former Logistics Manager or Freight Broker) manually audits the draft. They ensure the routing logic makes sense and the terminology is precise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Capabilities & Coverage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-5">
                  <useCase.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="text-gray-900 font-medium">Focus:</span> {useCase.focus}
                </p>
                <p className="text-sm text-orange-600">
                  <span className="font-medium">The Angle:</span> {useCase.angle}
                </p>
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
              Why FreightTech Unicorns Choose Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Feature</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Generalist Agencies</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">"Raw" ChatGPT/Jasper</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-orange-600">Signal (Us)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        {row.generalist}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        {row.chatgpt}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-orange-600">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-orange-600" />
                        {row.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sample Teaser Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              From Visibility to <span className="text-orange-600">Actionability</span>.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We know you have "Dashboard Fatigue." That's why we created a sample library showing exactly how we write about the shift from seeing problems to fixing them.
            </p>
            <p className="text-gray-500 mb-8">
              Read our breakdown on "Agentic AI in Logistics." Look for the details on Detention fees. Try to find a flaw in the logic.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold gap-2">
              Browse Samples
              <ArrowRight className="w-4 h-4" />
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

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-slate-50"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Turn Your Traffic Into Shipments.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              High-volume, technically accurate content is the only way to win trust in the fragmented world of logistics. Start your pilot for just $250.
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
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
              <ShieldCheck className="w-5 h-5 text-orange-600" />
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

export default SupplyChainPage;
