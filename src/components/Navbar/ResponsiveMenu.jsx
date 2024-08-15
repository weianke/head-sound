import Link from "next/link";
import { NavLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div className="md:hidden">
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed top-0 z-[999] bg-black h-screen w-[75%] pt-20 pl-10 duration-300 md:hidden rounded-r-xl shadow-md flex flex-col justify-between py-5`}
      >
        {/* menu  */}
        <div>
          <div>
            <ul>
              {NavLinks.map((link) => {
                return (
                  <li key={link.id} className="py-6">
                    <Link
                      className="text-2xl font-medium text-white"
                      href={link.link}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* menu footer here */}
        <div>
          <p>
            Made with <span className="text-red-500">&hearts;</span> by anke
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
