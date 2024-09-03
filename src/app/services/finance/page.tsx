"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { models } from "@/constants";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
import EMISlider from "./EMISlider";

// Define the type for the form data
interface FormData {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
}
const Finance: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    model: "",
    city: "",
  });
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [index, setIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<number>(0);

  const MIN1 = 1;
  const MAX1 = 100;
  const steps1 = 0.1;
  const MIN2 = 1;
  const MAX2 = 30;
  const steps2 = 0.01;
  const MIN3 = 1;
  const MAX3 = 30;
  const steps3 = 1;

  const [value1, setValue1] = useState(MIN1);
  const [value2, setValue2] = useState(MIN2);
  const [value3, setValue3] = useState(MIN3);
  const [monthlyEMI, setMonthlyEMI] = useState("8379");
  const [principalAmount, setPrincipalAmount] = useState(100000);
  const [totalInterest, setTotalInterest] = useState(542);
  const [totalAmount, setTotalAmount] = useState(100542);

  const data = models[index];
  // Monthly EMI Calculation
  const calculateEMI = useCallback(() => {
    // Your EMI calculation logic here based on the values of value1, value2, and value3
    // For demonstration, I'm using a simple interest formula
    setPrincipalAmount(value1 * 100000);
    const rateOfInterest = value2 / 100;
    const numberOfPayments = value3 * 12;
    const monthlyInterestRate = rateOfInterest / 12;
    const emi =
      (principalAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return emi;
  }, [value1, value2, value3, principalAmount]);

  useEffect(() => {
    // Update EMI and other related values when any of the sliders change
    const emi = calculateEMI();
    setMonthlyEMI(emi.toFixed());
    setTotalInterest(emi * value3 * 12 - principalAmount);
    setTotalAmount(principalAmount + totalInterest);
    const am = 938 - (principalAmount / totalAmount) * 938;
    // setPerCentag(am);
  }, [
    value1,
    value2,
    value3,
    principalAmount,
    totalInterest,
    totalAmount,
    calculateEMI,
  ]);

  // Function to reset value to initial state

  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Set the min attribute of the date input
    if (dateInputRef.current) {
      dateInputRef.current.min = today;
    }
  }, []);

  const handleClickColor = (index: number): void => {
    setSelectedColor(index);
  };

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
    console.log("Form Data:", { ...formData, state: "Odisa" });
    toast.success("Thank You for contacting us. We will get back to you soon!");

    // Uncomment if you want to reset the form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      model: "",
      city: "",
    });
  };
  return (
    <div className="min-h-screen">
      <Header />
      <img
        src="https://t4.ftcdn.net/jpg/05/49/75/99/240_F_549759962_BBk58nB1v1aNt7cJHEoBZBeD45rIsgkv.jpg"
        alt=""
        className="w-full object-cover max-h-[50vh]"
      />

      <div className="container min-h-[50vh] py-16 mx-auto xl:max-w-7xl lg:py-20 px-2">
        <div className="mb-16 lg:mb-24 mt-8">
          <h4 className="text-3xl font-bold text-primaryGray mb-3 md:mb-6 text-center">
            <span className="text-primaryRed">EMI </span> Calculator
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <h5 className="mb-2 text-xl font-semibold  ">{data?.subName}</h5>
              <p className="">
                Start from{" "}
                <span className="text-primaryRed font-bold ">
                  {data?.variants[0].price}
                </span>{" "}
              </p>
              <div className="flex items-center gap-2">
                <span className=" text-primaryGray">Select the Model</span>{" "}
                <select
                  className="w-min p-2 bg-transparent border-b-2 border-b-primaryRed focus:outline-none mb-4"
                  name="index"
                  required
                  value={index}
                  onChange={(e) => setIndex(+e.target.value)}
                >
                  {/* <option value="" disabled>
                    Model*
                  </option> */}
                  <optgroup label="Arena" className="text-sm text-primaryGray">
                    <option value="0">Alto K10</option>
                    <option value="1">Swift</option>
                    <option value="2">Brezza</option>
                    <option value="3">Dzire</option>
                    <option value="4">S-Presso</option>
                    <option value="5">Wagon R</option>
                    <option value="6">Ertiga</option>
                    <option value="7">Celerio</option>
                    <option value="8">Eeco</option>
                  </optgroup>
                  <optgroup label="Nexa" className="text-sm text-primaryGray">
                    <option value="9">Jimny</option>
                    <option value="10">Fronx</option>
                    <option value="16">Invicto</option>
                    <option value="11">Grand Vitara</option>
                    <option value="12">XL6</option>
                    <option value="13">Ciaz</option>
                    <option value="14">Baleno</option>
                    <option value="15">Ignis</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <img
                  src={data?.colors[selectedColor].img}
                  alt={data?.colors[selectedColor].colName}
                />
                <h5 className="mb-5 text-xl font-medium text-center">
                  {data?.colors[selectedColor].colName}
                </h5>
                <div className="flex flex-wrap justify-center gap-3">
                  {data?.colors.map((color, index) => (
                    <div
                      key={index}
                      onClick={() => handleClickColor(index)}
                      className={`w-6 h-6 rounded-full cursor-pointer border flex justify-center items-center text-white ${
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
            <div className="">
              <div className="mb-3">
                <div className="flex items-end justify-between mb-2 ">
                  <div className="text-xl font-semibold ">Loan Amount</div>
                  <div className=" bg-primaryRed text-white pr-3 py-1 w-36 text-right rounded-lg">
                    <span className="pr-2 text-sm font-ligh6">₹</span>{" "}
                    <span className="font-bold"> {value1}</span>
                    <span className="pl-2 text-sm font-normal ">Lakhs</span>
                  </div>
                </div>

                <EMISlider
                  MIN={MIN1}
                  value={value1}
                  setValue={setValue1}
                  steps={steps1}
                  MAX={MAX1}
                  points={[]}
                />
              </div>
              <div className="mb-3">
                <div className="flex items-end justify-between mb-2 ">
                  <div className="text-xl font-semibold ">
                    Rate of interest (p.a)
                  </div>
                  <div className=" bg-primaryRed text-white pr-3 py-1 w-36 text-right rounded-lg">
                    {value2}
                    <span className="pl-2 text-sm font-normal">%</span>
                  </div>
                </div>

                <EMISlider
                  MIN={MIN2}
                  value={value2}
                  setValue={setValue2}
                  steps={steps2}
                  MAX={MAX2}
                  points={[]}
                />
              </div>
              <div className="mb-10">
                <div className="flex items-end justify-between mb-2 ">
                  <div className="text-xl font-semibold ">Loan tenure</div>
                  <div className=" bg-primaryRed text-white pr-3 py-1 w-36 text-right rounded-lg">
                    {value3}
                    <span className="pl-2 text-sm font-normal">Years</span>
                  </div>
                </div>
                <EMISlider
                  MIN={MIN3}
                  value={value3}
                  setValue={setValue3}
                  steps={steps3}
                  MAX={MAX3}
                  points={[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  ]}
                />
              </div>

              <div className="flex justify-center gap-4 text-center">
                <div className="flex justify-center items-center shadow-md min-h-20 min-w-20 rounded-lg flex-col p-6 w-full  ">
                  <p className=" font-medium text-primaryRed pb-2 ">
                    Monthly EMI{" "}
                  </p>
                  <div className="text-xl">
                    ₹
                    {monthlyEMI
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </div>
                <div className="flex justify-center items-center shadow-md min-h-20 min-w-20 rounded-lg flex-col p-6 w-full ">
                  <p className=" font-medium text-primaryRed pb-2 ">
                    Principle Amount
                  </p>
                  <div className="text-xl">
                    ₹
                    {principalAmount
                      .toFixed()
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </div>
                <div className="flex justify-center items-center shadow-md min-h-20 min-w-20 rounded-lg flex-col p-6 w-full ">
                  <p className=" font-medium text-primaryRed pb-2 ">
                    Total Amount
                  </p>
                  <div className="text-xl">
                    ₹
                    {totalAmount
                      .toFixed()
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm">
                Note: Drag the slider above to change the values
              </p>
            </div>
          </div>
        </div>
        <h4 className="text-3xl font-bold text-primaryGray mb-3 text-center">
          Apply for <span className="text-primaryRed">Finance </span> Now
        </h4>
        <form onSubmit={handleSubmit} id="myForm" className="py-3 bg-white ">
          <h5 className="mb-2 text-xl font-semibold ">Personal Details</h5>
          <div className="w-full gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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
            className="px-2 py-2 text-sm text-white duration-500 border rounded-md md:text-sm md:px-4 hover:shadow-lg bg-primaryRed whitespace-nowrap mt-6 min-w-40"
          >
            Enquire Now
          </button>
          <p className="mt-6 text-xs text-gray-500">
            *Disclaimer: By clicking &apos;Submit&apos;, you have agreed to our
            Terms and Conditions.
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Finance;
