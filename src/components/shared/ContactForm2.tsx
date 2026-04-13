"use client";

import { useEffect, useRef } from "react";

const JOTFORM_ID = "260955333661258";
const IFRAME_ID = `JotFormIFrame-${JOTFORM_ID}`;

type ContactForm2Props = {
  className?: string;
};

const ContactForm2 = ({ className = "" }: ContactForm2Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const selector = `iframe[id='${IFRAME_ID}']`;

    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
      script.async = true;
      document.body.appendChild(script);
      scriptLoadedRef.current = true;

      script.onload = () => {
        if (window.jotformEmbedHandler && iframeRef.current) {
          window.jotformEmbedHandler(selector, "https://form.jotform.com/");
        }
      };
    } else if (window.jotformEmbedHandler && iframeRef.current) {
      window.jotformEmbedHandler(selector, "https://form.jotform.com/");
    }

    return () => {};
  }, []);

  return (
    <div className={className}>
      <iframe
        id={IFRAME_ID}
        title="Canadian Roofers Form Netlify (B)"
        ref={iframeRef}
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

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}

export default ContactForm2;
