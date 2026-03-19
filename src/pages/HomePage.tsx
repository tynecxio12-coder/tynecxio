import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Palette, Globe, ShoppingCart, Smartphone, PenTool, TrendingUp,
  CheckCircle2, ArrowUpRight, Users, Zap, Shield, Target,
  ChevronDown
} from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces for web and mobile that convert visitors into customers." },
  { icon: Globe, title: "Web Development", desc: "High-performance websites and web applications built for speed and scale." },
  { icon: ShoppingCart, title: "E-Commerce", desc: "Conversion-optimized online stores with seamless checkout experiences." },
  { icon: Smartphone, title: "Mobile App UI", desc: "Beautiful, intuitive app interfaces that users love to interact with." },
  { icon: PenTool, title: "Brand Identity", desc: "Distinctive visual identities that position your brand for premium markets." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven digital marketing and optimization for sustainable growth." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Global Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9", label: "Avg. Rating" },
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "We learn your goals, audience, and business model through a focused strategy session." },
  { num: "02", title: "Strategy & Design", desc: "Wireframes, user flows, and high-fidelity designs crafted for conversion." },
  { num: "03", title: "Build & Develop", desc: "Clean, performant code brought to life with pixel-perfect precision." },
  { num: "04", title: "Launch & Grow", desc: "Deployment, optimization, and ongoing support to scale your success." },
];

const whyUs = [
  { icon: Target, title: "Conversion-First Design", desc: "Every pixel serves a purpose — driving users toward action." },
  { icon: Zap, title: "Startup-Fast Delivery", desc: "We move at startup speed without compromising quality." },
  { icon: Shield, title: "Transparent Pricing", desc: "No hidden fees. Clear scope, clear cost, clear value." },
  { icon: Users, title: "International-Ready", desc: "Remote-first workflow serving clients across continents." },
];

const testimonials = [
  { name: "Alex M.", role: "Founder, SaaS Startup", text: "TynecXio transformed our vision into a product that our investors couldn't stop talking about. Premium quality, fast delivery." },
  { name: "Sarah K.", role: "CEO, E-Commerce Brand", text: "The design quality is world-class. Our conversion rate increased by 40% after the redesign. Absolutely worth every penny." },
  { name: "James L.", role: "CTO, Fintech", text: "Working with TynecXio felt like having a senior design team embedded in our company. Clear communication, exceptional results." },
];

const faqs = [
  { q: "Do you work with international clients?", a: "Absolutely. We work with clients across the globe with a remote-first, async-friendly workflow designed for seamless collaboration across time zones." },
  { q: "How long does a typical project take?", a: "Depending on scope, most projects take 2–6 weeks. We move fast without cutting corners and keep you updated at every stage." },
  { q: "Do you offer revisions?", a: "Yes. Every package includes revision rounds to ensure the final result exceeds your expectations." },
  { q: "Do you provide post-launch support?", a: "We offer ongoing support and maintenance packages to keep your product running smoothly and evolving with your business." },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial-gold" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        
        <div className="relative max-w-7xl mx-auto section-padding pt-32 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <div className="label-text mb-6 flex items-center gap-2">
              <Sparkles size={14} className="text-primary" />
              Design · Development · Growth
            </div>
            
            <h1 className="heading-xl mb-6">
              We Design & Build{" "}
              <span className="text-gradient-gold">Digital Experiences</span>{" "}
              That Help Brands Succeed
            </h1>
            
            <p className="text-muted-foreground body-lg max-w-2xl mb-10">
              A product-focused digital studio helping startups, founders, and modern businesses create high-performing websites, apps, and brand identities — combining clean design, smart technology, and growth strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Book a Free Strategy Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl"
          >
            {["UI/UX for web & mobile", "Modern websites & web apps", "E-commerce development", "Branding & identity", "Mobile app design", "Growth strategy"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ChevronDown size={24} className="text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="heading-lg text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
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
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-5 text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowUpRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why TynecXio */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <item.icon size={22} className="text-primary mb-3" />
                  <h4 className="font-display font-semibold text-sm mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Our Process</div>
          <h2 className="heading-lg mb-16 max-w-2xl">
            A Proven Path From{" "}
            <span className="text-gradient-gold">Idea to Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-5xl font-display font-bold text-primary/10 mb-4">{step.num}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-8 border-t border-dashed border-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="py-24 md:py-32 bg-gradient-surface">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Client Stories</div>
          <h2 className="heading-lg mb-16 max-w-xl">
            Trusted by <span className="text-gradient-gold">Founders & Teams</span> Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-4 h-4 rounded-full bg-primary/80" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-display font-semibold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto section-padding">
          <div className="label-text mb-4 text-center">FAQ</div>
          <h2 className="heading-lg mb-16 text-center">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-card border border-border rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-5 font-display font-medium text-sm flex justify-between items-center hover:text-primary transition-colors list-none">
                  {faq.q}
                  <ChevronDown size={18} className="text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <div className="bg-card border border-border rounded-2xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial-gold" />
            <div className="relative">
              <div className="label-text mb-4">Ready to Start?</div>
              <h2 className="heading-lg mb-6">
                Let's Build Something{" "}
                <span className="text-gradient-gold">Extraordinary</span>
              </h2>
              <p className="text-muted-foreground body-md mb-10 max-w-lg mx-auto">
                Tell us about your project — we'll come back with a clear plan, timeline, and proposal within 48 hours.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Book a Free Strategy Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
