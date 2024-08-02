import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="xl:w-screen lg:w-screen w-[170vw] h-[200vh] lg:h-screen xl:h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="h-[60%] w-[80%] max-w-screen-md relative flex items-center justify-center rounded-xl">
        <div className="w-full md:w-[100%]  lg:w-[30%] ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
