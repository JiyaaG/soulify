import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function TherapySection({ darkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const approaches = [
    {
      title: "Cognitive Behavioral Therapy",
      description: "Learn to identify and change negative thinking patterns to improve your mood and behavior.",
    },
    {
      title: "Mindfulness-Based Therapy",
      description: "Develop present-moment awareness to reduce stress and improve emotional regulation.",
    },
    {
      title: "Solution-Focused Therapy",
      description: "Focus on solutions rather than problems to achieve your goals more effectively.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section
      id="therapy"
      ref={sectionRef}
      className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Therapeutic Approach</h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We believe in a personalized approach to therapy that addresses your unique needs and circumstances. Our evidence-based methods help you develop the skills and insights needed for lasting change.
            </p>

            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index + 1}
                  className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] ${
                    darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                    {approach.title}
                  </h3>
                  <p>{approach.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeInUp}
            custom={4}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className={`relative rounded-xl overflow-hidden shadow-2xl ${darkMode ? 'shadow-teal-900/30' : 'shadow-teal-500/20'}`}>
              <img
                src="https://www.happiesthealth.com/wp-content/uploads/2022/12/Relaxation-techniques.jpg"
                alt="Patient and therapist in session"
                className="w-full h-[550px] object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm ${
                  darkMode ? 'bg-gray-900/80' : 'bg-white/80'
                }`}
              >
                <p className="text-lg font-medium mb-2">Ready to take the first step?</p>
                <a
                  href="#"
                  className={`inline-block px-4 py-2 rounded-lg ${darkMode ? 'bg-teal-500 hover:bg-teal-600' : 'bg-teal-600 hover:bg-teal-700'} text-white transition-colors`}
                >
                  Book Your First Session
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TherapySection;
