// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1Img from '../assets/images/slide1.jpg';
import slide2Img from '../assets/images/slide2.jpg';
import slide3Img from '../assets/images/slide3.jpg';
import slide4Img from '../assets/images/slide4.jpg';
import slide5Img from '../assets/images/slide5.jpg';


const HomePage = () => {
 const slides = [
  {
    image: slide1Img,
    caption: 'When I thought it was gone for good — until I found it here. My wallet is finally back!'
  },
  {
    image: slide2Img,
    caption: 'That moment when you get your phone back with all your memories — priceless.'
  },
  {
    image: slide3Img,
    caption: 'More than just an item — welcoming back a beloved friend.'
  },
  {
    image: slide4Img,
    caption: "My grandmother’s ring had sentimental value. Thanks to this platform, it’s home."
  },
  {
    image: slide5Img,
    caption: 'Lost on the trip, found at the end — the bag full of memories returned.'
  }
];


  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-16">
        <p className="text-xl text-gray-600">Your central place to report and recover lost items.</p>
      </header>

      <section className="mb-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <Link
          to="/report-lost"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg shadow-md transition"
        >
          Report Lost Item
        </Link>
        <Link
          to="/report-found"
          className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-10 py-4 rounded-lg shadow-md transition"
        >
          Report Found Item
        </Link>
      </section>

      {/* Carousel Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-center mb-8">Success Stories</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center px-4">
                <img
                  src={slide.image}
                  alt={`Slide ${idx + 1}`}
                  className="w-full max-w-xl h-64 md:h-72 object-cover rounded-lg mb-4"
                />
                <p className="text-lg text-gray-700 italic">“{slide.caption}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Browse Items</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/lost-items"
            className="bg-gray-600 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            View Lost Items
          </Link>
          <Link
            to="/found-items"
            className="bg-red-500 hover:bg-red-900 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition"
          >
            View Found Items
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
