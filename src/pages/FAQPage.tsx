import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What services does Multitech Engineering provide?",
        answer: "We provide comprehensive engineering solutions including civil works, building construction, electrical installations, solar and renewable energy systems, HVAC systems, mechanical works, and ICT & security infrastructure. Each service is delivered by certified professionals with years of industry experience.",
      },
      {
        question: "What areas in Tanzania do you serve?",
        answer: "We operate throughout Tanzania, with our main office in Dar es Salaam. We have successfully completed projects across the country, including Arusha, Mwanza, Dodoma, and other major cities. We are also equipped to handle international projects within East Africa.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, Multitech Engineering is fully licensed by the relevant Tanzanian authorities and carries comprehensive insurance coverage. Our engineers are certified professionals, and we maintain all required permits and certifications for the services we provide.",
      },
    ],
  },
  {
    title: "Pricing & Quotes",
    faqs: [
      {
        question: "How do I request a quote for my project?",
        answer: "You can request a quote by contacting us through our website's contact form, calling us directly at +255 788 222 899, or reaching out via WhatsApp. Our team will arrange a site visit if needed and provide a detailed proposal within 3-5 business days.",
      },
      {
        question: "What factors affect project pricing?",
        answer: "Project pricing depends on several factors including scope and complexity, materials required, timeline, location, and any specialized equipment or expertise needed. We provide transparent, detailed quotes that break down all costs for your review.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment terms for larger projects. Typically, we work with milestone-based payments that align with project progress. We'll discuss payment options during the proposal stage and find an arrangement that works for you.",
      },
    ],
  },
  {
    title: "Project Timelines",
    faqs: [
      {
        question: "What is the typical timeline for a construction project?",
        answer: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while larger commercial or industrial projects can span several months. During our initial consultation, we provide a detailed project schedule with clear milestones and delivery dates.",
      },
      {
        question: "How do you handle project delays?",
        answer: "We maintain clear communication throughout every project. If potential delays arise, we notify you immediately and work to minimize impact. Our project management approach includes contingency planning to help keep projects on track.",
      },
    ],
  },
  {
    title: "Maintenance & Support",
    faqs: [
      {
        question: "Do you offer maintenance and support services?",
        answer: "Absolutely! We provide ongoing maintenance and support for all our installations, including electrical systems, HVAC units, solar panels, and ICT infrastructure. We offer preventive maintenance packages and 24/7 emergency support for critical systems.",
      },
      {
        question: "What warranties do you provide?",
        answer: "We provide warranties on both workmanship and materials. Warranty periods vary by service type, typically ranging from 1-5 years. All warranty terms are clearly outlined in our project agreements, and we honor our commitments fully.",
      },
      {
        question: "How quickly can you respond to emergencies?",
        answer: "For clients with maintenance contracts, we offer 24/7 emergency response. Our typical response time for critical issues is within 4 hours in the Dar es Salaam area. We maintain a dedicated emergency line for urgent situations.",
      },
    ],
  },
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>({});

  const toggleFAQ = (category: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <>
      <Helmet>
        <title>FAQs | Multitech Engineering - Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to common questions about Multitech Engineering's services, pricing, timelines, and support. Get the information you need about engineering services in Tanzania."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                FAQs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Find answers to common questions about our engineering services, 
                processes, and how we can help with your project needs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1} className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`border border-border rounded-xl overflow-hidden transition-colors ${
                        openItems[category.title] === index ? "bg-muted" : "bg-card hover:bg-muted/50"
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(category.title, index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                        aria-expanded={openItems[category.title] === index}
                      >
                        <span className="font-heading font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                            openItems[category.title] === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openItems[category.title] === index && (
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
                  ))}
                </div>
              </AnimatedSection>
            ))}

            {/* Still have questions */}
            <AnimatedSection delay={0.4} className="text-center mt-16 p-8 bg-muted rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <Button className="btn-accent" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQPage;
