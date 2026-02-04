import { ShieldCheck } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Industries", href: "#industries" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Request Samples", href: "#" },
  ];

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#" className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="text-lg font-bold text-primary">TrustDraft</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Verified B2B Content.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TrustDraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
