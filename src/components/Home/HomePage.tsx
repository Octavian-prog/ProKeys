import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300"></div>
    ),
  appendDots: (dots: React.ReactNode) => (
    <div className="absloute w-full z-50">
      <ul className="flex justify-center items-center gap-3 list-none p-0 m-5">
        {dots}
      </ul>
    </div>
    ),
  };


  return (
    <div className="home-page relative overflow-hidden">
      <Slider {...settings}>
        <div className="relative">
          <img
            src="https://www.thompsoncreek.com/wp-content/uploads/2022/01/shutterstock_1923073085-738x409.jpg"
            alt="Slide 1"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">First Slide</h2>
            <p className="text-lg">Text peste imagine 1</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.thompsoncreek.com/wp-content/uploads/2022/01/shutterstock_1923073085-738x409.jpg"
            alt="Slide 2"
            className="object-fill h-full w-full overflow-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">Second Slide</h2>
            <p className="text-lg">Text peste imagine 2</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.thompsoncreek.com/wp-content/uploads/2022/01/shutterstock_1923073085-738x409.jpg"
            alt="Slide 3"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-bold mb-2">Third Slide</h2>
            <p className="text-lg">Text peste imagine 3</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomePage;



