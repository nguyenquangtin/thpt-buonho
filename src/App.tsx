import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Gallery from './components/home/Gallery';
import AlumniDirectory from './components/home/AlumniDirectory';
import EventTimeline from './components/home/EventTimeline';
import EventOrganizers from './components/home/EventOrganizers';
import RegistrationCTA from './components/home/RegistrationCTA';
import Contact from './components/home/Contact';
import Footer from './components/common/Footer';

// import MemoryWall from './components/home/MemoryWall';
// import News from './components/home/News';
// import Timeline from './components/home/Timeline';

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
      {/* <Timeline /> */}
      <EventTimeline />
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
