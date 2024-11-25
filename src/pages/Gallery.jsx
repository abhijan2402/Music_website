import React from "react";

const Gallery = () => {
  return (
    <div className="px-4 lg:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4 md:mt-16 mt-10">
        <div className="bg-[#0B205D] rounded-lg overflow-hidden">
          <video
            controls
            class="h-auto w-full object-cover object-center"
            src="/video1.mp4"
          ></video>
          <div className="py-7 flex flex-col justify-center items-center px-10 text-center">
            <p className="uppercase text-white text-sm tracking-wider font-bold">
            Hyatt Regency Dehradun
            </p>
            <h3 className="text-xl my-4 mb-3 text-[#1C4BD4]">
            Nizami Brother’s
            </h3>
            <p className="text-sm text-gray-400">
            From cutting-edge audio systems that deliver crystal-clear sound to innovative lighting solutions that create captivating atmospheres, our equipment is designed to meet the exacting standards of professional entertainers and event organisers alike.
            </p>
          </div>
        </div>
        <div className="bg-[#0B205D] rounded-lg overflow-hidden">
          <video
            controls
            class="h-auto w-full object-cover object-center"
            src="/video2.mp4"
          ></video>
          <div className="py-7 flex flex-col justify-center items-center px-10 text-center">
            <p className="uppercase text-sm text-white tracking-wider font-bold">
            Hyatt Regency Dehradun
            </p>
            <h3 className="text-xl my-4 mb-3 text-[#1C4BD4]">
            Street Jammer’s
            </h3>
            <p className="text-sm text-gray-400">
            From cutting-edge audio systems that deliver crystal-clear sound to innovative lighting solutions that create captivating atmospheres, our equipment is designed to meet the exacting standards of professional entertainers and event organisers alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
