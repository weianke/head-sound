import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <Services />
      <Projects />
    </main>
  );
};

export default page;
