import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Deadlines = lazy(() => import("./components/Deadlines"));
const Awards = lazy(() => import("./components/Awards"));
const Categories = lazy(() => import("./components/Categories"));
const JuryMembers = lazy(() => import("./components/JuryMembers"));
const Winners = lazy(() => import("./components/Winners"));
const Partners = lazy(() => import("./components/Partners"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Deadlines />
        <Awards />
        <Categories />
        <JuryMembers />
        <Winners />
        <Partners />
        <Footer />
      </Suspense>
    </div>
  );
}
