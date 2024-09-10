import Link from "next/link";
import React from "react";

const ModalSidePannel = () => {
  return (
    <div className="fixed top-[104px] right-0 w-full h-full bg-white z-50 min-h-[calc(100vh-50px)] hidden max-w-md p-4 ">
      <div>
        <input
          type="search"
          name=""
          id=""
          className="border-2  w-full h-9 rounded-lg mb-4"
        />
        <div className="flex flex-col gap-2 text-primaryBlue font-bold text-lg">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Vehicles</Link>
            <Link href={"/"}>Service </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalSidePannel;
