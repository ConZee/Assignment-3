import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PetProvider } from './context/context';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PetGallery from './pages/PetGallery';
import AdoptPet from './pages/AdoptPet';
import ReleasePet from './pages/ReleasePet';
import Volunteer from './pages/Volunteer';
import Donation from './pages/Donation';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <PetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<PetGallery />} />
          <Route path="/adopt/:petName" element={<AdoptPet />} /> {/* Dynamic petName route */}
          <Route path="/release" element={<ReleasePet />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </PetProvider>
  );
}

export default App;