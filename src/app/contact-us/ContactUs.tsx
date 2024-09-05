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
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  subject: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data:", { ...formData, state: "Odisa" });
    toast.success("Thank You for contacting us. We will get back to you soon!");

    // Uncomment if you want to reset the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="md:pt-20 min-h-40 bg-primaryGray pt-16">
        <div className="h-full min-h-[40vh] flex justify-center items-center text-gray-400 text-3xl">
          Required Banner Image
        </div>
      </div>
      <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
        <div className="mb-12 lg:mb-20 text-lg">
          <h4 className="text-3xl font-bold text-primaryGray mb-3 md:mb-6 ">
            <span className="text-primaryRed">Contact </span> Us
          </h4>
          <div className="grid lg:grid-cols-3 gap-4">
            <form
              onSubmit={handleSubmit}
              id="myForm"
              className="py-3 bg-white lg:col-span-2"
            >
              <div className="w-full gap-4 grid sm:grid-cols-2">
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
                  pattern="^[0-9]{10}$"
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
                <select
                  className="w-full p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Subject*
                  </option>
                  <option value="Car Enquiry">Car Enquiry</option>
                  <option value="Service Booking">Service Booking</option>
                  <option value="Complaints/Queries">Complaints/Queries</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Others">Others</option>
                </select>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleChange}
                  title="Maximum 500 characters allowed"
                  placeholder="Message (Optional)"
                  className="w-full p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none max-h-32 min-h-20 sm:col-span-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg bg-primaryRed whitespace-nowrap mt-6 min-w-40"
              >
                Submit
              </button>
              <p className="mt-6 text-xs text-gray-500">
                *Disclaimer: By clicking &apos;Submit&apos;, you have agreed to
                our Terms and Conditions.
              </p>
            </form>
            <div className="lg:p-4 rounded-lg flex flex-col gap-2 lg:gap-4">
              <div className="flex items-center px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <FaPhoneAlt className="text-5xl text-primaryRed p-3 rounded-full" />
                <div>
                  <p className="font-medium text-primaryRed">Sales:</p>
                  <a
                    href="tel:+91 1234567890"
                    className="text-lg lg:text-xl"
                    aria-label="Call"
                  >
                    +91 1234567890
                  </a>
                </div>
              </div>
              <div className="flex items-center px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <FaPhoneAlt className="text-5xl text-primaryRed p-3 rounded-full" />
                <div>
                  <p className="font-medium text-primaryRed">Service:</p>
                  <a
                    href="tel:+91 1234567890"
                    className="text-lg lg:text-xl"
                    aria-label="Call"
                  >
                    +91 1234567890
                  </a>
                </div>
              </div>
              <div className="flex items-center px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <MdOutlineMailOutline className="text-5xl text-primaryRed p-3 rounded-full" />
                <div>
                  <p className="font-medium text-primaryRed">Email:</p>
                  <a
                    href="mailto:xyz@xyz.xyz"
                    className="text-lg lg:text-xl"
                    aria-label="Email"
                  >
                    xyz@xyz.xyz
                  </a>
                </div>
              </div>
              <div className="flex items-start px-4 bg-secondaryGray4 rounded-lg gap-4 py-3 hover:shadow-xl duration-200 border">
                <div className="min-w-12">
                  <FaMapMarkerAlt className="text-5xl text-primaryRed p-3 rounded-full" />
                </div>
                <div className="overflow-hidden">
                  <p className="font-medium text-primaryRed">Head Office:</p>
                  <a href="mailto:xyz@xyz.xyz" className="" aria-label="Email">
                    NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha
                    760010
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
