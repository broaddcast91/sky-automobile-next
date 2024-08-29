"use client";
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
  const [selectedTab, setSelectedTab] = useState(0);
  // const { pathname } = useNavigate();
  const pathname = usePathname();

  const nexaData = [
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Invicto_final.png",
      title: "Invicto",
      description: "The League of Extraordinary",
      to: "/nexa/invicto-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Jimny_final.png",
      title: "Jimny",
      description: "Crafted for Purity of Function",
      to: "/nexa/jimny-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/ciaz.png",
      title: "Ciaz",
      description: "Created To Inspire Elegance",
      to: "/nexa/ciaz-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/GV_final.png",
      title: "Grand Vitara",
      description: "The League of Extraordinary",
      to: "/nexa/grand-vitara-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/xl6_final.png",
      title: "XL6",
      description: "Created to Inspire Indulgence.",
      to: "/nexa/xl6-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/fronx_final.png",
      title: "Fronx",
      description: "Created to Inspire Style and Performance.",
      to: "/nexa/fronx-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/baleno_final.png",
      title: "Baleno",
      description: "Created to Inspire The Bold and Intelligent",
      to: "/nexa/baleno-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/ignis_final.png",
      title: "Ignis",
      description: "Created to Inspire The Toughness in You.",
      to: "/nexa/ignis-on-road-price",
    },
  ];

  const arenaData = [
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/Swift+Tile+Image.webp",
      title: "Swift",
      description: "",
      to: "/arena/swift-on-road-price",
    },

    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp",
      title: "Alto K10",
      description: "",
      to: "/arena/alto-k10-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-brezza.webp",
      title: "Brezza",
      description: "",
      to: "/arena/brezza-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp",
      title: "Dzire",
      description: "",
      to: "/arena/dzire-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp",
      title: "Spresso",
      description: "",
      to: "/arena/spresso-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp",
      title: "WangnoR",
      description: "",
      to: "/arena/wagonr-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-ertiga.webp",
      title: "Ertiga",
      description: "",
      to: "/arena/ertiga-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp",
      title: "Celerio",
      description: "",
      to: "/arena/celerio-on-road-price",
    },
    {
      image:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-eeco.webp",
      title: "Ecco",
      description: "",
      to: "/arena/eeco-on-road-price",
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
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/innercircle/logos/new-hic-logo-2024-webp.webp"
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
          <nav className="hidden gap-4 text-sm uppercase lg:gap-8 font-poppins lg:flex">
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/about-us"
              className="font-medium hover:text-primaryRed"
            >
              About Us
            </Link>
            <div
              onMouseEnter={() => setIsVehicle(true)}
              // href="/"
              className={`font-medium hover:text-primaryRed flex gap-1 items-center cursor-default ${
                isVehicle && "text-primaryRed"
              } `}
            >
              Vehicles <FaCaretRight className="rotate-90" />
            </div>
            <div className="relative group ">
              <div
                onMouseEnter={() => setIsVehicle(false)}
                // href="/outlets"
                className="font-medium hover:text-primaryRed peer  cursor-default flex  items-center gap-1"
              >
                Services <FaCaretRight className="rotate-90" />
              </div>
              <div className=" absolute top-4 -left-1/3 w-40  hidden  peer-hover:block hover:block  delay-300 pt-8 ">
                <Link
                  href="/services"
                  className="flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white hover:bg-primaryRed"
                >
                  Book A Service <FaCaretRight />
                </Link>
                <Link
                  href="/finance"
                  className="flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white hover:bg-primaryRed"
                >
                  Insurance <FaCaretRight />
                </Link>
                <Link
                  href="/insurance"
                  className="flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray2 text-white hover:bg-primaryRed"
                >
                  Finance <FaCaretRight />
                </Link>
              </div>
            </div>

            <div className="relative  ">
              <div
                onMouseEnter={() => setIsVehicle(false)}
                // href="/outlets"
                className="font-medium hover:text-primaryRed peer  cursor-default flex  items-center gap-1"
              >
                Outlets <FaCaretRight className="rotate-90" />
              </div>
              <div className=" absolute top-4 -left-1/3 w-40  hidden  peer-hover:block hover:block  delay-300 pt-8 ">
                <Link
                  href="/odisa-outlets"
                  className="flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray4 text-black hover:bg-primaryRed hover:text-white border-y shadow-lg"
                >
                  Odisa <FaCaretRight />
                </Link>
                <Link
                  href="/odisa-outlets"
                  className="flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28 bg-secondaryGray4 text-black hover:bg-primaryRed hover:text-white shadow-lg"
                >
                  Chhattisgarh <FaCaretRight />
                </Link>
              </div>
            </div>
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/contact"
              className="font-medium hover:text-primaryRed"
            >
              Contact
            </Link>
            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/blogs"
              className="font-medium hover:text-primaryRed"
            >
              Blogs
            </Link>

            <Link
              onMouseEnter={() => setIsVehicle(false)}
              href="/career"
              className="font-medium hover:text-primaryRed"
            >
              Carreer
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
              Offers
            </button>
            <div className="lg:hidden">
              <RiMenu3Fill className={`text-3xl text-primaryRed  `} />
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
                  selectedTab === 0
                    ? "text-white bg-primaryRed"
                    : "text-black bg-secondaryGray3"
                }`}
              >
                Arena <FaCaretRight />
              </div>{" "}
              <div
                onClick={() => setSelectedTab(1)}
                className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28  ${
                  selectedTab === 1
                    ? "text-white bg-primaryRed"
                    : "text-black bg-secondaryGray3"
                }`}
              >
                Nexa <FaCaretRight />
              </div>
              <div
                onClick={() => setSelectedTab(2)}
                className={`flex items-center justify-between px-2 py-3 text-sm cursor-pointer min-w-28  ${
                  selectedTab === 2
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
                arenaData.map((slide, index) => (
                  <Link key={index} href={slide.to}>
                    <div className="rounded-xl hover:shadow-lg  hover:bg-primaryRed cursor-pointer w-[300px] py-8 px-2 flex flex-col gap-1   hover:text-white ">
                      <div className="">
                        {" "}
                        <img
                          src={slide.image}
                          alt={slide.title}
                          loading="lazy"
                          className="scale-x-[-1] mb-4 px-2 h-32 w-auto mx-auto "
                        />
                      </div>

                      <h5 className="text-lg font-bold text-center uppercase lg:text-xl lg:font-extrabold ">
                        {slide.title}
                      </h5>
                     
                    </div>
                  </Link>
                ))}
              {selectedTab === 1 &&
                nexaData.map((slide, index) => (
                  <Link key={index} href={slide.to}>
                    <div className="rounded-xl hover:shadow-lg  hover:bg-primaryRed cursor-pointer w-[300px] py-8 px-2 flex flex-col gap-1   hover:text-white ">
                      <div className="">
                        {" "}
                        <img
                          src={slide.image}
                          alt={slide.title}
                          loading="lazy"
                          className="scale-x-[-1] mb-4 px-2 h-24 w-auto mx-auto "
                        />
                      </div>

                      <h5 className="text-lg font-bold text-center uppercase lg:text-xl lg:font-extrabold ">
                        {slide.title}
                      </h5>
                      <p className="text-sm text-center ">
                        {slide.description}
                      </p>
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
