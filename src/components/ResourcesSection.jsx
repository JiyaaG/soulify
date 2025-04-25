import { useState } from 'react';
import { BookOpen, Video, FileText, Download, ExternalLink } from 'lucide-react';

const ResourcesSection = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety Guide",
      description: "A comprehensive guide to understanding different types of anxiety disorders and their symptoms.",
      type: "ebook",
      category: "educational"
    },
    {
      id: 2,
      title: "Meditation for Beginners",
      description: "A step-by-step video course introducing mindfulness meditation techniques.",
      type: "video",
      category: "practical"
    },
    {
      id: 3,
      title: "Therapy Worksheets Bundle",
      description: "Printable CBT worksheets to use between therapy sessions.",
      type: "toolkit",
      category: "practical"
    },
    {
      id: 4,
      title: "Latest Research on Depression",
      description: "A curated collection of recent studies and findings in depression treatment.",
      type: "article",
      category: "research"
    },
    {
      id: 5,
      title: "Self-Care Planner",
      description: "A downloadable planner to help track mood and build healthy habits.",
      type: "toolkit",
      category: "practical"
    },
    {
      id: 6,
      title: "Trauma Recovery Podcast",
      description: "Expert interviews discussing trauma recovery techniques and stories.",
      type: "video",
      category: "educational"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'educational', name: 'Educational' },
    { id: 'practical', name: 'Practical Tools' },
    { id: 'research', name: 'Research' }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const getIcon = (type) => {
    switch (type) {
      case 'ebook':
        return <BookOpen className={`w-6 h-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />;
      case 'video':
        return <Video className={`w-6 h-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />;
      case 'article':
        return <FileText className={`w-6 h-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />;
      case 'toolkit':
        return <Download className={`w-6 h-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />;
      default:
        return <BookOpen className={`w-6 h-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />;
    }
  };

  return (
    <section 
      id="resources"
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
            darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800'
          }`}>
            Mental Health Library
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Helpful Resources
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore our curated collection of mental health resources designed to support 
            your wellbeing journey, from educational materials to practical tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category.id
                  ? darkMode 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-teal-600 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(resource => (
            <div 
              key={resource.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-700 hover:shadow-teal-800/30' : 'bg-white hover:shadow-xl'
              }`}
            >
              <div className={`h-3 ${
                resource.category === 'educational' ? 'bg-teal-500' :
                resource.category === 'practical' ? 'bg-teal-500' : 'bg-teal-500'
              }`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg mr-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>
                    {getIcon(resource.type)}
                  </div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {resource.title}
                  </h3>
                </div>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {resource.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    darkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-100 text-teal-800'
                  }`}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                  <button className={`font-medium flex items-center ${
                    darkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'
                  }`}>
                    Access Resource <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Banner */}
        <div className={`mt-16 p-8 rounded-2xl ${
          darkMode ? 'bg-gradient-to-r from-teal-900 to-teal-800' : 'bg-gradient-to-r from-teal-600 to-teal-500'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                Need personalized resources?
              </h3>
              <p className="text-teal-100">
                Take our assessment to get customized resource recommendations for your needs.
              </p>
            </div>
            <button className={`px-6 py-3 rounded-lg font-medium transition ${
              darkMode 
                ? 'bg-white text-teal-900 hover:bg-gray-100' 
                : 'bg-white text-teal-700 hover:bg-gray-100'
            }`}>
              Take Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;