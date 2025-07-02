'use client';
import { useEffect } from "react";
import AOS from "aos";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 200 });
  }, []);
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full" data-aos="fade-up">
      <div>
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
