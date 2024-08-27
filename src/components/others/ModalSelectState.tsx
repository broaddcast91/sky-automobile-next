"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ModalSelectState: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("openSelectState")) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }, []);

  const handleClick = () => {
    setShow(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("openSelectState", "true");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] backdrop-blur-[3px] overflow-hidden bg-black bg-opacity-50">
      <div className="bg-gray-100 w-full max-w-[45rem] rounded py-4 m-2 md:py-6 select-none">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={300}
          height={300}
          className="w-auto h-14 rounded-lg md:h-16 mx-auto mb-4"
        />

        <div className="w-full h-full flex justify-center items-center gap-4 flex-col md:flex-row mb-4 lg:gap-8">
          <div onClick={handleClick} className="relative">
            <Image
              src="/images/Odisa-Konarka_Temple.jpg"
              alt="Odisa-Konarka_Temple"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg flex justify-center items-center text-3xl text-white cursor-pointer hover:bg-blue-900 duration-200 hover:bg-opacity-30">
              Odisa
            </div>
          </div>
          <div onClick={handleClick} className="relative">
            <Image
              src="/images/Chhattisgarh-Bhoramdeo_Temple,_Kawardha.jpg"
              alt="Chhattisgarh-Bhoramdeo_Temple"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-lg flex justify-center items-center text-3xl text-white cursor-pointer duration-200 hover:bg-opacity-30 hover:shadow-2xl overflow-hidden group">
              <div className="group-hover:h-[400px] group-hover:w-[400px] bg-blue-900 duration-500 h-0 w-0 rounded-full transition-all bg-opacity-30"></div>
              <p className="absolute">Chhattisgarh</p>
            </div>
          </div>
        </div>
        <p className="text-sm font-medium my-2 text-center text-primaryRed md:text-base">
          Select Your State*
        </p>
      </div>
    </div>
  );
};

export default ModalSelectState;
