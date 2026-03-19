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
    title: "UI/UX Design for Web & Mobile Apps",
    subtitle: "Web & Mobile Products",
    desc: "We create user-centered interfaces that combine beauty with functionality. From user research and wireframes to high-fidelity mockups and interactive prototypes — every screen is designed to delight users and drive results.",
    features: [
      "User research, user flows & wireframes",
      "Modern interface design for SaaS, dashboards & tools",
      "Mobile app UI for Android / iOS",
      "Prototypes & usability-focused layouts",
      "Developer-ready handoff (Figma)",
      "Responsive design for web & mobile",
      "Usability testing & design improvements",
    ],
    outcome: "Clean, intuitive, user-friendly digital products.",
  },
  {
    icon: Globe,
    title: "Website & Web Application Development",
    subtitle: "Business & Startup Websites",
    desc: "High-performance websites and web applications built with modern technology. Fast, secure, responsive, and SEO-optimized — designed to build trust and convert visitors into customers.",
    features: [
      "Business & portfolio websites",
      "Landing pages for startups & launches",
      "Custom frontend development",
      "Fast, secure, responsive, SEO-friendly builds",
      "Contact form & CTA integration",
      "Speed & performance optimization",
      "Deployment support",
    ],
    outcome: "Professional online presence that builds trust.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website & Online Store Development",
    subtitle: "Online Stores & Platforms",
    desc: "Everything you need to start selling online. From product-first storefront design to secure checkout flows and payment integrations — we build stores that are ready to generate revenue from day one.",
    features: [
      "Modern product-first storefront design",
      "Secure checkout & payment integrations",
      "Conversion-optimized product pages",
      "Product & category page layouts",
      "Cart & checkout flow",
      "SEO-friendly structure",
      "Basic analytics & inventory setup",
    ],
    outcome: "A store ready to sell from day one.",
  },
  {
    icon: Smartphone,
    title: "Mobile App UI Design",
    subtitle: "iOS & Android Interfaces",
    desc: "Beautiful mobile app interfaces that feel smooth, modern, and intuitive. We design complete screen flows, user journeys, and handoff-ready assets that development teams love to work with.",
    features: [
      "Screens, flows, and user journeys",
      "Clean, modern, consistent layouts",
      "Up to 25 mobile app screens",
      "iOS & Android-ready UI design",
      "Design system (colors, typography, icons)",
      "Clickable prototype",
      "Handoff-ready designs for developers",
    ],
    outcome: "App interfaces users love to interact with.",
  },
  {
    icon: PenTool,
    title: "Brand Identity & Graphic Design",
    subtitle: "Visual Identity Systems",
    desc: "A strong brand is your most valuable business asset. We create distinctive visual identities including logos, color systems, typography, and brand guidelines that position you for premium markets.",
    features: [
      "Logo + identity system",
      "Color palette & typography",
      "Social media & web graphics",
      "Marketing visuals & brand assets",
      "Brand strategy consulting",
      "Brand guideline PDF",
      "Revisions & final export",
    ],
    outcome: "A brand look that feels professional and memorable.",
  },
  {
    icon: TrendingUp,
    title: "Modern Digital Marketing & Growth Support",
    subtitle: "Marketing & Optimization",
    desc: "Monthly growth-focused digital marketing support. From paid ads and SEO to content strategy and funnel optimization — we help you scale with data-driven decisions and measurable results.",
    features: [
      "Launch & growth strategy",
      "Content & campaign direction",
      "Basic ad strategy & funnel guidance",
      "Paid ads management (Google & Meta)",
      "SEO strategy & optimization",
      "Landing page & funnel optimization",
      "Consultation & performance review",
    ],
    outcome: "Visibility, awareness, and smarter scaling.",
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
      <div className="max-w-7xl mx-auto section-padding pb-24 space-y-12">
        {allServices.map((service, i) => (
          <SectionWrapper key={service.title} delay={i * 0.05}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-primary/20 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <service.icon size={32} className="text-primary mb-5" />
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-2">{service.subtitle}</div>
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="text-muted-foreground body-md mb-4">{service.desc}</p>
                  <p className="text-primary text-sm font-medium mb-6">Outcome: {service.outcome}</p>
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

      {/* Packages CTA */}
      <SectionWrapper className="py-24 bg-gradient-surface">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <div className="label-text mb-4">Service Packages</div>
          <h2 className="heading-lg mb-6">
            View Our <span className="text-gradient-gold">Package Pricing</span>
          </h2>
          <p className="text-muted-foreground body-md mb-10">
            We offer ready-made packages for every service — with transparent pricing and clear deliverables.
          </p>
          <Link to="/pricing">
            <Button variant="hero" size="xl" className="group">
              View Packages & Pricing
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>

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
            <Button variant="hero" size="xl">Tell Us About Your Project</Button>
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ServicesPage;
