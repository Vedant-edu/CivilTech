const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-4 sm:gap-20 lg:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Hero Title */}
            <div className="w-64 p-1 border-2 rounded-2xl text-center mb-2">
              Mfg. by Hamipatra Enterprise
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Nationwide Leader in Premium
              <span className="bg-gradient-to-r from-sky-400 to-indigo-600 bg-clip-text text-transparent">
                {' '}Cover Blocks
              </span>
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              We create perfect solutions for all types of construction problems.
              Leading Supplier of M-40 Cover Blocks.
            </p>
            {/* Hero Button */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8 cursor-pointer hover:bg-gray-800 transition-colors"
              >
                Let's Talk
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="flex max-w-full items-center font-bold hover:text-gray-600 transition-colors cursor-pointer"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bd85e6cf98_ArrowUpRight%20(4).svg"
                  alt="arrow"
                  className="mr-2 inline-block max-h-4 w-5"
                />
                View Products
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src="https://media.istockphoto.com/vectors/building-blocks-toy-drawing-vector-id505776904?k=6&m=505776904&s=612x612&w=0&h=7wLWOz0d1abHPb4cDp7R7QpBMGPrxLTYGKuJurZPoyY="
            alt="Cover Blocks"
            className="inline-block h-[500px] w-full max-w-2xl object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;