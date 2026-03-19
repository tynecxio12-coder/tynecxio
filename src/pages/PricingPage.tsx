import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { Check, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    badge: "Most Popular",
    discount: "35% OFF",
    emoji: "🌐",
    title: "Website Design Package",
    subtitle: "Brand + Website + Starter Marketing",
    features: [
      "Custom website design (up to 5 pages)",
      "Mobile & tablet responsive layout",
      "Clean UI with conversion-focused sections",
      "Basic on-page SEO structure",
      "Contact form & CTA integration",
      "Speed & performance optimization",
      "Deployment support",
    ],
    cta: "Build My Website",
    popular: true,
  },
  {
    badge: "UI/UX",
    discount: "35% OFF",
    emoji: "🎨",
    title: "UI/UX Design Package",
    subtitle: "Design experiences users love to use",
    features: [
      "User research & journey mapping",
      "Wireframes & user flows",
      "Modern UI design system",
      "Up to 20 screens/pages",
      "Developer-ready handoff (Figma)",
      "Responsive design for web & mobile",
      "Usability testing & design improvements",
    ],
    cta: "Start UI/UX Design",
    popular: false,
  },
  {
    badge: "E-Commerce",
    discount: "30% OFF",
    emoji: "🛒",
    title: "E-Commerce Store Package",
    subtitle: "Everything you need to start selling online",
    features: [
      "Custom e-commerce storefront design",
      "Product & category page layouts",
      "Cart & checkout flow",
      "Payment gateway integration",
      "Basic product upload setup",
      "SEO-friendly structure",
      "Analytics & tracking setup",
    ],
    cta: "Launch My Store",
    popular: false,
  },
  {
    badge: "Mobile",
    discount: "35% OFF",
    emoji: "📱",
    title: "Mobile App UI Package",
    subtitle: "App UI that feels smooth, modern, and intuitive",
    features: [
      "App user flow & screen planning",
      "Up to 25 mobile app screens",
      "iOS & Android–ready UI design",
      "Design system (colors, typography, icons)",
      "Clickable prototype",
      "Handoff for developers",
    ],
    cta: "Design My App",
    popular: false,
  },
  {
    badge: "Design",
    discount: "45% OFF",
    emoji: "🎯",
    title: "Graphic Design Package",
    subtitle: "Visuals that strengthen your brand identity",
    features: [
      "Logo design or refinement",
      "Brand color & typography system",
      "Social media post templates",
      "Marketing & promo graphics",
      "Brand strategy consulting",
      "Brand guideline PDF",
      "Revisions & final export",
    ],
    cta: "Create My Brand",
    popular: false,
  },
  {
    badge: "Growth",
    discount: "40% OFF",
    emoji: "🚀",
    title: "Digital Marketing Package",
    subtitle: "Monthly growth-focused digital marketing support",
    features: [
      "Paid ads management (Google & Meta)",
      "SEO strategy & optimization",
      "Content & campaign planning",
      "Landing page & funnel optimization",
      "Performance tracking & reporting",
      "Monthly strategy & growth consultation",
    ],
    cta: "Start Growth Plan",
    popular: false,
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Hero */}
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Packages & Pricing</div>
          <h1 className="heading-xl mb-6 max-w-3xl">
            Transparent Packages,{" "}
            <span className="text-gradient-gold">Premium Results</span>
          </h1>
          <p className="text-muted-foreground body-lg max-w-2xl">
            Choose the package that fits your project. Every package is tailored for startups, founders, and modern businesses — with clear deliverables and no hidden costs.
          </p>
        </div>
      </SectionWrapper>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto section-padding pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative bg-card border rounded-2xl p-8 flex flex-col transition-all duration-500 hover:border-primary/30 ${
                pkg.popular
                  ? "border-primary/40 glow-gold"
                  : "border-border"
              }`}
            >
              {/* Badges */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs uppercase tracking-widest font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {pkg.badge}
                </span>
                <span className="text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  {pkg.discount}
                </span>
              </div>

              {/* Title */}
              <div className="text-3xl mb-3">{pkg.emoji}</div>
              <h3 className="font-display font-bold text-xl mb-1 text-foreground">{pkg.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{pkg.subtitle}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={15} className="text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/contact">
                <Button
                  variant={pkg.popular ? "hero" : "hero-outline"}
                  size="lg"
                  className="w-full group"
                >
                  {pkg.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Quote */}
      <SectionWrapper className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <div className="label-text mb-4">Need Something Custom?</div>
          <h2 className="heading-lg mb-6">
            Let's Create a <span className="text-gradient-gold">Custom Plan</span> for You
          </h2>
          <p className="text-muted-foreground body-md mb-10">
            Have a unique project? Need a combination of services? Tell us what you need and we'll put together a tailored proposal with clear pricing.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group">
              Request a Custom Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PricingPage;
