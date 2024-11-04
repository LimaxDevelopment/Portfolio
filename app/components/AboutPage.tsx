import Image from "next/image";
import { ImageProfile } from "../public/images";
import { Check } from "lucide-react";

const personal = [
  "Student Computer Science",
  "Specialized in Mobile & Enterprise Development",
  "Sports enthusiast",
];

const journey = [
  {
    year: "2022-2023",
    description:
      "Began my Bachelor’s in Applied Computer Science. My passion for technology and problem-solving led me to pursue this field. I was excited to learn how software could be built to make life easier and more efficient for people around the world.",
  },
  {
    year: "2023-2024",
    description:
      "Chose to specialize in Web Development, diving into frameworks like React and working with databases like SQL. One memorable project was building a B2B Portal where we developed a website and a desktop application for it, gaining hands-on experience in collaborative software development.",
  },
  {
    year: "2024-2025",
    description:
      "Now in my final year I chose to specialize in Mobile & Enterprise Development, I’m working on a project in C#, a stock exchange platform to learn trading. Soon I will start my internship. My studies have helped me gain expertise in designing and building scalable, user-friendly applications. I’m eager to apply my skills in a full-time role after graduation, with a keen interest in software development or mobile app development.",
  },
];

const skillsTitles = [
  { title: "Front-End", index: 0 },
  { title: "Back-End", index: 1 },
  { title: "Other", index: 2 },
];
const skillsOverview = [
  [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "shadcn/ui",
  ],
  ["Node.js", "Java", "JavaFX", "Springboot", "C#", "MySQL", "Knex", "Python"],
  ["Rest APIs", "TDD", "GitHub", "Gitkraken"],
];

const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row items-center w-4/5 md:w-3/5 mt-12 p-4 md:p-0 rounded-3xl bg-zinc-800">
        <div className="md:mr-12">
          <Image
            src={ImageProfile}
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-3xl md:rounded-s-3xl mb-2 md:mb-0"
          />
        </div>
        <div className="flex flex-col space-y-4 text-white">
          <span className="text-3xl md:text-6xl font-semibold">
            Hi! I&apos;m <span className="text-yellow-500">Maxim Lison</span>.
          </span>
          <span>
            {personal.map((keyword: string) => {
              return (
                <div key={keyword} className="flex flex-row">
                  <Check className="text-yellow-400 mr-2" />
                  <p className="text-sm text-gray-400">{keyword}</p>
                </div>
              );
            })}
          </span>
          <span>
            Passionate developer currently in the last year of my Bachelor in
            Applied Computer Science.
          </span>
        </div>
      </div>

      <div className="flex items-center w-4/5 md:w-3/5 mt-12 rounded-3xl bg-zinc-800">
        <div className="flex flex-col space-y-4 px-5 py-3 text-white">
          <span className="flex justify-center text-4xl md:text-6xl font-semibold">
            My journey
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {journey.map((milestone, index) => (
              <div
                key={index}
                className="p-4 bg-black rounded-3xl hover:shadow-lg"
              >
                <h3 className="text-yellow-400">{milestone.year}</h3>
                <p className="text-gray-300">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center w-4/5 md:w-2/5 my-12 rounded-3xl bg-zinc-800">
        <div className="flex flex-col space-y-4 px-5 py-3 text-white">
          <span className="flex justify-center text-4xl md:text-6xl font-semibold">
            My skills
          </span>
          <div className="grid grid-cols-3 gap-x-5 md:gap-x-24">
            {skillsTitles.map((skillsTitle) => (
              <div key={skillsTitle.title}>
                <span className="text-md md:text-lg font-medium">
                  {skillsTitle.title}:
                </span>
                {skillsOverview[skillsTitle.index].map((skill: string) => (
                  <div key={skill} className="flex flex-row items-center mt-2">
                    <Check className="text-yellow-400 mr-1 md:mr-2" />
                    <p className="text-xs md:text-sm text-gray-400">{skill}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
