import { cn } from "@/lib/utils";
import { Mic, Music, Speaker } from "lucide-react";
import React from "react";
import { buttonVariants } from "./ui/button";

const About = () => {
  return (
    <div className="md:mt-24 mt-20">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10">
        <div className="flex flex-col items-end">
          <div className="md:w-[400px] w-[90%] relative md:h-[350px] rounded-md group ">
            <div className="shadow-md group-hover:top-0 group-hover:left-0  transition-all duration-300 ease-out rounded-md w-full h-full relative z-10  bg-background -top-5 -left-5">
              <img
                className="w-full  h-full object-contain  "
                src="/image2.jpeg"
                alt=""
              />
            </div>

            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-md h-full w-full border md:border-2 border-[#9A26A3]"></div>
          </div>

          <div className="text-left mt-5 md:w-[400px] w-[90%] text-sm">
            We are proud to offer the VTX JBL A12 Sound System, a flagship
            product in our inventory. This state-of-the-art system is renowned
            for its exceptional audio quality, powerful performance, and
            versatility across various event types and venues.
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="md:text-3xl text-2xl font-bold">Why choose us ?</h2>
          <p className="mt-1 text-sm text-gray-400 tracking-wide">
            The best features we provide to users
          </p>

          <div className="mt-7">
            <ul className="flex flex-col gap-5">
              <li className="flex">
                <div className="flex items-center bg-[#60606033] rounded-sm w-full">
                  <div>
                    <div
                      className={cn(
                        buttonVariants({ size: "icon" }),
                        "bg-gradient-to-r from-[#F85D5E] to-[#9A26A3]"
                      )}
                    >
                      <Music className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center md:pl-3 md:pr-2 px-4 md:text-sm text-xs">
                    Get the most exclusive top notch quality equipment’s.
                  </div>
                </div>
              </li>

              <li className="flex">
                <div className="flex items-center bg-[#60606033] rounded-sm w-full">
                  <div className="">
                    <div
                      className={cn(
                        buttonVariants({ size: "icon" }),
                        "bg-gradient-to-r to-[#F85D5E] from-[#9A26A3]"
                      )}
                    >
                      <Mic className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center md:pl-3 md:pr-2 px-4 md:text-sm text-xs">
                    We offer some of the best Sound Light teams available
                    throughout India.
                  </div>
                </div>
              </li>

              <li className="flex">
                <div className="flex items-center bg-[#60606033] rounded-sm w-full">
                  <div>
                    <div
                      className={cn(
                        buttonVariants({ size: "icon" }),
                        "bg-gradient-to-t from-[#F85D5E] to-[#9A26A3]"
                      )}
                    >
                      <Speaker className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center md:pl-3 md:pr-2 px-4 md:text-sm text-xs">
                    We provide the best industry leading tools and prices to
                    make your special day even more special.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
