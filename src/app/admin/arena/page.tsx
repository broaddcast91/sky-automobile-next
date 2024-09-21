
import React from "react";
import ArenaEnq from "./EnquiryTable";

const Arena = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      <div className="min-h-40 px-4">
        <h5 className="text-xl my-4 text-primaryBlue uppercase">
          Arena Enquiries{" "}
        </h5>
        <ArenaEnq />
      </div>
    </div>
  );
};

export default Arena;
