import Navbar from "@/components/header/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Categories from "@/components/home/Categories";
import CaseStudy2 from "@/components/home/CaseStudy2";
import Stats from "@/components/home/Stats";
import QuoteContact from "@/components/home/QuoteContact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <CaseStudy2 />
      <Stats />
      <QuoteContact />
      <Footer />
    </>
  );
}
