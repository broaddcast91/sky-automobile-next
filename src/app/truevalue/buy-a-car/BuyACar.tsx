"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import React from "react";
import toast from "react-hot-toast";


const BuyACar: React.FC = () => {
  const { selectedState } = useAppContext();

  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
        <div className="pt-20 min-h-40 bg-primaryGray">
          <div className="h-full min-h-[30vh] flex justify-center items-center text-white text-3xl ">
            Required Banner Image
          </div>
        </div>
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Buy A{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Car{" "}
            </span>{" "}
            Now
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyACar;
