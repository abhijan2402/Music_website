import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Facebook, Instagram, Mail, Phone, Search } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const LandingPage = () => {
  return (
    <div
      className="md:h-[70vh] py-16 relative bg-cover bg-center mt-8 rounded-sm overflow-hidden"
      style={{ backgroundImage: "url(/concert.jpg" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#F85D5E]/70 to-[#761BAE]/70"></div>
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1 className="text-center text-white text-2xl md:text-4xl font-bold tracking-wider">
          Venus Sound System’s
        </h1>

        <p className="text-center max-w-4xl md:mb-4 mb-6 md:text-base text-sm w-[97%] md:mt-4 mt-2 text-[#cecdcd] tracking-wide">
          We offer a wide range of premium audio and lighting equipment from top
          brands like JBL Harman, Allen & Heath, Sennheiser, and RCF. Our
          carefully selected inventory caters to events of all sizes and types,
          from small gatherings to large productions. With our comprehensive
          selection, we provide high-quality sound and lighting solutions that
          enhance performances and create memorable experiences.
        </p>

        <div>
          <img
            className="w-20 h-20 mb-7 object-cover"
            src="/jbl2.jpeg"
            alt=""
          />
        </div>

        <div className="flex w-full justify-center gap-3">
          <a
            href="https://m.facebook.com/venusdjandsoundsystem/"
            target="_blank"
            className={cn(
              buttonVariants({ size: "icon" }),
              "bg-gradient-to-r from-[#F85D5E] to-[#9A26A3]"
            )}
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/venussoundsystem/"
            target="_blank"
            className={cn(
              buttonVariants({ size: "icon" }),
              "bg-gradient-to-b from-[#F85D5E] to-[#9A26A3]"
            )}
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="mailto:Prakharmahendru1@gmail.com"
            className={cn(
              buttonVariants({ size: "icon" }),
              "bg-gradient-to-l from-[#F85D5E] to-[#9A26A3]"
            )}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:+919837061962"
            className={cn(
              buttonVariants({ size: "icon" }),
              "bg-gradient-to-t from-[#F85D5E] to-[#9A26A3]"
            )}
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
