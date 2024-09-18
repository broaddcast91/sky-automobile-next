"use client";
import { useAppContext } from "@/context";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ModalBuyACarProps {
  showBuyACar: boolean;
  setShowBuyACar: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBuyACar: React.FC<ModalBuyACarProps> = ({
  showBuyACar,
  setShowBuyACar,
}) => {
  const handleOnClose = (e: any) => {
    if (e.target.id === "container") setShowBuyACar(false);
  };
  interface FormData {
    name: string;
    phone: string;
    model: string;
    email: string;
    outlet: string;
  }

  useEffect(() => {
    // Prevent scrolling when the modal is open
    document.body.style.overflow = showBuyACar ? "hidden" : "auto";

    // Clean up the effect when the component is unmounted or the state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBuyACar]);
  const { selectedState } = useAppContext();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    model: "",
    email: "",
    outlet: "",
  });

  // Handle form input changes
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Form Data:", { ...formData, state: selectedState });
    toast.success("Thank You for contacting us. We will get back to you soon!");
    // Optionally, reset form state after submission
    setFormData({
      name: "",
      phone: "",
      model: "",
      email: "",
      outlet: "",
    });
    setShowBuyACar(false);
  };

  if (!showBuyACar) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center z-[100] backdrop-blur-[3px] overflow-hidden bg-black bg-opacity-50"
    >
      <div className="bg-white w-full max-w-md rounded py-6 m-2 md:py-6 select-none px-4 ">
        <h4 className=" text-xl font-semibold  text-primaryGray mb-4">
          Get A{" "}
          <span
            className={` ${
              selectedState === "Odisha"
                ? "text-primaryBlue"
                : "text-primaryRed"
            }`}
          >
            Call Back
          </span>{" "}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              pattern="^[a-zA-Z]+$"
              minLength={3}
              maxLength={50}
              title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
              className={`w-full p-2 bg-transparent  border-b-2  focus:outline-none  ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue "
                  : "border-b-primaryRed "
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
              title="Only 10 digit Indian numbers are allowed"
              pattern="^[0-9]+$"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none  ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none   lg:col-span-2 ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            <select
              name="model"
              className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none  ${
                selectedState === "Odisha"
                  ? "border-b-primaryBlue"
                  : "border-b-primaryRed"
              }`}
              required
              value={formData.model}
              onChange={handleChange}
            >
              <option
                value=""
                className="w-full p-2 text-sm text-black border rounded-md"
                disabled
              >
                Select Model*
              </option>
              <optgroup label="Arena" className="text-sm text-primaryGray">
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
              {/* <optgroup label="True Value" className="text-sm text-primaryGray">
                <option value="I want to buy">I want to buy</option>
                <option value="I want to sell">I want to sell</option>
              </optgroup> */}
            </select>

            <button
              type="submit"
              className={`mt-4  px-2 py-2  text-sm duration-500  border rounded-md md:text-sm md:px-4 hover:shadow-lg   whitespace-nowrap text-white  ${
                selectedState === "Odisha"
                  ? " bg-primaryBlue"
                  : "border-primaryRed bg-primaryRed"
              } `}
              onClick={() => setShowBuyACar(true)}
            >
              Enquire Now
            </button>
            <p className=" text-[10px] text-gray-500">
              *Disclaimer: I agree that by clicking the &apos;Enquir Now&apos;
              button below, I am explicitly soliciting a call and message via
              whatsapp or any other medium from us.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalBuyACar;
