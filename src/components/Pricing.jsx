import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: 'per event',
      description: 'Perfect for small workshops and meetups',
      features: [
        'Up to 50 attendees',
        'Basic event management',
        'Email support',
        'Standard branding',
        'PrintLab 10% discount',
        'Event analytics',
      ],
      gradient: 'from-pastel-blue to-pastel-purple',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$1,499',
      period: 'per event',
      description: 'Ideal for hackathons and corporate events',
      features: [
        'Up to 300 attendees',
        'Advanced event management',
        'Priority support 24/7',
        'Custom branding & design',
        'PrintLab 25% discount',
        'Real-time analytics',
        'Dedicated coordinator',
        'Post-event reporting',
      ],
      gradient: 'from-pastel-pink to-pastel-orange',
      popular: true,
    },
    {
      name: 'Enterprise/Gov',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale conferences and organizations',
      features: [
        'Unlimited attendees',
        'Full-service management',
        'Dedicated support team',
        'White-label solutions',
        'PrintLab 40% discount',
        'Advanced analytics & insights',
        'Multiple event coordinators',
        'Custom integrations',
        'SLA guarantees',
      ],
      gradient: 'from-pastel-green to-pastel-cyan',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pastel-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pastel-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your event size and requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-pastel text-dark-200 px-6 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`bg-dark-200 rounded-2xl p-8 h-full border-2 ${
                plan.popular ? 'border-pastel-pink' : 'border-gray-800'
              } hover:border-pastel-blue/50 transition-all duration-300 relative overflow-hidden group`}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-pastel-cyan mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-pastel text-dark-200 hover:shadow-lg hover:shadow-pastel-pink/50'
                        : 'border-2 border-pastel-blue text-white hover:bg-pastel-blue/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
