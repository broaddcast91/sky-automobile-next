"use client";
import React from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "../arena/EnquiryTable";

const Others = () => {
  const { contactUsData, careerData, testDriveData } = useDataContext();
  const [selectedTable, setSelectedTable] = React.useState("Test Drive");
  const columnHelper = createMRTColumnHelper<any>();

  // Contact
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
    columnHelper.accessor("subject", {
      header: "Subject",
      size: 200,
    }),
    columnHelper.accessor("message", {
      header: "Message",
      size: 300,
    }),
    columnHelper.accessor("state", {
      header: "State",
      size: 120,
    }),
    // columnHelper.accessor("state", {
    //   header: "State",
    // }),
    // columnHelper.accessor("country", {
    //   header: "Country",
    //   size: 220,
    // }),
  ];
  // Career
  const columns2 = [
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
    columnHelper.accessor("designation", {
      header: "designation",
      size: 120,
    }),
    columnHelper.accessor("experience", {
      header: "Experience",
      size: 120,
    }),
    columnHelper.accessor("state", {
      header: "State",
      size: 120,
    }),
    // columnHelper.accessor("state", {
    //   header: "State",
    // }),
    // columnHelper.accessor("country", {
    //   header: "Country",
    //   size: 220,
    // }),
  ];
  //Test Drive
  const columns3 = [
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
    columnHelper.accessor("channel", {
      header: "Channel",
    }),
    columnHelper.accessor("outlet", {
      header: "Outlet",
      size: 300,
    }),
    columnHelper.accessor("state", {
      header: "State",
    }),

    // columnHelper.accessor("country", {
    //   header: "Country",
    //   size: 220,
    // }),
  ];
  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      <div className="min-h-40 px-4">
        <div className="flex gap-4 flex-wrap items-center justify-between">
          {" "}
          <h5 className="text-xl my-4 text-primaryBlue uppercase">
            {selectedTable} Enquiries{" "}
          </h5>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTable("Test Drive")}
              className={`  px-4 py-1.5 rounded text-sm min-w-36 ${
                selectedTable === "Test Drive"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Test Drive
            </button>{" "}
            <button
              onClick={() => setSelectedTable("Contact")}
              className={`  px-4 py-1.5 rounded text-sm min-w-36 ${
                selectedTable === "Contact"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Contact Us
            </button>{" "}
            <button
              onClick={() => setSelectedTable("Career")}
              className={`  px-4 py-1.5 rounded text-sm min-w-36 ${
                selectedTable === "Career"
                  ? "bg-primaryBlue text-white"
                  : "border border-primaryBlue"
              }`}
            >
              Career
            </button>
          </div>
        </div>
        <EnqTable
          data={
            selectedTable === "Contact"
              ? contactUsData
              : selectedTable === "Career"
              ? careerData
              : testDriveData
          }
          columns={
            selectedTable === "Contact"
              ? columns
              : selectedTable === "Career"
              ? columns2
              : columns3
          }
        />
      </div>
    </div>
  );
};

export default Others;
