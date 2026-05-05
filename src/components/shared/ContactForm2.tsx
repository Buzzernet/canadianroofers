"use client";

const JOTFORM_ID = "260955333661258";
const IFRAME_ID = `JotFormIFrame-${JOTFORM_ID}`;

type ContactForm2Props = {
  className?: string;
};

const ContactForm2 = ({ className = "" }: ContactForm2Props) => {
  return (
    <div className={className}>
      <iframe
        id={IFRAME_ID}
        title="Canadian Roofers Form Netlify (B)"
        onLoad={() => {
          if (window.parent) {
            window.parent.scrollTo(0, 0);
          }
        }}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src={`https://form.jotform.com/${JOTFORM_ID}`}
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "539px",
          border: "none",
        }}
        scrolling="no"
      />
    </div>
  );
};

export default ContactForm2;
