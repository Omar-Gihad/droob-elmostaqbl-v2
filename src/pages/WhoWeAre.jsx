import React from "react";
import "../index.css";
import officeImg from "../assets/office.png";
import longArrowRightW from "../assets/long-arrow-rightW.png";
import longArrowRight from "../assets/long-arrow-right.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import wrapper from "../assets/wrapper.png";
import office2 from "../assets/office2.png";
import lamp from "../assets/lamp.png";
import correct from "../assets/correct-circle.png";
import rocket from "../assets/rocket.png";
import { NavLink } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div dir="rtl">
      {/* About Hero */}
      <div className="bg-[url('assets/about-img.png')] w-[100%] h-[500px] bg-no-repeat">
        <div className="text-white h-full flex flex-col gap-6 justify-center pr-48">
          <h1 className="font-bold text-5xl">من نحن</h1>
          <p className="font-normal">
            <NavLink to="/">
              <span className="text-gray-400 cursor-pointer">الرئيسية</span>
            </NavLink>{" "}
            / من نحن
          </p>
        </div>
      </div>

      {/* Second Part */}
      <div className="flex flex-col md:flex-row gap-16 my-20 justify-evenly">
        <div className="flex flex-col justify-center gap-6 md:w-2/4 p-5">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            عن مركز دروب المستقبل للتدريب والإستشارات
          </h5>
          <h1 className="font-bold text-4xl leading-normal">
            مركز دروب المستقبل للتدريب والإستشارات التعليمية يهدف إلى تقديم أفضل
            الخدمات
          </h1>
          <p className="text-gray-500">
             نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
            المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ
            القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل
            عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه
            الأحرف. خمسة
          </p>
          <div>
            <NavLink to="">
              <button className="flex flex-row-reverse gap-3 border rounded-lg items-center font-semibold py-3 px-10 bg-blue-800 text-white">
                <img src={longArrowRightW} /> إبدأ الآن
              </button>
            </NavLink>
          </div>
        </div>
        <div className="">
          <img src={officeImg} />
        </div>
      </div>

      {/* Third Part */}
      <div className="flex flex-col md:flex-row gap-6 justify-evenly px-10 py-20 bg-gray-50">
        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={rocket} />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-3xl">مهتنا</h1>
            <p className="text-gray-500">
              تتمثل مهمتنا في توفير حزم السفر الفريدة والخاصة والتي تلبي
              الاحتياجات والرغبات الفردية.
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-center rounded-[16px] p-4 bg-white outline-none">
          <img src={lamp} />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-3xl">رؤيتنا</h1>
            <p className="text-gray-500">
              تتمثل مهمتنا في توفير حزم السفر الفريدة والخاصة والتي تلبي
              الاحتياجات والرغبات الفردية.
            </p>
          </div>
        </div>
      </div>

      {/* Forth Part */}
      <div className="flex flex-col gap-11 bg-gray-50 px-10 py-20">
        {/* Title */}
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-bold text-3xl">تعرف على فريقنا</h1>
          <p className="text-gray-500 text-center">
            فخورون بفريقنا المتميز الذي يجمع بين الخبرة والمعرفة والحماس لتقديم
            أفضل الخدمات التعليمية والاستشارية
          </p>
        </div>

        {/* Persons */}
        <div className="flex flex-col gap-10 items-center md:flex-row justify-center">
          <div className=" bg-white w-[380px] h-[400px] rounded-[16px] flex flex-col justify-center items-center gap-4">
            <img src={p3} className="w-[344px]" />
            <h1 className="font-bold text-xl">د. محمد العجمي</h1>
            <p className="text-gray-500">الرئيس التنفيذي</p>
          </div>
          <div className=" bg-white w-[380px] h-[400px] rounded-[16px] flex flex-col justify-center items-center gap-4">
            <img src={p2} className="w-[344px]" />
            <h1 className="font-bold text-xl">د. أحمد راشد</h1>
            <p className="text-gray-500">الرئيس التنفيذي</p>
          </div>
          <div className=" bg-white w-[380px] h-[400px] rounded-[16px] flex flex-col justify-center items-center gap-4">
            <img src={p1} className="w-[344px]" />
            <h1 className="font-bold text-xl">د. أسامة إبراهيم</h1>
            <p className="text-gray-500">الرئيس التنفيذي</p>
          </div>
        </div>
      </div>

      {/* Fifth Part */}
      <div className="flex flex-col-reverse md:flex-row items-center py-20 px-10 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] gap-20">
        {/* Images */}
        <div className="flex gap-3">
          <img className="w-60 h-80" src={wrapper} />
          <img className="w-60 h-80" src={office2} />
        </div>

        {/* Info */}
        <div className="w-[60%] flex flex-col gap-6">
          <h5 className="text-[#0055D2] text-xl font-bold mb-6">
            لماذا تختار مركز دروب المستقبل للتدريب و الإستشارات ؟
          </h5>
          <h1 className="font-bold text-4xl leading-normal">
            مركز دروب المستقبل للتدريب والإستشارات التعليمية يهدف إلى تقديم أفضل
            الخدمات
          </h1>
          <p className="text-base text-gray-500 mb-4">
            نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات
            المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ
            القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل
            عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه
            الأحرف.{" "}
          </p>
          <div className="flex gap-40">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">خبرة متميزة</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">نتائج مثبتة</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">مناهج متطورة</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={correct} className="w-4 h-4" />
                <p className="font-semibold">دعم مستمر</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Part */}
      <div className="flex justify-center items-center py-20 bg-gray-50">
        <div className="bg-[url('assets/mask.png')] h-[330px] flex items-center justify-center">
          <div className="flex flex-col gap-6 text-center w-3/4 items-center">
            <h1 className="font-bold text-3xl text-white">
              سجل الآن و إنضم لمجتمع دروب المستقبل و استفد من برامجنا التدريبية
              والاستشارية المصممة خصيصًا لك
            </h1>
            <div className="flex gap-6 justify-center">
              <NavLink to="">
                <button className="flex flex-row-reverse gap-3 border rounded-lg items-center font-semibold py-3 px-10 bg-white text-blue-800">
                  <img src={longArrowRight} /> إبدأ الآن
                </button>
              </NavLink>
              <button className=" text-white font-semibold rounded">
                احجز استشارة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
