import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, Star, TrendingUp, Clock, Heart, 
  Award, BookOpen, Sunrise, Moon
} from 'lucide-react';


function FeaturesSection({ darkMode }) {
  const features = [
    {
      icon: <FileText size={28} />,
      secondaryIcon: <Moon size={20} />,
      title: "Daily Affirmations",
      description: "Set personalized affirmations with twice-daily reminders to reinforce positive mindsets",
      image: "https://storage.googleapis.com/mv-prod-blog-en-assets/2025/02/5804e226-positive-affirmations-for-men-mindvalley.webp",
      imageAlt: "Person meditating with affirmation text"
    },
    {
      icon: <Star size={28} />,
      secondaryIcon: <Sunrise size={20} />,
      title: "Horoscope Insights",
      description: "Receive tailored daily horoscope readings to guide your personal journey",
      image: "https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/05/Editorial-May-Workstrology-01.png?fit=1120%2C630",
      imageAlt: "Zodiac wheel with stars"
    },
    {
      icon: <BookOpen size={28} />,
      secondaryIcon: <Star size={20} />,
      title: "Tarot Readings",
      description: "AI-powered tarot insights with options to connect with professional readers",
      image: "https://img.pikbest.com/templates/20211020/bg/725b9d6d92134a3e3fc19f259f33c4ea_119528.png!f305cw",
      imageAlt: "Tarot cards spread"
    },
    {
      icon: <TrendingUp size={28} />,
      secondaryIcon: <Clock size={20} />,
      title: "Healing Tracker",
      description: "Monitor progress on your small goals with 40-day achievement milestones",
      image: "https://www.shutterstock.com/image-illustration/chakra-color-human-lotus-pose-260nw-1131155369.jpg",
      imageAlt: "Progress tracking chart"
    },
    {
      icon: <Clock size={28} />,
      secondaryIcon: <FileText size={20} />,
      title: "Reminder System",
      description: "Customizable alerts for affirmations and practices to keep you consistent",
      image: "https://i.pinimg.com/564x/bb/15/26/bb1526ad9f620b6ea6c7e6af0697b55c.jpg",
      imageAlt: "Notification screen with reminders"
    },
    {
      icon: <Heart size={28} />,
      secondaryIcon: <Heart size={20} />,
      title: "Chakra Alignment",
      description: "Guided practices and tracking for balancing your seven energy centers",
      image: "https://thumbs.dreamstime.com/b/inner-peace-unveiled-yoga-chakra-alignment-amidst-nature-amidst-lush-peaceful-environment-young-woman-meditates-328426490.jpg",
      imageAlt: "Seven chakra symbols aligned vertically"
    }
  ];

  // Using staggered reveal for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const FeatureCard = ({ feature, index }) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    // Animation variants for the image
    const imageVariants = {
      hidden: { opacity: 0, scale: 1.1 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.8 }
      }
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative overflow-hidden rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } transition-all duration-500`}
        style={{ boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1)` }}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-teal-600"></div>
          <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-teal-600"></div>
        </div>

        {/* Image section */}
        <div className="relative w-full h-48 overflow-hidden">
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            src={feature.image}
            alt={feature.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            darkMode ? 'from-gray-800' : 'from-white'
          } to-transparent opacity-40`}></div>

          {/* Floating accent with icon */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              darkMode ? 'bg-gray-700' : 'bg-teal-50'
            }`}
          >
            <div className={`text-teal-600`}>
              {feature.secondaryIcon}
            </div>
          </motion.div>
        </div>

        <div className="p-6 h-full flex flex-col relative z-10">
          {/* Feature icon */}
          <div className={`mb-4 p-3 inline-flex rounded-lg ${
            darkMode ? 'bg-gray-700 text-teal-400' : 'bg-teal-50 text-teal-600'
          }`}>
            {feature.icon}
          </div>

          {/* Content */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
              {feature.description}
            </p>
          </div>

          {/* Always visible "Discover" button */}
          <div className="mt-4">
            <button className={`text-sm font-medium text-teal-600 flex items-center gap-1 
              ${darkMode ? 'hover:text-teal-400' : 'hover:text-teal-700'}`}
            >
              Discover more 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  // Animation for the chakra symbol
  const ChakraAnimation = () => {
    return (
      <motion.div 
        className="absolute right-10 top-10 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" className="text-teal-600" />
          <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="2" className="text-teal-600" />
          <circle cx="60" cy="60" r="10" fill="currentColor" className="text-teal-600" />
          <path d="M60 10v100M10 60h100M26 26l68 68M26 94l68-68" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-teal-600" />
        </svg>
      </motion.div>
    );
  };

  return (
    <section
      id="features"
      className={`py-20 transition-colors duration-500 relative overflow-hidden ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-white to-teal-50 text-gray-900'
      }`}
    >
      {/* Background animations */}
      <ChakraAnimation />
      
      <motion.div 
        className="absolute left-10 bottom-20 opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z" fill="currentColor" className="text-teal-600" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative floating elements */}
          <motion.div 
            className="absolute left-1/4 -top-10 w-8 h-8 rounded-full bg-teal-600/20"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute right-1/3 -top-6 w-4 h-4 rounded-full bg-teal-600/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="inline-block relative">
              Manifestation Tools
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-teal-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>{" "}
            
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Powerful tools designed to help you visualize, affirm, and manifest your goals 
            through consistent practice and mindful intention.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Featured callout with illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-2xl ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700' 
              : 'bg-gradient-to-r from-teal-500/10 to-teal-600/10 border border-teal-100'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Track Your 40-Day Challenge</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Set intentions, track daily practices, and measure your transformation 
                with our guided 40-day manifestation journey.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-4 px-6 py-3 rounded-lg font-medium ${
                  darkMode 
                    ? 'bg-teal-600 text-white hover:bg-teal-500' 
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                } transition-all duration-300 shadow-lg shadow-teal-600/20`}
              >
                Start Your Journey
              </motion.button>
            </div>
            <div className="w-full md:w-1/3 relative">
            <DotLottieReact
      src="https://lottie.host/d253d885-14eb-4445-951c-eb44e011d230/BsaBxoag0n.lottie"
      loop
      autoplay
    />
              {/* Animated counter illustration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className={`absolute -top-4 -right-4 p-3 rounded-full shadow-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-teal-600 font-bold text-xl"
                >
                  40
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSection;