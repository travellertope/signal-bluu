import { ArrowRight, ShieldCheck, Activity, Brain, FileText, HeartPulse, Stethoscope, Microscope, ChevronDown, ChevronUp, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HealthTechPage() {
  const painPoints = [
    {
      title: "The Hallucination Risk",
      description: "Standard LLMs frequently invent medical statistics or cite non-existent papers from The Lancet. If a clinician spots one fake stat, they will never buy your software.",
      icon: Brain,
    },
    {
      title: "The Interoperability Gap",
      description: "AI thinks 'data sharing' is simple. It doesn't understand the hell of FHIR resources, HL7 v2, or TEFCA mandates.",
      icon: Activity,
    },
    {
      title: "The Compliance Trap",
      description: "Mentioning patient data incorrectly isn't just bad writing; it's a potential HIPAA violation. Generic AI doesn't know the distinction between PHI and de-identified data.",
      icon: ShieldCheck,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "The Evidence Strategy",
      description: "We analyze your specific niche. Are you selling to Payers (Risk Adjustment), Providers (Burnout reduction), or Pharma? We map content to buyer pain points, not just symptoms.",
      icon: Microscope,
    },
    {
      number: "02",
      title: "The Core Generation (AI)",
      description: "We utilize a custom stack (Claude 3.5 Sonnet + PubMed Access) to draft the structural skeleton, ensuring rigorous formatting and evidence-based tone.",
      icon: Brain,
    },
    {
      number: "03",
      title: "The Clinical Verification",
      description: "This is our moat. A human subject-matter expert (typically a former Nurse, RCM specialist, or Health IT consultant) manually audits the draft for CPT codes and clinical accuracy.",
      icon: Stethoscope,
    },
  ];

  const capabilities = [
    {
      title: "EHR & Interoperability",
      focus: "FHIR standards, TEFCA compliance, and API integration strategies.",
      angle: '"The Architect." We explain how your solution stops information blocking without breaking workflows.',
      icon: Activity,
    },
    {
      title: "Revenue Cycle (RCM)",
      focus: "Coding automation, denial management, and value-based care models.",
      angle: '"The CFO." We write about reducing Days Sales Outstanding (DSO) and improving clean claim rates.',
      icon: FileText,
    },
    {
      title: "Patient Engagement",
      focus: "Remote Patient Monitoring (RPM), digital front doors, and adherence.",
      angle: '"The Experience." We discuss activation rates and outcomes, not just "video visits."',
      icon: HeartPulse,
    },
  ];

  const comparisonData = [
    { feature: "Clinical Depth", generalist: "Low (Writes \"Eat an apple\")", chatgpt: "Hallucinates studies", us: "Verified (Expert Loop)" },
    { feature: "Speed", generalist: "3 weeks per post", chatgpt: "Instant (but dangerous)", us: "48 hours" },
    { feature: "HIPAA Awareness", generalist: "Low", chatgpt: "None", us: "High (Compliance Check)" },
    { feature: "Cost", generalist: "$600 - $1,500 / post", chatgpt: "$20 / mo", us: "$250 / post" },
  ];

  const faqs = [
    {
      question: "Are your writers doctors?",
      answer: "Our 'Human Loop' consists of Health IT specialists, former nurses, and RCM experts. We use MDs for high-level strategy, but our day-to-day editors are the people who actually used the software in hospitals.",
    },
    {
      question: "Do you understand HIPAA compliance for marketing?",
      answer: "Yes. We never include potential PHI in examples, and we understand the 'Safe Harbor' method for de-identification if data must be discussed.",
    },
    {
      question: "Can you write for a specific specialty?",
      answer: "Yes. Our research phase ingests your specific clinical guidelines (like ACC or ASCO guidelines) to ensure the terminology matches the specialty.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <SEO
        title="Signal | HealthTech Content Marketing"
        description="First, Do No Harm (To Your Brand Authority). HIPAA-Compliant Workflows. Verified by Healthcare Pros."
        canonical="/healthtech"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">Signal</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#pain" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">The Problem</a>
            <a href="#protocol" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Our Protocol</a>
            <a href="#capabilities" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Capabilities</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">FAQ</a>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
            Deploy a Pilot
          </Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-600 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-800">HealthTech Content Specialists</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              First, Do No Harm <span className="text-teal-600">(To Your Brand Authority)</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Generic AI hallucinates medical studies and misunderstands HIPAA nuances. We combine
              enterprise AI speed with Clinical & Compliance verification to write B2B HealthTech
              content that doctors respect and hospital admins trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                Deploy a Pilot Article
              </Button>
              <Button size="lg" variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold">
                View HealthTech Samples
              </Button>
            </div>

            {/* Trust Signals */}
            <p className="text-sm text-gray-500">
              100% HIPAA-Compliant Workflows. Verified by Healthcare Pros. NDA Protected.
            </p>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section id="pain" className="bg-teal-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              "ChatGPT Just Cited a Study That <span className="text-teal-600">Doesn't Exist</span>."
            </h2>

            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              In healthcare, trust is binary. When you use raw AI to write your content, you face three critical risks:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-white border border-teal-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-6">
                    <point.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{point.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-white border border-teal-200 rounded-xl p-8 shadow-sm">
              <p className="text-xl text-gray-700">
                <span className="font-bold text-gray-900">The Reality:</span> You don't need a medical writer. You need a <span className="text-teal-600 font-bold">Clinical Translator</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOCOL SECTION */}
      <section id="protocol" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Protocol: <span className="text-teal-600">"The Clinical Firewall"</span>
            </h2>
            <p className="text-lg text-gray-600">
              We don't just "generate" text. We peer-review it.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-lg font-bold text-white shadow-sm ring-4 ring-white z-10">
                    {index + 1}
                  </div>
                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-8 h-full group-hover:border-teal-200 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-6">
                      <step.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-teal-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Capabilities & Coverage</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-teal-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-6">
                  <cap.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{cap.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium text-gray-900">Focus:</span> {cap.focus}
                </p>
                <p className="text-sm text-teal-600">
                  <span className="font-medium text-gray-900">The Angle:</span> {cap.angle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Digital Health Unicorns Choose Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-900">Feature</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">Generalist Agencies</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-500">"Raw" ChatGPT/Jasper</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-teal-600">Signal (Us)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        {row.generalist}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500" />
                        {row.chatgpt}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm text-teal-600 font-medium">
                      <span className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600" />
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

      {/* SAMPLE TEASER SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Evidence-Based Marketing.</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We know you are tired of "fluff" pieces about wellness. That's why we created a sample
              library showing exactly how we handle heavy topics like Interoperability and
              Value-Based Care.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Read our breakdown on "The TEFCA Timeline." Look for the technical accuracy on QHINs.
              Try to find a compliance error.
            </p>

            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
              Browse Samples
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
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

      {/* FOOTER CTA */}
      <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Treat Your Content Like a Medical Device.</h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              High-volume, clinically accurate content is the only way to win trust in the skeptical
              healthcare market. Start your pilot for just $250.
            </p>

            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-10 py-6 text-lg">
              Start Pilot Project
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
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
}
