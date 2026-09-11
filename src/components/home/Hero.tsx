import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteAssets } from "@/lib/siteAssets";

const Hero = () => {
  const features = [
    "20+ Years of Experience",
    "Licensed & Certified",
    "Expert Engineering Team",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={siteAssets.engineeringTeam}
          alt="African engineering team reviewing construction plans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted Engineering Partner in Tanzania
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Building{" "}
            <span className="text-accent">Tanzania's Future</span>{" "}
            with Engineering Excellence
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed"
          >
            Multitech Engineering delivers comprehensive solutions in civil, electrical, 
            solar, HVAC, and ICT services. Your trusted partner for quality, safety, 
            and innovation in every project.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle size={18} className="text-accent" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="btn-accent text-lg px-8" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
              asChild
            >
              <a href="tel:+255788222899">
                <Phone size={20} className="mr-2" />
                Call +255 788 222 899
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border"
      >
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "20+", label: "Years Experience" },
              { value: "50+", label: "Expert Engineers" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
