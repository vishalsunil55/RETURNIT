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
      caption:
        'When I thought it was gone for good — until I found it here. My wallet is finally back!',
    },
    {
      image: slide2Img,
      caption:
        'That moment when you get your phone back with all your memories — priceless.',
    },
    {
      image: slide3Img,
      caption:
        'More than just an item — welcoming back a beloved friend.',
    },
    {
      image: slide4Img,
      caption:
        'My grandmother’s ring had sentimental value. Thanks to this platform, it’s home.',
    },
    {
      image: slide5Img,
      caption:
        'Lost on the trip, found at the end — memories returned safely.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Lost Something Important?
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          ReturnIt helps reunite people with their lost belongings —
          quickly, safely, and responsibly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/report-lost"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold shadow"
          >
            Report Lost Item
          </Link>
          <Link
            to="/report-found"
            className="bg-gray-800 hover:bg-gray-900 text-white px-10 py-4 rounded-lg font-semibold shadow"
          >
            Report Found Item
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-12">
          How ReturnIt Works
        </h2>

        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">1. Report</h3>
            <p className="text-gray-600">
              Report a lost or found item with clear details and images.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">2. Match</h3>
            <p className="text-gray-600">
              Items are matched based on category, location, and date.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">3. Reunite</h3>
            <p className="text-gray-600">
              Connect securely and recover what matters to you.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="bg-gray-50 py-16 rounded-xl">
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">1,200+</p>
            <p className="text-gray-600 mt-2">Items Reunited</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">5,000+</p>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">300+</p>
            <p className="text-gray-600 mt-2">Cities Covered</p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Success Stories
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
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
                  className="w-full max-w-xl h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-lg text-gray-700 italic">
                  “{slide.caption}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* BROWSE ITEMS */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-8">Browse Items</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/lost-items"
            className="bg-gray-700 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold shadow"
          >
            View Lost Items
          </Link>
          <Link
            to="/found-items"
            className="bg-red-500 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow"
          >
            View Found Items
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 bg-blue-600 text-white rounded-xl">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Find What You Lost?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of users who recovered their belongings.
        </p>
        <Link
          to="/report-lost"
          className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold shadow hover:bg-gray-100"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default HomePage;
