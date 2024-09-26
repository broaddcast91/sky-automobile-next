"use client";
import { useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button, Select } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { mkConfig, generateCsv, download } from "export-to-csv";

import { FiRefreshCcw, FiSearch } from "react-icons/fi";
import { useDataContext } from "@/context/index2";

const EnqTable = ({ data, columns }: { data: any; columns: any }) => {
  const [rangeValue, setRangeValue] = useState("");
  const { setRefreshing, refreshing, loading } = useDataContext();

  const csvConfig = mkConfig({
    fieldSeparator: ",",
    decimalSeparator: ".",
    useKeysAsHeaders: true,
  });

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const handleRefreshData = () => {
    // window.location.reload();
    setRefreshing(!refreshing);
  };

  // const handleExportRows = (rows: MRT_Row<Person>[]) => {
  //   const rowData = rows.map((row) => row.original);
  //   const csv = generateCsv(csvConfig)(rowData);
  //   download(csvConfig)(csv);
  // };

  const table = useMaterialReactTable({
    columns,
    data,
    enableBottomToolbar: true,
    enableStickyHeader: true,
    enableStickyFooter: true,
    enablePagination: true,
    initialState: {
      density: "compact",
      pagination: {
        pageIndex: 0, // Set the default page index
        pageSize: 15, // Set the default number of rows per page
      },
    },
    // state: {
    //   showProgressBars: loading,
    // },
    // enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",

    //  enableDensityToggle: false,
    muiTableContainerProps: { sx: { minHeight: "70vh", maxHeight: "72vh" } },
    muiTableBodyCellProps: {
      sx: (theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
      }),
    },
    renderTopToolbarCustomActions: () => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          //   padding: "8px",
          flexWrap: "wrap",
          marginTop: "8px",
          marginBottom: "4px",
        }}
      >
        {/* <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          // onClick={() => alert("Not yet implemented")}
          variant="contained"
          style={{ backgroundColor: "#303a9b", color: "white" }}
        >
          Car Enquiry
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => alert("Not yet implemented")}
          variant="outlined"
          style={{ color: "#303a9b", borderColor: "#303a9b" }}
        >
          Test Drive
        </Button> */}
        <Select
          native
          // value={dateRange} // Set the value to the state variable
          // onChange={handleChangeDateRange}
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
          className="h-9 p-1    border-none foucs:outline-none"
          variant="outlined"
          style={{ color: "#303a9b", borderColor: "#303a9b" }}
        >
          {/* <option value="">All Enquiries</option> */}
          <option value="allData">All Data</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="last3Months">Last 3 Months</option>
          <option value="last6Months">Last 6 Months</option>
          <option value="last12Months">Last 12 Months</option>
          <option value="Between">Between Dates</option>
        </Select>{" "}
        {rangeValue === "Between" && (
          <form className="flex gap-2">
            <div className="relative">
              {" "}
              <input
                type="date"
                name=""
                id=""
                max={new Date().toISOString().split("T")[0]}
                required
                className="border rounded-md px-4 py-1.5"
              />
              <label className="absolute -top-2 left-1 text-xs bg-white px-1 text-gray-400">
                Start Date
              </label>
            </div>{" "}
            <div className="relative">
              {" "}
              <input
                type="date"
                name=""
                id=""
                required
                className="border rounded-md px-4 py-1.5"
              />
              <label className="absolute -top-2 left-1 text-xs bg-white px-1 text-gray-400">
                End Date
              </label>
            </div>
            <button
              type="submit"
              className="mr-10 ml-2 flex items-center gap-2 border px-4 py-1 rounded-lg bg-primaryBlue text-white"
            >
              <FiSearch /> Search
            </button>
          </form>
        )}
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleRefreshData}
          startIcon={<FiRefreshCcw />}
          variant="outlined"
          style={{ borderColor: "#303a9b", color: "#303a9b", height: "35px" }}
        >
          Refresh
        </Button>
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
          variant="contained"
          style={{ backgroundColor: "#303a9b", color: "white", height: "35px" }}
        >
          Export
        </Button>
        {/* <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button> */}
        {/* <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button> */}
      </Box>
    ),
  });

  return (
    <Box
      sx={{
        overflow: "hidden",
        boxShadow: "none", // Remove shadow from the table
        // borderTop: "1px solid #e1e3e6",
        // borderRight: "0px solid #e1e3e6",
        // borderBottom: "1px solid #e1e3e6",
        // borderLeft: "1px solid #e1e3e6",
        border: "1px solid #e1e3e6",
        borderRadius: "4px",
      }}
    >
      {loading ? (
        <div className="flex justify-center items-center h-[80vh] gap-2 ">
          {" "}
          <FiRefreshCcw className="animate-spin text-3xl text-primaryBlue"  /> <span className=" text-xl">Loading...</span> 
        </div>
      ) : (
        <MaterialReactTable  table={table} />
      )}
    </Box>
  );
};

export default EnqTable;
