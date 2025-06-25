import React, { useState } from 'react';

const OnlineShop = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const brands = [
    { name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_Motor_Company_Logo.svg' },
    { name: 'Chevrolet', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Chevrolet_logo.svg' },
    { name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Honda_logo.svg' },
    { name: 'Nissan', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Nissan_logo.svg' },
    { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Hyundai_logo.svg' },
    { name: 'Kia', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Kia_logo.svg' },
    { name: 'Subaru', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Subaru_logo.svg' },
  ];

  const keysByBrand: Record<string, { name: string; price: string; year: string; image: string }[]> = {
    Ford: [
      { name: 'Ford Key Model A', price: '$50', year: '2015', image: 'https://via.placeholder.com/100?text=Ford+Key+A' },
      { name: 'Ford Key Model B', price: '$60', year: '2018', image: 'https://via.placeholder.com/100?text=Ford+Key+B' },
    ],
    Chevrolet: [
      { name: 'Chevrolet Key Model C', price: '$70', year: '2017', image: 'https://via.placeholder.com/100?text=Chevrolet+Key+C' },
      { name: 'Chevrolet Key Model D', price: '$80', year: '2020', image: 'https://via.placeholder.com/100?text=Chevrolet+Key+D' },
    ],
    // ...restul mărcilor
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const foundBrand = brands.find(
        (brand) => brand.name.toLowerCase() === search.trim().toLowerCase()
      );
      if (foundBrand) {
        setSelectedBrand(foundBrand.name);
      }
    }
  };

  return (
    <div className="online-shop bg-gray-900 text-white py-12 px-6 min-h-screen mt-14">
      {/* Hero Section */}
      <div className="hero text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 drop-shadow-lg">Welcome to Our Online Shop</h1>
        <p className="text-lg text-gray-300">
          Select your car brand to explore available keys and services.
        </p>
      </div>

      {/* Input de căutare */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          placeholder="Search for a key model, year or price..."
          className="w-full md:w-1/2 px-4 py-2 rounded-lg text-black shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Lista de branduri cu expand pentru chei */}
      <div className="brands grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {brands.map((brand) => (
          <div key={brand.name} className="col-span-1">
            <div
              className={`brand-item p-6 rounded-xl shadow-xl text-center cursor-pointer transition-all duration-300 border-2 ${
                selectedBrand === brand.name
                  ? 'bg-yellow-400 text-black border-yellow-400 scale-105'
                  : 'bg-gray-800 border-transparent hover:border-yellow-400 hover:scale-105'
              }`}
              onClick={() => setSelectedBrand(selectedBrand === brand.name ? null : brand.name)}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-20 h-20 mx-auto mb-4 object-contain drop-shadow"
              />
              <span className="font-bold text-lg">{brand.name}</span>
            </div>
            {/* Lista de chei se extinde doar sub brandul selectat */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                selectedBrand === brand.name ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              {selectedBrand === brand.name && (
                <div className="keys-list bg-gray-700 p-6 rounded-lg shadow-lg animate-fade-in">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
                    Keys for {brand.name}
                  </h2>
                  <ul className="space-y-4">
                    {keysByBrand[brand.name]
                      ?.filter(
                        key =>
                          key.name.toLowerCase().includes(search.toLowerCase()) ||
                          key.year.includes(search) ||
                          key.price.includes(search)
                      )
                      .map((key, index) => (
                        <li
                          key={index}
                          className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-900 transition"
                        >
                          <img
                            src={key.image}
                            alt={key.name}
                            className="w-16 h-16 object-cover rounded-lg mr-4 border-2 border-yellow-400"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{key.name}</h3>
                            <p className="text-sm text-gray-400">Year: {key.year}</p>
                          </div>
                          <span className="text-yellow-400 mr-4 font-bold">{key.price}</span>
                          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300 shadow">
                            Request Offer
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineShop;