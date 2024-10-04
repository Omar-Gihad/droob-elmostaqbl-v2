import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { NavbarContext } from "../contexts/NavBarContext";
import logoWhite from "../assets/logo-white.png";
import menu from "../assets/menu.png";
import chevronDown from "../assets/chevron-down.png";
import img01 from "../assets/01.png";
import img02 from "../assets/02.png";
import img03 from "../assets/03.png";
import man from "../assets/man.png";

const HeroSection = () => {
  // state to control responsiive navbar
  const {
    show,
    setShow,
    showDropdown,
    setShowDropdown,
    selectedOption,
    setSelectedOption,
    handleOptionClick,
    courses,
  } = useContext(NavbarContext); // Accessing the context
  const nav = useNavigate(); // React router navigation
  return (
    <>
      <nav className=" relative z-50 flex flex-row-reverse justify-between items-center text-[#CCCCDD] bg-[#0B236B]  px-6 py-4 md:px-16">
        <img
          onClick={() => nav(`/`)}
          src={logoWhite}
          alt=""
          className="w-80 cursor-pointer"
        />

        {/* navigation links for medium and above screens*/}

        <ul className="hidden lg:flex flex-row-reverse gap-5">
          <NavLink
            onClick={() => {
              setShowDropdown(false);
              setSelectedOption("");
            }}
            to="/"
            className="items-center"
          >
            <h2>الرئيسية</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
          <NavLink
            onClick={() => {
              setShowDropdown(false);
              setSelectedOption("");
            }}
            to="/who-we-are"
            className="items-center"
          >
            <h2>من نحن</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
          <NavLink
            onClick={() => {
              setShowDropdown(false);
              setSelectedOption("");
            }}
            to="/study-programs"
            className="items-center"
          >
            <h2>البرامج الدراسية</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
          {/* Trigger for the dropdown menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex flex-row-reverse gap-1 items-center focus:outline-none"
            >
              <h2>الدورات التدريبية</h2>
              <img src={chevronDown} alt="dropdown" />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute mt-2 bg-[#0B236B] shadow-lg rounded-lg py-4 px-6 right-0 w-64 text-right">
                <ul className="space-y-2 mt-2 flex flex-col">
                  {courses.map((item, index) => {
                    return (
                      <NavLink
                        to="/study-courses"
                        className={`cursor-pointer ${
                          selectedOption === item
                            ? "font-bold text-blue-600"
                            : "text-[#CCCCDD]"
                        } hover:text-white`}
                        onClick={() => {
                          handleOptionClick(item);
                          setShowDropdown(false);
                        }}
                        key={index}
                      >
                        {item}
                      </NavLink>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <NavLink
            onClick={() => {
              setShowDropdown(false);
              setSelectedOption("");
            }}
            to="/support-and-communication"
            className="items-center"
          >
            <h2>الدعم و التواصل</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
          <NavLink
            onClick={() => {
              setShowDropdown(false);
              setSelectedOption("");
            }}
            to="/blog"
            className="items-center"
          >
            <h2>المدونة</h2>
            <div className="h-0.5 bg-white mt-1 hidden"></div>
          </NavLink>
        </ul>

        <div className="flex items-center">
          <img
            src={menu}
            alt=""
            className="lg:hidden w-10 cursor-pointer"
            onClick={() => setShow(true)}
          />
        </div>

        <ul className="hidden lg:flex flex-row-reverse items-center text-white gap-5">
          <Link to="register">
            <button
              onClick={() => {
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center"
            >
              انضم كشريك
            </button>
          </Link>

          <Link to="login">
            {" "}
            <button
              onClick={() => {
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center text-blue-800 bg-white font-semibold border rounded-lg py-2 px-5"
            >
              تسجيل دخول
            </button>
          </Link>
        </ul>

        {/* navigation links for below medium screens*/}

        <div
          className={`fixed inset-0 z-50 py-8 transition-all bg-[#0B236B] ${
            show ? "w-full opacity-100" : "hidden opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-10">
            <NavLink
              to="/"
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center"
            >
              <h2>الرئيسية</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            <NavLink
              to="/who-we-are"
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className=" items-center"
            >
              <h2>من نحن</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            <NavLink
              to="/study-programs"
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className="items-center"
            >
              <h2>البرامج الدراسية</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            {/* Trigger for the dropdown menu */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex flex-row-reverse gap-1 items-center focus:outline-none"
              >
                <h2>الدورات التدريبية</h2>
                <img src={chevronDown} alt="dropdown" />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute mt-2 bg-[#0B236B] shadow-lg rounded-lg py-4 px-6 right-0 w-64 text-right">
                  <ul className="space-y-2 mt-2 flex flex-col">
                    {courses.map((item, index) => {
                      return (
                        <NavLink
                          to="/study-courses"
                          className={`cursor-pointer ${
                            selectedOption === item
                              ? "font-bold text-blue-600"
                              : "text-[#CCCCDD]"
                          } hover:text-white`}
                          onClick={() => {
                            handleOptionClick(item);
                            setShowDropdown(false);
                            setShow(false);
                          }}
                          key={index}
                        >
                          {item}
                        </NavLink>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <NavLink
              to="/support-and-communication"
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className=" items-center"
            >
              <h2>الدعم و التواصل</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => {
                setShow(false);
                setShowDropdown(false);
                setSelectedOption("");
              }}
              className=" items-center"
            >
              <h2>المدونة</h2>
              <div className="h-0.5 bg-white mt-1 hidden"></div>
            </NavLink>
          </ul>

          <ul className="flex flex-col justify-center items-center py-10 my-5 gap-5 md:hidden">
            <Link to="register">
              <button className="items-center">انضم كشريك</button>
            </Link>

            <Link to="login">
              {" "}
              <button className="items-center text-blue-800 bg-white font-semibold border rounded-lg py-2 px-5">
                تسجيل دخول
              </button>
            </Link>
          </ul>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row-reverse justify-between bg-[#0B236B] text-white px-8 md:px-20">
        <div className="flex flex-col items-end pt-32 mb-8 lg:mb-0 ">
          <h1 className="text-right text-xl lg:text-3xl font-bold mb-4 ">
            وصول غير محدود إلى 500+ دورة تدريبية وبرامج
          </h1>
          <h1 className="text-right text-xl lg:text-3xl font-bold mb-4 ">
            شهادات معتمدة - وكلها مدرجة في اشتراكك
          </h1>
          <p className="text-right text-[8px] lg:text-[12px]">
            ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
          </p>
          <p className="text-right text-[8px] lg:text-[12px] mb-4 ">
            مجهولة برص مجموعة من الأحرف بشكل
          </p>

          <div className="flex flex-row-reverse gap-8 pt-4">
            <button className="text-[#0B236B] bg-white font-semibold border rounded-lg py-2 px-8">
              ابدأ الآن
            </button>
            <button className=" text-white font-semibold rounded">
              احجز استشارة
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="relative">
          {/* Blue Semi-Circle */}
          {/* <div className="absolute w-[450px] h-[450px] bg-[#1a2b6b] rounded-full top-[-50px] left-[-150px] lg:top-[-100px] lg:left-[-200px] z-0"></div> */}

          {/* Images */}
          <img src={man} alt="Person" className="w-[550px] relative z-10" />

          <img
            src={img01}
            alt="Person"
            className="w-[170px] absolute top-[365px] left-[-15px] z-20"
          />

          <img
            src={img03}
            alt="Person"
            className="w-[190px] absolute top-[150px] left-[-30px] z-20"
          />

          <img
            src={img02}
            alt="Person"
            className="w-[130px] absolute top-[130px] left-[280px] z-5"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
