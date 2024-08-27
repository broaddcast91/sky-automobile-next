'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaCaretRight, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Image from "next/image";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVehicle, setIsVehicle] = useState(false);
  // const { pathname } = useNavigate();
   const pathname = usePathname();

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 duration-500 hover:bg-white  ${
        scrolled && " bg-white -translate-y-9"
      }`}
    >
      <div
        onMouseEnter={() => setIsVehicle(false)}
        className={`bg-primaryRed text-white max-h-9 `}
      >
        <div className="container flex items-center justify-between h-full px-2 py-2 mx-auto xl:max-w-8xl">
          <div className="flex justify-between w-full gap-4 md:justify-start md:max-w-1/2">
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt />
              <a href="tel:+919951699516" target="_blank" rel="noreferrer">
                +91 9951699516
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IoMailSharp />
              <a
                href="mailto:info@hotelinnercircle.in"
                target="_blank"
                rel="noreferrer"
                className="text-sm"
              >
                info@hotelinnercircle.in
              </a>
            </div>
          </div>
          <div className="hidden gap-4 md:flex">
            <FaFacebookF />
            <LuInstagram />
            <BsTwitterX />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div
        className={`absolute top-9 left-0 w-full hover:bg-white hover:text-black duration-200 transition-all hover:backdrop-blur-lg ${
          scrolled || isVehicle
            ? "bg-white text-black border-b-primaryRed shadow "
            : "lg:text-white bg-white lg:bg-transparent lg:hover:bg-white hover:shadow  "
        }`}
      >
        <div className="container flex items-center justify-between h-full py-2 mx-auto group">
          <div className="select-none">
            <Link onMouseEnter={() => setIsVehicle(false)} href="/">
              {/* {scrolled ? ( */}
              <Image
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/logos/new-hic-logo-2024-webp.webp"
                src="/images/logo.png"
                // src={require("../assets/logo2_sky.png")}
                alt="logo"
                width={300}
                height={300}
                className={`w-auto h-12 rounded-lg md:h-14 duration-500 mb-1   ${
                  scrolled || isVehicle
                    ? "block "
                    : " lg:hidden group-hover:block "
                }`}
              />
              <Image
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/logos/new-hic-logo-2024-webp.webp"
                src="/images/logo-white.png"
                // src={require("../assets/logo2_sky.png")}
                alt="logo"
                width={300}
                height={300}
                className={`w-auto h-12 rounded-lg md:h-14 duration-500 mb-1  ${
                  !scrolled && !isVehicle
                    ? "hidden lg:block group-hover:hidden"
                    : "hidden  "
                }`}
              />
              {/* // ) : (
              //   <Image
              //     src="/assets/images/new-hic-white-logo-2024-webp.png"
              //     alt="logo"
              //     width={100}
              //     height={100}
              //     className="  h-14 md:h-[50px] w-auto"
              //   />
              // )} */}
            </Link>
          </div>
          <nav className="hidden gap-4 text-sm uppercase lg:gap-8 font-poppins lg:flex">
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/about-us"
              className="font-medium hover:text-primaryRed"
            >
              About Us
            </Link>
            <Link
              onMouseEnter={() => setIsVehicle(true)}
              href="/vehicles"
              className={`font-medium hover:text-primaryRed ${
                isVehicle && "text-primaryRed"
              } `}
            >
              Vehicles
            </Link>
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/services"
              className="font-medium hover:text-primaryRed"
            >
              Services
            </Link>

            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/Outlets"
              className="font-medium hover:text-primaryRed"
            >
              Outlets
            </Link>

            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/contact"
              className="font-medium hover:text-primaryRed"
            >
              Contact
            </Link>
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/offers"
              className="font-medium hover:text-primaryRed"
            >
              Offers
            </Link>
          </nav>

          <div className="flex items-center gap-2 mr-1 ">
            {/* <button
              className={` md:px-6 py-2 rounded-full uppercase hover:bg-primaryRed  hover:shadow-xl md:text-sm px-4 text-xs ${
                scrolled ? "text-black hover:text-white" : "text-white"
              } font-medium `}
            >
              Offers
            </button> */}
            <button
              className={` md:px-6 py-2 rounded-full  bg-primaryRed text-white shadow-xl md:text-sm px-4 text-xs  `}
            >
              Book Now
            </button>
            <div className="lg:hidden">
              <RiMenu3Fill
                className={`text-3xl  ${
                  scrolled ? "text-primaryRed" : "text-white"
                }`}
              />
            </div>
          </div>
        </div>
        {isVehicle && (
          <div
            onMouseLeave={() => setIsVehicle(false)}
            onMouseEnter={() => setIsVehicle(true)}
            className="container hidden gap-1 p-2 pb-6 mx-auto bg-white xl:max-w-8xl group lg:flex"
          >
            <div className="flex flex-col gap-2 text-white w-60">
              {" "}
              <div className="flex items-center justify-between px-2 py-3 text-sm cursor-pointer bg-primaryRed">
                Arena <FaCaretRight />
              </div>
              <div className="flex items-center justify-between px-2 py-3 text-sm text-black cursor-pointer bg-secondaryGray3 ">
                Nexa <FaCaretRight />
              </div>
              <div className="flex items-center justify-between px-2 py-3 text-sm text-black cursor-pointer bg-secondaryGray3 ">
                TrueValue <FaCaretRight />
              </div>
            </div>
            <div className="grid w-full grid-cols-4 text-black ">
              {slideData.map((slide, index) => (
                <Link key={index} href="/arena/alto-k10-on-road-price">
                  <div className="rounded-xl hover:shadow-lg  hover:bg-primaryRed cursor-pointer w-[350px] py-8 px-2 flex flex-col gap-1   hover:text-white">
                    <div className="">
                      {" "}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        loading="lazy"
                        className="scale-x-[-1] mb-4 px-2 h-28 w-auto mx-auto "
                      />
                    </div>

                    <h5 className="text-lg font-bold text-center uppercase lg:text-xl lg:font-extrabold ">
                      {slide.title}
                    </h5>
                    <p className="text-sm text-center ">{slide.description}</p>
                    {/* <button className="px-4 py-2 mx-auto mt-4 text-sm text-white rounded-lg opacity-0 cursor-pointer group-hover:opacity-100 bg-primaryRed w-min whitespace-nowrap">
                Explore Now
              </button> */}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
