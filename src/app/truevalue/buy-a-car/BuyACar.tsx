"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaTrafficLight, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { GiGearStickPattern, GiTrafficLightsGreen } from "react-icons/gi";
import { HiMiniMapPin } from "react-icons/hi2";

// Sample car data
const carData = [
  {
    name: "2019 Maruti Suzuki Swift",
    fuel: "Petrol",
    owner: "1st owner",
    transmission: "Automatic",
    kmDriven: "80K Km",
    price: "₹ 4.40 Lakh",
    emi: "EMI from ₹ 8,003/m",
    location: "Mahoba Bazar",
    image:
      "https://www.varunmaruti.com/uploads/trueValueCars/161674921718.jpeg",
  },
  {
    name: "2017 Maruti Suzuki Alto K10",
    fuel: "Diesel",
    owner: "2nd owner",
    transmission: "Manual",
    kmDriven: "60K Km",
    price: "₹ 3.15 Lakh",
    emi: "EMI from ₹ 8,003/m",
    location: "Udhyog Bhawan",
    image: "https://www.varunmaruti.com/uploads/trueValueCars/16167468937.jpeg",
  },
  {
    name: "2022 Maruti Suzuki Swift",
    fuel: "Petrol",
    owner: "1st owner",
    transmission: "Automatic",
    kmDriven: "40K Km",
    price: "₹ 5.70 Lakh",
    emi: "EMI from ₹ 8,003/m",
    location: "Mahoba Bazar",
    image:
      "https://www.varunmaruti.com/uploads/trueValueCars/161674921718.jpeg",
  },
  {
    name: "2024 Maruti Suzuki Alto K10",
    fuel: "Diesel",
    owner: "2nd owner",
    transmission: "Manual",
    kmDriven: "60K Km",
    price: "₹ 3.15 Lakh",
    emi: "EMI from ₹ 8,003/m",
    location: "Udhyog Bhawan",
    image: "https://www.varunmaruti.com/uploads/trueValueCars/16167468937.jpeg",
  },
  {
    name: "2022 Maruti Suzuki Swift",
    fuel: "Petrol",
    owner: "1st owner",
    transmission: "Automatic",
    kmDriven: "40K Km",
    price: "₹ 5.70 Lakh",
    emi: "EMI from ₹ 8,003/m",
    location: "Mahoba Bazar",
    image:
      "https://www.varunmaruti.com/uploads/trueValueCars/161674921718.jpeg",
  },
  {
    name: "2024 Maruti Suzuki Alto K10",
    fuel: "Diesel",
    owner: "2nd owner",
    transmission: "Manual",
    kmDriven: "60K Km",
    price: "₹ 3.15 Lakh",
    emi: "EMI from ₹ 8,003/m",
    location: "Udhyog Bhawan",
    image: "https://www.varunmaruti.com/uploads/trueValueCars/16167468937.jpeg",
  },
  // Add more car objects as needed
];

