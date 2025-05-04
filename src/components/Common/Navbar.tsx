import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Setează starea de scroll
    };

    const handleBackgroundCheck = () => {
      // Detectăm culoarea fundalului paginii
      const navbarElement = document.querySelector("nav");
      if (navbarElement) {
        const backgroundColor = window.getComputedStyle(navbarElement).backgroundColor;
        const rgb = backgroundColor.match(/\d+/g)?.map(Number); // Extragem valorile RGB
        if (rgb) {
          // Calculăm luminozitatea (formula standard)
          const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
          setIsDarkBackground(brightness < 128); // Dacă luminozitatea este mică, fundalul este întunecat
        }
      }
    };

    handleScroll();
    handleBackgroundCheck();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleBackgroundCheck); // Recalculăm la redimensionare
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleBackgroundCheck);
    };
  }, []);

  return (
    <nav
      className={`fixed bg-opacity-0 top-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-500 ${
        scrolled
          ? "bg-gray-500 bg-opacity-10 shadow-lg"
          : isDarkBackground
          ? "bg-transparent"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" className="flex items-center">
            <img
              src="https://pro-keys.ro/wp-content/uploads/2020/05/cropped-4TRHYD.png"
              alt="DEBLOCARI AUTO SI USI – CHEI AUTO"
              className="h-12 shadow-neonReddit"
            />
          </Link>
        </div>

        {/* Links */}
        <div
          className={`fixed top-0 right-0 w-full bg-gray-800 text-white flex flex-col items-center justify-center gap-6 p-6 transition-transform duration-300 md:static md:flex md:flex-row md:bg-transparent md:w-auto md:translate-x-0 ${
            open ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:gap-8 md:p-0 md:bg-opacity-0 md:shadow-none ${
            scrolled || isDarkBackground ? "bg-gray-800" : "bg-white"
          }`}
        >
          <Link
            to="/"
            className={`text-xl ${
              scrolled || isDarkBackground ? "text-white" : "text-black"
            }  hover:text-yellow-400 scale-125  transition duration-300`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-xl ${
              scrolled || isDarkBackground ? "text-white" : "text-black"
            }  hover:text-yellow-400 scale-125  transition duration-300`}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`text-xl ${
              scrolled || isDarkBackground ? "text-white" : "text-black"
            }  hover:text-yellow-400 scale-125  transition duration-300`}
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/shop"
            className={`text-xl ${
              scrolled || isDarkBackground ? "text-white" : "text-black"
            }  hover:text-yellow-400 scale-125  transition duration-300`}
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className={`text-lg ${
              scrolled || isDarkBackground ? "text-white" : "text-black"
            }  hover:text-yellow-400 scale-125  transition duration-300`}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className="hamburger flex flex-col gap-1 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-6 hover: ${
              scrolled || isDarkBackground ? "bg-white" : "bg-black"
            } transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-6 ${
              scrolled || isDarkBackground ? "bg-white" : "bg-black"
            } transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-6 ${
              scrolled || isDarkBackground ? "bg-white" : "bg-black"
            } transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
