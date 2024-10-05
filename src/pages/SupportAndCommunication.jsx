import React from "react";
import ContactSection from "../components/ContactSection";
import contactHero from "../assets/support and communication/contactHero.png";
import { NavLink } from "react-router-dom";

const SupportAndCommunication = () => {
  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <div className=" relative">
        {/* Image */}
        <img src={contactHero} alt="about" className="w-full h-auto" />

        {/* Text on top of the image */}
        <div className="absolute inset-0 px-28 flex items-center justify-between ">
          <h1 className="text-white text-2xl md:text-6xl font-bold">
            تواصل معنا{" "}
            <p className="text-white text-xs md:text-lg font-thin mt-6 ">
              <NavLink to="/">
                <span className="text-gray-400 cursor-pointer"> الرئيسية</span>
              </NavLink>{" "}
              / تواصل معنا
            </p>
          </h1>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default SupportAndCommunication;
