"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { FaCaretRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAppContext } from "@/context";
import { models } from "@/constants";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVehicle, setIsVehicle] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const { selectedState, setOpenSelectState } = useAppContext();
  // const { pathname } = useNavigate();
  const pathname = usePathname();

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
        className={` text-white max-h-9 ${
          selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
        } `}
      >
        <div className="container flex items-center justify-between h-full px-2 py-2 mx-auto xl:max-w-8xl">
          <div className="flex justify-between w-full gap-4 md:justify-start md:max-w-1/2">
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt />
              <a href="tel:+91123456789" target="_blank" rel="noreferrer">
                +91 123456789
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IoMailSharp />
              <a
                href="mailto: xxxxxx@xxxx.xx"
                target="_blank"
                rel="noreferrer"
                className="text-sm"
              >
                xxxxxx@xxxx.xx
              </a>
            </div>
          </div>
          <div className="hidden gap-4 md:flex">
            <a
              href="https://www.facebook.com/profile.php?id=100057528455659"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/sky.automobiles/">
              {" "}
              <LuInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/skyautomobiles/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-9 left-0 w-full hover:bg-white hover:text-black duration-200 transition-all hover:backdrop-blur-lg ${
          scrolled || isVehicle
            ? `bg-white text-black  shadow ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              } `
            : "lg:text-white bg-white lg:bg-transparent lg:hover:bg-white hover:shadow  "
        }`}
      >
        <div className="container flex items-center justify-between h-full py-2 mx-auto group">
          <div className="select-none">
            <Link onMouseEnter={() => setIsVehicle(false)} href="/">
              {/* {scrolled ? ( */}
              <Image
                  src="/images/other/logo.png"
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
                   src="/images/other/logo-white.png"
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
            </Link>
          </div>
          <nav className="hidden gap-4 text-sm uppercase lg:gap-6 xl:gap-8 font-poppins lg:flex">
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/about-us"
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              About Us
            </Link>
            <div
              onMouseEnter={() => setIsVehicle(true)}
              // href="/"
              className={`font-medium  flex gap-1 items-center cursor-default ${
                isVehicle && selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : isVehicle
                  ? "text-primaryRed"
                  : ""
              } `}
            >
              Vehicles <FaCaretRight className="rotate-90" />
            </div>
            <div className="relative group ">
              <div
                onMouseEnter={() => setIsVehicle(false)}
                // href="/outlets"
                className={`font-medium  peer  cursor-default flex  items-center gap-1 ${
                  selectedState === "Odisha"
                    ? "hover:text-primaryBlue"
                    : "hover:text-primaryRed"
                }`}
              >
                Services <FaCaretRight className="rotate-90" />
              </div>
              <div className=" absolute top-4 -left-1/3 w-40  hidden  peer-hover:block hover:block  delay-300 pt-8 ">
                <Link
                  href="/services/book-a-service"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white  ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  }`}
                >
                  Book A Service <FaCaretRight />
                </Link>
                <Link
                  href="/services/finance"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white  ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  }`}
                >
                  Finance <FaCaretRight />
                </Link>
                <Link
                  href="/services/insurance"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white  ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  }`}
                >
                  Insurance <FaCaretRight />
                </Link>
              </div>
            </div>

            <div className="relative  ">
              <div
                onMouseEnter={() => setIsVehicle(false)}
                // href="/outlets"
                className={`font-medium  peer  cursor-default flex  items-center gap-1 ${
                  selectedState === "Odisha"
                    ? "hover:text-primaryBlue"
                    : "hover:text-primaryRed"
                }`}
              >
                Outlets <FaCaretRight className="rotate-90" />
              </div>
              <div className=" absolute top-4 -left-1/3 w-40  hidden  peer-hover:block hover:block  delay-300 pt-8 ">
                <Link
                  href="/outlets/odisa-outlets"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white  ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  }`}
                >
                  Odisa <FaCaretRight />
                </Link>
                <Link
                  href="/outlets/chhattisgarh-outlets"
                  className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white  ${
                    selectedState === "Odisha"
                      ? " hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  }`}
                >
                  Chhattisgarh <FaCaretRight />
                </Link>
              </div>
            </div>
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/contact-us"
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              Contact Us
            </Link>
            {/* <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/blogs"
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              Blogs
            </Link> */}

            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/career"
              className={`font-medium  ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
            >
              Career
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
            <Link
              href="/offers"
              className={` md:px-6 py-2 rounded-full uppercase   text-white shadow-xl md:text-sm px-4 text-xs ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }  `}
            >
              Offers
            </Link>
            <button
              type="button"
              aria-label="Select State"
              className={`flex items-center gap-1  px-2.5 py-1.5 border rounded-full border-transparent hover:border-gray-200 hover:shadow-sm ${
                selectedState === "Odisha"
                  ? "hover:text-primaryBlue"
                  : "hover:text-primaryRed"
              }`}
              onClick={() => setOpenSelectState(true)}
            >
              <FaMapMarkerAlt className="" />
              {selectedState && (
                <p className={`  text-sm `}>
                  {selectedState === "Odisha" ? "OD" : "CG"}
                </p>
              )}
              <FaCaretRight className="rotate-90" />
            </button>{" "}
            <div className="lg:hidden">
              <RiMenu3Fill
                className={`text-3xl  ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                }  `}
              />
            </div>
          </div>
        </div>
        {isVehicle && (
          <div
            onMouseLeave={() => setIsVehicle(false)}
            onMouseEnter={() => setIsVehicle(true)}
            className="container hidden lg:gap-2 p-2 pb-6 mx-auto bg-white xl:max-w-8xl group xl:flex overflow-x-hidden lg:block xl:overflow-visible  "
          >
            <div className="flex xl:flex-col gap-2 text-white xl:w-60 justify-center xl:justify-start mb-2">
              {" "}
              <div
                onClick={() => setSelectedTab(0)}
                className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28  ${
                  selectedTab === 0 && selectedState === "Odisha"
                    ? "text-white bg-primaryBlue"
                    : selectedTab === 0
                    ? "text-white bg-primaryRed"
                    : "text-black bg-secondaryGray3"
                }`}
              >
                Arena <FaCaretRight />
              </div>{" "}
              <div
                onClick={() => setSelectedTab(1)}
                className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28  ${
                  selectedTab === 1 && selectedState === "Odisha"
                    ? "text-white bg-primaryBlue"
                    : selectedTab === 1
                    ? "text-white bg-primaryRed"
                    : "text-black bg-secondaryGray3"
                }`}
              >
                Nexa <FaCaretRight />
              </div>
              <div
                onClick={() => setSelectedTab(2)}
                className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28  ${
                  selectedTab === 2 && selectedState === "Odisha"
                    ? "text-white bg-primaryBlue"
                    : selectedTab === 2
                    ? "text-white bg-primaryRed"
                    : "text-black bg-secondaryGray3"
                }`}
              >
                TrueValue <FaCaretRight />
              </div>
            </div>
            <div
              className={`grid w-full grid-cols-4 text-black  max-h-[70vh] xl:overflow-hidden ${
                selectedTab === 0 ? "xl:grid-cols-5" : "xl:grid-cols-4"
              } `}
            >
              {selectedTab === 0 &&
                models.slice(0, 9).map((slide, index) => (
                  <Link
                    onClick={() => setIsVehicle(false)}
                    key={index}
                    href={slide.link}
                  >
                    <div
                      className={`rounded-xl hover:shadow-lg   cursor-pointer w-[250px] py-8 px-2 flex flex-col gap-1 ${
                        selectedState === "Odisha"
                          ? "hover:bg-primaryBlue"
                          : "hover:bg-primaryRed"
                      }  hover:text-white`}
                    >
                      <img
                        src={slide.thumbnail}
                        alt={slide.subName}
                        loading="lazy"
                        className=" mb-4  h-32 w-auto mx-auto  "
                      />

                      <h5 className="text-lg font-bold text-center uppercase lg:text-xl lg:font-extrabold ">
                        {slide.subName}
                      </h5>
                    </div>
                  </Link>
                ))}
              {selectedTab === 1 &&
                models.slice(9).map((slide, index) => (
                  <Link
                    onClick={() => setIsVehicle(false)}
                    key={index}
                    href={slide.link}
                  >
                    <div
                      className={`rounded-xl hover:shadow-lg  ${
                        selectedState === "Odisha"
                          ? "hover:bg-primaryBlue"
                          : "hover:bg-primaryRed"
                      } cursor-pointer w-[300px] py-8 px-2 flex flex-col gap-1   hover:text-white`}
                    >
                      <div className="">
                        {" "}
                        <img
                          src={slide.thumbnail}
                          alt={slide.subName}
                          loading="lazy"
                          className=" mb-4 px-2 h-36 w-auto mx-auto "
                        />
                      </div>

                      <h5 className="text-lg font-bold text-center uppercase lg:text-xl lg:font-extrabold ">
                        {slide.subName}
                      </h5>
                      {/* <p className="text-sm text-center ">
                        {slide.description}
                      </p> */}
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
