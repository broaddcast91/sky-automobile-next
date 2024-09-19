
import React from "react";

import ArenaEnq from "./EnquiryTable";

const Arena = () => {
  // const [selectedTab, setSelectedTab] = useState("Car Enquiry");

  // return (
  //   <div className="p-2 ">
  //     <div className="flex gap-2 mb-8">
  //       <button
  //         onClick={() => setSelectedTab("Car Enquiry")}
  //         className={`hover:bg-primaryBlue hover:text-white px-4 py-2 rounded-lg border text-sm ${
  //           selectedTab === "Car Enquiry" ? "bg-primaryBlue text-white" : ""
  //         }`}
  //       >
  //         Car Enquiry
  //       </button>
  //       <button
  //         onClick={() => setSelectedTab("Book A Service")}
  //         className={`hover:bg-primaryBlue hover:text-white px-4 py-2 rounded-lg border text-sm ${
  //           selectedTab === "Book A Service" ? "bg-primaryBlue text-white" : ""
  //         }`}
  //       >
  //         Book A Service
  //       </button>
  //       <button
  //         onClick={() => setSelectedTab("Test Drive")}
  //         className={`hover:bg-primaryBlue hover:text-white px-4 py-2 rounded-lg border text-sm ${
  //           selectedTab === "Test Drive" ? "bg-primaryBlue text-white" : ""
  //         }`}
  //       >
  //         Test Drive
  //       </button>
  //     </div>

  //     <div className="text-xl uppercase">{selectedTab}</div>
  //   </div>
  // );
  return (
    <div className="bg-white h-[calc(100vh-25px)] p-2  rounded-lg mr-2 mt-1">
      {/* <div className="bg-primaryBlue h-14 mb-2 rounded-lg flex items-center px-4 text-white">
           <h5 className="text-xl mb-2">Arena Enquiries </h5>
      </div> */}
      {/* <div className="py-4 px-4 border-b ">
        <h5 className="text-xl mb-2">Arena Enquiries </h5>
      
        <div className="flex items-center gap-2 justify-between">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded px-2 py-1 w-1/5 focus:border-primaryBlue border outline-none "
          />
          <div>
            <button
              className={`hover:bg-primaryBlue hover:text-white px-4 py-1.5 rounded-lg border text-sm flex  items-center gap-2 `}
            >
              Download <FaCloudDownloadAlt className="text-xl" />
            </button>
          </div>
        </div>
      </div> */}
      <div className="h-40 px-4">
        <h5 className="text-xl my-4 text-primaryBlue uppercase">Arena Enquiries </h5>
        <ArenaEnq />
      </div>
    </div>
  );
};

export default Arena;
