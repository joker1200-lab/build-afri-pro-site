import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { 
    name: "Services", 
    path: "/services",
    dropdown: [
      { name: "Civil Works", path: "/services#civil" },
      { name: "Building Works", path: "/services#building" },
      { name: "Electrical Works", path: "/services#electrical" },
      { name: "Solar & Renewable Energy", path: "/services#solar" },
      { name: "HVAC Systems", path: "/services#hvac" },
      { name: "Mechanical Works", path: "/services#mechanical" },
      { name: "ICT & Security", path: "/services#ict" },
    ]
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-primary">
        <div className="container-custom py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-sm text-primary-foreground/90">
            <a href="tel:+255123456789" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              +255 123 456 789
            </a>
            <span>Dar es Salaam, Tanzania</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/255123456789"
              className="text-sm text-primary-foreground/90 hover:text-accent transition-colors"
            >
              WhatsApp: +255 123 456 789
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-heading font-bold text-lg leading-tight ${scrolled ? 'text-foreground' : 'text-primary'}`}>
                MULTITECH
              </h1>
              <p className={`text-xs tracking-wider ${scrolled ? 'text-muted-foreground' : 'text-primary/80'}`}>
                ENGINEERING (T) LTD
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 font-medium transition-colors py-2 ${
                    location.pathname === link.path
                      ? "text-accent"
                      : scrolled
                      ? "text-foreground hover:text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="tel:+255123456789">
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
            </Button>
            <Button className="btn-accent" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-foreground' : 'text-primary'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
            >
              <div className="py-4">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      className={`block px-6 py-3 font-medium transition-colors ${
                        location.pathname === link.path
                          ? "text-accent bg-accent/10"
                          : "text-foreground hover:text-accent hover:bg-accent/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="bg-muted/50 py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-10 py-2.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-6 pt-4 mt-4 border-t border-border space-y-3">
                  <Button variant="outline" className="w-full border-primary" asChild>
                    <a href="tel:+255123456789">
                      <Phone size={18} className="mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button className="w-full btn-accent" asChild>
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
