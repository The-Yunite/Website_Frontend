import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-300"></div>

      {/* Floating pastel blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-pastel-blue/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-pastel-pink/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex-grow flex flex-col justify-center items-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white"
        >
          There is a <span className="text-gradient">better way</span> to run events and print.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
        >
          From hackathons to corporate events, workshops to printing solutions, Yunyt provides
          everything you need to make your events memorable and your brand stand out with PrintLab.
        </motion.p>
      </div>

      {/* Buttons at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16 w-full max-w-md justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('services')}
          className="w-full px-6 py-4 bg-gradient-pastel text-dark-200 font-bold rounded-full hover:shadow-xl hover:shadow-pastel-blue/50 transition-all duration-300"
        >
          Explore Services
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="w-full px-6 py-4 border-2 border-pastel-blue text-white font-bold rounded-full hover:bg-pastel-blue/10 transition-all duration-300"
        >
          Get a Proposal
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
