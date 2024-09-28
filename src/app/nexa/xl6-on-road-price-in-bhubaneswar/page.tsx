import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti XL6 On Road Price In Bhubaneswar",
  description: "Generated by create next app",
}; 
const XL6 : React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={13} />
    </div>
  );
};

export default XL6 ;
