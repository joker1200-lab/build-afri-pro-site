import { Link } from "react-router-dom";
import { ArrowRight, Award, Shield, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteAssets } from "@/lib/siteAssets";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified standards in all our engineering projects",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Zero-compromise approach to workplace safety",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled engineers and technicians across all disciplines",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology and sustainable solutions",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src={siteAssets.engineeringCollaboration}
                alt="African engineers reviewing project plans"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection>
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
                About Multitech Engineering
              </span>
              <h2 className="section-title mb-6">
                Your Trusted Multi-Disciplinary Engineering Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Multitech Engineering (T) Ltd is a leading engineering company in Tanzania, 
                providing comprehensive solutions across civil, electrical, mechanical, 
                solar, HVAC, and ICT sectors. Since our establishment, we have been 
                committed to delivering projects that exceed expectations.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of certified engineers and technicians brings expertise and 
                dedication to every project, ensuring quality, safety, and timely 
                delivery. We take pride in contributing to Tanzania's infrastructure 
                development and sustainable growth.
              </p>
            </AnimatedSection>

            {/* Highlights */}
            <AnimatedSection delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Button className="btn-accent" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
