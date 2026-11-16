import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Deployment from "./components/Deployment";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundFX from "./components/BackgroundFX";

export default function App() {
  return (
    <div className="noise relative min-h-screen">
      <BackgroundFX />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Deployment />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}