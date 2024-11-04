"use client";
import Image from "next/image";
import {
  ImagesB2BWeb,
  ImagesB2BDesktop,
  ImagesWebshop,
  ImagesSpringboot,
} from "../public/images";
import {
  Card,
  CardContent,
  CardTitle,
  CardFooter,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel2";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const projects = [
  {
    title: "Portfolio",
    year: "2024",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    description:
      "A personal website showcasing my skills, experience, and development projects.",
    images: [""],
    buttons: [{ text: "Front-end Repo", link: "" }],
  },
  {
    title: "B2B Portal (Web)",
    year: "2024",
    description:
      "Collaborative school project where a team of 5 developed a B2B portal using Next.js and Node.js.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Prisma",
      "MySQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    images: ImagesB2BWeb,
    buttons: [
      {
        text: "Front-end Repo",
        link: "https://github.com/LimaxDevelopment/B2B-Web_frontend",
      },
      {
        text: "Back-end Repo",
        link: "https://github.com/LimaxDevelopment/B2B_Web_backend",
      },
    ],
  },
  {
    title: "B2B Portal (Desktop)",
    year: "2024",
    description:
      "School project built by a team of 5, creating a desktop B2B portal using Java and JavaFX.",
    technologies: ["Java", "JavaFX"],
    images: ImagesB2BDesktop,
    buttons: [
      {
        text: "Front-end Repo",
        link: "https://github.com/LimaxDevelopment/B2B_Desktop",
      },
    ],
  },
  {
    title: "EWD Java Springboot",
    year: "2024",
    description:
      "An application created for a school project in Spring Boot to display various sports events during the Olympics.",
    technologies: ["Java", "Springboot"],
    images: ImagesSpringboot,
    buttons: [
      {
        text: "Front-end Repo",
        link: "https://github.com/LimaxDevelopment/EWD_Springboot",
      },
    ],
  },
  {
    title: "Clothing Webshop",
    year: "2023",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    description:
      "A school project where I developed a fully functional clothing webshop.",
    images: ImagesWebshop,
    buttons: [
      {
        text: "Front-end Repo",
        link: "https://github.com/LimaxDevelopment/Webshop_frontend",
      },
      {
        text: "Back-end Repo",
        link: "https://github.com/LimaxDevelopment/Webshop_backend",
      },
    ],
  },
  {
    title: "Online Rubik's Cube",
    year: "2022",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A team project where we built an interactive website for solving a Rubik's Cube, with or without a guide.",
    images: [""],
    buttons: [{ text: "Front-end Repo", link: "" }],
  },
];

const Projects = ({ showedProjects = projects }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [currentImages, setCurrentImages] = useState([""]);
  //const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (images: string[], index: number) => {
    setCurrentImageIndex(index);
    setCurrentImages(images);
    //setLightboxOpen(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {showedProjects.map((project, index) => (
        <Card key={index} className="w-full max-w-lg mx-auto bg-slate-800">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">
              {project.title}
            </CardTitle>
            <CardDescription className="text-yellow-500">
              {project.year}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {project.images.length > 0 ? (
              <Carousel className="w-full max-w-xs sm:max-w-sm mx-auto">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="flex justify-center items-center h-60"
                      onClick={() => openLightbox(project.images, index)}
                    >
                      <Image
                        key={index}
                        src={image}
                        alt={project.title}
                        width={2000}
                        height={60}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            ) : (
              <div className="w-full h-48 bg-muted flex items-center justify-center rounded-md">
                <span className="text-muted-foreground">
                  No images available
                </span>
              </div>
            )}
            <p className="text-lg font-thin text-muted-foreground">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="rounded-xl text-black bg-amber-400"
                >
                  {tech}
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-start space-x-2 p-5">
            {project.buttons.map((button, index) => (
              <Button
                key={index}
                variant="default"
                className="border rounded-xl bg-transparant hover:bg-yellow-500"
              >
                <Link href={button.link}>{button.text}</Link>
              </Button>
            ))}
          </CardFooter>
        </Card>
      ))}

      {currentImageIndex >= 0 && (
        <Lightbox
          mainSrc={currentImages[currentImageIndex]}
          nextSrc={
            currentImages[(currentImageIndex + 1) % currentImages.length]
          }
          prevSrc={
            currentImages[
              (currentImageIndex + currentImages.length - 1) %
                currentImages.length
            ]
          }
          onCloseRequest={() => setCurrentImageIndex(-1)}
          onMovePrevRequest={() =>
            setCurrentImageIndex(
              (currentImageIndex + currentImages.length - 1) %
                currentImages.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % currentImages.length)
          }
        />
      )}
    </div>
  );
};

export default Projects;
