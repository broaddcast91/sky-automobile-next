'use client';
import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";


const HeroSection = () => {

  return (
    <main>
      <div className="relative h-[calc(100vh-80px)] overflow-hidden w-full bg-[url('/images/other/Home_HeroBanner_1.webp')] bg-center bg-primaryBlue">
        <Image
          src='/images/other/Home_HeroBanner_1.webp'
          alt=""
          height={1080}
          width={1920}
          className=" object-cover w-full absolute bottom-0 left-0  "
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
