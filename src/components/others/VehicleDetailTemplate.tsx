"use client";

import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import VehicleDetailsSlider from "@/components/others/VehicleDetailsSlider";
import { cgOutlets, models } from "@/constants";
import { useAppContext } from "@/context";
import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { BsFuelPump } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { PiEngine } from "react-icons/pi";

interface FormData {
  name: string;
  phone: string;
  email: string;
  outlet: string;
  variant: string;
}
interface VehiceProps {
  index: number;
}

const VehicleDetailTemplate: React.FC<VehiceProps> = ({ index }) => {
  const { selectedState } = useAppContext();

  const data = models[index];
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    outlet: "",
    variant: data?.variants[0]?.variant || "",
  });
  const [selected, setSelected] = React.useState("Exterior");

  const handleClickColor = (index: number): void => {
    setSelectedColor(index);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data:", {
      ...formData,
      state: selectedState,
      model: data.name,
    });
    let modelName = data.name;
    try {
      // Send the POST request
      const response = await fetch("/api/on-road-price", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          state: selectedState,
          model: modelName,
        }),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Handle the response based on the data
      if (data.status === true) {
        toast.success(
          "Thank you for contacting us. We will get back to you soon!"
        );
      } else {
        toast.error("Failed to send request. Please try again later.");
      }
    } catch (error) {
      toast.error("Failed to send request. Please try again later.");
      console.error("Error sending request:", error);
    }
    setFormData({
      name: "",
      phone: "",
      email: "",
      outlet: "",

      variant: data?.variants[0]?.variant || "",
    });
    const formElement = document.getElementById("myForm") as HTMLFormElement;
    if (formElement) {
      formElement.reset();
    }
  };

  const outlets = [
    "Sky Automobile Arena 01 Showroom",
    "Sky Automobile Arena 02 Showroom",
    "Sky Automobile Arena 03 Showroom",
  ];

  if (!data) return null;

  return (
    <div className="">
      <Header />
      <div className="px-1 py-28 bg-primaryGray lg:py-20 min-h-[80vh] flex flex-col justify-center">
        <div className="container grid items-center mx-auto text-white md:grid-cols-2 xl:max-w-7xl">
          <div>
            <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
              {data?.name}
            </h1>
            <p>Ex-Showroom Price</p>
            <h3 className="mb-6 text-2xl font-medium">{data?.priceRange}</h3>
            <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-3 lg:gap-0">
              {data?.carDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4">
                  {index === 0 ? (
                    <div>
                      <GiSpeedometer className="text-4xl" />
                    </div>
                  ) : index === 1 ? (
                    <div>
                      <BsFuelPump className="text-4xl" />
                    </div>
                  ) : (
                    <div>
                      <PiEngine className="text-4xl" />
                    </div>
                  )}
                  {/* {detail.icon} */}
                  <div>
                    <span className="font-semibold">{detail.label}</span>
                    <br />
                    <span>{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-6 lg:gap-4">
              <a
                href={data?.brochure}
                target="_blank"
                aria-label="View Brochure"
                rel="noopener noreferrer"
              >
                <button
                  aria-label="View Brochure"
                  className={`px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg   ${
                    selectedState === "Odisha"
                      ? "hover:bg-primaryBlue"
                      : "hover:bg-primaryRed "
                  }`}
                >
                  View Brochure
                </button>
              </a>
              {["Get On Road Price", "Book Test Drive"].map((text, index) => (
                <button
                  key={index}
                  aria-label={text}
                  className={`px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg   ${
                    selectedState === "Odisha"
                      ? "hover:bg-primaryBlue"
                      : "hover:bg-primaryRed "
                  }`}
                >
                  {text}
                </button>
              ))}
            </div>
            <p className="mb-4 text-sm">
              Our professional and well-trained staff is ready to assist you.
            </p>
          </div>
          <div>
            <img
              src={data?.colors[selectedColor].img}
              alt={data?.colors[selectedColor].colName}
            />
            <h5 className="mb-5 text-xl font-medium text-center">
              {data?.colors[selectedColor].colName}
            </h5>
            <div className="flex flex-wrap justify-center gap-3">
              {data?.colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => handleClickColor(index)}
                  className={`w-6 h-6 rounded-full cursor-pointer border flex justify-center items-center ${
                    selectedColor === index &&
                    "shadow shadow-gray-500 border-2 animate-bounce"
                  }`}
                  style={{ backgroundColor: color.colorCode }}
                >
                  {selectedColor === index && <p>&#10003;</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:max-w-7xl bg-white py-10 lg:pt-20">
        <h4 className="sm:text-3xl font-bold text-primaryGray lg:mb-6 text-2xl">
          Book your{" "}
          <span
            className={` ${
              selectedState === "Odisha"
                ? "text-primaryBlue"
                : "text-primaryRed"
            }`}
          >
            {data?.subName}
          </span>{" "}
          Now
        </h4>
        <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white ">
          <div className=" w-full gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              minLength={3}
              maxLength={50}
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              minLength={10}
              maxLength={10}
              pattern="^[0-9]{10}$"
              title="Please enter a valid 10-digit phone number"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              value={formData.phone}
              onChange={handleChange}
            />{" "}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="variant"
              className={`w-full p-2 bg-transparent border-b-2   focus:outline-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : " border-b-primaryRed"
              }`}
              onChange={handleChange}
              required
              defaultValue={""}
            >
              <option value="" disabled>
                Select Variant
              </option>
              {data?.variants.map((variant, index) => (
                <option key={index} value={variant.variant}>
                  {variant.variant}
                </option>
              ))}
            </select>
            <select
              name="outlet"
              className={`w-full p-2 bg-transparent border-b-2   focus:outline-none ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : " border-b-primaryRed"
              }`}
              onChange={handleChange}
              required
              defaultValue={""}
            >
              <option value="" disabled>
                Select Outlet
              </option>
              {selectedState !== "Odisha" && index < 9
                ? cgOutlets[0].locations.map((outlet, i) => (
                    <option key={i} value={outlet.name}>
                      {outlet.name}
                    </option>
                  ))
                : selectedState !== "Odisha"
                ? cgOutlets[1].locations.map((outlet, i) => (
                    <option key={i} value={outlet.name}>
                      {outlet.name}
                    </option>
                  ))
                : outlets.map((outlet, i) => (
                    <option key={i} value={outlet}>
                      {outlet}
                    </option>
                  ))}
            </select>
            <button
              type="submit"
              className={`px-4 py-2   hover:text-white duration-500 border-b-2   md:px-4 hover:shadow-lg  whitespace-nowrap ${
                selectedState === "Odisha"
                  ? "hover:bg-primaryBlue border-primaryBlue"
                  : "hover:bg-primaryRed border-primaryRed"
              } `}
            >
              Enquire Now
            </button>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            *Disclaimer: I agree that by clicking the &apos;Enquir Now&apos;
            button below, I am explicitly soliciting a call and message via
            whatsapp or any other medium from us.
          </p>
        </form>
      </div>
      <div className="pb-10 container mx-auto xl:max-w-7xl bg-white pt-2">
        <h4 className="text-2xl font-bold text-primaryGray lg:mb-3">
          Variants & Prices
        </h4>
        <h5 className="text-lg font-medium text-primaryGray mb-4">
          Ex-Showroom
        </h5>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead
              className={`text-white border border-b-2  ${
                selectedState === "Odisha"
                  ? " border-b-primaryBlue bg-primaryBlue"
                  : "border-b-primaryRed bg-primaryRed"
              }`}
            >
              <tr>
                <th className="w-1/3 px-2 py-2 font-semibold text-left ">
                  Variant
                </th>
                <th className="w-1/3 px-2 py-2 font-semibold text-left ">
                  Transmission
                </th>
                <th className="w-1/3 px-2 py-2 font-semibold text-left ">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.variants.map((variant, index) => (
                <tr
                  key={index}
                  className={`border  hover:bg-opacity-10 ${
                    selectedState === "Odisha"
                      ? "hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  }`}
                >
                  <td className="px-2 py-2 text-primaryGray">
                    {variant.variant}
                  </td>
                  <td className="px-2 py-2 text-primaryGray">
                    {variant.transmission}
                  </td>
                  <td className="px-2 py-2 text-primaryGray">
                    {variant.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="py-10 bg-secondaryGray4 lg:py-20 my-10">
        <div className="container flex flex-col items-center mx-auto r xl:max-w-7xl">
          {index === 11 ? (
            <div className="rounded-lg ">
              <p
                className={`  text-white text-center mb-6 text-xl w-min mx-auto px-4 lg:px-8 py-1.5 ${
                  selectedState === "Odisha"
                    ? " bg-primaryBlue border-primaryBlue"
                    : "bg-primaryRed border-primaryRed"
                }`}
              >
                Specification
              </p>
              <video
                src="https://www.nexaexperience.com/slider_html_code/images/Desktop.mp4"
                autoPlay
                loop
                muted
                className="object-cover w-full rounded-lg"
              ></video>
            </div>
          ) : (
            <>
              {" "}
              <div className="flex justify-center  mb-6 text-xl ">
                <button
                  onClick={() => setSelected("Exterior")}
                  aria-label="Exterior"
                  className={`   px-4 border  lg:px-8 py-1.5 ${
                    selected === "Exterior" && selectedState === "Odisha"
                      ? "bg-primaryBlue    border-primaryBlue  text-white "
                      : selected === "Exterior"
                      ? "bg-primaryRed    border-primaryRed  text-white "
                      : "text-secondaryGray2 bg-secondaryGray3"
                  }`}
                >
                  Exterior
                </button>
                <button
                  onClick={() => setSelected("Interior")}
                  aria-label="Interior"
                  className={`   px-4 border  lg:px-8 py-1.5 ${
                    selected === "Interior" && selectedState === "Odisha"
                      ? "bg-primaryBlue    border-primaryBlue  text-white "
                      : selected === "Interior"
                      ? "bg-primaryRed    border-primaryRed  text-white "
                      : "text-secondaryGray2 bg-secondaryGray3"
                  }`}
                >
                  Interior
                </button>
              </div>
              {selected === "Exterior" ? (
                <VehicleDetailsSlider images={data?.exterior} />
              ) : (
                <VehicleDetailsSlider images={data?.interior} />
              )}
            </>
          )}
        </div>
      </div>

      <div className="container pt-6 pb-10 mx-auto xl:max-w-7xl lg:pb-20 px-1 ">
        <h4 className="text-2xl font-bold text-primaryGray lg:mb-6">
          Key Specifications
        </h4>
        <div className="grid sm:gap-4 md:grid-cols-2 md:gap-16 lg:gap-28">
          <div className="overflow-x-auto">
            {data?.keySpecifications?.slice(0, 7).map((key, index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b hover:bg-secondaryGray4"
              >
                <p>{key.label}</p>
                <p>{key.value}</p>
              </div>
            ))}
          </div>
          <div className="overflow-x-auto">
            {data?.keySpecifications?.slice(7).map((key, index) => (
              <div
                key={index}
                className="flex justify-between py-2 border-b hover:bg-secondaryGray4"
              >
                <p>{key.label}</p>
                <p>{key.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VehicleDetailTemplate;
