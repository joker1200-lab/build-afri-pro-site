import { Link } from "react-router-dom";
import { 
  Building2, 
  Zap, 
  Sun, 
  Wind, 
  Wrench, 
  Network, 
  HardHat,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteAssets } from "@/lib/siteAssets";

const services = [
  {
    icon: HardHat,
    title: "Civil Works",
    description: "Road construction, drainage systems, earthworks, and infrastructure development projects.",
    link: "/services#civil",
    image: siteAssets.serviceCivil,
  },
  {
    icon: Building2,
    title: "Building Works",
    description: "Commercial, residential, and industrial building construction with modern techniques.",
    link: "/services#building",
    image: siteAssets.serviceBuilding,
  },
  {
    icon: Zap,
    title: "Electrical Works",
    description: "Complete electrical installations, wiring, power distribution, and maintenance.",
    link: "/services#electrical",
    image: siteAssets.serviceElectrical,
  },
  {
    icon: Sun,
    title: "Solar & Renewable Energy",
    description: "Solar panel installation, grid-tied and off-grid systems, and energy solutions.",
    link: "/services#solar",
    image: siteAssets.serviceSolar,
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    description: "Air conditioning, ventilation, refrigeration installation and maintenance.",
    link: "/services#hvac",
    image: siteAssets.serviceHvac,
  },
  {
    icon: Wrench,
    title: "Mechanical Works",
    description: "Industrial machinery, plumbing, fire systems, and mechanical engineering.",
    link: "/services#mechanical",
    image: siteAssets.serviceMechanical,
  },
  {
    icon: Network,
    title: "ICT & Security",
    description: "Network infrastructure, CCTV, access control, and telecommunications solutions.",
    link: "/services#ict",
    image: siteAssets.serviceIctSecurity,
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="section-title mb-4">
            Comprehensive Engineering Services
          </h2>
          <p className="section-subtitle">
            From concept to completion, we provide end-to-end engineering solutions 
            tailored to meet your project requirements.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <Link
                to={service.link}
                className="group card-elevated p-6 h-full flex flex-col"
              >
                <div className="relative h-40 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={`${service.title} engineering service`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 w-11 h-11 rounded-lg gradient-accent flex items-center justify-center shadow-lg">
                    <service.icon size={22} className="text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-accent font-medium text-sm">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
