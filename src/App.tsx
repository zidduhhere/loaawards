import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Deadlines from "./components/Deadlines";
import Awards from "./components/Awards";
import Categories from "./components/Categories";
import JuryMembers from "./components/JuryMembers";
import Winners from "./components/Winners";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      <About />
      <Register />
      <Deadlines />
      <Awards />
      <Categories />
      <JuryMembers />
      <Winners />
      <Footer />
    </div>
  );
}
