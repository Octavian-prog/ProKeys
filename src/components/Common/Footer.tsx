// src/components/Common/Footer.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
  useEffect(() => {
    AOS.init({duration: 800});
    AOS.refresh();
  }, []);
  return (
    // <footer className="footer bg--800 text-white text-center py-4 w-full">
    <footer className="footer text-white text-center py-4 w-full bg-gradient-to-r  from-orange-600 via-gray-500 to-gray-500">
      <div className="flex justify-center gap-6">
        <Link
          to="/contact"
          className="text-white hover:text-green-500 text-shadow-neon transition duration-300" 
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" data-aos="fade-right"/>
        </Link>
        {/* Instagram */}
        <Link
          to="/instagram"
          className="text-white hover:text-pink-500  transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x"  data-aos="fade-up" />
        </Link>
        {/* Facebook */}
        <Link
          to="/facebook"
          className="text-white hover:text-blue-500 transition duration-300" 
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" data-aos="fade-left"/>
        </Link>
      </div>
      <p className="mt-4">&copy; 2025 Your Company</p>
    </footer>
  );
};

export default Footer;
