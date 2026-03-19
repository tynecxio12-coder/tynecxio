import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FinFlow Dashboard",
    category: "SaaS · UI/UX Design",
    desc: "A comprehensive fintech dashboard redesign that improved user engagement by 60% and reduced support tickets by 40%.",
    tags: ["UI/UX", "SaaS", "Dashboard"],
  },
  {
    title: "Luxe Commerce",
    category: "E-Commerce · Web Development",
    desc: "Premium e-commerce platform for a luxury fashion brand, featuring immersive product experiences and 35% conversion lift.",
    tags: ["E-Commerce", "Development", "Branding"],
  },
  {
    title: "HealthSync App",
    category: "Mobile App · UI Design",
    desc: "Health tracking mobile app interface serving 50K+ users with intuitive data visualization and seamless onboarding.",
    tags: ["Mobile", "UI Design", "Health"],
  },
  {
    title: "NovaBrand Identity",
    category: "Branding · Visual Identity",
    desc: "Complete brand identity system for a tech startup, including logo, typography, color system, and comprehensive brand guidelines.",
    tags: ["Branding", "Identity", "Strategy"],
  },
  {
    title: "ScaleUp Landing",
    category: "Website · Landing Page",
    desc: "High-converting startup landing page that achieved 12% signup rate — 3x the industry average for B2B SaaS products.",
    tags: ["Website", "Landing Page", "SaaS"],
  },
  {
    title: "EduVerse Platform",
    category: "Web App · Full Stack",
    desc: "Online learning platform with real-time collaboration features, serving educational institutions across 4 countries.",
    tags: ["Web App", "Education", "Full Stack"],
  },
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background pt-28">
      <SectionWrapper className="pb-16">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="label-text mb-4">Our Work</div>
          <h1 className="heading-xl mb-6 max-w-3xl">
            Case Studies & <span className="text-gradient-gold">Selected Projects</span>
          </h1>
          <p className="text-muted-foreground body-lg max-w-2xl">
            A curated selection of projects that showcase our approach to design, development, and brand building.
          </p>
        </div>
      </SectionWrapper>

      <div className="max-w-7xl mx-auto section-padding pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500"
            >
              <div className="aspect-[16/10] bg-secondary/30 flex items-center justify-center">
                <span className="text-muted-foreground/30 font-display text-2xl font-bold">{project.title}</span>
              </div>
              <div className="p-8">
                <div className="text-xs text-primary uppercase tracking-widest mb-2">{project.category}</div>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
