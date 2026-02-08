import { ShieldCheck, Lock, AlertTriangle, Target, FileText, BookOpen, Users, Check, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "@/components/SEO";

const CybersecurityPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const useCases = [
    {
      icon: FileText,
      title: "Technical Blog Posts",
      focus: 'How-to guides, vulnerability explainers (e.g., "Mitigating Log4j"), and feature deep-dives.',
      angle: '"DevSecOps friendly." We write for the engineer, not just the C-suite.',
    },
    {
      icon: BookOpen,
      title: "White Papers & E-Books",
      focus: '"The State of Cloud Security 2026" or "Zero Trust Implementation Guides."',
      angle: "Data-heavy, authoritative, and cited. We use real threat intelligence stats, not made-up numbers.",
    },
    {
      icon: Users,
      title: "Case Studies",
      focus: '"How [Bank] Reduced MTTR by 40% using [Your Product]."',
      angle: "Problem -> Incident -> Remediation -> ROI.",
    },
  ];

  const comparisonData = [
    { feature: "Technical Depth", generalist: "Low (They write for everyone)", chatgpt: "Hallucinates frequently", us: "Verified (Expert Loop)" },
    { feature: "Speed", generalist: "2 weeks per post", chatgpt: "Instant (but risky)", us: "48 hours" },
    { feature: "Compliance Check", generalist: "None", chatgpt: "None", us: "Included" },
    { feature: "Cost", generalist: "$500 - $1,000 / post", chatgpt: "$20 / mo", us: "$250 / post" },
  ];

  const faqs = [
    {
      question: "Do you use AI?",
      answer: "Yes. We use AI for speed and structure. We use humans for truth and nuance. If we wrote this 100% manually, it would cost you $600/post. Our hybrid model gives you the same quality for $250.",
    },
    {
      question: "Can you handle our specific niche (e.g., IoT Security)?",
      answer: 'Likely yes. Our research phase uses "Search Grounding" tools to ingest your specific documentation before we write. We train the model on your white papers.',
    },
    {
      question: "What if we find a technical error?",
      answer: "We offer unlimited revisions. If we mess up a technical detail, you don't pay for that article. Period.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO
        title="Signal | Cybersecurity Content Marketing"
        description="Zero-Trust Content Marketing for Cybersecurity Leaders. Enterprise-speed generation with CISSP-level human verification."
        canonical="/cybersecurity"
      />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-bold text-gray-900">Signal</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pain" className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">The Problem</a>
            <a href="#protocol" className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">Our Protocol</a>
            <a href="#capabilities" className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">Capabilities</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">FAQ</a>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
            Deploy a Pilot
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 mb-8">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">Cybersecurity Content Specialists</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Zero-Trust Content Marketing for{" "}
              <span className="text-emerald-500">Cybersecurity Leaders.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop letting generic AI hallucinate your technical details. We combine enterprise-speed generation with CISSP-level human verification. The result? Threat reports, white papers, and technical blogs that build authority, not liability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold gap-2">
                <ShieldCheck className="w-5 h-5" />
                Deploy a Pilot Article
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 font-semibold">
                View Threat Hunting Samples
              </Button>
            </div>

            {/* Trust Signals */}
            <p className="text-sm text-gray-500">
              100% Technical Accuracy Guarantee. No Contracts. NDA Protected.
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
              <span className="text-red-500">EDR</span> and{" "}
              <span className="text-emerald-600">XDR</span>."
            </h2>

            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Your buyers are CISOs and SecOps directors. They can smell "marketing fluff" from a mile away. When you use raw AI to write your content, you risk three things:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white border border-red-100 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-red-600">The "Hallucination" Breach</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Standard LLMs frequently invent CVEs or misinterpret compliance frameworks like DORA or NIS2. One false claim destroys your credibility.
                </p>
              </div>

              <div className="bg-white border border-orange-100 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-orange-600">The "Surface Level" Trap</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI explains what ransomware is. It fails to explain how your specific lateral movement protection stops it.
                </p>
              </div>

              <div className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-amber-600">The "FUD" Fatigue</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Generic tools lean on fear. Your buyers want architecture, not anxiety.
                </p>
              </div>
            </div>

            <div className="text-center bg-emerald-50 border border-emerald-100 rounded-xl p-8">
              <p className="text-xl text-gray-700">
                <span className="text-gray-900 font-semibold">The Reality:</span>{" "}
                You don't need a copywriter. You need a{" "}
                <span className="text-emerald-600 font-semibold">technical translator</span>.
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
              Our Protocol: <span className="text-emerald-600">"The Human Firewall"</span>
            </h2>
            <p className="text-lg text-gray-600">
              We don't just "edit" AI. We sandbox it.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-bold text-white shadow-sm ring-4 ring-white">
                  1
                </div>
                <div className="bg-white border border-emerald-100 rounded-xl p-6 pt-10 h-full shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">The Threat Intel</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Strategy</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We don't guess topics. We analyze the MITRE ATT&CK framework to find the specific TTPs your product solves. We map content to keywords like "Zero Trust Architecture" or "CI/CD Pipeline Security"—not generic terms like "Stay Safe Online."
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-bold text-white shadow-sm ring-4 ring-white">
                  2
                </div>
                <div className="bg-white border border-emerald-100 rounded-xl p-6 pt-10 h-full shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">The Core Generation</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">AI</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We utilize a custom stack (Claude 3.5 Sonnet + Perplexity) to draft the structural skeleton of the article at high speed, ensuring perfect formatting and SEO headers.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-xl font-bold text-white shadow-sm ring-4 ring-white">
                  3
                </div>
                <div className="bg-white border border-emerald-100 rounded-xl p-6 pt-10 h-full shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-700">The Identity Verification</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Human</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This is our moat. A human subject-matter expert (typically a former SysAdmin or Tech Writer) manually audits the draft. They verify every API reference, compliance citation (SOC2, HIPAA, GDPR), and technical claim.
                  </p>
                </div>
              </div>
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

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-5">
                  <useCase.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="text-gray-900 font-medium">Focus:</span> {useCase.focus}
                </p>
                <p className="text-sm text-emerald-600">
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
              Why MSSPs & SaaS Vendors Choose Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-emerald-200">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Feature</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">Generalist Agencies</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500">"Raw" ChatGPT/Jasper</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-emerald-600">Signal (Us)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50/30 transition-colors">
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
                    <td className="py-4 px-4 text-sm text-emerald-600">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600" />
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
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Don't Trust. <span className="text-emerald-200">Verify.</span>
            </h2>
            <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
              We know you are skeptical. You should be. That's why we created a public library of sample work covering Cloud Workload Protection, IAM policies, and SIEM optimization.
            </p>
            <p className="text-emerald-200 mb-8">
              Read a sample. Look for the jargon. Try to find a mistake.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold gap-2">
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
                  className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Secure Your Content Pipeline Today.
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Inaccurate technical content isn't just embarrassing—it's a trust breach. Stop guessing and start publishing with confidence.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-10 py-6 text-lg">
              Start Your Pilot Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
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

export default CybersecurityPage;