import { useEffect} from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar } from 'lucide-react';
import {motion} from 'framer-motion';


function ServicesSection({ darkMode }) {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Individual Therapy",
      description: "One-on-one sessions focused on your personal needs and goals"
    },
    {
      icon: <Users size={32} />,
      title: "Couples Counseling",
      description: "Strengthen communication and resolve conflicts in your relationship"
    },
    {
      icon: <Users size={32} />,
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive environment"
    },
    {
      icon: <Calendar size={32} />,
      title: "Flexible Scheduling",
      description: "In-person and virtual appointments to fit your busy lifestyle"
    }
  ];

  const FeatureCard = ({ feature, index }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: index * 0.1
          }
        });
      }
    }, [controls, inView, index]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        className={`p-6 rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.03] ${
          darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
        }`}
      >
        <div className={`${darkMode ? 'text-teal-400' : 'text-teal-600'} mb-4`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {feature.description}
        </p>
      </motion.div>
    );
  };

  return (
    <section
      id="features"
      className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            We offer a variety of therapeutic approaches tailored to meet your unique needs and help you achieve your mental health goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
