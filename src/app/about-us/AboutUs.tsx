"use client";
import { useAppContext } from "@/context";
import React from "react";

const AboutUs = () => {
  const { selectedState } = useAppContext();

  return (
    <div>
      <div className="md:pt-20 min-h-40 bg-primaryGray pt-16">
        {/* <img
          src="/images/other/varun-motors-aboutus-banner.jpg"
          alt=""
          className="w-full object-cover max-h-[50vh] -mt-1"
        /> */}
        <div className="h-full min-h-[40vh] flex justify-center items-center text-gray-400 text-3xl ">
          Required Banner Image
        </div>
      </div>
      <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
        <div className="mb-12 lg:mb-20 text-lg ">
          <h4 className="text-3xl font-bold text-primaryGray mb-3 md:mb-6 ">
            About{" "}
            <span
              className={` ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Us{" "}
            </span>
          </h4>
          <p>
            <span
              className={`  font-medium ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Sky Automobiles
            </span>{" "}
            is a leading Maruti Suzuki dealership offering a full spectrum of
            automotive services, catering to various customer needs with a focus
            on quality and reliability. With a strong foothold in the automotive
            market, Sky Automobiles combines innovation and tradition to deliver
            exceptional vehicles and services. The dealership operates in
            various channels of Maruti Suzuki namely ARENA, NEXA, and True
            Value. The ARENA channel provides a wide range of affordable and
            dependable cars, designed to meet the diverse needs of everyday
            drivers. Whether you&apos;re looking for functionality or style at
            an affordable price, ARENA has something for everyone.
          </p>
          <br />

          <p>
            NEXA is the premium arm of{" "}
            <span
              className={`  font-medium ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Sky Automobiles
            </span>
            , offering a selection of high-end vehicles that blend luxury,
            advanced technology, and superior performance. This channel caters
            to customers who seek a more sophisticated driving experience, with
            cars that stand out for their elegance and innovation. True Value
            focuses on certified pre-owned vehicles, ensuring that customers can
            purchase used cars with confidence. Each vehicle undergoes a
            rigorous certification process, guaranteeing reliability and value
            for money.
          </p>
          <br />

          <p>
            In addition to vehicle sales,{" "}
            <span
              className={`  font-medium ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Sky Automobiles
            </span>{" "}
            provides a range of after-sales services, including workshops, body
            shops, and insurance renewals. These services are designed to offer
            comprehensive support, ensuring that every aspect of vehicle
            ownership is hassle-free and satisfying. With its commitment to
            customer satisfaction and a diverse range of products and services,
            Sky Automobiles has become a trusted name in the industry. Whether
            you&apos;re in the market for a new or used car, or require
            dependable maintenance and support, Sky Automobiles is your go-to
            destination for all automotive needs.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
