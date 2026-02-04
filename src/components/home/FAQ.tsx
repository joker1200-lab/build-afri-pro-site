import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "What services does Multitech Engineering provide?",
    answer: "We provide comprehensive engineering solutions including civil works, building construction, electrical installations, solar and renewable energy systems, HVAC systems, mechanical works, and ICT & security infrastructure. Each service is delivered by certified professionals with years of industry experience.",
  },
  {
    question: "What areas in Tanzania do you serve?",
    answer: "We operate throughout Tanzania, with our main office in Dar es Salaam. We have successfully completed projects across the country, including Arusha, Mwanza, Dodoma, and other major cities. We are also equipped to handle international projects within East Africa.",
  },
  {
    question: "How do I request a quote for my project?",
    answer: "You can request a quote by contacting us through our website's contact form, calling us directly at +255 123 456 789, or reaching out via WhatsApp. Our team will arrange a site visit if needed and provide a detailed proposal within 3-5 business days.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Multitech Engineering is fully licensed by the relevant Tanzanian authorities and carries comprehensive insurance coverage. Our engineers are certified professionals, and we maintain all required permits and certifications for the services we provide.",
  },
  {
    question: "What is the typical timeline for a construction project?",
    answer: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while larger commercial or industrial projects can span several months. During our initial consultation, we provide a detailed project schedule with clear milestones and delivery dates.",
  },
  {
    question: "Do you offer maintenance and support services?",
    answer: "Absolutely! We provide ongoing maintenance and support for all our installations, including electrical systems, HVAC units, solar panels, and ICT infrastructure. We offer preventive maintenance packages and 24/7 emergency support for critical systems.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Header */}
          <AnimatedSection>
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
              FAQs
            </span>
            <h2 className="section-title mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Find answers to common questions about our engineering services, 
              processes, and how we can help with your project needs.
            </p>
            <p className="text-muted-foreground">
              Can't find what you're looking for?{" "}
              <a href="/contact" className="text-accent font-medium hover:underline">
                Contact our team
              </a>{" "}
              for personalized assistance.
            </p>
          </AnimatedSection>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`border border-border rounded-xl overflow-hidden transition-colors ${
                    openIndex === index ? "bg-muted" : "bg-card hover:bg-muted/50"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-heading font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
