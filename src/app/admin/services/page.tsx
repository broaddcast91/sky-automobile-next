"use client";
import React from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "../arena/EnquiryTable";

const Services = () => {
  const { bookAServiceData, financeData, insuranceData } = useDataContext();
  const [selectedTable, setSelectedTable] = React.useState("Service");

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
    columnHelper.accessor("isPickup", {
      header: "Pickup",
      size: 120,
    }),
    columnHelper.accessor("serviceDate", {
      header: "Service Date",
      size: 120,
    }),
    columnHelper.accessor("serviceType", {
      header: "Service Type",
      size: 120,
    }),
    columnHelper.accessor("address", {
      header: "Address",
      size: 200,
    }),
    columnHelper.accessor("city", {
      header: "City",
      size: 120,
    }),
    columnHelper.accessor("state", {
      header: "state",
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

  // finance
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
    columnHelper.accessor("model", {
      header: "Model",
      size: 120,
    }),

    columnHelper.accessor("loanAmount", {
      header: "Loan Amount",
      size: 120,
    }),
    columnHelper.accessor("loanTenure", {
      header: "Loan Tenure",
      size: 120,
    }),

    columnHelper.accessor("city", {
      header: "City",
      size: 120,
    }),
    columnHelper.accessor("state", {
      header: "state",
      size: 120,
    }),
  ];

  // insurance
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

    columnHelper.accessor("address", {
      header: "Address",
      size: 200,
    }),
    columnHelper.accessor("city", {
      header: "City",
      size: 120,
    }),
    columnHelper.accessor("state", {
      header: "state",
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

  return (
    <div className="bg-white min-h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      <div className="min-h-40 px-4">
        <div className="flex gap-4 flex-wrap items-center">
          {" "}
          <h5 className="text-xl my-4 text-primaryBlue uppercase">
            {selectedTable} Enquiries{" "}
          </h5>
          <button
            onClick={() => setSelectedTable("Service")}
            className={`  px-4 py-1.5 rounded text-sm ${
              selectedTable === "Service"
                ? "bg-primaryBlue text-white"
                : "border border-primaryBlue"
            }`}
          >
            Book A Service
          </button>{" "}
          <button
            onClick={() => setSelectedTable("Finance")}
            className={`  px-4 py-1.5 rounded text-sm ${
              selectedTable === "Finance"
                ? "bg-primaryBlue text-white"
                : "border border-primaryBlue"
            }`}
          >
            Finance
          </button>
          <button
            onClick={() => setSelectedTable("Insurance")}
            className={`  px-4 py-1.5 rounded text-sm ${
              selectedTable === "Insurance"
                ? "bg-primaryBlue text-white"
                : "border border-primaryBlue"
            }`}
          >
            Insurance
          </button>
        </div>

        <EnqTable
          data={
            selectedTable === "Service"
              ? bookAServiceData
              : selectedTable === "Finance"
              ? financeData
              : insuranceData
          }
          columns={
            selectedTable === "Service"
              ? columns
              : selectedTable === "Finance"
              ? columns2
              : columns3
          }
        />
      </div>
    </div>
  );
};

export default Services;
