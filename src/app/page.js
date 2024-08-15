import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";

const page = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <Services />
      <Projects />
    </main>
  );
};

export default page;
