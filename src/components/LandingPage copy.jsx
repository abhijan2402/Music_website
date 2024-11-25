import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

const LandingPage = () => {
  return (
    <div
      className="md:h-[70vh] py-16 relative bg-cover bg-center mt-8 rounded-sm overflow-hidden"
      style={{ backgroundImage: "url(/concert.jpg" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#F85D5E]/70 to-[#761BAE]/70"></div>
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1 className="text-center text-white text-2xl md:text-4xl font-bold tracking-wider">
          Live your life with the <br />
          accompaniment that suits <br /> your mood
        </h1>

        <p className="text-center md:mb-9 mb-6 text-base md:text-sm md:mt-4 mt-2 text-[#cecdcd] tracking-wide">
          Look for other benefits and learning needs
        </p>

        <div className="flex w-full justify-center">
          <Input
            className="rounded-tr-none placeholder:text-white/80 text-white focus:outline-none md:text-base text-xs rounded-br-none bg-background/40 md:w-[50%] w-[68%] border-none"
            type="text"
            placeholder="What do you want to know from us ?"
          />
          <Button className="bg-gradient-to-r from-[#F85D5E] to-[#9A26A3] rounded-tl-none rounded-bl-none md:w-[120px]">
            <Search className="w-4 h-4 mr-1 md:mr-2" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
