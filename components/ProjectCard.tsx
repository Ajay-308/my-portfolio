"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <PinContainer
        title={title}
        className=" w-[30rem] sm:w-[450px] h-[280px] rounded-md cursor-pointer"
      >
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
          >
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
            <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
              Learn more &gt;
            </div>
          </div>
        </motion.div>
      </PinContainer>
      {/* Add more PinContainer components here as needed */}
    </div>
  );
};

export default ProjectCard;
