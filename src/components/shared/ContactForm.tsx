"use client";

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className = "" }: ContactFormProps) => {
  return (
    <div className={`w-full h-205 mb-6`}>
      <iframe
        id="JotFormIFrame-260644191687263"
        title="Canadian Roofers Roofing Roof Installer Form Netlify"
        onLoad={() => {
          if (window.parent) {
            window.parent.scrollTo(0, 0);
          }
        }}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/260644191687263"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "900px",
          border: "none",
        }}
        scrolling="no"
      />
    </div>
  );
};

export default ContactForm;
