import { useState } from 'react';
import TopMenuBar from './components/TopMenu';
import HeroSection from './components/HeroSection';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <TopMenuBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <HeroSection darkMode={darkMode} />
        </main>
</div>
      
  )
}

export default App
