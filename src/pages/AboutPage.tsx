import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Users, Lightbulb, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-meeting.jpg";
import heroImage from "@/assets/hero-engineering.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We maintain the highest safety standards in all our operations, ensuring the wellbeing of our workers and clients.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Every project is executed with precision and attention to detail, meeting international quality standards.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "We build lasting relationships by understanding and exceeding our clients' expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and methods to deliver cutting-edge engineering solutions.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest, transparent communication and ethical practices guide all our business dealings.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "We deliver on our promises, completing projects on time and within budget.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Multitech Engineering (T) Ltd - Engineering Company Tanzania</title>
        <meta
          name="description"
          content="Learn about Multitech Engineering, a leading engineering company in Tanzania with 20+ years of experience in civil, electrical, solar, and HVAC services."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                About Multitech Engineering
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                Building Tanzania's Future Since 2004
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A trusted multi-disciplinary engineering partner delivering excellence 
                in construction, electrical, solar, and infrastructure projects.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left">
                <img
                  src={teamImage}
                  alt="Multitech Engineering professional team"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="section-title mb-6">
                  Who We Are
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Multitech Engineering (T) Ltd is a leading multi-disciplinary engineering 
                  company headquartered in Dar es Salaam, Tanzania. Established in 2004, we 
                  have grown to become one of the most trusted engineering partners in the region.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our team comprises over 50 certified engineers, technicians, and support 
                  staff, bringing together expertise across civil, electrical, mechanical, 
                  and ICT disciplines. We take pride in our ability to deliver complex 
                  multi-service projects under one roof.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Over the past two decades, we have successfully completed more than 500 
                  projects across Tanzania, ranging from residential buildings to large-scale 
                  industrial installations and renewable energy projects.
                </p>
                <Button className="btn-accent" asChild>
                  <Link to="/portfolio">
                    View Our Projects
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection>
                <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Eye size={28} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading engineering company in East Africa, recognized for 
                    our commitment to quality, innovation, and sustainable development. 
                    We envision a future where our engineering solutions contribute 
                    significantly to Tanzania's infrastructure growth and prosperity.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <Target size={28} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver exceptional engineering solutions that exceed client 
                    expectations while maintaining the highest standards of safety, 
                    quality, and professional integrity. We are committed to developing 
                    our people and contributing positively to our communities.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-16">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
                What Drives Us
              </span>
              <h2 className="section-title mb-4">
                Our Core Values
              </h2>
              <p className="section-subtitle">
                These principles guide every decision we make and every project we undertake.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="card-elevated p-6 h-full text-center">
                    <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-5">
                      <value.icon size={28} className="text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding gradient-hero">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Why Choose Multitech
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
                  Your Trusted Engineering Partner
                </h2>
                <ul className="space-y-4">
                  {[
                    "20+ years of industry experience in Tanzania",
                    "Team of 50+ certified engineers and technicians",
                    "Comprehensive multi-disciplinary services",
                    "ISO-compliant quality management systems",
                    "Proven track record with 500+ completed projects",
                    "24/7 emergency support and maintenance",
                    "Competitive pricing with transparent quotations",
                    "Strong commitment to safety and sustainability",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-primary-foreground/90">
                      <ArrowRight size={18} className="text-accent mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <img
                  src={heroImage}
                  alt="Multitech Engineering construction site team"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-accent">
          <div className="container-custom text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and discover how 
                Multitech Engineering can bring your vision to life.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-navy-dark"
                asChild
              >
                <Link to="/contact">
                  Contact Us Today
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

export default AboutPage;
