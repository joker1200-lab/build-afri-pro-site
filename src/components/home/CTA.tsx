import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CTA = () => {
  return (
    <section className="section-padding gradient-accent relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Start Your Next Engineering Project?
          </h2>
          <p className="text-accent-foreground/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Get in touch with our team today for a free consultation and quote. 
            We're here to bring your vision to life with quality and precision.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-navy-dark text-lg px-8"
            asChild
          >
            <Link to="/contact">
              Request a Free Quote
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-lg px-8"
            asChild
          >
            <a href="tel:+255123456789">
              <Phone size={20} className="mr-2" />
              Call Us Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-lg px-8"
            asChild
          >
            <a
              href="https://wa.me/255123456789?text=Hello%20Multitech%20Engineering!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
