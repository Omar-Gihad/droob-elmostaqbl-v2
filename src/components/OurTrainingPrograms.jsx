import TrainingProgramsCard from "./TrainingProgramsCard.jsx";
import longArrowRight from "../assets/long-arrow-right.png";
import book from "../assets/book.png";
import gratuted from "../assets/gratuted.png";
import setting from "../assets/setting.png";
import mic from "../assets/mic.png";
import go from "../assets/go.png";
import manage from "../assets/manage.png";

const OurTrainingPrograms = () => {
  const details = [
    {
      icon: book,
      name: "البرامج التطويرية",
      desc: "لوريم ايبسوم ( محرد نص تشكيلي لشكل الخط في التصميم) ",
      button: "المزيد",
      img: longArrowRight,
    },
    {
      icon: gratuted,
      name: "البرامج التأهيلية",
      desc: "لوريم ايبسوم ( محرد نص تشكيلي لشكل الخط في التصميم) ",
      button: "المزيد",
      img: longArrowRight,
    },
    {
      icon: setting,
      name: "برامج الدبلوم",
      desc: "لوريم ايبسوم ( محرد نص تشكيلي لشكل الخط في التصميم) ",
      button: "المزيد",
      img: longArrowRight,
    },
    {
      icon: mic,
      name: " التسويق الالكتروني",
      desc: "لوريم ايبسوم ( محرد نص تشكيلي لشكل الخط في التصميم) ",
      button: "المزيد",
      img: longArrowRight,
    },
    {
      icon: go,
      name: "تطوير الذات",
      desc: "لوريم ايبسوم ( محرد نص تشكيلي لشكل الخط في التصميم) ",
      button: "المزيد",
      img: longArrowRight,
    },
    {
      icon: manage,
      name: "  الادارة والقيادة",
      desc: "لوريم ايبسوم ( محرد نص تشكيلي لشكل الخط في التصميم) ",
      button: "المزيد",
      img: longArrowRight,
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#F8FBFB]">
      <div className="text-center m-auto mb-10">
        <p className="text-[#0055D2] text-xl font-bold">برامجنا التدريبية</p>
        <h1 className="font-bold mt-5 text-2xl sm:text-3xl">
          اكتشف مستقبلك الدراسي و المهني
          <br />
          مع دوراتنا التدريبية المتخصصة
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {details.map((item, index) => (
          <TrainingProgramsCard
            key={index}
            icon={item.icon}
            name={item.name}
            desc={item.desc}
            button={item.button}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTrainingPrograms;
