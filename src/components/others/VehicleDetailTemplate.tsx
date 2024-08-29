"use client";

import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import VehicleDetailsSlider from "@/components/others/VehicleDetailsSlider";
import { models } from "@/constants";
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
  model: string;
}
interface VehiceProps {
  index: number;
}

const VehicleDetailTemplate: React.FC<VehiceProps> = ({ index }) => {
  const data = models[index];
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    outlet: "",
    model: data?.variants[0]?.variant || "",
  });

  const handleClickColor = (index: number): void => {
    setSelectedColor(index);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Thank You for contacting us. We will get back to you soon!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      outlet: "",
      model: data?.variants[0]?.variant || "",
    });
    const formElement = document.getElementById("myForm") as HTMLFormElement;
    if (formElement) {
      formElement.reset();
    }
  };

  const colors = [
    {
      img: "https://www.varunmaruti.com/uploads/products/colors/altok-10-metallic-sizzling-red1.png",
      colorCode: "#d51716",
      colName: "Metallic Sizzling Red",
    },
    {
      img: "https://www.varunmaruti.com/uploads/products/colors/altok-10-metallic-granite-gray1.png",
      colorCode: "#797a83",
      colName: "Metallic Granite Grey",
    },
    {
      img: "https://www.varunmaruti.com/uploads/products/colors/altok-10-premium-earth-gold.png",
      colorCode: "#5e4923",
      colName: "Premium Earth Gold",
    },
    {
      img: "https://www.varunmaruti.com/uploads/products/colors/altok-10-metallic-silky-silver1.png",
      colorCode: "#9b9aa0",
      colName: "Metallic Silky Silver",
    },
    {
      img: "https://www.varunmaruti.com/uploads/products/colors/altok-10-metallic-speedy-blue.png",
      colorCode: "#2249b5",
      colName: "Metallic Speedy Blue",
    },
    {
      img: "https://www.varunmaruti.com/uploads/products/colors/altok-10-solid-white1.png",
      colorCode: "#e4e4e6",
      colName: "Solid White",
    },
    {
      img: "https://www.varunmaruti.com/uploads/products/colors/altok-10-pearl-midnight-black.png",
      colorCode: "#050505",
      colName: "Midnight Black",
    },
  ];

  const keySpecifications = [
    { label: "Fuel Tank Capacity", value: "55 Litres" },
    { label: "Seating Capacity", value: "4, 5" },
    { label: "Length", value: "3530 mm" },
    { label: "Width", value: "1490 mm" },
    { label: "Height", value: "1520 mm" },
    { label: "Front Suspension", value: "Mac Pherson Strut with Coil Spring" },
    { label: "Rear Suspension", value: "Torsion Beam with Coil Spring" },
    { label: "Fuel Type", value: "Petrol, CNG" },
    { label: "No. of Cylinders", value: "3" },
    { label: "Max Torque", value: "82.1Nm@3400rpm" },
    { label: "Transmission Type", value: "Manual" },
    { label: "Body Type", value: "Hatchback" },
    { label: "Wheel Base", value: "2380 mm" },
    { label: "Gearbox", value: "5-Speed" },
  ];

  const images = [
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_01.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_02.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_03.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_04.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_05.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/Interior_web_1.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/Interior_web_2.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/Interior_web_3.webp",
    "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/High_web_05.webp",
  ];

  const carDetails = [
    {
      icon: <GiSpeedometer className="text-4xl" />,
      label: "Engine",
      value: "998 cc",
    },
    {
      icon: <BsFuelPump className="text-4xl" />,
      label: "Mileage",
      value: "24.39 kmpl",
    },
    {
      icon: <PiEngine className="text-4xl" />,
      label: "Power",
      value: "49 kW @ 5500 rpm",
    },
  ];

  const variants = [
    { variant: "Alto K10", transmission: "Manual", price: "₹ 5.25 Lakh" },
    { variant: "Alto K10 1.2", transmission: "Manual", price: "₹ 5.25 Lakh" },
    { variant: "Alto K10", transmission: "Manual", price: "₹ 5.25 Lakh" },
    { variant: "Alto K10 1.2", transmission: "Manual", price: "₹ 5.25 Lakh" },
  ];
  const outlets = [
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_01.webp",
      name: "Sky Automobile Arena Showroom",
    },
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_01.webp",
      name: "Sky Automobile Arena Showroom",
    },
    {
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_01.webp",
      name: "Sky Automobile Arena Showroom",
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="px-1 py-20 bg-primaryGray lg:py-20">
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
              {["View Brochure", "Get On Road Price", "Book Test Drive"].map(
                (text, index) => (
                  <button
                    key={index}
                    className="px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg hover:bg-primaryRed hover:border-primaryRed"
                  >
                    {text}
                  </button>
                )
              )}
            </div>
            <p className="mb-4 text-sm">
              Our professional and well-trained staff is ready to assist you.
            </p>
          </div>
          <div>
            <img src={data?.colors[selectedColor].img} alt="Colors" />
            <h5 className="mb-5 text-xl font-medium text-center">
              {colors[selectedColor].colName}
            </h5>
            <div className="flex flex-wrap justify-center gap-3">
              {colors.map((color, index) => (
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
        <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
          Book your <span className="text-primaryRed">{data?.subName}</span> Now
        </h4>
        <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white ">
          <div className=" w-full gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {["name", "phone", "email"].map((field, index) => (
              <input
                key={index}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }*`}
                required={field !== "email"}
                pattern={field === "phone" ? "[0-9]{10}" : undefined}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none"
              />
            ))}
            <select
              name="model"
              className="w-full p-2 bg-transparent border-b-2  border-b-primaryRed focus:outline-none"
              onChange={handleChange}
              required
              defaultValue={''}
            >
              <option value="" disabled>Select Variant</option>
              {variants.map((variant, index) => (
                <option key={index} value={variant.variant}>
                  {variant.variant}
                </option>
              ))}
            </select>
            <select
              name="model"
              className="w-full p-2 bg-transparent border-b-2  border-b-primaryRed focus:outline-none"
              onChange={handleChange}
              required
              defaultValue={''}
            >
              <option value="" disabled>Select Outlet</option>
              {outlets.map((outlet, index) => (
                <option key={index} value={outlet.name}>
                  {outlet.name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="px-4 py-2   hover:text-white duration-500 border-b-2   md:px-4 hover:shadow-lg hover:bg-primaryRed whitespace-nowrap border-primaryRed "
            >
              Enquire Now
            </button>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            *Disclaimer: By clicking &apos;Submit&nbsp;Now&apos;, you have
            agreed to our Terms and Conditions.
          </p>
        </form>
      </div>
      <div className="pb-10 container mx-auto xl:max-w-7xl bg-white pt-2">
        <h4 className="text-2xl font-bold text-primaryGray lg:mb-3">
          Variants & Prices
        </h4>
        <h5 className="text-lg font-medium text-primaryGray lg:mb-4">
          Ex-Showroom
        </h5>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="text-white border border-b-2 border-b-primaryRed bg-primaryRed">
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
                  className="border hover:bg-secondaryRed2 hover:bg-opacity-10"
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
          <h4 className="text-3xl font-bold text-primaryRed lg:mb-6 mb-4">
            Gallery
          </h4>

          <VehicleDetailsSlider images={data?.sliderImages} />
        </div>
      </div>
      <div className="container pt-6 pb-10 mx-auto xl:max-w-7xl lg:pb-20 px-1 ">
        <h4 className="text-2xl font-bold text-primaryGray lg:mb-6">
          Key Specifications
        </h4>
        <div className="grid gap-4 md:grid-cols-2 md:gap-16 lg:gap-28">
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
