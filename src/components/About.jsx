import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-200 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pastel-pink/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Yunyt</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Yunyt is your comprehensive partner for event management and printing solutions.
                We believe there's a better way to organize events and bring your brand to life through
                premium print products.
              </p>
              <p>
                From intimate workshops to large-scale conferences, we handle every detail with precision
                and care. Our team of experienced event coordinators ensures your vision becomes reality,
                while our PrintLab division delivers top-quality branded materials that make lasting impressions.
              </p>
              <p>
                With years of experience in the industry, we've successfully managed hundreds of events
                ranging from innovative hackathons to corporate gatherings, always maintaining our commitment
                to excellence and client satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '10', label: 'Events Managed' },
              { number: '5000', label: 'Happy Attendees' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
