import React from "react";
import { NavLink } from "react-router-dom";
import map from "../assets/map.png";
import contact from "../assets/contact.png";
import worktime from "../assets/workTime.png";
import email from "../assets/email.png";
import contactHero from "../assets/contactHero.png";

const ContactUs2 = () => {
  return (
    <div dir="rtl">
      {/* Contact2 Hero */}
      <div className=" relative ">
        {/* Image */}
        <img src={contactHero} alt="about" className="w-full h-auto" />

        {/* Text on top of the image */}
        <div className="absolute inset-0 px-28 flex items-center justify-between">
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            تواصل معنا{" "}
            <p className="text-white text-xs md:text-lg font-thin mt-6">
              <NavLink to="/">
                <span className="text-gray-400 cursor-pointer"> الرئيسية</span>
              </NavLink>{" "}
              / تواصل معنا
            </p>
          </h1>
        </div>
      </div>

      {/* Contact2 Form */}
      <div className="bg-gray-50 pt-28 pb-52">
        <div className="flex flex-col gap-16 md:flex-row justify-evenly p-10">
          <div>
            <h5 className="text-[#0055D2] text-xl font-bold mb-6">إتصل بنا</h5>
            <h1 className="font-bold text-3xl leading-normal">
              نسعد بالتواصل معك و الإجابة على استفساراتك
            </h1>
            <p className="text-gray-500 mt-4">
              نحن هنا لمساعدتك! إذا كان لديك أي استفسار أو ترغب في حجز إستشارة و
              معرفة المزيد عن
              <br /> خدماتنا، لا تتردد في التواصل معنا من خلال ملء الإستمارة
              التالية:
            </p>
            <div className="pt-20">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="input3" className="block pb-3 font-medium">
                    الإسم
                  </label>
                  <input
                    type="text"
                    id="input3"
                    placeholder="أدخل اسمك"
                    className="border border-gray-300 p-2 rounded w-full outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="input4" className="block pb-3 font-medium">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="input4"
                    placeholder="عنوان بريدك الإلكتروني"
                    className="border border-gray-300 p-2 rounded w-full outline-none"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="input3" className="block pb-3 font-medium">
                    رقم الهاتف
                  </label>
                  <input
                    type="text"
                    id="input3"
                    placeholder="+ 966 | "
                    className="border border-gray-300 p-2 rounded w-full outline-none rotate-180"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="input4" className="block pb-3 font-medium">
                    الخدمة
                  </label>
                  <select
                    className="border border-gray-300 p-2 rounded w-full outline-none text-blue-800"
                    required
                  >
                    <option>حجز إستشارة</option>
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
              <button className="items-center text-white bg-blue-800 font-semibold border rounded-lg w-full py-3">
                إرسال
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img src={map} />
            <img src={worktime} />
            <img src={contact} />
            <img src={email} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs2;