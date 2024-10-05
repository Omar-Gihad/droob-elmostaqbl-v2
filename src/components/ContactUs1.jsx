import React from "react";
import { NavLink } from "react-router-dom";
import contactHero from "../assets/contactHero.png";

const ContactUs1 = () => {
  return (
    <div dir="rtl">
      {/* Contact2 Hero */}
      <div className=" relative">
        {/* Image */}
        <img src={contactHero} alt="about" className="w-full h-auto" />

        {/* Text on top of the image */}
        <div className="absolute inset-0 px-28 flex items-center justify-between ">
          <h1 className="text-white text-2xl md:text-6xl font-bold">
            تواصل معنا{" "}
            <p className="text-white text-xs md:text-lg font-thin mt-6">
              <NavLink to="/">
                <span className="text-gray-400 cursor-pointer"> الرئيسية</span>
              </NavLink>{" "}
              <span className="text-gray-400 cursor-pointer">
                / الدعم و التواصل
              </span>
              / تواصل معنا
            </p>
          </h1>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-20 bg-gray-50">
        <form className="mx-10 px-16 py-16 md:px-28 bg-[#EDF4FF] w-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="input1" className="block pb-3 font-medium">
                نوع العميل
              </label>
              <select className="border border-gray-300 p-3 rounded w-full outline-none">
                <option>اختر من القائمة</option>
              </select>
            </div>
            <div>
              <label htmlFor="input2" className="block pb-3 font-medium">
                اسم البرنامج
              </label>
              <select className="border border-gray-300 p-3 rounded w-full outline-none">
                <option>اختر من القائمة</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="input3" className="block pb-3 font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="input3"
                placeholder="example@gmail.com"
                className="border border-gray-300 p-2 rounded w-full outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="input4" className="block pb-3 font-medium">
                رقم الهاتف
              </label>
              <input
                type="text"
                id="input4"
                placeholder="أدخل رقم الهاتف"
                className="border border-gray-300 p-2 rounded w-full outline-none"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="input5" className="block pb-3 font-medium">
                الدولة
              </label>
              <input
                type="text"
                id="input5"
                placeholder="أدخل الدولة"
                className="border border-gray-300 p-2 rounded w-full outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="input6" className="block pb-3 font-medium">
                الغرض من الرسالة
              </label>
              <select className="border border-gray-300 p-3 rounded w-full outline-none">
                <option>اختر من القائمة</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="input7" className="block pb-3 font-medium">
              الرسالة
            </label>
            <textarea
              rows="4"
              cols="50"
              className="border border-gray-300 p-2 rounded w-full outline-none resize-none"
            ></textarea>
          </div>
          <button className="items-center text-white bg-blue-800 font-semibold border rounded-lg py-3 px-20">
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs1;
