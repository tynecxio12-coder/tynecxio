import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight, LayoutDashboard, Rocket, User, Briefcase, Smartphone } from "lucide-react";

const focusAreas = [
  { icon: LayoutDashboard, title: "SaaS Dashboards & Tools" },
  { icon: Rocket, title: "Startup Landing Pages" },
  { icon: User, title: "Founder & Personal Brand Sites" },
  { icon: Briefcase, title: "Service-Business Websites" },
  { icon: Smartphone, title: "Mobile App UI & Prototypes" },
];

const FocusAreasSection = () => (
  <SectionWrapper className="py-24 md:py-32 bg-gradient-surface">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="label-text mb-4">Recent Work & Focus Areas</div>
      <h2 className="heading-lg mb-6 max-w-2xl">
        We Love <span className="text-gradient-gold">Working On</span>
      </h2>
      <p className="text-muted-foreground body-md mb-12 max-w-xl">
        From SaaS platforms to personal brands, we specialize in projects that demand premium design and smart engineering.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {focusAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/20 transition-all"
          >
            <area.icon size={28} className="text-primary mx-auto mb-3" />
            <h4 className="font-display font-semibold text-sm">{area.title}</h4>
          </motion.div>
        ))}
      </div>
      <Link to="/contact">
        <Button variant="hero-outline" size="lg" className="group">
          Request Portfolio Samples
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </SectionWrapper>
);

export default FocusAreasSection;
