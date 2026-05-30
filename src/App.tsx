import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Deadlines from "./components/Deadlines";
import Awards from "./components/Awards";
import Categories from "./components/Categories";
import JuryMembers from "./components/JuryMembers";
import Winners from "./components/Winners";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      <About />
      <Deadlines />
      <Awards />
      <Categories />
      <JuryMembers />
      <Winners />
      <Footer />
    </div>
  );
}
