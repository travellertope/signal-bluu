import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function HealthTechPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Signal | HealthTech Content Marketing"
        description="First, Do No Harm (To Your Brand Authority). HIPAA-Compliant Workflows. Verified by Healthcare Pros."
        canonical="/healthtech"
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-800">HealthTech Content Specialists</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            First, Do No Harm (To Your Brand Authority).
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Generic AI hallucinates medical studies and misunderstands HIPAA nuances. We combine
            enterprise AI speed with Clinical & Compliance verification to write B2B HealthTech
            content that doctors respect and hospital admins trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              Deploy a Pilot Article
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              View HealthTech Samples
            </Button>
          </div>

          {/* Trust Signals */}
          <p className="text-sm text-gray-500">
            100% HIPAA-Compliant Workflows. Verified by Healthcare Pros. NDA Protected.
          </p>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            "ChatGPT Just Cited a Study That Doesn't Exist."
          </h2>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            In healthcare, trust is binary. You either have it, or you are a liability. When you
            use raw AI to write your content, you face three critical risks:
          </p>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Hallucination Risk</h3>
              <p className="text-gray-700 leading-relaxed">
                Standard LLMs frequently invent medical statistics or cite non-existent papers from
                The Lancet. If a clinician spots one fake stat, they will never buy your software.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Interoperability Gap</h3>
              <p className="text-gray-700 leading-relaxed">
                AI thinks "data sharing" is simple. It doesn't understand the hell of FHIR
                resources, HL7 v2, or TEFCA mandates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Compliance Trap</h3>
              <p className="text-gray-700 leading-relaxed">
                Mentioning patient data incorrectly isn't just bad writing; it's a potential HIPAA
                violation. Generic AI doesn't know the difference between PHI (Protected Health
                Information) and de-identified data.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Reality:</h3>
            <p className="text-xl text-gray-700 font-semibold">
              You don't need a medical writer. You need a Clinical Translator.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Protocol: "The Clinical Firewall"
            </h2>
            <p className="text-xl text-gray-600 text-center">
              We don't just "generate" text. We peer-review it.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-teal-700 font-bold text-lg">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Evidence Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We analyze your specific niche. Are you selling to Payers (Risk Adjustment),
                  Providers (Burnout reduction), or Pharma (Decentralized Trials)? We map content
                  to buyer pain points, not just symptoms.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-teal-700 font-bold text-lg">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Core Generation (AI)</h3>
                <p className="text-gray-700 leading-relaxed">
                  We utilize a custom stack (Claude 3.5 Sonnet + PubMed Access) to draft the
                  structural skeleton, ensuring rigorous formatting and evidence-based tone.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <span className="text-teal-700 font-bold text-lg">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Clinical Verification (Human)</h3>
                <p className="text-gray-700 leading-relaxed">
                  This is our moat. A human subject-matter expert (typically a former Nurse, RCM
                  specialist, or Health IT consultant) manually audits the draft. They verify every
                  CPT code, accreditation standard (Joint Commission), and clinical claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Capabilities & Coverage</h2>
          <p className="text-gray-600 text-center mb-16">Display as a grid of 3 cards</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border-t-4 border-t-teal-600 bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">EHR & Interoperability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                  <p className="text-gray-600">
                    FHIR standards, TEFCA compliance, and API integration strategies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The Angle</h4>
                  <p className="text-gray-600 italic">
                    "The Architect." We explain how your solution stops information blocking
                    without breaking workflows.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-t-4 border-t-teal-600 bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Revenue Cycle Management (RCM)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                  <p className="text-gray-600">
                    Coding automation, denial management, and value-based care models.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The Angle</h4>
                  <p className="text-gray-600 italic">
                    "The CFO." We write about reducing Days Sales Outstanding (DSO) and improving
                    clean claim rates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-t-4 border-t-teal-600 bg-white">
              <CardHeader>
                <CardTitle className="text-gray-900">Patient Engagement & Telehealth</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                  <p className="text-gray-600">
                    Remote Patient Monitoring (RPM), digital front doors, and adherence.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The Angle</h4>
                  <p className="text-gray-600 italic">
                    "The Experience." We discuss activation rates and outcomes, not just "video
                    visits."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Digital Health Unicorns Choose Us
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Feature</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Generalist Agencies</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">"Raw" ChatGPT/Jasper</th>
                  <th className="text-left py-4 px-4 font-bold text-teal-600">Signal (Us)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4 font-semibold text-gray-900">Clinical Depth</td>
                  <td className="py-4 px-4 text-gray-600">Low (Writes "Eat an apple")</td>
                  <td className="py-4 px-4 text-gray-600">Hallucinates studies</td>
                  <td className="py-4 px-4 text-teal-600 font-semibold">Verified (Expert Loop)</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4 font-semibold text-gray-900">Speed</td>
                  <td className="py-4 px-4 text-gray-600">3 weeks per post</td>
                  <td className="py-4 px-4 text-gray-600">Instant (but dangerous)</td>
                  <td className="py-4 px-4 text-teal-600 font-semibold">48 hours</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-4 font-semibold text-gray-900">HIPAA Awareness</td>
                  <td className="py-4 px-4 text-gray-600">Low</td>
                  <td className="py-4 px-4 text-gray-600">None</td>
                  <td className="py-4 px-4 text-teal-600 font-semibold">High (Compliance Check)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-semibold text-gray-900">Cost</td>
                  <td className="py-4 px-4 text-gray-600">$600 - $1,500 / post</td>
                  <td className="py-4 px-4 text-gray-600">$20 / mo</td>
                  <td className="py-4 px-4 text-teal-600 font-semibold">$250 / post</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SAMPLE TEASER SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Evidence-Based Marketing.</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We know you are tired of "fluff" pieces about wellness. That's why we created a sample
            library showing exactly how we handle heavy topics like Interoperability and
            Value-Based Care.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Read our breakdown on "The TEFCA Timeline." Look for the technical accuracy on QHINs.
            Try to find a compliance error.
          </p>

          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            Browse Samples
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">FAQ</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Q: Are your writers doctors?</h3>
              <p className="text-gray-700 leading-relaxed">
                A: Our "Human Loop" consists of Health IT specialists, former nurses, and RCM
                experts. We use MDs for high-level strategy, but our day-to-day editors are the
                people who actually used the software in hospitals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Q: Do you understand HIPAA compliance for marketing?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A: Yes. We never include potential PHI in examples, and we understand the "Safe
                Harbor" method for de-identification if data must be discussed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Q: Can you write for a specific specialty (e.g., Cardiology or Oncology)?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A: Yes. Our research phase ingests your specific clinical guidelines (like ACC or
                ASCO guidelines) to ensure the terminology matches the specialty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Treat Your Content Like a Medical Device.</h2>
          <p className="text-xl text-gray-300 mb-8">
            High-volume, clinically accurate content is the only way to win trust in the skeptical
            healthcare market. Start your pilot for just $250.
          </p>

          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
            Start Pilot Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </footer>

      {/* Footer */}
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