const BuyACar: React.FC = () => {
  const { selectedState } = useAppContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filteredCars, setFilteredCars] = useState(carData);

  // Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
    const filtered = carData.filter(
      (car) =>
        car.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.fuel.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.owner.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.transmission.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.kmDriven.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.price.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.emi.toLowerCase().includes(e.target.value.toLowerCase()) ||
        car.location.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  // Handle Sort
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    let sortedCars = [...filteredCars];

    if (e.target.value === "priceLowToHigh") {
      sortedCars.sort(
        (a, b) =>
          parseFloat(a.price.replace(/[₹,]/g, "")) -
          parseFloat(b.price.replace(/[₹,]/g, ""))
      );
    } else if (e.target.value === "priceHighToLow") {
      sortedCars.sort(
        (a, b) =>
          parseFloat(b.price.replace(/[₹,]/g, "")) -
          parseFloat(a.price.replace(/[₹,]/g, ""))
      );
    }

    setFilteredCars(sortedCars);
  };

  return (
    <div className="">
      <Header />
      <div className=" ">
        {/* Filter Panel */}

        {/* Main Content */}
        <div className="flex-1">
          <div className="pt-20 min-h-40 bg-primaryGray">
            <div className="h-full min-h-[30vh] flex justify-center items-center text-white text-3xl">
              Required Banner Image
            </div>
          </div>

          {/* Car Listings */}
          <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
            <h4 className="md:text-3xl font-bold text-primaryGray lg:mb-6 text-center text-2xl">
              Maruti Suzuki{" "}
              <span
                className={` ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                }`}
              >
                True Value
              </span>{" "}
            </h4>

            <div className="xl:max-w-5xl mx-auto">
              {/* Search and Sort */}
              <div className="container py-4 mx-auto xl:max-w-7xl lg:py-6  flex justify-between items-center flex-col gap-2 md:flex-row">
                <input
                  type="text"
                  placeholder="Search by name, fuel, owner, etc."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="md:w-1/2 p-2 border rounded-lg text-sm"
                />
                <select
                  value={sortOption}
                  onChange={handleSort}
                  className="p-2 border rounded-lg text-sm"
                >
                  <option value="">Sort By</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3   gap-2 mt-4 md:gap-4 lg:gap-y-6">
                {filteredCars.map((car, index) => (
                  <div
                    key={index}
                    className="bg-secondaryGray3 rounded-lg max-w-lg mx-auto md:mx-0  group hover:shadow-xl hover:shadow-primaryGray/30 "
                  >
                    <img
                      src={car.image}
                      alt={car.name}
                      className="object-cover w-full rounded-t-lg max-h-[21rem] min-h-80"
                    />
                    <div
                      className={`p-4 lg:py-6 rounded-b-lg  ${
                        selectedState === "Odisha"
                          ? "group-hover:bg-primaryBlue group-hover:text-white"
                          : "group-hover:bg-primaryRed group-hover:text-white"
                      }`}
                    >
                      <h3
                        title={car.name}
                        className="font-bold line-clamp-1 pb-2"
                      >
                        {car.name}
                      </h3>

                      <h5 className="text-xs line-clamp-1 pb-2 flex gap-1">
                        <p className="flex gap-1 items-center line-clamp-1 whitespace-nowrap">
                          <BsFillFuelPumpFill className={`${selectedState==='Odisha'?"text-primaryBlue":"text-primaryRed"} group-hover:text-white `} /> {car.fuel}
                        </p>
                        <span> |</span>
                        <p className="flex gap-1 items-center line-clamp-1 whitespace-nowrap">
                          <FaUser className={`${selectedState==='Odisha'?"text-primaryBlue":"text-primaryRed"} group-hover:text-white `} /> {car.owner}
                        </p>
                        <span> |</span>
                        <p className="flex gap-1 items-center line-clamp-1">
                          <FaGear className={`${selectedState==='Odisha'?"text-primaryBlue":"text-primaryRed"} group-hover:text-white `} /> {car.transmission}
                        </p>
                      </h5>
                      <div className="flex text-xs pb-2 gap-1">
                        <p className="flex gap-1 items-center line-clamp-1">
                          <FaTrafficLight className={`${selectedState==='Odisha'?"text-primaryBlue":"text-primaryRed"} group-hover:text-white `} /> {car.kmDriven}
                        </p>
                        <span> |</span>{" "}
                        <div className="   gap-1  line-clamp-1 text-xs flex  items-center  ">
                          <HiMiniMapPin className={`${selectedState==='Odisha'?"text-primaryBlue":"text-primaryRed"} group-hover:text-white `}  />
                          {car.location}
                        </div>
                      </div>
                      <div className="flex justify-between pt-1 items-center pb-2">
                        <p className="text-lg line-clamp-1 font-medium">
                          {car.price}
                        </p>
                        <p className="line-clamp-1 text-right text-xs">
                          {car.emi}
                        </p>
                      </div>

                      <button
                        className={`w-full border col-span-4 border-white font-bold text-sm rounded-lg px-2 py-2  ${
                          selectedState === "Odisha"
                            ? "group-hover:text-primaryBlue group-hover:bg-white bg-primaryBlue text-white"
                            : "group-hover:text-primaryRed group-hover:bg-white bg-primaryRed text-white"
                        }`}
                        onClick={() => {
                          toast.success("Enquiry Submitted Successfully");
                        }}
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyACar;
