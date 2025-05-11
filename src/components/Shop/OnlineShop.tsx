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
    { name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_Motor_Company_Logo.svg/1200px-Ford_Motor_Company_Logo.svg.png' },
    { name: 'Chevrolet', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chevrolet_logo.svg/1200px-Chevrolet_logo.svg.png' },
    { name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Honda_logo.svg/1200px-Honda_logo.svg.png' },
    { name: 'Nissan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nissan_logo.svg/1200px-Nissan_logo.svg.png' },
    { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Hyundai_logo.svg/1200px-Hyundai_logo.svg.png' },
    { name: 'Kia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Kia_logo.svg/1200px-Kia_logo.svg.png' },
    { name: 'Subaru', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Subaru_logo.svg/1200px-Subaru_logo.svg.png' },
    { name: 'Mazda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Mazda_logo.svg/1200px-Mazda_logo.svg.png' },
    { name: 'Volkswagen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Volkswagen_logo_2019.svg/1200px-Volkswagen_logo_2019.svg.png' },
    { name: 'Porsche', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Porsche_logo.svg/1200px-Porsche_logo.svg.png' },
    { name: 'Lexus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lexus_logo.svg/1200px-Lexus_logo.svg.png' },
    { name: 'Land Rover', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Land_Rover_logo.svg/1200px-Land_Rover_logo.svg.png' },
    { name: 'Jaguar', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jaguar_logo.svg/1200px-Jaguar_logo.svg.png' },
    { name: 'Fiat', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Fiat_logo.svg/1200px-Fiat_logo.svg.png' },
    { name: 'Peugeot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Peugeot_logo.svg/1200px-Peugeot_logo.svg.png' },
    { name: 'Renault', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Renault_logo.svg/1200px-Renault_logo.svg.png' },
    { name: 'Volvo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Volvo_logo.svg/1200px-Volvo_logo.svg.png' },
    { name: 'Chrysler', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chrysler_logo.svg/1200px-Chrysler_logo.svg.png' },
    { name: 'Dodge', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dodge_logo.svg/1200px-Dodge_logo.svg.png' },
    { name: 'Jeep', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jeep_logo.svg/1200px-Jeep_logo.svg.png' },
    { name: 'Ram', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ram_logo.svg/1200px-Ram_logo.svg.png' },
    { name: 'Dacia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Dacia_logo.svg/1200px-Dacia_logo.svg.png' },
    { name: 'Skoda', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Skoda_logo.svg/1200px-Skoda_logo.svg.png' },
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
      }
    ],
    Dacia: [
      {
        name: 'Dacia Key Model G',
        price: '$40',
        year: '2013',
        image: 'https://docs.google.com/spreadsheets/d/1d5f_OfB51oUVyaB54x9nZYiVFokAGLMbkj9R8Dd_Ln8/edit?gid=956517070#gid=956517070&range=B2',
      },
      {
        name: 'Dacia Key Model H',
        price: '$45',
        year: '2022',
        image: 'https://via.placeholder.com/100?text=Dacia+Key+H',
      }
    ],
    Skoda: [
      {
        name: 'Skoda Key Model I',
        price: '$55',
        year: '2015',
        image: 'https://via.placeholder.com/100?text=Skoda+Key+I',
      },
      {
        name: 'Skoda Key Model J',
        price: '$65',
        year: '2020',
        image: 'https://via.placeholder.com/100?text=Skoda+Key+J',
      }
    ],
    Ford: [
      {
        name: 'Ford Key Model K',
        price: '$50',
        year: '2016',
        image: 'https://via.placeholder.com/100?text=Ford+Key+K',
      },
      {
        name: 'Ford Key Model L',
        price: '$60',
        year: '2021',
        image: 'https://via.placeholder.com/100?text=Ford+Key+L',
      }
    ],
    Chevrolet: [
      {
        name: 'Chevrolet Key Model M',
        price: '$70',
        year: '2014',
        image: 'https://via.placeholder.com/100?text=Chevrolet+Key+M',
      },
      {
        name: 'Chevrolet Key Model N',
        price: '$80',
        year: '2019',
        image: 'https://via.placeholder.com/100?text=Chevrolet+Key+N',
      }
    ],
    Honda: [
      {
        name: 'Honda Key Model O',
        price: '$90',
        year: '2017',
        image: 'https://via.placeholder.com/100?text=Honda+Key+O',
      },
      {
        name: 'Honda Key Model P',
        price: '$100',
        year: '2022',
        image: 'https://via.placeholder.com/100?text=Honda+Key+P',
      }
    ],
    Nissan: [
      {
        name: 'Nissan Key Model Q',
        price: '$40',
        year: '2013',
        image: 'https://via.placeholder.com/100?text=Nissan+Key+Q',
      },
      {
        name: 'Nissan Key Model R',
        price: '$45',
        year: '2020',
        image: 'https://via.placeholder.com/100?text=Nissan+Key+R',
      }
    ],
    Hyundai: [
      {
        name: 'Hyundai Key Model S',
        price: '$55',
        year: '2015',
        image: 'https://via.placeholder.com/100?text=Hyundai+Key+S',
      },
      {
        name: 'Hyundai Key Model T',
        price: '$65',
        year: '2021',
        image: 'https://via.placeholder.com/100?text=Hyundai+Key+T',
      }
    ],
    Kia: [
      {
        name: 'Kia Key Model U',
        price: '$50',
        year: '2016',
        image: 'https://via.placeholder.com/100?text=Kia+Key+U',
      },
      {
        name: 'Kia Key Model V',
        price: '$60',
        year: '2021',
        image: 'https://via.placeholder.com/100?text=Kia+Key+V',
      }
    ],
    Subaru: [
      {
        name: 'Subaru Key Model W',
        price: '$70',
        year: '2014',
        image: 'https://via.placeholder.com/100?text=Subaru+Key+W',
      },
      {
        name: 'Subaru Key Model X',
        price: '$80',
        year: '2019',
        image: 'https://via.placeholder.com/100?text=Subaru+Key+X',
      }
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