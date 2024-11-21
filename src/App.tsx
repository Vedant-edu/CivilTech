import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    // Add Google Roboto font
    const robotoFont = document.createElement('link');
    robotoFont.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
    robotoFont.rel = 'stylesheet';
    document.head.appendChild(robotoFont);
  }, []);

  return (
    <div className="bg-white">
      <Navbar/>
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;