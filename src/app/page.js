import Nav from "../app/components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Special from "./components/Special";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <Categories />
      <Menu />
      <Special />
      <Footer />
    </div>
  );
}
