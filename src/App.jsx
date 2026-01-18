import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

import { ReactLenis } from '@studio-freight/react-lenis';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="min-h-screen relative">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-slate-500">
              Designed & Built by <span className="text-acid-lime">Syril Sibi</span>
            </p>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;
