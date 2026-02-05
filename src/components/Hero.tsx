import { ArrowDown, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 hero-grid">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-8">
            <span className="verified-badge">
              <Lock className="w-3 h-3" />
              Human-Verified
            </span>
            <span className="text-sm text-muted-foreground">B2B Content Agency</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Content for Industries That{" "}
            <span className="relative">
              Can't Afford
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 4 150 4 298 10"
                  stroke="hsl(160 84% 39%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Hallucinations.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            We combine enterprise AI speed with subject-matter expert verification. 
            The result? Technical B2B content that is{" "}
            <span className="font-semibold text-primary">50% cheaper</span> but{" "}
            <span className="font-semibold text-accent">100% compliant</span>.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            onClick={() => document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" })}
          >
            See Your Industry
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>

        {/* Split Screen Visual */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border shadow-2xl">
            {/* Raw AI Side */}
            <div className="bg-danger-muted p-8 border-r border-border relative">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-danger" />
                <span className="text-xs font-medium text-danger uppercase tracking-wide">Raw AI</span>
              </div>
              <div className="mt-8 space-y-3">
                <div className="h-3 bg-danger/20 rounded glitch-text w-full" />
                <div className="h-3 bg-danger/20 rounded glitch-text w-4/5" />
                <div className="h-3 bg-danger/20 rounded glitch-text w-5/6" />
                <div className="h-3 bg-danger/15 rounded glitch-text w-3/4" />
                <div className="mt-4 p-3 rounded bg-danger/10 border border-danger/20">
                  <p className="text-xs text-danger font-mono glitch-text">
                    ⚠️ Potential compliance violation detected...
                  </p>
                </div>
              </div>
            </div>

            {/* Signal Side */}
            <div className="bg-emerald/5 p-8 relative">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium text-accent uppercase tracking-wide">Signal</span>
              </div>
              <div className="mt-8 space-y-3">
                <div className="h-3 bg-accent/30 rounded w-full" />
                <div className="h-3 bg-accent/30 rounded w-4/5" />
                <div className="h-3 bg-accent/30 rounded w-5/6" />
                <div className="h-3 bg-accent/25 rounded w-3/4" />
                <div className="mt-4 p-3 rounded bg-accent/10 border border-accent/20">
                  <p className="text-xs text-accent font-mono">
                    ✓ Expert verified • HIPAA compliant • Ready to publish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
