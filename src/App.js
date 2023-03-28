import React from 'react'
import Header from './Components/Header';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import AboutSection from './Pages/AboutSection';
import ServicesSection from './Pages/ServicesSection';
import PricingSection from './Pages/PricingSection';
import ContactForm from './Pages/ContactForm';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutSection />} />
        <Route path='/services' element={<ServicesSection />} />
        <Route path='/pricing' element={<PricingSection />} />
        <Route path='/contact' element={<ContactForm />} />


      </Routes>


    </>
  );
}

export default App;
