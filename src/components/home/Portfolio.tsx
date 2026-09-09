import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteAssets } from "@/lib/siteAssets";

const projects = [
  {
    id: 1,
    image: siteAssets.commercialOfficeComplex,
    category: "Building Works",
    title: "Commercial Office Complex",
    description: "Modern 8-story commercial building with full electrical and HVAC systems",
  },
  {
    id: 2,
    image: siteAssets.solarPowerInstallation,
    category: "Renewable Energy",
    title: "Solar Power Installation",
    description: "500kW solar panel farm for industrial facility",
  },
  {
    id: 3,
    image: siteAssets.infrastructureDevelopment,
    category: "Civil Works",
    title: "Infrastructure Development",
    description: "Major civil works including roads and drainage systems",
  },
  {
    id: 4,
    image: siteAssets.industrialElectricalSystem,
    category: "Electrical Works",
    title: "Industrial Electrical System",
    description: "Complete electrical installation for manufacturing plant",
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
            Our Portfolio
          </span>
          <h2 className="section-title mb-4">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            Explore our portfolio of successfully completed projects across Tanzania, 
            showcasing our expertise and commitment to excellence.
          </p>
        </AnimatedSection>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-80"
                  }`}
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    {project.description}
                  </p>
                  <div
                    className={`flex items-center gap-2 text-accent font-medium transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <Eye size={18} />
                    View Project Details
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <Button size="lg" className="btn-accent" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;
