import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteAssets } from "@/lib/siteAssets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Civil Works", path: "/services#civil" },
    { name: "Building Works", path: "/services#building" },
    { name: "Electrical Works", path: "/services#electrical" },
    { name: "Solar & Renewable Energy", path: "/services#solar" },
    { name: "HVAC Systems", path: "/services#hvac" },
    { name: "Mechanical Works", path: "/services#mechanical" },
    { name: "ICT & Security", path: "/services#ict" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Portfolio", path: "/portfolio" },
    { name: "Blog & News", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-card rounded-md px-3 py-2">
                <img
                  src={siteAssets.logo}
                  alt="Multitech Engineering (T) Ltd"
                  className="h-12 w-auto max-w-[220px] object-contain"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for comprehensive engineering solutions in Tanzania. 
              From civil works to solar energy, we deliver excellence in every project.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={14} className="text-accent" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={14} className="text-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:+255788222899" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Phone size={18} className="mt-1 text-accent" />
                <span>+255 788 222 899</span>
              </a>
              <a href="mailto:info.multitechtz@gmail.com" className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors">
                <Mail size={18} className="mt-1 text-accent" />
                <span>info.multitechtz@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={18} className="mt-1 text-accent flex-shrink-0" />
                <span>Plot 123, Industrial Area<br />Dar es Salaam, Tanzania</span>
              </div>
            </div>

            <h5 className="font-semibold mb-3">Newsletter</h5>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-accent hover:bg-orange-dark text-accent-foreground px-4">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Multitech Engineering (T) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
