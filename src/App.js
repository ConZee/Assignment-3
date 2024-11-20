import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AdoptPet from './pages/AdoptPet';
import ReleasePet from './pages/ReleasePet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/adopt" element={<AdoptPet />} />
        <Route path="/release" element={<ReleasePet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;