import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Celerio On Road Price",
  description: "Generated by create next app",
};
const Celerio: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={7} />
    </div>
  );
};

export default Celerio;
