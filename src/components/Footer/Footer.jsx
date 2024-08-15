import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="container">
        <div className="bg-gradient-to-r from-primary/50 to-primary/20 text-white py-12 border-2 border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 justify-around items-center duration-300">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">The Coding</h2>
            <p>contract.thecodingyourney@gmail.com</p>
            <p>copyright © 2024 The Coding</p>
          </div>
          <div className="flex items-center gap-3 lg:gap-10">
            <div>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <div>
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
            </div>
            <div>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
