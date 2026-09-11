import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Multitech Engineering (T) Ltd</title>
        <meta
          name="description"
          content="Terms governing the use of the Multitech Engineering (T) Ltd website, quotations, and engineering services in Tanzania."
        />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-16 lg:pt-40 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-primary-foreground/90 text-lg">
                The terms that apply when you use this website or engage our engineering services.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Use of This Website</h2>
              <p>
                The content on this website is provided for general information about our engineering services.
                It does not form a binding offer on its own.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Quotations and Contracts</h2>
              <p>
                Prices, timelines, and scope are confirmed in a written quotation or contract following a site
                assessment. Quotations remain valid for the period stated in the document.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Workmanship and Warranty</h2>
              <p>
                All works are carried out to applicable Tanzanian standards and safety regulations. Warranty terms
                for materials and installations are set out in each project agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Intellectual Property</h2>
              <p>
                Text, designs, and images on this website belong to Multitech Engineering (T) Ltd and may not be
                reproduced without written permission.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Contact Us</h2>
              <p>
                Questions about these terms? Email{" "}
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

export default TermsPage;
