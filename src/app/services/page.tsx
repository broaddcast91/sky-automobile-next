'use client';
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  model: string;
}

const BookAService: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    model: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    toast.success("Thank You for contacting us. We will get back to you soon!");

    // Resetting form data
    setFormData({
      name: "",
      phone: "",
      email: "",
      model: "",
    });
  };

  return (
    <div className="">
      <Header />
      <div className="min-h-screen ">
        <div className="pt-20 min-h-40 bg-primaryGray">
          <img
            src="https://saboonexa.in/static/media/Website_Maruti_Suzuki_Nexa_August_Independence_Day_Service_Saboo_RKS_Nexa.d9fdfa3802240e43c5ec.webp"
            alt="Service Banner"
            className="object-cover w-full h-full -mt-1"
          />
        </div>
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Book a <span className="text-primaryRed">Service </span> Now
          </h4>
          <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white">
            <div className="flex flex-col w-full gap-4 md:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                pattern="^[a-zA-Z\s'-]+$"
                minLength={3}
                maxLength={50}
                title="Only alphabets, spaces, hyphens, and apostrophes are allowed"
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none"
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
                title="Only 10-digit Indian numbers are allowed"
                pattern="^[0-9]+$"
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none"
                value={formData.phone}
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
                value={formData.email}
                onChange={handleChange}
              />
              <select
                className="w-full p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none"
                name="model"
                required
                value={formData.model}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Model*
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
              </select>

              <button
                type="submit"
                className="px-2 py-2 mx-auto text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg bg-primaryRed whitespace-nowrap"
              >
                Enquire Now
              </button>
            </div>
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

export default BookAService;
