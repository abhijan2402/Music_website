import { cn } from "@/lib/utils";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const Footer = () => {
  return (
    <div className="mt-20 px-4 lg:px-6 max-w-7xl mx-auto border-[#9A26A3]/30 border-t py-7">
      <div className="flex md:flex-row flex-col gap-10 justify-between">
        <div className="">
          <Link to="/" className="flex gap-2 ">
            <span className="md:text-3xl text-2xl font-bold bg-gradient-to-r from-[#F85D5E] to-[#9A26A3] bg-clip-text text-transparent">
              VenusSound
            </span>
          </Link>

          <p className="text-[#a1a1a1] mt-1">Venus Sound System’s </p>
          <p className="text-[#a1a1a1] text-sm mt-1">
            Mohit nagar house number - 232 A Lane - 9 <br /> Dehradun
            Uttarakhand
          </p>
        </div>

        <div>
          <a href="mailto:Prakharmahendru1@gmail.com" className="flex items-center gap-3">
            <div
              className={cn(
                buttonVariants({ size: "icon", variant: "secondary" })
              )}
            >
              <Mail className="w-5 h-5" />
            </div>

            <p>Prakharmahendru1@gmail.com</p>
          </a>

          <a href="tel:+919837061962" className="flex items-center gap-3 mt-3">
            <div
              className={cn(
                buttonVariants({ size: "icon", variant: "secondary" })
              )}
            >
              <Phone className="w-5 h-5" />
            </div>

            <p>+91 9837061962</p>
          </a>
        </div>

        <div>
          <div className="flex md:gap-4 justify-start gap-10 md:justify-end">
            <a  href="https://m.facebook.com/venusdjandsoundsystem/" target="_blank" className={cn(
                buttonVariants({ size: "icon", variant: "secondary" })
              )}>
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/venussoundsystem/" target="_blank" className={cn(
                buttonVariants({ size: "icon", variant: "secondary" })
              )}>
              <Instagram className="w-5 h-5" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
