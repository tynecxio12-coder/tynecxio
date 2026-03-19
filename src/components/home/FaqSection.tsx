import SectionWrapper from "@/components/SectionWrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We work with clients across the globe with a remote-first, async-friendly workflow designed for seamless collaboration across time zones.",
  },
  {
    q: "Do I need all content before starting?",
    a: "Not necessarily. We can start with your vision and goals. During the strategy phase, we help guide the content direction. You can provide content as we go — we'll work with you to keep things moving.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes. Every package includes revision rounds to ensure the final result exceeds your expectations. We want you to be completely satisfied with the outcome.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "We offer ongoing support and maintenance packages to keep your product running smoothly and evolving with your business. We're here for the long run.",
  },
];

const FaqSection = () => (
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
);

export default FaqSection;
