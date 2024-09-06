'use client';
import React from "react";
import { IoIosArrowDown } from "react-icons/io";


const HeroSection = () => {

  return (
    <main>
      <div className="relative min-h-screen bg-center bg-primaryRed">
        <img
          src="https://saboonexa.in/static/media/Maruti_Suzuki_Nexa_Strong_Hybrid_Saboo_RKS_Motor_%20(1).723741a650166d1c9b42.webp"
          alt=""
          className="object-cover w-full h-screen"
        />

        <div className="absolute  -ml-4 right-1/2 duration-500 bottom-10 ">
          <div className="relative flex items-start justify-center w-7 overflow-hidden border rounded-full h-14 border-secondaryGray3 ">
            <div className="">
              <div className="w-1 h-4 mt-2 border-secondaryGray3 border-2 rounded-full  "></div>
            </div>
          </div>
          <div className="mx-auto my-1 rounded-full ">
            <IoIosArrowDown className="mx-auto text-xl animate-bounce text-secondaryGray3" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
