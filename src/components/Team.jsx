import { motion } from 'framer-motion';

const Team = () => {
  const members = [
    {
      name: 'Mohd Atif Khan',
      role: 'Co‑Founder',
      bio: 'Contributing to vision and strategy.',
      image: '/atif.jpg',
      gradient: 'from-pastel-blue to-pastel-purple',
    },
    {
      name: 'Mohd Shadab Khan',
      role: 'Co‑Founder',
      bio: 'Focused on operations and growth.',
      image: '/shadab.jpg',
      gradient: 'from-pastel-green to-pastel-cyan',
    },
    {
      name: 'Wajid Ali',
      role: 'Technical Executive',
      bio: 'Handles technical execution & workflows.',
      image: '/wajid.jpg',
      gradient: 'from-pastel-orange to-pastel-pink',
    },
  ];

  return (
    <section id="team" className="py-24 bg-dark-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-purple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate people making Yunite possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="relative group transform transition-transform duration-200"
            >
              <div className="bg-dark-100 rounded-2xl p-6 h-full border border-gray-800 hover:border-pastel-blue/50 transition-all duration-200 relative overflow-hidden shadow-md hover:shadow-pastel-blue/30">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-200`}
                ></div>

                <div className="relative z-10 text-center">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    whileHover={{ scale: 1.35 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-pastel-blue shadow-lg transition-all duration-200 group-hover:shadow-pastel-purple"
                  />
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-xl font-bold mb-1 text-white group-hover:text-gradient transition-all duration-200"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="text-pastel-blue text-sm font-semibold mb-2"
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    {member.bio}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
