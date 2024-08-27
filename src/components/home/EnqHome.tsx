"use client"; // Add this at the top of your file
import React from "react";
import toast from "react-hot-toast";

const EnqHome: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    toast.success("Thank You for contacting us. We will get back to you soon!");
  };

  return (
    <div className="text-white bg-primaryGray">
      <div className="container px-4 py-10 mx-auto xl:max-w-7xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2 md:flex-row lg:grid-cols-4">
            <input
              type="text"
              placeholder="Name*"
              required
              pattern="^[a-zA-Z]+$"
              minLength={3}
              maxLength={50}
              title="Only alphabets are allowed"
              className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none placeholder:text-white"
            />
            <input
              type="tel"
              placeholder="Phone*"
              required
              minLength={10}
              maxLength={10}
              title="Only 10 digit Indian numbers are allowed"
              pattern="^[0-9]+$"
              className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none placeholder:text-white"
            />
            <select
              className="w-full p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none md:col-span-2 lg:col-span-1"
              required
              defaultValue=""
            >
              <option
                value=""
                className="w-full p-2 text-sm text-black border rounded-md"
                disabled
              
              >
                I&apos;m looking for*
              </option>

              <optgroup label="Arena" className="text-sm text-primaryGray">
                <option value="Alto">Alto</option>
                <option value="Alto k10">Alto K10</option>
                <option value="Wagon R">Wagon R</option>
                <option value="Celerio">Celerio</option>
                <option value="Epic swift 2024">Epic Swift 2024</option>
                <option value="Swift">Swift</option>
                <option value="Dzire">Dzire</option>
                <option value="S-presso">S-Presso</option>
                <option value="Ertiga">Ertiga</option>
                <option value="Brezza">Brezza</option>
                <option value="Eeco">Eeco</option>
              </optgroup>
              <optgroup label="Nexa" className="text-sm text-primaryGray">
                <option value="Invicto">Invicto</option>
                <option value="Fronx">Fronx</option>
                <option value="Jimny">Jimny</option>
                <option value="Grand Vitara">Grand Vitara</option>
                <option value="Ciaz">Ciaz</option>
                <option value="Baleno">Baleno</option>
                <option value="Ignis">Ignis</option>
                <option value="XL6">XL6</option>
              </optgroup>
              <optgroup label="True Value" className="text-sm text-primaryGray">
                <option value="I want to buy">I want to buy</option>
                <option value="I want to sell">I want to sell</option>
              </optgroup>
            </select>

            <button
              type="submit"
              className="hidden px-2 py-2 mx-auto text-sm duration-500 bg-transparent border rounded-md md:text-sm md:px-4 hover:shadow-lg hover:bg-primaryRed w-min whitespace-nowrap lg:block hover:border-primaryRed"
            >
              Enquire Now
            </button>
          </div>
          <div className="flex justify-center py-2 mt-4 lg:hidden">
            <button
              type="submit"
              className="px-2 py-2 mt-2 text-sm duration-500 bg-transparent border rounded-md md:text-base md:px-4 hover:shadow-lg hover:bg-primaryRed hover:border-primaryRed"
            >
              Enquire Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnqHome;
