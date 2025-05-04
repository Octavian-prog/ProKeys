// src/components/Services/Services.tsx
// 'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white py-20 px-6 mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Titlu și descriere */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Serviciile Noastre
          </h2>
          <p className="text-lg md:text-xl text-neutral-300">
            Descoperă gama noastră completă de servicii profesionale, concepute pentru a-ți oferi soluții rapide și eficiente.
          </p>
        </div>

        {/* Carduri pentru servicii */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Deblocări uși auto și uși de casă */}
          <div
            className="bg-neutral-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Service mobil disponibil 24/7
            </h3>
            <p className="text-neutral-300 mb-4">
              Oferim servicii rapide și profesionale pentru deblocarea ușilor auto și de casă, indiferent de situație.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
              Află mai multe
            </button>
          </div>

          {/* Card 2: Deblocare mașini încuiate */}
          <div
            className="bg-neutral-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Deblocare mașini încuiate
            </h3>
            <p className="text-neutral-300 mb-4">
              Ai rămas încuiat afară? Echipa noastră te ajută să-ți recuperezi accesul rapid și fără daune.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
              Află mai multe
            </button>
          </div>

          {/* Card 3: Clonare chei auto și de casă */}
          <div
            className="bg-neutral-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Clonare chei auto și de casă
            </h3>
            <p className="text-neutral-300 mb-4">
              Realizăm clonarea cheilor auto și de casă cu precizie și rapiditate, folosind echipamente moderne.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
              Află mai multe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;