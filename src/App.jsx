// src/App.jsx
import { useSelector } from 'react-redux';
import TopMenuBar    from './components/TopMenu';
import HeroSection   from './components/HeroSection';
import FeaturesSection  from './components/FeaturesSection';
import ServicesSection  from './components/ServicesSection';
import TherapySection   from './components/TherapySection';
import ResourcesSection from './components/ResourcesSection';
import Footer         from './components/Footer';

function App() {
  const darkMode = useSelector(state => state.ui.darkMode);
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <TopMenuBar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TherapySection />
        <ResourcesSection />
      </main>
      
      <Footer />
    </div>
  );
}
export default App;
