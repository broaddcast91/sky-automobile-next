"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { useAppContext } from "@/context";

const RangeSlider: React.FC = () => {
   const { selectedState } = useAppContext();
  const slideData = [
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Invicto_final.png",
      title: "Invicto",
      description: "The League of Extraordinary",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Jimny_final.png",
      title: "Jimny",
      description: "Crafted for Purity of Function",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/ciaz.png",
      title: "Ciaz",
      description: "Created To Inspire Elegance",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/GV_final.png",
      title: "Grand Vitara",
      description: "The League of Extraordinary",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/xl6_final.png",
      title: "XL6",
      description: "Created to Inspire Indulgence.",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/fronx_final.png",
      title: "Fronx",
      description: "Created to Inspire Style and Performance.",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/baleno_final.png",
      title: "Baleno",
      description: "Created to Inspire The Bold and Intelligent",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/ignis_final.png",
      title: "Ignis",
      description: "Created to Inspire The Toughness in You.",
    },
  ];

  const navigationPrevRef = useRef<HTMLDivElement | null>(null);
  const navigationNextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="pl-2 overflow-visible select-none">
      <Swiper
      
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Ensure that the navigation parameters are properly set and defined
          if (
            typeof swiper.params.navigation !== "boolean" &&
            swiper.params.navigation
          ) {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        modules={[ Navigation, Autoplay]}
        className="relative mx-4 overflow-visible mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="mt-4">
            <Link href="/arena/alto-k10-on-road-price">
              <div
                className={`rounded-xl hover:shadow-lg  cursor-pointer w-[400px] py-10 px-2 flex flex-col gap-1 group ${
                  selectedState === "Odisha"
                    ? "hover:bg-primaryBlue"
                    : "hover:bg-primaryRed"
                }
 `}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="scale-x-[-1] mb-4 px-2 lg:px-0"
                />
                <h5 className="text-xl font-bold text-center uppercase group-hover:text-white lg:text-2xl lg:font-extrabold">
                  {slide.title}
                </h5>
                <p className="text-center group-hover:text-secondaryGray3">
                  {slide.description}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <div className="flex justify-center gap-4 my-6">
          <div
            ref={navigationPrevRef}
            className={`flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer hover:text-white  border-secondaryGray2  ${
              selectedState === "Odisha"
                ? "hover:border-primaryBlue hover:bg-primaryBlue"
                : "hover:border-primaryRed hover:bg-primaryRed"
            }`}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            ref={navigationNextRef}
            className={`flex items-center justify-center w-10 h-10 text-xl font-bold border-2 rounded-full cursor-pointer hover:text-white  border-secondaryGray2 ${
              selectedState === "Odisha"
                ? "hover:border-primaryBlue hover:bg-primaryBlue"
                : "hover:border-primaryRed hover:bg-primaryRed"
            }`}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default RangeSlider;
