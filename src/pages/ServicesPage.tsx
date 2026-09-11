import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteAssets } from "@/lib/siteAssets";

const services = [
  {
    id: "civil",
    title: "Civil Works & Infrastructure",
    description: "Comprehensive civil engineering solutions for roads, drainage, foundations, and land development projects.",
    image: siteAssets.serviceCivil,
    features: [
      "Road construction and maintenance",
      "Drainage systems and culverts",
      "Foundation works and piling",
      "Land grading and earthworks",
      "Retaining walls and structures",
      "Water supply infrastructure",
    ],
    benefits: [
      "Expert project planning and execution",
      "Modern equipment and techniques",
      "Strict quality control measures",
      "Environmental compliance",
    ],
  },
  {
    id: "building",
    title: "Building Works & Construction",
    description: "Full-service building construction from design consultation to final handover for residential, commercial, and industrial projects.",
    image: siteAssets.serviceBuilding,
    features: [
      "Commercial building construction",
      "Residential developments",
      "Industrial facilities",
      "Renovations and extensions",
      "Interior finishing works",
      "Structural repairs",
    ],
    benefits: [
      "End-to-end project management",
      "Quality materials sourcing",
      "Skilled craftsmanship",
      "On-time project delivery",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Works & Installations",
    description: "Complete electrical solutions including power distribution, wiring, and industrial electrical systems.",
    image: siteAssets.serviceElectrical,
    features: [
      "Power distribution systems",
      "Electrical wiring and cabling",
      "Transformer installations",
      "Generator systems",
      "Lighting systems design",
      "Electrical maintenance",
    ],
    benefits: [
      "Licensed electrical engineers",
      "Safety-first approach",
      "Energy-efficient solutions",
      "24/7 emergency support",
    ],
  },
  {
    id: "solar",
    title: "Solar & Renewable Energy",
    description: "Sustainable energy solutions with solar panel installations, off-grid systems, and energy management.",
    image: siteAssets.serviceSolar,
    features: [
      "Grid-tied solar systems",
      "Off-grid solar installations",
      "Solar water heating",
      "Battery storage systems",
      "Energy audits and consulting",
      "Maintenance and monitoring",
    ],
    benefits: [
      "Reduce electricity costs",
      "Sustainable energy source",
      "Government incentives support",
      "Long-term ROI guarantee",
    ],
  },
  {
    id: "hvac",
    title: "HVAC Systems",
    description: "Heating, ventilation, and air conditioning solutions for optimal indoor climate control and energy efficiency.",
    image: siteAssets.serviceHvac,
    features: [
      "Central air conditioning",
      "Split system installations",
      "Industrial ventilation",
      "Refrigeration systems",
      "Air quality management",
      "Preventive maintenance",
    ],
    benefits: [
      "Energy-efficient systems",
      "Improved air quality",
      "Expert system design",
      "Regular maintenance plans",
    ],
  },
  {
    id: "mechanical",
    title: "Mechanical Works",
    description: "Industrial mechanical engineering services including plumbing, fire systems, and equipment installation.",
    image: siteAssets.serviceMechanical,
    features: [
      "Plumbing installations",
      "Fire suppression systems",
      "Industrial piping",
      "Equipment installation",
      "Pump systems",
      "Mechanical maintenance",
    ],
    benefits: [
      "Comprehensive solutions",
      "Certified technicians",
      "Quality parts and materials",
      "Minimal downtime",
    ],
  },
  {
    id: "ict",
    title: "ICT, Telecoms & Security",
    description: "Modern technology infrastructure including networking, telecommunications, CCTV, and access control systems.",
    image: siteAssets.serviceIctSecurity,
    features: [
      "Network infrastructure",
      "CCTV surveillance systems",
      "Access control systems",
      "Fiber optic installations",
      "Data center solutions",
      "Intercom and PA systems",
    ],
    benefits: [
      "Latest technology solutions",
      "Scalable systems",
      "Professional installation",
      "Ongoing technical support",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Services | Multitech Engineering Tanzania - Civil, Electrical, Solar</title>
        <meta
          name="description"
          content="Explore Multitech Engineering's comprehensive services including civil works, electrical installations, solar energy, HVAC, mechanical works, and ICT security solutions in Tanzania."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                Comprehensive Engineering Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                From civil works to ICT infrastructure, we deliver end-to-end 
                engineering services tailored to your needs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index > 0 ? "mt-24 pt-24 border-t border-border" : ""
                }`}
              >
                <AnimatedSection direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                    />
                  </div>
                </AnimatedSection>
                <AnimatedSection direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      What We Offer:
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle size={18} className="text-accent mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-2 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <ArrowRight size={16} className="text-accent mt-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Button className="btn-accent" asChild>
                        <Link to="/contact">
                          Request a Quote
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="tel:+255788222899">
                          <Phone size={18} className="mr-2" />
                          Call Us
                        </a>
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-accent">
          <div className="container-custom text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-6">
                Need a Custom Engineering Solution?
              </h2>
              <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Our team is ready to discuss your specific requirements and create 
                a tailored solution for your project.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-navy-dark"
                asChild
              >
                <Link to="/contact">
                  Get in Touch
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

export default ServicesPage;
