import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#8500D7] h-10 flex justify-center items-center">
      <p className="text-slate-200 md:text-base text-[10px]">
        Come join us for a diffrent music listening experience.{" "}
        <Link to="#" className="text-white">Click for another</Link>
      </p>
    </div>
  );
};

export default Header;
