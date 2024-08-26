import React from "react";

const OurChannels = () => {
  return (
    <div className="container py-10 mx-auto xl:max-w-6xl lg:pt-20">
      <h4 className="mb-6 text-3xl font-bold text-center text-primaryGray lg:mb-10">
        Our Channels
      </h4>
      <div className="grid md:grid-cols-3">
        <div className="text-3xl  text-center   h-40  text-white font-medium  lg:text-4xl bg-[url(https://www.varunmaruti.com/assets/maintemp/revolution/assets/arena-sticky-slide-desk.jpg)] bg-cover bg-center bg-secondaryGray3 lg:h-52 lg:rounded-l-xl overflow-hidden  ">
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 cursor-pointer backdrop-blur-sm hover:backdrop-blur-0">
            ARENA
          </div>
        </div>
        <div className="text-3xl  text-center   h-40  text-white font-medium  lg:text-4xl bg-[url(https://www.varunmaruti.com/assets/maintemp/revolution/assets/nexa-sticky-slide-desk.jpg)] bg-cover bg-center bg-secondaryGray3 lg:h-52  ">
          <div className="flex items-center justify-center w-full h-full font-serif tracking-wider bg-black bg-opacity-50 cursor-pointer backdrop-blur-sm hover:backdrop-blur-0">
            NEXA
          </div>
        </div>
        <div className="text-3xl  text-center   h-40  text-white font-medium  lg:text-4xl bg-[url(https://marutisuzukitruevaluecdn2.azureedge.net/assets/TRV/images/sell/rkr-img.webp)] bg-cover bg-center bg-secondaryGray3 lg:h-52 lg:rounded-r-xl overflow-hidden ">
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 cursor-pointer backdrop-blur-sm hover:backdrop-blur-0 ">
            TrueValue
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChannels;
