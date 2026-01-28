import React from "react";
import { assets } from "../assets/assets";
import Brands from "../Components/Brands";

const About = () => {
  return (
    <div className="py-16">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800">
        About Our Farm & Farmers
      </h1>

      {/* Main Description */}
      <p className="text-lg mt-6 text-center max-w-4xl mx-auto text-gray-600 leading-relaxed">
        Namm Organic is dedicated to providing 100% pure, chemical-free, and
        farm-fresh products. Our mission is to deliver real, healthy, and
        sustainable food directly from certified organic farms. We focus on
        transparency, premium quality, and natural nutrition — helping you
        choose a cleaner and healthier lifestyle every day.
      </p>

      {/* Image + Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-16 bg-gray-900 text-white rounded-xl overflow-hidden shadow-xl">

        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.about_hero}
            alt="About our farm"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 p-8">

          <h2 className="text-3xl font-bold">Deal of the Day</h2>

          <p className="text-gray-300 leading-relaxed">
            Discover today’s exclusive organic offer! Handpicked fresh items
            available at a special discounted price. Limited-time deal — grab it
            before it’s gone and enjoy the best nature has to offer.
          </p>

          <button className="bg-secondary w-max px-6 py-3 mt-3 text-white font-medium rounded-lg hover:bg-white hover:text-black duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Brands Section */}
      <div className="mt-16">
        <Brands />
      </div>

    </div>
  );
};

export default About;
