import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certificates/>
      <Projects />
      <Contact />
    </div>
  );
}
