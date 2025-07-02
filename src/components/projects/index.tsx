"use client"
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { useEffect } from "react";
import AOS from "aos";

const Blog = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 200 });
  }, []);
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
       <div className="container">
        <SectionTitle
          title="Our Project Portfolio"
          paragraph="Explore our diverse range of successful projects, from AI-powered solutions to business management systems and e-commerce platforms. Each project showcases our commitment to delivering innovative, scalable, and user-friendly solutions."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, idx) => (
            <div
              key={blog.id}
              className="w-full"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
