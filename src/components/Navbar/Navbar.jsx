"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="bg-black text-white">
      <div className="container flex items-center justify-between py-5 relative z-[9999]">
        {/* Logo section */}
        <div>
          <Link href="/">
            <div className="flex items-center">
              <div className="h-[40px] w-[40px] flex justify-center items-center bg-primary text-white rounded-full text-3xl font-bold">
                p
              </div>
              <h1 className="text-3xl font-bold">ortfolio.</h1>
            </div>
          </Link>
        </div>
        {/* Links section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {NavLinks.map((item) => {
              const isActive = pathname === item.link;
              return (
                <li key={item.id}>
                  <Link
                    className={`${
                      isActive
                        ? "text-primary text-xl font-bold hover:text-white"
                        : ""
                    } inline-block text-lg py-1 px-4 hover:red-shadow hover:bg-primary transition-all duration-500 hover:scale-110`}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button className="btn">
              <a href="./resume.pdf">Get Resume</a>
            </button>
          </ul>
        </div>

        {/* Mobile sidebar menu section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" onClick={toggleMenu} />
        </div>
      </div>
      {/* mobile sidebar menu*/}
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
