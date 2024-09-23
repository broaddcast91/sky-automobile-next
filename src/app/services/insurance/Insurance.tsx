"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { useAppContext } from "@/context";
import Image from "next/image";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
import AddonsSlider from "./AddonsSlider";

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  address: string;
}

const Insurance: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    model: "",
    city: "",
    address: "",
  });
  const dateInputRef = useRef<HTMLInputElement>(null);

  const { selectedState } = useAppContext();

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Set the min attribute of the date input
    if (dateInputRef.current) {
      dateInputRef.current.min = today;
    }
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Send the POST request
      const response = await fetch("/api/insurance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, state: selectedState }),
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
    // Uncomment if you want to reset the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      model: "",
      city: "",
      address: "",
    });
  };

  const steps = [
    {
      title: "Step 1",
      subtitle: "Claim Intimation & Estimation",
      description:
        "Intimation of claim by the customer and repair estimate generation by the repairer.",
      icon: "/icons/claim_icon1.png",
    },
    {
      title: "Step 2",
      subtitle: "Loss Evaluation",
      description:
        "Surveyor Appointment by Insurance Company and Vehicle Inspection followed by approval for repair by the surveyor.",
      icon: "/icons/claim_icon2.png",
    },
    {
      title: "Step 3",
      subtitle: "Customer Consent & Repairs",
      description:
        "Communication of estimate and approval to the customer to obtain his/her consent. Commencement of Repairs based on surveyor’s approval and customer consent.",
      icon: "/icons/claim_icon3.png",
    },
    {
      title: "Step 4",
      subtitle: "Final Inspection & Delivery of repaired vehicle",
      description:
        "Surveyor to verify repairs done and confirm for delivery of vehicle to customer on near cash-less basis. Workshop to charge the customer for its share of payment and deliver the repaired vehicle.",
      icon: "/icons/claim_icon4.png",
    },
    {
      title: "Step 5",
      subtitle: "Claim Settlement by Insurance Company",
      description:
        "On the basis of the surveyor’s report, Insurance Company to settle the claim and make payment to the workshop/customer (if settlement is not done on cash-less basis).",
      icon: "/icons/claim_icon5.png",
    },
  ];

  // const handleFocus = () => {
  //   // Ensure that this function is only used if necessary
  //   if (dateInputRef.current) {
  //     dateInputRef.current.showPicker();
  //   }
  // };

  return (
    <div className="">
      <Header />
      <div className="min-h-screen">
        <div className="pt-20 min-h-40 bg-primaryGray">
          {/* <img
            src="/images/other/sky-automobile-outlet-banner.jpg"
            alt=""
            className="object-cover w-full h-full -mt-1 max-h-[50vh]"
          /> */}{" "}
          <div className="h-full min-h-[40vh] flex justify-center items-center text-white text-3xl ">
            Required Banner Image
          </div>
        </div>
        {/* <div className="pt-20 min-h-40 bg-primaryGray">
          <img
            src="/images/other/sky-automobile-book-now-banner.jpg"
            alt="Service Banner"
            className="object-cover w-full h-full -mt-1 max-h-[50vh]"
          />
        </div> */}
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:pt-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Apply for a{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Insurance{" "}
            </span>{" "}
            Now
          </h4>
          <form
            onSubmit={handleSubmit}
            id="myForm"
            className="py-3 bg-white mb-10 lg:mb-12"
          >
            <div className="w-full gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                pattern="[A-Za-z ]{3,32}"
                minLength={3}
                maxLength={50}
                title="Only alphabets, spaces, hyphens, and apostrophes are allowed"
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
                title="Only 10-digit Indian numbers are allowed"
                pattern="^[0-9]+$"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
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
                minLength={3}
                title="Please enter a valid email address"
                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address*"
                required
                minLength={3}
                maxLength={50}
                title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                required
                pattern="[A-Za-z ]{3,32}"
                minLength={3}
                maxLength={50}
                title="Only alphabets are allowed with minimum 3 and maximum 50 characters"
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                value={formData.city}
                onChange={handleChange}
              />
              <select
                className={`w-full p-2 bg-transparent border-b-2 appearance-none  focus:outline-none rounded-none ${
                  selectedState === "Odisha"
                    ? "border-b-primaryBlue"
                    : "border-b-primaryRed"
                }`}
                name="model"
                required
                value={formData.model}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Model*
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
                  <option value="Other">Other</option>
                </optgroup>
              </select>
            </div>
            <button
              type="submit"
              className={`px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg  whitespace-nowrap mt-6 min-w-40 ${
                selectedState === "Odisha" ? "bg-primaryBlue" : "bg-primaryRed"
              }`}
            >
              Renew Now
            </button>
            <p className="mt-4 text-[10px] text-gray-500">
              *Disclaimer: I agree that by clicking the &apos;Book Now&apos;
              button below, I am explicitly soliciting a call and message via
              whatsapp or any other medium from us.
            </p>
          </form>
          <section>
            <h4 className="text-2xl font-bold text-primaryGray">
              5 Easy Steps For{" "}
              <span
                className={` ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                }`}
              >
                Claim Process
              </span>
            </h4>
            <div className="my-6 grid lg:grid-cols-5 gap-2 lg:gap-4 grid-cols-2 md:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={` hover:text-white px-2 rounded-lg py-4 group border bg-secondaryGray4 text-center ${
                    selectedState === "Odisha"
                      ? "hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  }`}
                >
                  <p className="font-medium my-2 uppercase">{step.title}</p>
                  <div className="flex justify-center items-center bg-white rounded-full w-20 h-20 mb-2 mx-auto">
                    <Image src={step.icon} alt="" width={60} height={60} />
                  </div>
                  <p className="mb-2">{step.subtitle}</p>
                  <p className="text-xs text-gray-500 group-hover:text-white  ">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>{" "}
          <section>
            <h4 className="text-2xl font-bold text-primaryGray   pt-4">
              Choose from our wide range of{" "}
              <span
                className={`   ${
                  selectedState === "Odisha"
                    ? "text-primaryBlue"
                    : "text-primaryRed"
                }`}
              >
                Addons{" "}
              </span>
            </h4>
            <AddonsSlider />
          </section>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Insurance;
