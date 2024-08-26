import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";

import { FaFacebookF, FaLinkedin } from "react-icons/fa6";

import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-primaryGray ">
      <footer className="container px-2 py-10 mx-auto  xl:max-w-7xl lg:py-16">
        <div className="max-w-screen-xl px-4 pt-10 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img
                src="/images/logo-white.png"
                className=" h-14 mx-auto md:mx-0 md:-ml-4 "
                alt="logo"
              />
              <p className="md:max-w-xs mt-4 text-sm text-secondaryGray4 text-center md:text-left ">
                Sky Automobiles India Pvt. Ltd. is an Indian automobile dealer
                company.
              </p>
              

              <div className="flex justify-center gap-4 mt-8 text-white md:justify-start">
                <FaFacebookF className="cursor-pointer hover:text-primaryRed" />
                <LuInstagram className="cursor-pointer hover:text-primaryRed" />
                <BsTwitterX className="cursor-pointer hover:text-primaryRed" />
                <FaLinkedin className="cursor-pointer hover:text-primaryRed" />
              </div>
            </div>
            <div className="grid  gap-8 lg:col-span-2 grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-primaryRed">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-secondaryGray4 ">
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    About{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Meet the Team{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    History{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Careers{" "}
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-primaryRed">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-secondaryGray4 ">
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    1on1 Coaching{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Company Review{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Accounts Review{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    HR Consulting{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    SEO Optimisation{" "}
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-primaryRed">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-secondaryGray4 ">
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Contact{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    FAQs{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Live Chat{" "}
                  </Link>
                </nav>
              </div>
              <div>
                <p className="font-medium text-primaryRed">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-secondaryGray4 hover:text-primaryRed">
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Terms &amp; Conditions{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Returns Policy{" "}
                  </Link>
                  <Link className="hover:opacity-75 hover:text-primaryRed" href='/'>
                    {" "}
                    Accessibility{" "}
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between pt-4 mt-8 border-t border-secondaryGray2 md:flex-row text-secondaryGray3 lg:pt-4">
            {" "}
            <p className="text-xs ">© 2024 Sky Automobiles All Rights Reserved.</p>
            <div className="flex items-center gap-2 text-xs lg:gap-4">
              Powered by
              <a
                href="https://www.broaddcast.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <img
                  src="https://www.broaddcast.com/assets/images/logo-white.svg"
                  alt=""
                  className="h-8 -ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
