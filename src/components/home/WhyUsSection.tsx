import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Target, Zap, Shield, Users, ArrowRight, Layers } from "lucide-react";

const whyUs = [
  { icon: Target, title: "Conversion-First Design", desc: "Every pixel serves a purpose — driving users toward action and measurable results." },
  { icon: Zap, title: "Startup-Fast Delivery", desc: "We move at startup speed without compromising quality or cutting corners." },
  { icon: Shield, title: "Transparent Pricing", desc: "No hidden fees. Clear scope, clear cost, clear value — honest pricing always." },
  { icon: Users, title: "International-Ready", desc: "Remote-first workflow serving clients across continents with async-friendly collaboration." },
  { icon: Layers, title: "All-In-One Studio", desc: "Strategy + Design + Development + Growth — everything in one place, one team." },
];

const WhyUsSection = () => (
  <SectionWrapper className="py-24 md:py-32 bg-gradient-surface">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="label-text mb-4">Why TynecXio</div>
          <h2 className="heading-lg mb-6">
            Built for Founders Who Want{" "}
            <span className="text-gradient-gold">Results, Not Just Pixels</span>
          </h2>
          <p className="text-muted-foreground body-md mb-8">
            We don't just make things look good — we build digital products that drive revenue, build trust, and position your brand for global markets.
          </p>
          <Link to="/about">
            <Button variant="hero-outline" size="lg">
              Learn About Us <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        <div className="space-y-4">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
            >
              <item.icon size={22} className="text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default WhyUsSection;
