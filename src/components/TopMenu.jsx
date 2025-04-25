import { useState } from 'react';
import { Sun, Moon, Menu, X, Heart } from 'lucide-react';

function TopMenuBar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`sticky top-0 z-50  ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md w-screen`}>
<div className="w-full px-6 py-4 flex items-center justify-between  ml-0 mr-0">

        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold flex items-center ">
          <Heart className={`mr-2 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />
          <span className={`${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>Soulify</span>
        </a>

        {/* Navigation + Buttons */}
        <div className="flex items-center space-x-6">
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Features', 'Therapy', 'Resources'].map((item) => (
              <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:underline font-medium ${darkMode ? 'text-white' : 'text-black'}`}
              style={{ textUnderlineOffset: '12px' }}
            >
                {item}
              </a>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="focus:outline-none pl-5" aria-label="Toggle dark mode">
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
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="px-6 py-4 flex flex-col space-y-4">
            {['Home', 'Features', 'Therapy', 'Resources'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className={`py-2 font-medium ${darkMode ? 'text-white' : 'text-black'} hover:underline`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default TopMenuBar;
