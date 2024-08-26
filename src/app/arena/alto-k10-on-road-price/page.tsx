"use client";

import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { BsFuelPump } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { PiEngine } from "react-icons/pi";

interface FormData {
  name: string;
  phone: string;
  email: string;
  model: string;
}

const AltoK10: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    model: "Alto K10",
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
      model: "Alto K10",
    });
    // To reset the form, you need to use a ref to the form element
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

  return (
    <div className="">
      <Header />
      <div className="px-1 py-20 bg-primaryGray lg:py-20">
        <div className="container grid items-center mx-auto text-white md:grid-cols-2 xl:max-w-7xl">
          <div>
            <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
              Maruti ALTO K10
            </h1>
            <p>Ex-Showroom Price</p>
            <h3 className="mb-6 text-2xl font-medium">₹7.49L - ₹15.49L *</h3>
            <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-3 lg:gap-0">
              <div className="flex items-center gap-4">
                <GiSpeedometer className="text-4xl" />
                <div>
                  <span className="font-semibold">Engine</span>
                  <br />
                  <span>998 cc</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsFuelPump className="text-4xl" />
                <div>
                  <span className="font-semibold">Mileage</span>
                  <br />
                  <span>24.39 kmpl</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <PiEngine className="text-4xl" />
                <div>
                  <span className="font-semibold">Power</span>
                  <br />
                  <span>49 kW @ 5500 rpm</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6 lg:gap-4">
              <button className="px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg hover:bg-primaryRed hover:border-primaryRed">
                View Brochure
              </button>
              <button className="px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg hover:bg-primaryRed hover:border-primaryRed">
                Get On Road Price
              </button>
              <button className="px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:px-4 hover:shadow-lg hover:bg-primaryRed hover:border-primaryRed">
                Book Test Drive
              </button>
            </div>
            <p className="mb-4 text-sm">
              Our professional and well-trained staff is ready to assist you.
            </p>
          </div>
          <div>
            <img src={colors[selectedColor].img} alt="" />
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
      <div className="container py-10 mx-auto bg-white xl:max-w-7xl lg:py-20">
        <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
          Book your <span className="text-primaryRed">Alto K10</span> Now
        </h4>
        <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white ">
          <div className="flex flex-col w-full gap-4 md:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              pattern="^[a-zA-Z]+$"
              minLength={3}
              maxLength={50}
              title="Only alphabets are allowed"
              className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              minLength={10}
              maxLength={10}
              title="Only 10 digit Indian numbers are allowed"
              pattern="^[0-9]+$"
              className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              minLength={3}
              title="Please enter a valid email address"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none"
              onChange={handleChange}
            />
            <select
              className="w-full p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none"
              name="model"
              required
              value={formData.model}
              disabled
              onChange={handleChange}
            >
              <option value="Alto K10">Alto K10</option>
            </select>

            <button
              type="submit"
              className="px-2 py-2 mx-auto text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg bg-primaryRed whitespace-nowrap"
            >
              Enquire Now
            </button>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            *Disclaimer: By clicking &apos;Submit&nbsp;Now&apos;, you have
            agreed to our Terms and Conditions.
          </p>
        </form>
        <div className="py-10 ">
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
                <tr className="border hover:bg-secondaryRed2 hover:bg-opacity-10">
                  <td className="px-2 py-2 text-primaryGray">Alto K10</td>
                  <td className="px-2 py-2 text-primaryGray">Manual</td>
                  <td className="px-2 py-2 text-primaryGray">₹ 5.25 Lakh</td>
                </tr>
                <tr className="border hover:bg-secondaryRed2 hover:bg-opacity-10 ">
                  <td className="px-2 py-2 text-primaryGray">Alto K10 1.2</td>
                  <td className="px-2 py-2 text-primaryGray">Manual</td>
                  <td className="px-2 py-2 text-primaryGray">₹ 5.25 Lakh</td>
                </tr>
                <tr className="border hover:bg-secondaryRed2 hover:bg-opacity-10 ">
                  <td className="px-2 py-2 text-primaryGray">Alto K10</td>
                  <td className="px-2 py-2 text-primaryGray">Manual</td>
                  <td className="px-2 py-2 text-primaryGray">₹ 5.25 Lakh</td>
                </tr>
                <tr className="border hover:bg-secondaryRed2 hover:bg-opacity-10 ">
                  <td className="px-2 py-2 text-primaryGray">Alto K10 1.2</td>
                  <td className="px-2 py-2 text-primaryGray">Manual</td>
                  <td className="px-2 py-2 text-primaryGray">₹ 5.25 Lakh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>{" "}
        <div className="container pt-6 pb-10 mx-auto xl:max-w-7xl ">
          <h4 className="text-2xl font-bold text-primaryGray lg:mb-6">
            Key Specifications
          </h4>
          {/* <h5 className="text-lg font-medium text-primaryGray lg:mb-4">
            of Maruti Alto K10
          </h5> */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-16 lg:gap-28">
            <div className="">
              {" "}
              {/* <div className="flex justify-between py-2 border-b">
                <p>Engine Displacement</p>
                <p>998 cc</p>
              </div> */}
              {/* <div className="flex justify-between py-2 border-b">
                <p>Max Power</p>
                <p>55.92bhp@5300rpm</p>
              </div> */}
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Fuel Tank Capacity</p>
                <p>55 Litres</p>
              </div>{" "}
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Seating Capacity</p>
                <p>4, 5</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Length</p>
                <p>3530 mm</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Width</p>
                <p>1490 mm</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Height</p>
                <p>1520 mm</p>
              </div>{" "}
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Front Suspension</p>
                <p>Mac Pherson Strut with Coil Spring</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Rear Suspension</p>
                <p>Torsion Beam with Coil Spring</p>
              </div>
            </div>
            <div className="">
              {" "}
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Fuel Type</p>
                <p>Petrol, CNG</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>No. of Cylinders</p>
                <p>3</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Max Torque</p>
                <p>82.1Nm@3400rpm</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Transmission Type</p>
                <p>Manual</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Body Type</p>
                <p>Hatchback</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Wheel Base</p>
                <p>2380 mm</p>
              </div>
              <div className="flex justify-between py-2 border-b hover:bg-secondaryGray4">
                <p>Gearbox</p>
                <p>5-Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-secondaryGray4 lg:py-20">
        <div className="container flex flex-col items-center mx-auto r xl:max-w-7xl">
          {/* <h4 className="text-3xl font-bold text-white lg:mb-6">Gallery</h4> */}
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_01.webp"
            alt=""
            className="mb-6 rounded-lg"
          />
          <div className="flex max-w-3xl gap-4 overflow-x-hidden">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_02.webp"
              alt=""
              className="h-20 rounded-lg"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_03.webp"
              alt=""
              className="h-20 rounded-lg"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_04.webp"
              alt=""
              className="h-20 rounded-lg"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/exterior_web_05.webp"
              alt=""
              className="h-20 rounded-lg"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/Interior_web_1.webp"
              alt=""
              className="h-20 rounded-lg"
            />{" "}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/Interior_web_2.webp"
              alt=""
              className="h-20 rounded-lg"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/Interior_web_3.webp"
              alt=""
              className="h-20 rounded-lg"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/alto-800/sliders/High_web_05.webp"
              alt=""
              className="h-20 rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AltoK10;
