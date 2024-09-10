"use client";
import { useAppContext } from "@/context";
import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { CiCircleQuestion } from "react-icons/ci";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdLocalPhone } from "react-icons/md";
import { PiSteeringWheel } from "react-icons/pi";

// Define the types for the props
interface ActionItemProps {
  Icon: React.ElementType;
  label: string;
  ariaLabel: string;
  btnName?: string;
}

const ActionItem: React.FC<ActionItemProps> = ({ Icon, label, ariaLabel, btnName }) => {
  const { selectedState } = useAppContext();
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 px-4 py-10 border  group hover:text-white md:flex-row ${selectedState === "Odisha" ? "hover:bg-primaryBlue" : "hover:bg-primaryRed"}`}
    >
      <div>
        <Icon
          className={`text-4xl lg:text-5xl  group-hover:text-white ${
            selectedState === "Odisha"
              ? "text-primaryBlue"
              : "text-primaryRed"
          } `}
          aria-label={ariaLabel}
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-center max-w-64 text-primaryGray group-hover:text-white md:text-left text-sm ">
          {label}
        </p>
        <button
          className={`px-4 py-2 mx-auto mt-4 text-sm border rounded-lg group-hover:border-white hover:bg-white  md:mx-0 ${selectedState === "Odisha" ? "hover:text-primaryBlue" : "hover:text-primaryRed"}`}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

const QuickActions: React.FC = () => {
  return (
    <div className="container py-10 mx-auto mb-8 xl:max-w-6xl">
      <h4 className="mb-6 text-3xl font-bold text-center text-primaryGray lg:mb-10">
        Quick Actions
      </h4>
      <div className="grid grid-cols-2 px-2 ">
        <ActionItem
          Icon={BiSolidOffer}
          label="Unlock exclusive savings and promotions on your next vehicle or service."
          ariaLabel="Book Your Car "
          btnName="View  Offers"
        />
        <ActionItem
          Icon={PiSteeringWheel}
          label="Experience your dream car firsthand by scheduling a test drive."
          ariaLabel="Steering Wheel Icon"
          btnName="Book A Test Drive "
        />
        <ActionItem
          Icon={HiOutlineWrenchScrewdriver}
          label="Schedule expert maintenance and repairs for your vehicle with ease."
          ariaLabel="Wrench Icon"
          btnName="Book A Service "
        />
        <ActionItem
          Icon={MdLocalPhone}
          label="Reserve your ideal car today and start driving your dream vehicle."
          ariaLabel="Phone Icon"
          btnName="Book Your Dream Car "
        />
      </div>
    </div>
  );
};

export default QuickActions;
