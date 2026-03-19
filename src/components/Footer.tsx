import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  Studio: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Packages & Pricing", path: "/pricing" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  Services: [
    { label: "UI/UX Design", path: "/services" },
    { label: "Web Development", path: "/services" },
    { label: "E-Commerce", path: "/services" },
    { label: "Mobile App UI", path: "/services" },
    { label: "Branding & Identity", path: "/services" },
    { label: "Digital Marketing", path: "/services" },
  ],
  Connect: [
    { label: "LinkedIn", path: "https://linkedin.com/company/tynecxio", external: true },
    { label: "Instagram", path: "https://instagram.com/tynecxio", external: true },
    { label: "Dribbble", path: "https://dribbble.com/tynecxio", external: true },
    { label: "Behance", path: "https://behance.net/tynecxio", external: true },
    { label: "WhatsApp", path: "https://wa.me/message/tynecxio", external: true },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              <span className="text-foreground">Tynec</span>
              <span className="text-gradient-gold">Xio</span>
            </Link>
            <p className="text-muted-foreground body-md mt-4 max-w-xs">
              A product-focused digital studio that blends design, development, and marketing to build meaningful, conversion-focused digital experiences.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:hello@tynecxio.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={14} />
                hello@tynecxio.com
              </a>
              <a
                href="https://wa.me/message/tynecxio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} TynecXio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Design · Development · Growth — All in one place.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
