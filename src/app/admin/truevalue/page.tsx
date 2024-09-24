"use client";
import React from "react";

import { useDataContext } from "@/context/index2";
import { createMRTColumnHelper } from "material-react-table";
import EnqTable from "../arena/EnquiryTable";

const TrueValue = () => {
  const { buyACarData, sellACarData } = useDataContext();
  const [showSell, setShowSell] = React.useState(false);

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
    columnHelper.accessor("carNumber", {
      header: "Car Number",
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
    columnHelper.accessor("carModel", {
      header: "Model",
      size: 120,
    }),
    columnHelper.accessor("carVariant", {
      header: "car Variant",
      size: 120,
    }),
    columnHelper.accessor("makeYear", {
      header: "Make Year",
      size: 120,
    }),
    columnHelper.accessor("fuelType", {
      header: "Fuel",
      size: 120,
    }),
    columnHelper.accessor("ownerShip", {
      header: "Ownership",
      size: 120,
    }),

    columnHelper.accessor("kilometerDriven", {
      header: "KM Driven",
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
            Truevalue Enquiries 
          </h5>
          <button
            onClick={() => setShowSell(false)}
            className={`  px-4 py-1.5 rounded-lg ${
              showSell ? "bg-secondaryGray3" : "bg-primaryBlue text-white"
            }`}
          >
            Buy A Car
          </button>{" "}
          <button
            onClick={() => setShowSell(true)}
            className={`  px-4 py-1.5 rounded-lg ${
              !showSell ? "bg-secondaryGray3" : "bg-primaryBlue text-white"
            }`}
          >
            Sell A Car
          </button>
        </div>

        <EnqTable
          data={showSell ? sellACarData : buyACarData}
          columns={showSell ? columns2 : columns}
        />
      </div>
    </div>
  );
};

export default TrueValue;
