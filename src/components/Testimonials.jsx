import CardTestimonials from "./CardTestimonials.jsx";

const Testimonials = () => {
  const testimonialsDetails = [
    {
      title:
        '"نص شكلي بمعنى أن الغاية هي الشكل ليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم"',
      name: "محمد بن راشد",
      desc: "طالب برنامج تطوير تطبيقات الهاتف",
    },
    {
      title:
        '"نص شكلي بمعنى أن الغاية هي الشكل ليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم"',
      name: "محمد بن راشد",
      desc: "طالب برنامج تطوير تطبيقات الهاتف",
    },
    {
      title:
        '"نص شكلي بمعنى أن الغاية هي الشكل ليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم"',
      name: "محمد بن راشد",
      desc: "طالب برنامج تطوير تطبيقات الهاتف",
    },
  ];

  return (
    <div
      dir="rtl"
      className="bg-[#F0F0F0] py-20 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] lg:pt-[330px]"
    >
      <div className="text-center mb-10">
        <h5 className="text-[#0055D2] text-xl font-bold mb-6">تجارب الطلاب</h5>
        <h3 className="text-2xl font-bold mb-10 leading-10 tracking-wider">
          انضم إلى الآلاف من متعلمي دروب <br />
          المستقبل لتحقيق أهدافهم
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {testimonialsDetails.map((item, index) => (
          <CardTestimonials
            key={index}
            title={item.title}
            name={item.name}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
