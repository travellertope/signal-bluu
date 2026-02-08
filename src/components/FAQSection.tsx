import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How is this different from using ChatGPT myself?",
        answer: "ChatGPT is a generalist. It hallucinates compliance details, invents citations, and writes fluff. We use a specialized stack (Claude 3.5 Sonnet + Industry Data Feeds) and then physically verify every claim with a human subject-matter expert (CISSP, CPA, Logistics Manager). You get the speed of AI with the safety of a consultancy.",
    },
    {
        question: "Do you use AI?",
        answer: "Yes. We use AI for structure, formatting, and initial drafting. This allows us to charge $250 instead of the $800+ a traditional agency charges. We use humans for truth, nuance, and strategic alignment. It's a hybrid model designed for ROI.",
    },
    {
        question: "What if I find a technical error?",
        answer: "We offer an Unsupported Claim Guarantee. If you find a factual error in our content (e.g., a wrong regulatory citation or incorrect technical protocol), you don't pay for that article. Period.",
    },
    {
        question: "How fast is the turnaround?",
        answer: "Our standard turnaround is 48 hours for a single deep-dive article (1,500 - 2,000 words). Full monthly batches (4-10 articles) are typically delivered within 5 business days.",
    },
    {
        question: "Can you handle my specific niche?",
        answer: "Likely yes. Before we write a single word, our system ingests your white papers, API documentation, and sales calls. We 'ground' the AI in your specific reality, not generic internet data.",
    },
    {
        question: "Who are your writers and editors?",
        answer: "We don't hire generic 'content writers.' We hire former practitioners. Our network includes former SOC Analysts, Commercial Bankers, and Freight Brokers who review content for technical accuracy.",
    },
];

const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-slate-600">
                            Common questions about our hybrid AI + Human model.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-slate-900">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-blue-600" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-slate-400" />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
