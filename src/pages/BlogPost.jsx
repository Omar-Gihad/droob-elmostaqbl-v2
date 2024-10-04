import React, { useEffect, useState } from "react";
import blogImg from "../assets/blog-img.png";
import socialMediaIcons from "../assets/Group 1000001715.png";
import blogPosts from "../assets/blog posts/blogPosts";
import { useParams } from "react-router-dom";
import BlogPostCard from "../components/BlogPostCard";

const BlogPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    const article = blogPosts.find((item) => item.id === id);
    if (article) setArticle(article);
  }, [id]);

  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <div className=" relative ">
        {/* Image */}
        <img src={blogImg} alt="Studying" className="w-full h-auto" />

        {/* Text on top of the image */}
        <div className="absolute inset-0 px-28 flex items-center justify-between">
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            المدونة{" "}
            <p className="text-white text-xs md:text-lg font-thin mt-6">
              الرئيسية / المدونة
            </p>
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mx-[50px] md:mx-[160px] lg:mx-[310px] mt-20  ">
        <h1 className="text-black font-bold md:text-3xl lg:text-4xl xl:text-5xl text-center text-wrap">
          {article.title}
        </h1>

        {/* author and date */}
        <div className="flex justify-center items-center mt-10 gap-8">
          <div className="flex gap-2 items-center">
            <img src={article.authorImg} alt="" />
            <p className="text-[#2C2C2C]">{article.author}</p>
          </div>
          <p className="text-[#2C2C2C] ">{article.date}</p>
        </div>

        {/* article image 1 */}
        <div className="flex flex-col justify-center">
          <img className="my-20" src={article.articleImg1A} alt="" />
          <p className="text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article.intro}
          </p>

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article.subTitle1}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article.subTitleDesc1}
          </p>

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article.subTitle2}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article.subTitleDesc2}
          </p>
        </div>

        {/* article image 2 */}
        <div className="flex flex-col justify-center">
          <img className="my-20" src={article.articleImg1B} alt="" />

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article.subTitle3}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article.subTitleDesc3}
          </p>

          <h1 className="mt-14 text-xl md:text-3xl text-[#0055D2]">
            {article.subTitle4}
          </h1>
          <p className="mt-10 text-[#2C2C2C] text-base md:text-xl text-wrap">
            {article.subTitleDesc4}
          </p>

          {/* social media icons */}
          <div className="flex items-center gap-8 my-32">
            <p className="text-[#0055D2] text-xl">شارك المقالة</p>
            <img
              className="w-[180px] md:w-auto"
              src={socialMediaIcons}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* related posts  */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#2C2C2C] text-4xl mt-20 mb-10">مقالات ذات صلة</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-16 md:mx-28 gap-8 mb-20">
          {blogPosts.slice(10).map((item) => {
            return <BlogPostCard obj={item} key={item.id} img={item.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
