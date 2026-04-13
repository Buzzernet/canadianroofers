import { Star } from "lucide-react";
import GoogleReviewImg from "../../public/images/google-reviews.png"

const testimonials = [
  {
    name: "Sarah M.",
    location: "Toronto, ON",
    text: "Canadian Roofers did an amazing job on our shingle roof replacement. The team was professional, on time, and the price was unbeatable. Highly recommend!",
  },
  {
    name: "James K.",
    location: "Mississauga, ON",
    text: "Great experience from start to finish. The free estimate was accurate, the crew was fast, and our new roof looks incredible. Best roofing company in the GTA!",
  },
  {
    name: "Priya D.",
    location: "Brampton, ON",
    text: "We were impressed by the quality of work and the lifetime warranty on materials. The $4.99/sq ft deal was the best price we found anywhere. Very happy with the result!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h4 className="font-space-grotesk text-accent text-xs tracking-[0.3em] uppercase font-bold mb-3">Testimonials</h4>
          <h2 className="font-playfair-display font-black text-4xl md:text-5xl text-foreground leading-[0.95] mb-6">
            What Our Customers Say
          </h2>
          <div className="flex justify-center mt-4">
            <img src={`/images/google-reviews.png`} className="w-[120px] " alt="google-reviews" />
          </div>
          {/* <GoogleStars size="lg" className="justify-center" /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-star text-star" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed text-[15px] italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
