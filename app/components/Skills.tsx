"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const skills = [
  {
    name: "HTML",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/dd409da8c29d89497ca37dc08d9de1828a26d5ba/Skills/html-5-svgrepo-com.svg",
  },
  {
    name: "CSS",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/dd409da8c29d89497ca37dc08d9de1828a26d5ba/Skills/css-3-svgrepo-com.svg",
  },
  {
    name: "React",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/1ddd764e1cb63e47d79e4dcef379076188551e97/Skills/react-svgrepo-com.svg",
  },
  {
    name: "Next.js",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/6ee6b2422198986f5b0a5db5e8d31280fbb2325d/Skills/next-dot-js-svgrepo-com-3.svg",
  },
  {
    name: "JavaScript",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/1ddd764e1cb63e47d79e4dcef379076188551e97/Skills/js-svgrepo-com.svg",
  },
  {
    name: "Java",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/dd409da8c29d89497ca37dc08d9de1828a26d5ba/Skills/java-svgrepo-com.svg",
  },
  {
    name: "Python",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/dd409da8c29d89497ca37dc08d9de1828a26d5ba/Skills/python-svgrepo-com.svg",
  },
  {
    name: "MySQL",
    link: "https://raw.githubusercontent.com/LimaxDevelopment/Portfolio-Images/1ddd764e1cb63e47d79e4dcef379076188551e97/Skills/mysql-logo-svgrepo-com.svg",
  },
];

const Skills = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col items-center">
      <p className="text-white text-4xl font-semibold mb-6">My Skills</p>
      <Carousel plugins={[plugin.current]} className="w-full">
        <CarouselContent>
          {Array.from({ length: skills.length }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center md:basis-1/2 lg:basis-1/5"
            >
              <div className="p-1">
                <Image
                  key={index}
                  src={skills[index].link}
                  alt={skills[index].name}
                  width={100}
                  height={100}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Skills;
