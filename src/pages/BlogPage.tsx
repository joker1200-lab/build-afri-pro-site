import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import solarImage from "@/assets/solar-installation.jpg";
import electricalImage from "@/assets/electrical-work.jpg";
import hvacImage from "@/assets/hvac-work.jpg";
import constructionImage from "@/assets/construction-site.jpg";
import ictImage from "@/assets/ict-security.jpg";
import mechanicalImage from "@/assets/mechanical-work.jpg";

const blogPosts = [
  {
    id: 1,
    image: solarImage,
    category: "Renewable Energy",
    title: "The Benefits of Solar Energy for Tanzanian Businesses",
    excerpt: "Discover how solar power can reduce your operational costs and contribute to sustainable development in Tanzania. Learn about incentives, ROI, and implementation strategies.",
    author: "Engineering Team",
    date: "January 25, 2025",
    readTime: "5 min read",
    slug: "benefits-solar-energy-tanzania",
  },
  {
    id: 2,
    image: electricalImage,
    category: "Electrical Safety",
    title: "Essential Electrical Safety Tips for Commercial Buildings",
    excerpt: "Learn about critical electrical safety measures every business owner should implement to protect their property and employees. A comprehensive safety guide.",
    author: "Engineering Team",
    date: "January 20, 2025",
    readTime: "7 min read",
    slug: "electrical-safety-tips-commercial",
  },
  {
    id: 3,
    image: hvacImage,
    category: "HVAC Systems",
    title: "Choosing the Right HVAC System for Your Facility",
    excerpt: "A comprehensive guide to selecting and maintaining HVAC systems for optimal comfort and energy efficiency in Tanzania's climate.",
    author: "Engineering Team",
    date: "January 15, 2025",
    readTime: "8 min read",
    slug: "choosing-hvac-system-guide",
  },
  {
    id: 4,
    image: constructionImage,
    category: "Construction",
    title: "Modern Construction Techniques in East Africa",
    excerpt: "Exploring innovative building methods and materials that are transforming the construction industry in Tanzania and the wider region.",
    author: "Engineering Team",
    date: "January 10, 2025",
    readTime: "6 min read",
    slug: "modern-construction-techniques",
  },
  {
    id: 5,
    image: ictImage,
    category: "ICT Infrastructure",
    title: "Building Secure Network Infrastructure for Businesses",
    excerpt: "Essential considerations for designing and implementing robust, secure network infrastructure for modern businesses.",
    author: "Engineering Team",
    date: "January 5, 2025",
    readTime: "5 min read",
    slug: "secure-network-infrastructure",
  },
  {
    id: 6,
    image: mechanicalImage,
    category: "Mechanical Engineering",
    title: "Industrial Maintenance Best Practices",
    excerpt: "Learn how preventive maintenance can extend equipment life, reduce downtime, and save costs for industrial operations.",
    author: "Engineering Team",
    date: "December 28, 2024",
    readTime: "6 min read",
    slug: "industrial-maintenance-practices",
  },
];

const categories = ["All", "Renewable Energy", "Electrical Safety", "HVAC Systems", "Construction", "ICT Infrastructure", "Mechanical Engineering"];

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Blog | Multitech Engineering - News & Insights Tanzania</title>
        <meta
          name="description"
          content="Read the latest engineering articles, industry insights, and expert tips from Multitech Engineering. Topics include solar energy, construction, electrical, and HVAC systems."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 gradient-hero">
          <div className="container-custom">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
                Engineering Insights & News
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Stay informed with the latest trends, tips, and insights from 
                the engineering and construction industry.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Category filters */}
            <AnimatedSection className="mb-12">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <article className="card-elevated overflow-hidden group h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <User size={14} />
                          {post.author}
                        </span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-accent font-medium text-sm"
                        >
                          Read More
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <AnimatedSection className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest engineering insights and company updates delivered 
                directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button className="btn-accent">
                  Subscribe
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogPage;
