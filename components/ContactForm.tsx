"use client";
import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.defer = true;
      document.body.appendChild(script);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="contact mr-12 -ml-12" id="contact">
      <h1 className="mt-4 ml-4 font-bold text-3xl">
        Please touch screen once and Wait ...
      </h1>
      <div
        className="visme_d"
        data-title="Untitled Proj"
        data-url="90xzgyz6-untitled-proj?fullPage=true"
        data-domain="forms"
        data-full-page="true"
        data-min-height="100vh" 
        data-form-id="15546"
        style={{ backgroundImage: "url(bg-3.jpg)" }}
      ></div>
    </section>
  );
};

export default ContactForm;
