import GoogleStars from "./GoogleStars";
import ContactForm from "../shared/ContactForm";

const QuoteForm = () => {
  return (
    <section className="py-20 bg-surface" id="quote">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.95] mb-4">
              Request A Free Roof Estimate
            </h2>
            <p className="text-muted-foreground text-lg mb-3">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <GoogleStars size="md" className="justify-center" />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
