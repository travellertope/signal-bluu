import { Shield, Lock, AlertTriangle, Target, FileText, BookOpen, Users, Check, X, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    <div className="min-h-screen bg-[#0B1120] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-500" />
            <span className="text-xl font-bold">Signal</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pain" className="text-sm text-gray-300 hover:text-white transition-colors">The Problem</a>
            <a href="#protocol" className="text-sm text-gray-300 hover:text-white transition-colors">Our Protocol</a>
            <a href="#capabilities" className="text-sm text-gray-300 hover:text-white transition-colors">Capabilities</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
            Deploy a Pilot
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
              <Lock className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-emerald-400">Cybersecurity Content Specialists</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Zero-Trust Content Marketing for{" "}
              <span className="text-emerald-500">Cybersecurity Leaders.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop letting generic AI hallucinate your technical details. We combine enterprise-speed generation with CISSP-level human verification. The result? Threat reports, white papers, and technical blogs that build authority, not liability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold gap-2">
                <Shield className="w-5 h-5" />
                Deploy a Pilot Article
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300">
                View Threat Hunting Samples
              </Button>
            </div>

            {/* Trust Signals */}
            <p className="text-sm text-gray-400">
              100% Technical Accuracy Guarantee. No Contracts. NDA Protected.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section id="pain" className="py-24 bg-[#080d16]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              "ChatGPT Doesn't Know the Difference Between{" "}
              <span className="text-red-500">EDR</span> and{" "}
              <span className="text-emerald-500">XDR</span>."
            </h2>
            
            <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              Your buyers are CISOs and SecOps directors. They can smell "marketing fluff" from a mile away. When you use raw AI to write your content, you risk three things:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-[#0f1520] border border-red-500/20 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-red-400">The "Hallucination" Breach</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Standard LLMs frequently invent CVEs or misinterpret compliance frameworks like DORA or NIS2. One false claim destroys your credibility.
                </p>
              </div>

              <div className="bg-[#0f1520] border border-orange-500/20 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">The "Surface Level" Trap</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  AI explains what ransomware is. It fails to explain how your specific lateral movement protection stops it.
                </p>
              </div>

              <div className="bg-[#0f1520] border border-yellow-500/20 rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">The "FUD" Fatigue</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Generic tools lean on fear. Your buyers want architecture, not anxiety.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 rounded-xl p-8">
              <p className="text-xl text-gray-300">
                <span className="text-white font-semibold">The Reality:</span>{" "}
                You don't need a copywriter. You need a{" "}
                <span className="text-emerald-500 font-semibold">technical translator</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocol" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Protocol: <span className="text-emerald-500">"The Human Firewall"</span>
            </h2>
            <p className="text-lg text-gray-300">
              We don't just "edit" AI. We sandbox it.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-xl font-bold text-black">
                  1
                </div>
                <div className="bg-[#0f1520] border border-white/10 rounded-xl p-6 pt-10 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-400">The Threat Intel</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Strategy</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We don't guess topics. We analyze the MITRE ATT&CK framework to find the specific TTPs your product solves. We map content to keywords like "Zero Trust Architecture" or "CI/CD Pipeline Security"—not generic terms like "Stay Safe Online."
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-xl font-bold text-black">
                  2
                </div>
                <div className="bg-[#0f1520] border border-white/10 rounded-xl p-6 pt-10 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-400">The Core Generation</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">AI</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    We utilize a custom stack (Claude 3.5 Sonnet + Perplexity) to draft the structural skeleton of the article at high speed, ensuring perfect formatting and SEO headers.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-xl font-bold text-black">
                  3
                </div>
                <div className="bg-[#0f1520] border border-white/10 rounded-xl p-6 pt-10 h-full">
                  <h3 className="text-lg font-semibold mb-2 text-emerald-400">The Identity Verification</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Human</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    This is our moat. A human subject-matter expert (typically a former SysAdmin or Tech Writer) manually audits the draft. They verify every API reference, compliance citation (SOC2, HIPAA, GDPR), and technical claim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-[#080d16]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Capabilities & Coverage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-[#0f1520] border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-5">
                  <useCase.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  <span className="text-white font-medium">Focus:</span> {useCase.focus}
                </p>
                <p className="text-sm text-emerald-400">
                  <span className="font-medium">The Angle:</span> {useCase.angle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why MSSPs & SaaS Vendors Choose Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-200">Feature</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-200">Generalist Agencies</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-200">"Raw" ChatGPT/Jasper</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-emerald-500">Signal (Us)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-4 text-sm font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        {row.generalist}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        {row.chatgpt}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-emerald-400">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500" />
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
      <section className="py-24 bg-[#080d16]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Don't Trust. <span className="text-emerald-500">Verify.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We know you are skeptical. You should be. That's why we created a public library of sample work covering Cloud Workload Protection, IAM policies, and SIEM optimization.
            </p>
            <p className="text-gray-300 mb-8">
              Read a sample. Look for the jargon. Try to find a mistake.
            </p>
            <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 gap-2">
              Browse the Sample Library
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Secure Your Content Pipeline Today.
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              High-volume, technically accurate content is the only way to win organic search in cybersecurity. Start your pilot for just $250.
            </p>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold gap-2">
              <Shield className="w-5 h-5" />
              Start Pilot Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="font-bold">Signal</span>
            </Link>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Signal. Verified B2B Content.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CybersecurityPage;
