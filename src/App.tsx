import { useScrollReveal } from './hooks/useScrollReveal';
import CanvasBackground from './components/Background/CanvasBackground';
import ScrollProgress from './components/Background/ScrollProgress';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import SecurityFocus from './components/Sections/SecurityFocus';
import Skills from './components/Sections/Skills';
import Certifications from './components/Sections/Certifications';
import Achievements from './components/Sections/Achievements';
import Education from './components/Sections/Education';
import Contact from './components/Sections/Contact';

function App() {
  useScrollReveal();

  return (
    <>
      <CanvasBackground />
      <ScrollProgress />
      <Navbar />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SecurityFocus />
        <Skills />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
