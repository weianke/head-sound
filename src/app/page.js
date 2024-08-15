import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <Services />
    </main>
  );
};

export default page;
