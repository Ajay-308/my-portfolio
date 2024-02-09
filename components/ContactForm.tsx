import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  return (
    <section className="contact mr-12 -ml-12" id="contact">
      <h2 className="font-bold text-white ml-12 cursive ">
        Contact <span>Me</span>
      </h2>
      <form
        action="https://formspree.io/f/xoqzpanb"
        method="POST"
        className="contact-form"
      >
        <label className="input-box">
          <Input
            className="mt-2 mix-blend-soft-light w-96"
            type="text"
            name="name"
            placeholder="Your name"
          />
          <Input
            className="mt-2 mix-blend-soft-light w-96"
            type="email"
            name="email"
            placeholder="Your email"
          />
        </label>
        <label className="input-box">
          <Input
            className="mt-2 mix-blend-soft-light w-96"
            type="number"
            name="number"
            placeholder="Your number"
          />
          <Textarea
            className="mt-2 mix-blend-soft-light w-96"
            name="message"
            placeholder="Send your query"
          ></Textarea>
        </label>
        {/* Your other form fields go here */}
        <Button
          type="submit"
          className="bg-gradient-to-br from-pink-500 to-violet-400 mix-blend-soft-light font-bold cursor-pointer hover:bg-white rounded-full h-8 w-32 mt-4 text-black"
          value="Send message"
        >
          send
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
