import VehicleDetailTemplate from "@/components/others/VehicleDetailTemplate";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Maruti Swift On Road Price In Bhubaneswar",
  description: "Generated by create next app",
};
const Swift: React.FC = () => {
  return (
    <div>
      <VehicleDetailTemplate index={1} />
    </div>
  );
};

export default Swift;
