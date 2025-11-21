import { useState } from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const events = {
    upcoming: [
      {
        title: 'Education Enclave',
        date: 'Febuary 17,2026',
        location: 'American centre sector 43 Gurgaon',
        attendees: '200 (Invite Based)',
        type: 'Seminar',
        description: 'YET TO BE DECIDED',
        gradient: 'from-pastel-green to-pastel-cyan',
      },
      {
        title: 'Bootcamp AI X ML',
        date: 'March 20,2026',
        location: 'Microsoft Office Gurgaon',
        attendees: '200+',
        type: 'Bootcamp',
        description: 'YET TO BE DECIDED',
        gradient: 'from-pastel-cyan to-pastel-blue',
      },
    ],
    ongoing: [
      {
        title: 'Python X Github Series',
        date: 'November 11,2025',
        location: 'Opensky, Jamia Hamdard',
        attendees: '100+',
        type: 'Workshop',
        description: 'Intensive Series covering Python and github from Basic to Advance level',
        gradient: 'from-pastel-purple to-pastel-pink',
      },
    ],
    past: [
     {
        title: 'BrainHack Ideathon',
        date: 'November 17, 2025',
        location: 'Convention Centre Jamia Hamdard University',
        attendees: '150+ People',
        type: 'No Code Hackathon',
        description: 'The BrainHack Ideathon is all about creativity, teamwork, and problem-solving! You don’t need to be a coder or a techie — both technical and non-technical students can join.',
        gradient: 'from-pastel-blue to-pastel-purple',
      },
      {
        title: 'Hands-on AI x AR Workshop',
        date: 'October 28, 2025',
        location: 'HAH UG Lab, Jamia Hamdard University',
        attendees: '100+ People',
        type: 'Workshop',
        description: 'Learn about Augemented Reality and build AR filters yourself',
        gradient: 'from-pastel-orange to-pastel-pink',
      },
      {
        title: 'ICIDSSD 2024',
        date: 'November 15-17, 2024',
        location: 'Convention centre, Jamia Hamdard',
        attendees: '200+',
        type: 'Conference',
        description: 'YET TO COME',
        gradient: 'from-pastel-cyan to-pastel-blue',
      },
    ],
  };

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Events'},
    { id: 'ongoing', label: 'Ongoing Events'},
    { id: 'past', label: 'Past Events'},
  ];

  return (
    <section id="events" className="py-24 bg-dark-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pastel-blue/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our portfolio of memorable events and upcoming opportunities
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-pastel text-dark-200 shadow-lg'
                  : 'bg-dark-100 text-gray-300 hover:bg-dark-50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events[activeTab].map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-dark-100 rounded-2xl p-6 h-full border border-gray-800 hover:border-pastel-blue/50 transition-all duration-300 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-pastel-blue/20 text-pastel-blue text-xs font-bold rounded-full">
                      {event.type}
                    </span>
                    <span className="text-gray-400 text-sm">{event.attendees}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 border border-pastel-blue text-pastel-blue rounded-full text-sm font-semibold hover:bg-pastel-blue/10 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {events[activeTab].length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No events in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
