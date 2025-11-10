import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-300"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pastel-blue/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pastel-pink/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              There is a <span className="text-gradient">better way</span> to run events and print.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              From hackathons to corporate events, workshops to printing solutions, Yunyt provides
              everything you need to make your events memorable and your brand stand out with
              PrintLab.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-gradient-pastel text-dark-200 font-bold rounded-full hover:shadow-xl hover:shadow-pastel-blue/50 transition-all duration-300"
              >
                Explore Services
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-pastel-blue text-white font-bold rounded-full hover:bg-pastel-blue/10 transition-all duration-300"
              >
                Get a Proposal
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right visual replacement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="w-[400px] h-[400px] bg-gradient-radial from-pastel-blue/20 via-pastel-pink/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
