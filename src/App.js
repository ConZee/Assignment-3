import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PetGallery from './pages/PetGallery';
import AdoptPet from './pages/AdoptPet';
import ReleasePet from './pages/ReleasePet';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<PetGallery />} />
        <Route path="/adopt" element={<AdoptPet />} />
        <Route path="/release" element={<ReleasePet />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;