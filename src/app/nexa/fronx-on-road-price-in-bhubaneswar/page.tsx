import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Fronx On Road Price In Bhubaneswar",
  description: "Generated by create next app",
};
const Fronx: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={11} />
    </div>
  );
};

export default Fronx;
