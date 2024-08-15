"use strict";
import Project1 from "@/assets/projects/p1.jpeg";
import Project2 from "@/assets/projects/p2.jpg";
import Project3 from "@/assets/projects/p3.jpg";
import Image from "next/image";

const ProjectData = [
  {
    id: 1,
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, sapien ut malesuada finibus, ex velit tincidunt sapien, ut tincidunt enim.",
    img: Project1,
    delay: 0.4,
  },
  {
    id: 2,
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, sapien ut malesuada finibus, ex velit tincidunt sapien, ut tincidunt enim.",
    img: Project2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Project 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, sapien ut malesuada finibus, ex velit tincidunt sapien, ut tincidunt enim.",
    img: Project3,
    delay: 1.2,
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white">
      <div className="container py-20 xl:py-26 space-y-36">
        {/* title  */}
        <div className="relative">
          <p className="text-3xl lg:text-4xl tracking-widest font-bold text-center uppercase relative z-20">
            Projects
          </p>
          <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
            Projects
          </p>
        </div>
        {/* card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {ProjectData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5"
              >
                <Image src={item.img} alt={item.title} className="w-full" />
                <div className="space-y-2 p-4">
                  <h1>{item.title}</h1>
                  <p className="text-sm line-clamp-2">{item.desc}</p>
                </div>
                {/* hidden */}
                <div className="hidden group-hover:flex justify-around items-center duration-100">
                  <button className="btn border-2 border-white px-4 py-2 rounded">
                    View Project
                  </button>
                  <button className="btn">View Code</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
