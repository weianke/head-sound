"use client";
import { motion } from "framer-motion";
import { CiPen } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { IoFolderOpen } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import RedBg from "../../assets/redbg2.png";

const bgStyle = {
  backgroundImage: `url(${RedBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const ServicesData = [
  {
    id: 1,
    title: "Website Development",
    icon: <CiPen className="text-3xl" />,
    desc: "Lorem ipsum dolor sit met consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 1.2,
  },
  {
    id: 2,
    title: "Website Development",
    icon: <IoFolderOpen className="text-3xl" />,
    desc: "Lorem ipsum dolor sit met consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 1.2,
  },
  {
    id: 3,
    title: "Website Development",
    icon: <RiComputerFill className="text-3xl" />,
    desc: "Lorem ipsum dolor sit met consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 1.2,
  },
];
const Services = () => {
  return (
    <section style={bgStyle}>
      <div className="bg-gradient-to-b from-black to-primary/5 text-white pt-40">
        <div className="container py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* info */}
            <div className="flex flex-col justify-center">
              <div className="text-left space-y-7 lg:max-w-[400px]">
                <h1 className="text-3xl lg:text-4xl font-bold">Services</h1>
                <p className="text-white/70">
                  Lorem ipsum dolor sit amet consecteturadipisicing
                  elit.Debitis,quas sequi magni velnecessitatibus iste
                  recusandaevoluptatibus quis,iure vero dolor nisiesse non.
                </p>
                <div className="flex items-center gap-4">
                  <button
                    className="text-primary !bg-white rounded font-bold text-xs px-5 py-3 md:text-base
                  hover:red-shadow"
                  >
                    know more
                  </button>
                  <button className="border border-white/50 rounded-lg px-4 py-3 text-xs md:text-base flex items-center gap-2 md:py-3">
                    <FiDownload /> Download Resume
                  </button>
                </div>
              </div>
            </div>
            {/* card */}
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ServicesData.map((item) => {
                  return (
                    <motion.div
                      key={item.id}
                      className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 backdrop-blur-sm rounded-2xl"
                    >
                      <div className="text-primary/80 bg-white/70 rounded-full p-2">
                        {item.icon}
                      </div>
                      <h1 className="text-2xl font-bold">{item.title}</h1>
                      <p className="text-sm text-white/70">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
