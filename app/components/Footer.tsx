import Link from "next/link";
import Socials from "./Socials";

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
];

const Footer = () => {
  return (
    <div className="w-screen h-32 p-4 bg-yellow-500 md:p-7 md:h-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap space-x-4 mb-3 md:mb-0">
          {pages.map((page) => (
            <Link href={page.link} key={page.name}>
              {page.name}
            </Link>
          ))}
        </div>
        <div className="text-center mb-3 md:mb-0">
          <p>LimaxDevelopment@outlook.be</p>
        </div>
        <div className="flex items-center space-x-4">
          <Socials color="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
