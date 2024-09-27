"use client";
import React from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "./EnquiryTable";

const Arena = () => {
  const { arenaData, setArenaData } = useDataContext();
  const columnHelper = createMRTColumnHelper<any>();

  const columns = [
    columnHelper.accessor("date", {
      header: "Date",
      size: 40,
    }),
    columnHelper.accessor("time", {
      header: "Time",
      size: 120,
    }),
    columnHelper.accessor("name", {
      header: "Name",
      size: 120,
    }),
    columnHelper.accessor("phone", {
      header: "Phone Number",
      size: 120,
    }),
    columnHelper.accessor("email", {
      header: "Email",
      size: 120,
    }),
    columnHelper.accessor("model", {
      header: "Model",
      size: 120,
    }),
    columnHelper.accessor("variant", {
      header: "Variant",
      size: 120,
    }),
    columnHelper.accessor("outlet", {
      header: "Outlet",
      size: 300,
    }),
    // columnHelper.accessor("state", {
    //   header: "State",
    // }),
    // columnHelper.accessor("country", {
    //   header: "Country",
    //   size: 220,
    // }),
  ];
  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      <div className="min-h-40 px-4">
        <h5 className="text-xl my-4 text-primaryBlue uppercase">
          Arena Enquiries{" "}
        </h5>
        <EnqTable
          data={arenaData}
          columns={columns}
          fileName="Arena Enquiries"
          endPoint="on-road-price"
          setState={setArenaData}
          channel="Arena"
        />
      
      </div>
    </div>
  );
};

export default Arena;
