// src/components/TopMenuBar.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun, Moon, Menu, X, Heart } from 'lucide-react';
import { toggleDarkMode } from '../redux/uiSlice';

function TopMenuBar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode); 

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const sections = ['home', 'features', 'therapy', 'resources'];

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const getLinkClass = (item) => {
    const isActive = activeSection === item.toLowerCase();
    return `
      hover:underline font-medium 
      ${darkMode ? (isActive ? 'text-teal-400' : 'text-white') : isActive ? 'text-teal-600' : 'text-black'}
    `;
  };

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md w-screen`}>
      <div className="w-full px-6 py-4 flex items-center justify-between ml-0 mr-0">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold flex items-center ">
          <Heart className={`mr-2 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />
          <span className={`${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>Soulify</span>
        </a>

        {/* Navigation + Buttons */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={getLinkClass(item)}
                style={{ textUnderlineOffset: '12px' }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <button onClick={() => dispatch(toggleDarkMode())} className="focus:outline-none pl-5" aria-label="Toggle dark mode">
            {darkMode ? <Sun color="white" /> : <Moon color="black" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="px-6 py-4 flex flex-col space-y-4">
            {['home', 'features', 'therapy', 'resources'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => {
                  setActiveSection(item); 
                  setTimeout(() => setMenuOpen(false), 150); 
                }}
                className={`py-2 font-medium hover:underline ${
                  activeSection === item
                    ? darkMode
                      ? 'text-teal-400'
                      : 'text-teal-600'
                    : darkMode
                    ? 'text-white'
                    : 'text-black'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default TopMenuBar;
