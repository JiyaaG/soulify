import { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function HeroSection({ darkMode }) {
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
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className={`py-20 md:py-32 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-teal-50 to-blue-50'}`}
    >
      <div 
        className={`container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Journey to Better Mental Health</h1>
          <p className="text-lg mb-8 max-w-md">
            Professional therapy services tailored to your needs. We're here to support you through life's challenges with compassion and understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#" className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-teal-500 hover:bg-teal-600' : 'bg-teal-600 hover:bg-teal-700'} text-white text-center text-lg font-medium transition-colors`}>
              Schedule a Consultation
            </a>
            <a href="#features" className={`px-6 py-3 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} text-center text-lg font-medium transition-colors`}>
              Learn More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          
          <DotLottieReact
      src="https://lottie.host/85ffccd6-8758-4f7e-83f2-9bccea68b31f/cP8Md5fq13.lottie"
      loop
      autoplay
    />
          </div>
        </div>
     
    </section>
  );
}

export default HeroSection;