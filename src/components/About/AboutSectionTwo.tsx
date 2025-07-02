"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const aboutInfos = [
  {
    title: "Quality Assurance",
    desc:
      "We deliver robust, thoroughly tested solutions with rigorous quality control processes. Our commitment to excellence ensures reliable, bug-free code that meets the highest industry standards.",
  },
  {
    title: "Premier support",
    desc:
      "Experience exceptional customer service with our dedicated support team. We provide comprehensive assistance, ongoing maintenance, and rapid response times to keep your systems running smoothly.",
  },
  {
    title: "Scalable Solutions",
    desc:
      "Our architecture is designed to grow with your business. From startups to enterprise-level applications, we build solutions that scale seamlessly and adapt to your evolving needs.",
  },
];

const AboutSectionTwo = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 200 });
  }, []);
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {aboutInfos.map((info, idx) => (
                <div
                  key={info.title}
                  className={`mb-${idx === aboutInfos.length - 1 ? 1 : 9}`}
                  data-aos="fade-up"
                  data-aos-delay={120 * (idx + 1)}
                >
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {info.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    {info.desc}
                </p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;