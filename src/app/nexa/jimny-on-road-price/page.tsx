import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Jimny On Road Price",
  description: "Generated by create next app",
};
const Jimny: React.FC = () => {
  return (
    <div> 
      <VehicleDetailTemplate index={10} />
    </div>
  );
};

export default Jimny;
