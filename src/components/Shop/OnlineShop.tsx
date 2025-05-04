// // src/components/Shop/OnlineShop.tsx

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const OnlineShop  = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

// // const OnlineShop = () => {
//   return (
//     <div className="online-shop bg-gray-800 text-white py-12 px-6 mt-12">
//       {/* Hero Section */}
//       <div className="hero text-center mb-12">
//         <h1 className="text-4xl font-bold text-yellow-400 mb-4">Welcome to Our Online Shop</h1>
//         <p className="text-lg text-gray-300">
//           Explore our wide range of products and services for your locksmith needs. From house keys to car keys, we have it all!
//         </p>
//       </div>

//       {/* Table Section */}
//       <div className="table-container max-w-6xl mx-auto" data-aos="fade-up">
//         <table className="w-full border-collapse bg-gray-700 rounded-lg overflow-hidden shadow-lg" data-aos="fade-right">
//           <thead data-aos="fade-right">
//             <tr className="bg-gray-900 text-yellow-400">
//               <th className="py-4 px-6 text-left">Product</th>
//               <th className="py-4 px-6 text-left">Price</th>
//               <th className="py-4 px-6 text-left">Details</th>
//               <th className="py-4 px-6 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody data-aos="fade-left">
//             {/* Row 1 */}
//             <tr className="border-b border-gray-600" data-aos="fade-down">
//               <td className="py-4 px-6 flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/100"
//                   alt="House Key"
//                   className="w-16 h-16 object-cover rounded-lg"
//                 />
//                 <span>House Key</span>
//               </td>
//               <td className="py-4 px-6">$15</td>
//               <td className="py-4 px-6">Key duplication and repair services.</td>
//               <td className="py-4 px-6 text-center">
//                 <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
//                   Request Offer
//                 </button>
//               </td>
//             </tr>
//             {/* Row 2 */}
//             <tr className="border-b border-gray-600" data-aos="fade-down">
//               <td className="py-4 px-6 flex items-center gap-4">
//                 <img
//                   src="https://via.placeholder.com/100"
//                   alt="Car Key"
//                   className="w-16 h-16 object-cover rounded-lg"
//                 />
//                 <span>Car Key</span>
//               </td>
//               <td className="py-4 px-6">$50</td>
//               <td className="py-4 px-6">Car key programming and repair.</td>
//               <td className="py-4 px-6 text-center">
//                 <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
//                   Request Offer
//                 </button>
//               </td>
//             </tr>
//             {/* Row 3 */}
//             <tr>
//               <td className="py-4 px-6 flex items-center gap-4" data-aos="fade-down">
//                 <img
//                   src="https://via.placeholder.com/100"
//                   alt="Smart Key"
//                   className="w-16 h-16 object-cover rounded-lg"
//                 />
//                 <span>Smart Key</span>
//               </td>
//               <td className="py-4 px-6">$100</td>
//               <td className="py-4 px-6">Advanced key programming for smart keys.</td>
//               <td className="py-4 px-6 text-center">
//                 <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
//                   Request Offer
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OnlineShop;

import React, { useState } from 'react';

const OnlineShop = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Lista de branduri și chei
  const brands = [
    { name: 'Toyota', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgeUI4uPpTnu5OJ_OEMNc9bPfyUE9IYU8mg&s' },
    { name: 'BMW', logo: 'https://www.citypng.com/public/uploads/preview/bmw-car-logo-735811696610457s9siw7ivja.png' },
    { name: 'Mercedes', logo: 'https://images.seeklogo.com/logo-png/19/2/mercedes-benz-logo-png_seeklogo-190348.png' },
    { name: 'Audi', logo: 'https://c0.klipartz.com/pngpicture/948/348/sticker-png-audi-r8-car-logo-audi-rs-6-rover-text-trademark-logo-car-desktop-wallpaper.png' },
  ];

  const keysByBrand: Record<string, { name: string; price: string; year: string; image: string }[]> = {
    Toyota: [
      {
        name: 'Toyota Key Model A',
        price: '$50',
        year: '2015',
        image: 'https://via.placeholder.com/100?text=Toyota+Key+A',
      },
      {
        name: 'Toyota Key Model B',
        price: '$60',
        year: '2018',
        image: 'https://via.placeholder.com/100?text=Toyota+Key+B',
      },
    ],
    BMW: [
      {
        name: 'BMW Key Model X',
        price: '$80',
        year: '2017',
        image: 'https://via.placeholder.com/100?text=BMW+Key+X',
      },
      {
        name: 'BMW Key Model Y',
        price: '$90',
        year: '2020',
        image: 'https://via.placeholder.com/100?text=BMW+Key+Y',
      },
    ],
    Mercedes: [
      {
        name: 'Mercedes Key Model C',
        price: '$100',
        year: '2016',
        image: 'https://via.placeholder.com/100?text=Mercedes+Key+C',
      },
      {
        name: 'Mercedes Key Model D',
        price: '$110',
        year: '2019',
        image: 'https://via.placeholder.com/100?text=Mercedes+Key+D',
      },
    ],
    Audi: [
      {
        name: 'Audi Key Model E',
        price: '$70',
        year: '2014',
        image: 'https://via.placeholder.com/100?text=Audi+Key+E',
      },
      {
        name: 'Audi Key Model F',
        price: '$85',
        year: '2021',
        image: 'https://via.placeholder.com/100?text=Audi+Key+F',
      },
    ],
  };

  return (
    <div className="online-shop bg-gray-800 text-white py-12 px-6 mt-12">
      {/* Hero Section */}
      <div className="hero text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Welcome to Our Online Shop</h1>
        <p className="text-lg text-gray-300">
          Select your car brand to explore available keys and services.
        </p>
      </div>

      {/* Lista de branduri */}
      <div className="brands grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className={`brand-item p-4 rounded-lg shadow-lg text-center cursor-pointer transition duration-300 ${
              selectedBrand === brand.name ? 'bg-yellow-400 text-black' : 'bg-gray-700'
            }`}
            onClick={() => setSelectedBrand(brand.name)}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-16 h-16 mx-auto mb-4 object-contain"
            />
            <span className="font-semibold">{brand.name}</span>
          </div>
        ))}
      </div>

      {/* Lista de chei pentru brandul selectat */}
      {selectedBrand && (
        <div className="keys-list bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Keys for {selectedBrand}
          </h2>
          <ul className="space-y-4">
            {keysByBrand[selectedBrand].map((key, index) => (
              <li
                key={index}
                className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <img
                  src={key.image}
                  alt={key.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{key.name}</h3>
                  <p className="text-sm text-gray-400">Year: {key.year}</p>
                </div>
                <span className="text-yellow-400 mr-4">{key.price}</span>
                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
                  Request Offer
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OnlineShop;