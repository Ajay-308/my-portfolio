"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form } from "./ui/form";
import { Label } from "./ui/label";
import toast, { Toaster } from "react-hot-toast";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.number === "" ||
      formData.message === ""
    ) {
      toast.error("please fill all the fields");
      return;
    }
    if (formData.number.length !== 10) {
      toast.error("please enter a valid number");
      return;
    }

    fetch("https://formspree.io/f/xoqzpanb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("message sent successfully!");
          setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        } else {
          toast.error("failed to send message");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("an error occured while sending the message");
      });
  };

  return (
    <section className="contact xl:-ml-[10rem] md:h-[40rem]" id="contact">
      <Toaster />
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form onSubmit={handleSubmit} className="md:w-[10rem]">
        <div className="input-box">
          <input
            type="text"
            name="name"
            style={{
              background: "transparent",
              color: "white",
              width: "25rem",
              marginLeft: "0rem",
              height: "3rem",
            }}
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            style={{
              background: "transparent",
              color: "white",
              width: "25rem",

              height: "3rem",
            }}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            name="number"
            style={{
              background: "transparent",
              color: "white",
              width: "25rem",

              height: "3rem",
            }}
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Send your query"
            className="send"
            style={{
              background: "transparent",
              color: "white",
              width: "25rem",
              border: "white",

              height: "7rem",
            }}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          style={{
            color: "white",
            width: "13rem",
            background: "#3B82F6",
            border: "white",
          }}
          type="submit"
          title="Send"
          className="btn"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
