import Image from "next/image";
import Projects from "./Projects";
import { ImageProjectsPage } from "../public/images";

const ProjectsPage = () => {
  return (
    <div className="flex-grow">
      <div className="relative w-screen max-h-64 overflow-hidden mb-12">
        <Image
          src={ImageProjectsPage}
          width={2000}
          height={64}
          alt="Intro picture"
        />
        <p className="absolute inset-0 flex flex-col items-center justify-center text-white text-6xl font-bold">
          <span>Projects</span>
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center text-white text-4xl font-semibold">
          My Work
        </div>
        <div className="flex flex-col justify-items-center items-center text-white my-12">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
