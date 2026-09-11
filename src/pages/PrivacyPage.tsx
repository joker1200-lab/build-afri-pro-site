import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Multitech Engineering (T) Ltd</title>
        <meta
          name="description"
          content="How Multitech Engineering (T) Ltd collects, uses, and protects the personal information you share through our website and enquiries."
        />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-16 lg:pt-40 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-primary-foreground/90 text-lg">
                Your privacy matters to us. This page explains what information we collect and how we use it.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Information We Collect</h2>
              <p>
                When you contact us through our website, WhatsApp, phone, or email, we may collect your name,
                phone number, email address, and details of the project you are enquiring about.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">How We Use Your Information</h2>
              <p>
                We use your information only to respond to enquiries, prepare quotations, deliver our engineering
                services, and keep you informed about your project. We never sell your information.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Client Confidentiality</h2>
              <p>
                We treat client and project details as confidential. Project images shown on this website are
                published without client or company names.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Data Security</h2>
              <p>
                We apply reasonable technical and organisational measures to protect the information you share
                with us against loss, misuse, or unauthorised access.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Contact Us</h2>
              <p>
                For any privacy question, email{" "}
                <a href="mailto:info.multitechtz@gmail.com" className="text-accent hover:underline">
                  info.multitechtz@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:+255788222899" className="text-accent hover:underline">
                  +255 788 222 899
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PrivacyPage;
