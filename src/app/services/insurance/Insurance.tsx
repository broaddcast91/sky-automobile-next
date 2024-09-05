import Header from '@/components/others/Header';
import React from 'react'

const Insurance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 min-h-40 bg-primaryGray">
        {/* <img
            src="/images/other/sky-automobile-outlet-banner.jpg"
            alt=""
            className="object-cover w-full h-full -mt-1 max-h-[50vh]"
          /> */}{" "}
        <div className="h-full min-h-[40vh] flex justify-center items-center text-white text-3xl ">
          Required Banner Image
        </div>
      </div>
      Insurance
    </div>
  );
}

export default Insurance