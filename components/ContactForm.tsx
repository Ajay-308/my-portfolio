"use client";
import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.defer = true;
      document.body.appendChild(script);
    }, 100); // Adjust the timeout as needed

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="contact mr-12 -ml-12" id="contact">
      <div
        className="visme_d"
        data-title="Untitled Proj"
        data-url="90xzgyz6-untitled-proj?fullPage=true"
        data-domain="forms"
        data-full-page="true"
        data-min-height="100vh"
        data-form-id="15546"
        style={{ background: "transparent" }}
      ></div>
    </section>
  );
};

export default ContactForm;
