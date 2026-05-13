type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className = "" }: ContactFormProps) => {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        aria-label="Get a free estimate"
        title="Get a free estimate"
        src="https://forms.zohopublic.ca/bimg/form/ClientDetails/formperma/Kmx4x8ESi12IeyPWk4mm7sO_mauWFBPfQjcV5nkU-Uw"
        frameBorder={0}
        style={{
          height: "720px",
          width: "99%",
          border: "none",
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ContactForm;
