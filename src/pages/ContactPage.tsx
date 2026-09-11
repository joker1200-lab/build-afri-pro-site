import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Multitech Engineering (T) Ltd - Get a Quote Tanzania</title>
        <meta
          name="description"
          content="Contact Multitech Engineering for a free quote. Located in Dar es Salaam, Tanzania. Call +255 788 222 899 or use our contact form for engineering inquiries."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                Let's Discuss Your Project
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Get in touch with our team for a free consultation and quote. 
                We're here to help bring your engineering vision to life.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Info */}
              <AnimatedSection className="lg:col-span-1">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:+255788222899"
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground">+255 788 222 899</p>
                      <p className="text-muted-foreground">+255 723 116 111</p>
                      <p className="text-muted-foreground">+255 789 888 878</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/255788222899"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        WhatsApp
                      </h3>
                      <p className="text-muted-foreground">+255 788 222 899</p>
                      <p className="text-sm text-accent">Click to chat</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info.multitechtz@gmail.com"
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-accent/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground">info.multitechtz@gmail.com</p>
                      
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Our Office
                      </h3>
                      <p className="text-muted-foreground">
                        EAGT Building, Bohari Street<br />
                        Near Nyerere Road, Dar es Salaam, Tanzania
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Working Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 8:00 AM - 1:00 PM<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.2} className="lg:col-span-2">
                <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card border border-border">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+255 xxx xxx xxx"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="btn-accent w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.37667440853!2d39.12892!3d-6.792354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4bae169bd6f1%3A0x940f6b26a086a1dd!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1706800000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Multitech Engineering Location - Dar es Salaam, Tanzania"
          />
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
