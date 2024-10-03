import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="md:pt-20 min-h-40 bg-primaryGray pt-16">
        <div className="h-full min-h-[40vh] flex justify-center items-center text-gray-400 text-3xl">
          Required Banner Image
        </div>
      </div>
      <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2"></div>
      <Footer/>
    </div>
  );
};

export default page;
