"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  address: string;
  serviceType: string;
  isPickup: string;
  date: string;
}

const BookAService: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    model: "",
    city: "",
    address: "",
    serviceType: "",
    isPickup: "",
    date: "",
  });
  const dateInputRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data:", { ...formData, state: 'Odisa' });
    toast.success("Thank You for contacting us. We will get back to you soon!");

    // Uncomment if you want to reset the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      model: "",
      city: "",
      address: "",
      serviceType: "",
      isPickup: "",
      date: "",
    });
  };

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
          <img
            src="https://saboonexa.in/static/media/Website_Maruti_Suzuki_Nexa_August_Independence_Day_Service_Saboo_RKS_Nexa.d9fdfa3802240e43c5ec.webp"
            alt="Service Banner"
            className="object-cover w-full h-full -mt-1"
          />
        </div>
        <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Book a <span className="text-primaryRed">Service </span> Now
          </h4>
          <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white">
            <div className="w-full gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                pattern="^[a-zA-Z\s'-]+$"
                minLength={3}
                maxLength={50}
                title="Only alphabets, spaces, hyphens, and apostrophes are allowed"
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none rounded-none"
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
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none rounded-none"
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
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none rounded-none"
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
                title="Only alphabets, spaces, hyphens, and apostrophes are allowed"
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none rounded-none"
                value={formData.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                required
                pattern="^[a-zA-Z\s'-]+$"
                minLength={3}
                maxLength={50}
                title="Only alphabets, spaces, hyphens, and apostrophes are allowed"
                className="w-full p-2 bg-transparent border-b-2 appearance-none border-b-primaryRed focus:outline-none rounded-none"
                value={formData.city}
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
                  <option value="Other">Other</option>
                </optgroup>
              </select>
              <select
                className="w-full p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Service*
                </option>
                <option value="Free Service">Free Service</option>
                <option value="Paid Service">Paid Service</option>
                <option value="Others">Others</option>
              </select>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  id="date"
                  // ref={dateInputRef}
                  required
                  className={`w-full min-h-11 p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none rounded-none  select-none ${
                    formData.date ? "text-black" : "  text-transparent"
                  }`}
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Date*"
                  // onFocus={handleFocus}
                />
                <label
                  htmlFor="date"
                  className={`absolute top-0 left-0 p-2 transition-all duration-300 ease-in-out w-[70%]  ${
                    formData.date ? "text-transparent" : "  "
                  }`}
                >
                  Service date
                </label>
              </div>
              <div className="w-full p-2 flex justify-between items-end">
                <p>Pick Up Required*:</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="isPickup"
                    value="Yes"
                    checked={formData.isPickup === "Yes"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-4 cursor-pointer">
                  <input
                    type="radio"
                    name="isPickup"
                    value="No"
                    checked={formData.isPickup === "No"}
                    onChange={handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg bg-primaryRed whitespace-nowrap mt-6 min-w-40"
            >
              Enquire Now
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

export default BookAService;
