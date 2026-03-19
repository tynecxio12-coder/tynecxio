import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import { Palette, Globe, ShoppingCart, Smartphone, PenTool, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces for web and mobile that convert visitors into customers.", outcome: "Clean, intuitive, user-friendly digital products." },
  { icon: Globe, title: "Web Development", desc: "High-performance websites and web applications built for speed, security, and scale.", outcome: "Professional online presence that builds trust." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Conversion-optimized online stores with seamless checkout and payment integrations.", outcome: "A store ready to sell from day one." },
  { icon: Smartphone, title: "Mobile App UI", desc: "Beautiful, intuitive app interfaces with complete screen flows and developer handoff.", outcome: "App interfaces users love to interact with." },
  { icon: PenTool, title: "Brand Identity", desc: "Distinctive visual identities with logo, color systems, typography, and brand guidelines.", outcome: "A brand look that feels professional and memorable." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven digital marketing, ad strategy, content direction, and performance optimization.", outcome: "Visibility, awareness, and smarter scaling." },
];

const ServicesSection = () => (
  <SectionWrapper className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="label-text mb-4">What We Do</div>
      <h2 className="heading-lg mb-4 max-w-2xl">
        End-to-End Digital Solutions for{" "}
        <span className="text-gradient-gold">Modern Brands</span>
      </h2>
      <p className="text-muted-foreground body-lg mb-16 max-w-xl">
        From strategy to launch, we craft every element of your digital presence with precision.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover:glow-gold"
          >
            <service.icon size={28} className="text-primary mb-5" />
            <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.desc}</p>
            <p className="text-primary/80 text-xs font-medium">{service.outcome}</p>
            <Link to="/services" className="mt-5 text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ServicesSection;
