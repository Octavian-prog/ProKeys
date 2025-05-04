import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage.tsx'; 
import About from './components/About/About.tsx';
import Services from './components/Services/Services.tsx';
import OnlineShop from './components/Shop/OnlineShop.tsx';
import Navbar from './components/Common/Navbar.tsx';
import Footer from './components/Common/Footer.tsx';
import ContactForm from './components/Common/ContactForm.tsx';
import ScrollingSection from './animation/ScrollingSection.tsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container flex flex-col min-h-screen">
        <Navbar />
        <main className="main-content flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<OnlineShop />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/scrolling-section" element={<ScrollingSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
