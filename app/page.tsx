"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-screen h-[150vh] xl:h-screen lg:h-screen relative">
      <Navbar />
      <div
        className="flex items-center w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px]  text-white font-semibold">
            Hi there, I am Ajay <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              FUll Stack Developer{""}
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Hello there, I am full Stack Devloper having good knowledge of MERN
            Stack Currently learning Gen Ai.
          </p>
          <div className="flex-col md:flex-row md:z-[10] md:flex gap-5">
            <Button className="rounded-md m-2 h-12 group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <Link href="/my-skills">Learn more</Link>
            </Button>
            <Button className="rounded-md m-2  h-12 group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]">
              <Link href="/my-projects">
                <div className="absolute rounded-md h-12 z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
                My projects
              </Link>
            </Button>
            <Button className="rounded-md  m-2 h-12 group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <Link href="/contact-me">
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
                Contact me
              </Link>
            </Button>
            <Button className="rounded-md m-2 h-12 group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <Link href="https://drive.google.com/file/d/1rAkQS-i-kHrKumMUkrbhzQN37iQaeCrq/view?usp=drive_link">
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
                my-resume
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 ">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40 hidden md:block"
        />
        <Image
          className="hidden lg:block md:block"
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
        />
      </div>

      {/* Trees in the foreground */}
      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      {/* Stars in the foreground */}
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
