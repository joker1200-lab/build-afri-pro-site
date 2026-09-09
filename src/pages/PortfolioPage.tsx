import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteAssets } from "@/lib/siteAssets";

const categories = [
  "All Projects",
  "Civil Works",
  "Building Works",
  "Electrical",
  "Solar Energy",
  "HVAC",
  "Mechanical",
  "ICT & Security",
];

const projects = [
  {
    id: 1,
    image: siteAssets.projectPlanning,
    category: "Building Works",
    title: "Commercial Office Complex",
    description: "Modern 8-story commercial building with full electrical and HVAC systems integration.",
    location: "Dar es Salaam",
    year: "2024",
  },
  {
    id: 2,
    image: siteAssets.solarInstallers,
    category: "Solar Energy",
    title: "Industrial Solar Installation",
    description: "500kW solar panel farm powering an industrial manufacturing facility.",
    location: "Arusha",
    year: "2024",
  },
  {
    id: 3,
    image: siteAssets.civilEngineer,
    category: "Civil Works",
    title: "Road Infrastructure Project",
    description: "Major civil works including road construction, drainage systems, and utilities.",
    location: "Mwanza",
    year: "2023",
  },
  {
    id: 4,
    image: siteAssets.electricalTechnician,
    category: "Electrical",
    title: "Factory Electrical Upgrade",
    description: "Complete electrical system overhaul for a manufacturing plant.",
    location: "Dar es Salaam",
    year: "2023",
  },
  {
    id: 5,
    image: siteAssets.electricalMaintenance,
    category: "HVAC",
    title: "Hotel Climate Control",
    description: "Central air conditioning and ventilation system for a luxury hotel.",
    location: "Zanzibar",
    year: "2024",
  },
  {
    id: 6,
    image: siteAssets.telecomInfrastructure,
    category: "ICT & Security",
    title: "Corporate Security System",
    description: "Integrated CCTV, access control, and network infrastructure for corporate offices.",
    location: "Dodoma",
    year: "2023",
  },
  {
    id: 7,
    image: siteAssets.mechanicalWelder,
    category: "Mechanical",
    title: "Industrial Piping System",
    description: "Complex industrial piping and pump installation for processing plant.",
    location: "Dar es Salaam",
    year: "2024",
  },
  {
    id: 8,
    image: siteAssets.engineeringCollaboration,
    category: "Building Works",
    title: "Shopping Mall Construction",
    description: "Multi-level retail complex with integrated services and parking facilities.",
    location: "Dar es Salaam",
    year: "2023",
  },
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Portfolio | Multitech Engineering - Completed Projects in Tanzania</title>
        <meta
          name="description"
          content="Explore Multitech Engineering's portfolio of completed projects across Tanzania, including construction, solar, electrical, and HVAC installations."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                Featured Projects
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Showcasing our commitment to excellence through successfully 
                completed engineering projects across Tanzania.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Filters */}
            <AnimatedSection className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Filter size={20} className="text-accent" />
                <span className="font-semibold text-foreground">Filter by Category:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <div className="card-elevated overflow-hidden group h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-grow">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-accent">
          <div className="container-custom text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how Multitech Engineering can bring your vision to life 
                with quality and precision.
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

export default PortfolioPage;
