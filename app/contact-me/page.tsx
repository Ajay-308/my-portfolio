import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="xl:w-screen lg:w-screen w-[100vw] xl:h-screen lg:h-screen h-[130vh] bg-cover bg-center flex items-center justify-center"
    >
      <div className="h-[60%] w-[80%] max-w-screen-md relative flex items-center justify-center rounded-xl">
        <div className="w-full md:w-[70%] ml-12 lg:w-[30%]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
