import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrintLab = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const products = sectionRef.current.querySelectorAll('.product-card');

    products.forEach((product, index) => {
      gsap.fromTo(
        product,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: product,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const products = [
  {
    name: 'Custom T-Shirts',
    description: 'High-quality screen printing and embroidery on premium fabrics',
   icon: (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16.5 3l-1.5 2h-6L7.5 3H2v2l4 2v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7l4-2V3h-5.5zM10 9h4v2h-4V9z"/>
      </svg>
    ),
    gradient: 'from-pastel-pink to-pastel-purple',
  },
    {
      name: 'Branded Cups',
      description: 'Eco-friendly cups with vibrant custom designs for any event',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21V19H20V21H2M20 8V5H18V8H20M20 3C20.5 3 21 3.2 21.4 3.6C21.8 4 22 4.5 22 5V8C22 8.5 21.8 9 21.4 9.4C21 9.8 20.5 10 20 10H18V13C18 14.1 17.1 15 16 15H8C6.9 15 6 14.1 6 13V3H20Z"/>
        </svg>
      ),
      gradient: 'from-pastel-blue to-pastel-cyan',
    },
    {
      name: 'Event Banners',
      description: 'Eye-catching banners in various sizes for maximum visibility',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 4v16h14V4H5m2 14l2.5-3.2 1.8 2.3 2.5-3.2L17 18H7z"/>
        </svg>
      ),
      gradient: 'from-pastel-orange to-pastel-pink',
    },
    {
      name: 'Name Badges',
      description: 'Professional badge printing with lanyards and holders',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      gradient: 'from-pastel-green to-pastel-blue',
    },
    {
      name: 'Stickers & Decals',
      description: 'Durable stickers perfect for branding and giveaways',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.5 2h-13C4.67 2 4 2.67 4 3.5v17c0 .83.67 1.5 1.5 1.5H16l4-4V3.5C20 2.67 19.33 2 18.5 2zm1.5 14.5V18h-2c-.83 0-1.5-.67-1.5-1.5v-2H20z"/>
        </svg>
      ),
      gradient: 'from-pastel-purple to-pastel-pink',
    },
    {
      name: 'Posters & Signage',
      description: 'Large format printing for impactful event communication',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
        </svg>
      ),
      gradient: 'from-pastel-cyan to-pastel-blue',
    },
    {
      name: 'Business Cards',
      description: 'Premium business cards with various finishes and materials',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10-4h2v6h-2z"/>
        </svg>
      ),
      gradient: 'from-pastel-pink to-pastel-orange',
    },
    {
      name: 'Custom Notebooks',
      description: 'Branded notebooks and journals for corporate gifts',
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-2-2H7V7h10v10zm-8-8h6v2H9V9zm0 4h6v2H9v-2z"/>
        </svg>
      ),
      gradient: 'from-pastel-blue to-pastel-purple',
    },
  ];

  return (
    <section className="py-24 bg-dark-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-2">PrintLab</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium printing solutions to elevate your brand and make lasting impressions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="product-card"
            >
              <div className="bg-dark-100 rounded-xl p-6 h-full border border-gray-800 hover:border-pastel-cyan/50 transition-all duration-300 relative overflow-hidden group">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="text-pastel-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-pastel-2 text-dark-200 font-bold rounded-full hover:shadow-xl hover:shadow-pastel-cyan/50 transition-all duration-300"
          >
            Request Print Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PrintLab;
