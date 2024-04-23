import { useEffect } from "react";

type iRequestDemoForm = {
  className?: string;
  title?: any;
  description?: any;
};
const ContactUsForm = ({ title, description, className }: iRequestDemoForm) => {
  const formId = `hubspot-form`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      //@ts-ignore
      if (window && window.hbspt) {
        //@ts-ignore
        window.hbspt.forms.create({
          portalId: "14545640",
          formId: "4fd8c4ec-a157-4e53-b588-52bcd1123e06",
          target: `#${formId}`,
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`${className || "text-center"}`}>
      <div className="mb-8">
        {title || <h3>Need to ask a question?</h3>}
        {description || <p>Please feel free to drop us a note any time</p>}
      </div>
      <div id={formId} />
    </div>
  );
};

export default ContactUsForm;
