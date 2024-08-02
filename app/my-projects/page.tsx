"use client";

import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="xl:w-screen lg:w-screen w-[170vw] h-[250vh] lg:h-screen xl:h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-1 xl:mb-24 xl:p-7 p-[4rem] md:grid-cols-2 gap-5 lg:max-w-[90%] lg:max-h-[90%] xl:max-w-[90%] xl:max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
