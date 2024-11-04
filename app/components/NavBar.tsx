"use client";

import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";
import Socials from "./Socials";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pages = useMemo(
    () => [
      { name: "Home", link: "/" },
      { name: "About Me", link: "/about" },
      { name: "Projects", link: "/projects" },
    ],
    []
  );

  return (
    <div className="fixed top-0 w-screen z-50 bg-black">
      <div className="flex items-center justify-between h-20 px-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleMenu}
        >
          {isMenuOpen ? (
            <X className="text-sky-950 w-10 h-10" />
          ) : (
            <Menu className="text-sky-950 w-10 h-10" />
          )}
          <p className="text-white">Menu</p>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href={"/"}>
            <p className="text-lg font-bold text-white">Maxim Lison</p>
          </Link>
        </div>

        <div className="flex items-center">
          <Socials />
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 left-0 top-20 w-screen h-full p-4 bg-gray-500 z-40">
            <ul className="flex flex-col items-center space-y-8 text-6xl font-bold text-white">
              {pages.map((page) => (
                <Link href={page.link} key={page.name} onClick={handleMenu}>
                  {page.name}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
