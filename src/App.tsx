import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import EventSchedule from './components/home/EventSchedule';
import Gallery from './components/home/Gallery';
import AlumniDirectory from './components/home/AlumniDirectory';
import MemoryWall from './components/home/MemoryWall';
import Timeline from './components/home/Timeline';
import RegistrationCTA from './components/home/RegistrationCTA';
import News from './components/home/News';
import Contact from './components/home/Contact';
import Footer from './components/common/Footer';
import EventOrganizers from './components/home/EventOrganizers';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'THPT Krông Buk - Hội ngộ niên khóa 2005 Sau 20 năm';
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <EventSchedule />
      <EventOrganizers />
      <Gallery />
      <AlumniDirectory />
      <RegistrationCTA />
      {/* <MemoryWall /> */}
      {/* <News /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
