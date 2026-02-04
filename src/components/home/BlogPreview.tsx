import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import solarImage from "@/assets/solar-installation.jpg";
import electricalImage from "@/assets/electrical-work.jpg";
import hvacImage from "@/assets/hvac-work.jpg";

const blogPosts = [
  {
    id: 1,
    image: solarImage,
    category: "Renewable Energy",
    title: "The Benefits of Solar Energy for Tanzanian Businesses",
    excerpt: "Discover how solar power can reduce your operational costs and contribute to sustainable development in Tanzania.",
    author: "Engineering Team",
    date: "January 25, 2025",
    slug: "benefits-solar-energy-tanzania",
  },
  {
    id: 2,
    image: electricalImage,
    category: "Electrical Safety",
    title: "Essential Electrical Safety Tips for Commercial Buildings",
    excerpt: "Learn about critical electrical safety measures every business owner should implement to protect their property and employees.",
    author: "Engineering Team",
    date: "January 20, 2025",
    slug: "electrical-safety-tips-commercial",
  },
  {
    id: 3,
    image: hvacImage,
    category: "HVAC Systems",
    title: "Choosing the Right HVAC System for Your Facility",
    excerpt: "A comprehensive guide to selecting and maintaining HVAC systems for optimal comfort and energy efficiency.",
    author: "Engineering Team",
    date: "January 15, 2025",
    slug: "choosing-hvac-system-guide",
  },
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
            Latest Insights
          </span>
          <h2 className="section-title mb-4">
            Engineering News & Articles
          </h2>
          <p className="section-subtitle">
            Stay informed with the latest trends, tips, and insights from the 
            engineering and construction industry.
          </p>
        </AnimatedSection>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <article className="card-elevated overflow-hidden group h-full flex flex-col">
                {/* Image */}
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

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button size="lg" className="btn-primary" asChild>
            <Link to="/blog">
              View All Articles
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogPreview;
