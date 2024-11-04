"use client";

import * as React from "react";
import Image from "next/image";
import { ImageHomePage, ImageProfile } from "../public/images";
import Skills from "./Skills";
import Projects, { projects } from "./Projects";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const filteredProjects = projects.filter((project) =>
    ["B2B Portal (Web)", "Clothing Webshop"].includes(project.title)
  );

  return (
    <div>
      <div className="relative w-screen max-h-80 overflow-hidden mb-12">
        <Image
          src={ImageHomePage}
          width={2000}
          height={64}
          alt="Intro picture"
        />
        <p className="absolute inset-0 flex flex-col justify-center items-center text-white text-3xl md:text-6xl font-bold">
          <span>
            Hi! I&apos;m <span className="text-yellow-500">Maxim</span>.
          </span>
          <span>Student Computer Science.</span>
        </p>
      </div>

      <Skills />

      <div className="flex flex-col md:flex-row items-center mt-12 p-6 md:p-12 border border-white rounded-3xl">
        <div className="flex flex-col w-full md:w-1/2 space-y-4 text-white">
          <span className="text-4xl md:text-6xl font-semibold">
            Hi! I&apos;m <span className="text-yellow-500">Maxim</span>.
          </span>
          <span className="text-justify md:text-lg">
            I&apos;m a Computer Science student specializing in Mobile and
            Enterprise Development, passionate about crafting innovative and
            high-performance applications. With a strong foundation in software
            engineering and a focus on web technologies and scalable enterprise
            solutions, I aim to bridge the gap between user experience and
            business efficiency.
          </span>
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center mt-6 md:mt-0">
          <Image
            src={ImageProfile}
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-white my-16">
        <span className="text-4xl font-semibold">Featured Projects</span>
        <span className="mt-3 mb-10">
          Here you can see some of my projects.
        </span>
        <Projects showedProjects={filteredProjects} />
        <Link href="/projects">
          <Button className="border rounded-full mt-7 uppercase text-6xl text-black px-4 py-2">
            See More Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
