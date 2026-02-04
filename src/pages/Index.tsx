import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Multitech Engineering (T) Ltd | Engineering & Construction Services in Tanzania</title>
        <meta
          name="description"
          content="Multitech Engineering is a trusted multi-disciplinary engineering company in Dar es Salaam, Tanzania. We provide civil works, electrical, solar, HVAC, ICT, and construction services."
        />
        <meta
          name="keywords"
          content="engineering Tanzania, construction company Dar es Salaam, electrical installation, solar energy Tanzania, HVAC services, civil engineering, building construction"
        />
        <link rel="canonical" href="https://multitech.co.tz" />
      </Helmet>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <BlogPreview />
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;
