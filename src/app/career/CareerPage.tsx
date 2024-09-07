"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

// Define the type for the career form data
interface CareerFormData {
  name: string;
  email: string;
  designation: string;
  noticePeriod: string;
  phone: string;
  experience: string;
  currentCTC: string;
  expectedCTC: string;
}

const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState<CareerFormData>({
    name: "",
    email: "",
    designation: "",
    noticePeriod: "",
    phone: "",
    experience: "",
    currentCTC: "",
    expectedCTC: "",
  });
   const { selectedState } = useAppContext();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Career Form Data:", formData);
    toast.success("Thank you for applying! We will get back to you soon.");

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      designation: "",
      noticePeriod: "",
      phone: "",
      experience: "",
      currentCTC: "",
      expectedCTC: "",
    });
  };

  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
        <div className="pt-20 min-h-40 bg-primaryGray">
          <div className="h-full min-h-[40vh] flex justify-center items-center text-white text-3xl">
            Required Banner Image
          </div>
        </div>
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Apply for a{" "}
            <span
              className={`${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Position
            </span>
            {formData.designation && (
              <span className="text-base"> ({formData.designation}) </span>
            )}
          </h4>
          <form
            onSubmit={handleSubmit}
            id="careerForm"
            className="py-3 bg-white"
          >
            <div className="w-full gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
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
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation*"
                required
                minLength={3}
                maxLength={50}
                pattern="^[a-zA-Z\s]+$"
                title="Please enter a valid designation"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.designation}
                onChange={handleChange}
              />
              <input
                type="text"
                name="experience"
                placeholder="Experience*"
                required
                minLength={3}
                maxLength={100}
                pattern="^\d+\s*(years?|months?)$"
                title="Please enter a valid experience in the format 'X years' or 'X months'"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.experience}
                onChange={handleChange}
              />
              <input
                type="text"
                name="currentCTC"
                placeholder="Current CTC*"
                required
                pattern="^\d+(?:\.\d{1,2})?$"
                title="Please enter a valid current CTC in numbers (e.g., 50000, 50000.00)"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.currentCTC}
                onChange={handleChange}
              />
              <input
                type="text"
                name="expectedCTC"
                placeholder="Expected CTC*"
                required
                pattern="^\d+(?:\.\d{1,2})?$"
                title="Please enter a valid expected CTC in numbers (e.g., 60000, 60000.00)"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.expectedCTC}
                onChange={handleChange}
              />
              <select
                className={`w-full p-2 bg-transparent border-b-2  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="noticePeriod"
                required
                value={formData.noticePeriod}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Notice Period*
                </option>
                <option value="Immediate">Immediate Joiner</option>
                <option value="15 Days">15 Days</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="More than 3 Months">More than 3 Months</option>
              </select>
            </div>
            <button
              type="submit"
              className={`px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg  whitespace-nowrap mt-6 min-w-40 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }`}
            >
              Apply Now
            </button>
            <p className="mt-6 text-xs text-gray-500">
              *Disclaimer: By clicking &apos;Submit&apos;, you have agreed to
              our Terms and Conditions.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
