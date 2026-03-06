"use client";

import { useEffect, useRef } from "react";

type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load JotForm embed handler script
    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      document.body.appendChild(script);
      scriptLoadedRef.current = true;

      script.onload = () => {
        // Initialize JotForm embed handler after script loads
        if (window.jotformEmbedHandler && iframeRef.current) {
          window.jotformEmbedHandler("iframe[id='JotFormIFrame-260644191687263']", "https://form.jotform.com/");
        }
      };
    } else if (window.jotformEmbedHandler && iframeRef.current) {
      // If script already loaded, initialize immediately
      window.jotformEmbedHandler("iframe[id='JotFormIFrame-260644191687263']", "https://form.jotform.com/");
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className={className}>
      <iframe
        id="JotFormIFrame-260644191687263"
        title="Canadian Roofers Roofing Roof Installer Form Netlify"
        ref={iframeRef}
        onLoad={() => {
          if (window.parent) {
            window.parent.scrollTo(0, 0);
          }
        }}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/260644191687263"
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

// Extend Window interface for TypeScript
declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}

export default ContactForm;
