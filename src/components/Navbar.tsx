import { useState, useEffect } from "react";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [navHeight, setNavHeight] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setNavHeight(100);
      } else {
        setNavHeight(20);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened(navIsOpened => !navIsOpened);
  };

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      closeNavbar(); // Close mobile menu after clicking
    }
  };

  return (
    <>
      <div 
        aria-hidden={true} 
        onClick={closeNavbar} 
        className={`fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`} 
      />
      <header className={`sticky top-0 w-full flex items-center h-${navHeight} border-b border-b-gray-100 z-40 bg-white/80 backdrop-filter backdrop-blur-xl`}>
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <button 
              onClick={() => scrollToSection('home')}
              className="relative flex items-center gap-2.5"
            >
              <span aria-hidden={true} className="flex">
                <span className="w-3 h-6 rounded-l-full flex bg-blue-400" />
                <span className="w-3 h-6 rounded-r-full flex bg-indigo-600 mt-2" />
              </span>
              <span className="inline-flex text-2xl font-bold text-indigo-950">
                Civil Tech
              </span>
            </button>
          </div>

          <div className={`
            absolute top-full left-0 bg-white lg:bg-transparent border-b border-gray-200 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:w-max lg:flex lg:transition-none duration-300 ease-linear gap-x-6
            ${navIsOpened ? "visible opacity-100 translate-y-0" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}
          `}>
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 lg:w-full lg:justify-center">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="relative w-full text-left py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="relative w-full text-left py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="relative w-full text-left py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="relative w-full text-left py-2.5 duration-300 ease-linear hover:text-indigo-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-x-100 after:bg-indigo-600"
                >
                  Contact
                </button>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0">
              <button 
                onClick={() => scrollToSection('contact')}
                className="relative flex justify-center px-6 py-3 before:absolute before:inset-0 before:rounded-lg before:transition before:bg-gray-100 text-indigo-600 hover:before:scale-105"
              >
                <span className="relative">
                  Book a call
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            <button 
              onClick={toggleNavbar}
              aria-label="toggle navbar" 
              className="outline-none border-l border-l-indigo-100 pl-3 relative py-3"
            >
              <span 
                aria-hidden={true} 
                className={`flex h-0.5 w-6 rounded bg-gray-800 transition duration-300 ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}`}
              />
              <span 
                aria-hidden={true} 
                className={`mt-2 flex h-0.5 w-6 rounded bg-gray-800 transition duration-300 ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;