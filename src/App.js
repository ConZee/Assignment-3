import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PetProvider } from './context/Petcontext';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PetGallery from './pages/PetGallery';
import AdoptPet from './pages/AdoptPet';
import ReleasePet from './pages/ReleasePet';
import Volunteer from './pages/Volunteer';
import Donation from './pages/Donation';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import ChangePassword from './components/Auth/ChangePassword';
import Success from './pages/Success';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <UserProvider>
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
            <Route path="/register" element={<Register />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/success" element={<Success />} />
          </Routes>
          <Footer />
        </Router>
      </PetProvider>
    </UserProvider>
  );
}

export default App;