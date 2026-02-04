import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    id: 1,
    quote: "Multitech Engineering delivered our office complex project on time and within budget. Their professionalism and attention to detail exceeded our expectations. Highly recommended for any construction project.",
    author: "Project Manager",
    role: "Commercial Real Estate Developer",
    rating: 5,
  },
  {
    id: 2,
    quote: "The solar installation team was exceptional. They designed and installed a system that has significantly reduced our energy costs. The after-sales support has been outstanding.",
    author: "Facility Director",
    role: "Manufacturing Company",
    rating: 5,
  },
  {
    id: 3,
    quote: "We've worked with Multitech on multiple HVAC projects. Their technical expertise and commitment to quality make them our go-to engineering partner for all climate control needs.",
    author: "Operations Manager",
    role: "Hotel & Hospitality",
    rating: 5,
  },
  {
    id: 4,
    quote: "The ICT infrastructure they installed has transformed our operations. Professional team, excellent communication, and superb results. A reliable partner for all technology needs.",
    author: "IT Director",
    role: "Financial Services",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary-foreground rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        {/* Testimonial slider */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote icon */}
              <Quote size={48} className="absolute -top-6 -left-4 text-accent/30" />

              {/* Testimonial content */}
              <div className="text-center px-8 md:px-12">
                <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-heading font-bold text-primary-foreground text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-primary-foreground/70">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
