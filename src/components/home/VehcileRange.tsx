"use client";
import React from "react";
import RangeSlider from "./RangeSlider";

const VehcileRange = () => {
  const [selected, setSelected] = React.useState("Arena");
  return (
    <div className="py-10 md:pt-16 lg:pt-24">
      <div className="container mx-auto mb-8 ">
        <h4 className="text-3xl font-bold text-center text-primaryGray">
          Our Vehicle Range
        </h4>
        <div className="flex justify-center gap-3 mt-4 lg:text-xl">
          <button
            onClick={() => setSelected("Arena")}
            className={` font-semibold px-2 border-b-2 ${
              selected === "Arena"
                ? "text-primaryRed border-b-primaryRed"
                : "text-secondaryGray2"
            }`}
          >
            Arena
          </button>
          <button
            onClick={() => setSelected("Nexa")}
            className={` font-semibold px-2 border-b-2  ${
              selected === "Nexa"
                ? "text-primaryRed border-b-primaryRed"
                : "text-secondaryGray2"
            }
            `}
          >
            Nexa
          </button>
        </div>
      </div>
      <RangeSlider />
    </div>
  );
};

export default VehcileRange;
