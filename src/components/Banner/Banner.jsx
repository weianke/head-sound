import Image from "next/image";
import Grains from "../../assets/grains.png";
import BannerImg from "../../assets/man2.jpeg";
// import {motion} from 'framer-motion';
import { FiDownload } from "react-icons/fi";

const bgGrains = {
  backgroundImage: `url(${Grains})`,
  backgroundPosition: "center",
};
const Banner = () => {
  return (
    <section className="bg-black text-white">
      <div className="container pb-10">
        <div
          style={bgGrains}
          className="bg-gray-950 rounded-3xl py-14 px-5 grid grid-cols-1 md:grid-cols-2 space-y-2 md:space-y-0 translate-y-36"
        >
          {/*banner image*/}
          <div className="flex items-end">
            <Image
              src={BannerImg}
              alt="banner image"
              className="w-[300px] lg:w-[400px]"
            />
          </div>
          {/*info*/}
          <div className="flex flex-col justify-center">
            <div className="text-left space-y-7 lg:max-w-[400px]">
              <h1 className="text-3xl lg:text-4xl font-bold">
                I am Full Stack Developer
              </h1>
              <p className="text-white/70">
                Lorem ipsum dolor sit amet consecteturadipisicing
                elit.Debitis,quas sequi magni velnecessitatibus iste
                recusandaevoluptatibus quis,iure vero dolor nisiesse non.
              </p>
              <div className="flex items-center gap-4">
                <button className="btn text-xs py-3 md:text-base">
                  know more
                </button>
                <button className="btn-outline text-xs md:text-base flex items-center gap-2 md:py-3">
                  <FiDownload /> Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
