import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center  text-center h-screen justify-center ">
      {/* <video
          src={require("../../assets/home/pagenotfound.mp4")}
          autoPlay
          loop
          muted
          className="object-cover w-64 h-64 lg:h-96 lg:w-96"
        ></video> */}
      {/* <h1 className="font-extrabold text-9xl">404</h1> */}
      <p className="mt-4 mb-6 text-3xl text-primary">Not Found</p>
      <p className="mb-4 text-gray-500 lg:mb-6">
        The resource requested could not be found on this server!
      </p>
      <div className="flex items-center justify-center px-4 py-2.5 text-sm text-white bg-primaryGray rounded-full md:px-8  lg:px-12 hover:bg-primaryRed hover:text-white hover:shadow-lg duration-200 gap-4 ">
        <FaLongArrowAltRight />
        <Link href="/" className="">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
