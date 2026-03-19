import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Palette, Globe, ShoppingCart, Smartphone, PenTool, TrendingUp,
  ArrowRight, Check
} from "lucide-react";

const allServices = [
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Web & Mobile Products",
    desc: "We create user-centered interfaces that combine beauty with functionality. From user research and wireframes to high-fidelity mockups and interactive prototypes — every screen is designed to delight users and drive results.",
    features: ["User research & journey mapping", "Wireframes & user flows", "Modern UI design system", "Up to 20 screens/pages", "Developer-ready handoff (Figma)", "Responsive design", "Usability testing"],
  },
  {
    icon: Globe,
    title: "Website & Web App Development",
    subtitle: "Business & Startup Websites",
    desc: "High-performance websites and web applications built with modern technology. Fast, secure, responsive, and SEO-optimized — designed to build trust and convert visitors into customers.",
    features: ["Custom website design (up to 5 pages)", "Mobile & tablet responsive", "Conversion-focused sections", "On-page SEO structure", "Contact form & CTA integration", "Speed optimization", "Deployment support"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    subtitle: "Online Stores & Platforms",
    desc: "Everything you need to start selling online. From product-first storefront design to secure checkout flows and payment integrations — we build stores that are ready to generate revenue from day one.",
    features: ["Custom storefront design", "Product & category pages", "Cart & checkout flow", "Payment gateway integration", "Product upload setup", "SEO-friendly structure", "Analytics & tracking"],
  },
  {
    icon: Smartphone,
    title: "Mobile App UI Design",
    subtitle: "iOS & Android Interfaces",
    desc: "Beautiful mobile app interfaces that feel smooth, modern, and intuitive. We design complete screen flows, user journeys, and handoff-ready assets that development teams love to work with.",
    features: ["App user flow & planning", "Up to 25 mobile screens", "iOS & Android-ready UI", "Design system", "Clickable prototype", "Developer handoff"],
  },
  {
    icon: PenTool,
    title: "Brand Identity & Graphics",
    subtitle: "Visual Identity Systems",
    desc: "A strong brand is your most valuable business asset. We create distinctive visual identities including logos, color systems, typography, and brand guidelines that position you for premium markets.",
    features: ["Logo design or refinement", "Brand color & typography", "Social media templates", "Marketing graphics", "Brand strategy consulting", "Brand guideline PDF", "Revisions & final export"],
  },
  {
    icon: TrendingUp,
    title: "Digital Growth Strategy",
    subtitle: "Marketing & Optimization",
    desc: "Monthly growth-focused digital marketing support. From paid ads and SEO to content strategy and funnel optimization — we help you scale with data-driven decisions and measurable results.",
    features: ["Paid ads management", "SEO strategy & optimization", "Content & campaign planning", "Landing page optimization", "Performance tracking", "Monthly strategy consultation"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      {/* Hero */}
      <SectionWrapper className="pb-20">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Our Services</div>
          <h1 className="heading-xl mb-6 max-w-3xl">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Design, Build & Grow</span>
          </h1>
          <p className="text-muted-foreground body-lg max-w-2xl">
            From initial concept to post-launch growth — we provide end-to-end digital solutions that help startups and modern businesses compete at the highest level.
          </p>
        </div>
      </SectionWrapper>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto section-padding pb-32 space-y-12">
        {allServices.map((service, i) => (
          <SectionWrapper key={service.title} delay={i * 0.05}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-primary/20 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <service.icon size={32} className="text-primary mb-5" />
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-2">{service.subtitle}</div>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-muted-foreground body-md mb-6">{service.desc}</p>
                  <Link to="/contact">
                    <Button variant="hero" size="lg" className="group/btn">
                      Get Started <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-secondary/30 rounded-xl p-8">
                  <h4 className="font-display font-semibold text-sm mb-5 text-foreground">What's Included</h4>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>

      {/* CTA */}
      <SectionWrapper className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <h2 className="heading-lg mb-6">
            Not Sure Which Service <span className="text-gradient-gold">Fits Your Idea?</span>
          </h2>
          <p className="text-muted-foreground body-md mb-10">
            Tell us about your project — we'll guide you to the right plan with a clear proposal.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">Book a Free Strategy Call</Button>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServicesPage;
