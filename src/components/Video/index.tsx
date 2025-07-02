"use client";

import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="Our team provides tailored IT solutions designed to meet your unique business needs, ensuring quality, reliability, and long-term support."
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-77/40">
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover rounded-md"
                    controls
                    preload="metadata"
                    poster="/images/video/video-poster.jpg"
                  >
                    <source src="/images/video/video.mp4" type="video/mp4" />
                    <source src="/images/video/video.webm" type="video/webm" />
                    <source src="/images/video/video.ogg" type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
          </div>
        </div>
      </section>
    </>
  );
}