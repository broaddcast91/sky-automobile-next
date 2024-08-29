// const { BsFuelPump } = require("react-icons/bs");
// const { GiSpeedometer } = require("react-icons/gi");
// const { PiEngine } = require("react-icons/pi");

export const models = [
  // Maruti ALTO K10
  {
    name: " Maruti ALTO K10",
    subName: "ALTO K10",
    colors: [
      {
        img: "/images/car/arena/altok10/altok-10-metallic-sizzling-red1.png",
        colorCode: "#d51716",
        colName: "Metallic Sizzling Red",
      },
      {
        img: "/images/car/arena/altok10/altok-10-metallic-granite-gray1.png",
        colorCode: "#797a83",
        colName: "Metallic Granite Grey",
      },
      {
        img: "/images/car/arena/altok10/altok-10-premium-earth-gold.png",
        colorCode: "#5e4923",
        colName: "Premium Earth Gold",
      },
      {
        img: "/images/car/arena/altok10/altok-10-metallic-silky-silver1.png",
        colorCode: "#9b9aa0",
        colName: "Metallic Silky Silver",
      },
      {
        img: "/images/car/arena/altok10/altok-10-metallic-speedy-blue.png",
        colorCode: "#2249b5",
        colName: "Metallic Speedy Blue",
      },
      {
        img: "/images/car/arena/altok10/altok-10-solid-white1.png",
        colorCode: "#e4e4e6",
        colName: "Solid White",
      },
      {
        img: "/images/car/arena/altok10/altok-10-pearl-midnight-black.png",
        colorCode: "#050505",
        colName: "Midnight Black",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "55 Litres" },
      { label: "Seating Capacity", value: "4, 5" },
      { label: "Length", value: "3530 mm" },
      { label: "Width", value: "1490 mm" },
      { label: "Height", value: "1520 mm" },
      {
        label: "Front Suspension",
        value: "Mac Pherson Strut with Coil Spring",
      },
      { label: "Rear Suspension", value: "Torsion Beam with Coil Spring" },
      { label: "Fuel Type", value: "Petrol, CNG" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "82.1Nm@3400rpm" },
      { label: "Transmission Type", value: "Manual" },
      { label: "Body Type", value: "Hatchback" },
      { label: "Wheel Base", value: "2380 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],
    sliderImages: [
      "/images/car/arena/altok10/exterior_web_01.webp",
      "/images/car/arena/altok10/exterior_web_02.webp",
      "/images/car/arena/altok10/exterior_web_03.webp",
      "/images/car/arena/altok10/exterior_web_04.webp",
      "/images/car/arena/altok10/exterior_web_05.webp",
      "/images/car/arena/altok10/Interior_web_1.webp",
      "/images/car/arena/altok10/Interior_web_2.webp",
      "/images/car/arena/altok10/Interior_web_3.webp",
      "/images/car/arena/altok10/High_web_05.webp",
    ],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: "998 cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: "24.39 kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: "49 kW @ 5500 rpm",
      },
    ],
    variants: [
      { variant: "Alto STD", transmission: "Manual", price: "₹ 5.25 Lakh" },
      { variant: "Alto LXI", transmission: "Manual", price: "₹ 5.35 Lakh" },
      { variant: "Alto VXI", transmission: "Manual", price: "₹ 5.45 Lakh" },
      { variant: "Alto VXI CNG", transmission: "Manual", price: "₹ 5.55 Lakh" },
      { variant: "Alto VXI+", transmission: "Manual", price: "₹ 5.55 Lakh" },
      {
        variant: "Alto VXI AGS",
        transmission: "Automatic",
        price: "₹ 5.55 Lakh",
      },
      {
        variant: "Alto VXI+ AGS",
        transmission: "Automatic",
        price: "₹ 5.55 Lakh",
      },
    ],
    priceRange: `₹7.49L - ₹15.49L *`,
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Alto-Brochure-and-Spec-Sheet.pdf",
  },

  // Maruti Swift
  {
    name: "Maruti Swift",
    subName: "Swift",
    colors: [
      {
        img: "/images/car/arena/swift/new-swift-sizzling-red-with-midnight-black-roof.png",
        colorCode: "#EA373B",
        colName: "Solid Fire Red with Pearl Midnight Black Roof",
      },
      {
        img: "/images/car/arena/swift/new-swift-magma-grey.png",
        colorCode: "#848481",
        colName: "Metallic Magma Grey",
      },
      {
        img: "/images/car/arena/swift/new-swift-luster-orange.png",
        colorCode: "#C54617",
        colName: "Pearl Metallic Lucent Orange",
      },
      {
        img: "/images/car/arena/swift/new-swift-luster-blue.png",
        colorCode: "#0C366B",
        colName: "Pearl Metallic Midnight Blue",
      },
      {
        img: "/images/car/arena/swift/new-swift-sizzling-red.png",
        colorCode: "#D92826",
        colName: "Sizzling Red",
      },
      {
        img: "/images/car/arena/swift/new-swift-luster-blue-with-midnight-black-roof.png",
        colorCode: "#0D3669",
        colName: "Pearl Metallic Midnight Blue with Black Roof",
      },
      {
        img: "/images/car/arena/swift/new-swift-pearlr-arctic-white-with-midnight-black-roof.png",
        colorCode: "#D6D6D6",
        colName: "Pearl Arctic White with Midnight Black Roof",
      },
      {
        img: "/images/car/arena/swift/new-swift-splendid-silver.png",
        colorCode: "#989999",
        colName: "Metallic Splendid Silver",
      },
      {
        img: "/images/car/arena/swift/new-swift-pearl-arctic-white.png",
        colorCode: "#D1D1D1",
        colName: "Pearl Arctic White",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "37 Litres" },
      { label: "Seating Capacity", value: "5" },
      { label: "Length", value: "3860 mm" },
      { label: "Width", value: "1735 mm" },
      { label: "Height", value: "1520 mm" },
      {
        label: "Front Suspension",
        value: "MacPherson Strut ",
      },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "111.7 Nm @ 4300 rpm" },
      { label: "Transmission Type", value: "Manual" },
      { label: "Body Type", value: "Hatchback" },
      { label: "Wheel Base", value: "2450 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],
    sliderImages: [
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-1.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-2.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-3.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-4.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-5.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-6.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-1.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-2.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-3.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-4.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-5.webp",
      "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-6.webp",
    ],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: "1197 cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: "24.8 kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: "60 kW @ 5700 rpm",
      },
    ],
    variants: [
      { variant: "Swift LXI ", transmission: "Manual", price: "₹ 6.25  Lakh" },
      { variant: "Swift VXI ", transmission: "Manual", price: "₹ 6.25  Lakh" },
      {
        variant: "Swift VXI AGS",
        transmission: "Automatic",
        price: "₹ 6.25  Lakh",
      },
      {
        variant: "Swift VXI (O) ",
        transmission: "Manual",
        price: "₹ 6.25  Lakh",
      },
      {
        variant: "Swift VXI (O) AGS ",
        transmission: "Automatic",
        price: "₹ 6.25  Lakh",
      },
      { variant: "Swift ZXI ", transmission: "Manual", price: "₹ 6.25  Lakh" },
      {
        variant: "Swift ZXI AGS ",
        transmission: "Automatic",
        price: "₹ 6.25  Lakh",
      },
      { variant: "Swift ZXI+ ", transmission: "Manual", price: "₹ 6.25  Lakh" },
      {
        variant: "Swift ZXI+ DT ",
        transmission: "Manual",
        price: "₹ 6.25  Lakh",
      },
      {
        variant: "Swift ZXI+ AGS ",
        transmission: "Automatic",
        price: "₹ 6.25  Lakh",
      },
      {
        variant: "Swift ZXI+ AGS (D) ",
        transmission: "Automatic",
        price: "₹ 6.25  Lakh",
      },
    ],
    priceRange: `₹ 6.49-9.5 Lakhs *`,
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Vertical_Brochure_NEW.pdf",
  },
  // Maruti ALTO 800
  {
    name: " ",
    subName: "",
    colors: [
      {
        img: "/images/car/arena/",
        colorCode: "#d51716",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#797a83",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#5e4923",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#9b9aa0",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#2249b5",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#e4e4e6",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#050505",
        colName: "",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: " Litres" },
      { label: "Seating Capacity", value: "" },
      { label: "Length", value: " mm" },
      { label: "Width", value: " mm" },
      { label: "Height", value: " mm" },
      {
        label: "Front Suspension",
        value: "",
      },
      { label: "Rear Suspension", value: "" },
      { label: "Fuel Type", value: "" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "" },
      { label: "Transmission Type", value: "" },
      { label: "Body Type", value: "" },
      { label: "Wheel Base", value: " mm" },
      { label: "Gearbox", value: "-Speed" },
    ],
    sliderImages: ["", "", "", "", "", "", ""],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: " cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: " kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: " kW @  rpm",
      },
    ],
    variants: [
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
    ],
    priceRange: `₹L - ₹L *`,
    brochure: "",
  },
  // Maruti ALTO 800
  {
    name: " ",
    subName: "",
    colors: [
      {
        img: "/images/car/arena/",
        colorCode: "#d51716",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#797a83",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#5e4923",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#9b9aa0",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#2249b5",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#e4e4e6",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#050505",
        colName: "",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: " Litres" },
      { label: "Seating Capacity", value: "" },
      { label: "Length", value: " mm" },
      { label: "Width", value: " mm" },
      { label: "Height", value: " mm" },
      {
        label: "Front Suspension",
        value: "",
      },
      { label: "Rear Suspension", value: "" },
      { label: "Fuel Type", value: "" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "" },
      { label: "Transmission Type", value: "" },
      { label: "Body Type", value: "" },
      { label: "Wheel Base", value: " mm" },
      { label: "Gearbox", value: "-Speed" },
    ],
    sliderImages: ["", "", "", "", "", "", ""],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: " cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: " kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: " kW @  rpm",
      },
    ],
    variants: [
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
    ],
    priceRange: `₹L - ₹L *`,
    brochure: "",
  },
  // Maruti ALTO 800
  {
    name: " ",
    subName: "",
    colors: [
      {
        img: "/images/car/arena/",
        colorCode: "#d51716",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#797a83",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#5e4923",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#9b9aa0",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#2249b5",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#e4e4e6",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#050505",
        colName: "",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: " Litres" },
      { label: "Seating Capacity", value: "" },
      { label: "Length", value: " mm" },
      { label: "Width", value: " mm" },
      { label: "Height", value: " mm" },
      {
        label: "Front Suspension",
        value: "",
      },
      { label: "Rear Suspension", value: "" },
      { label: "Fuel Type", value: "" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "" },
      { label: "Transmission Type", value: "" },
      { label: "Body Type", value: "" },
      { label: "Wheel Base", value: " mm" },
      { label: "Gearbox", value: "-Speed" },
    ],
    sliderImages: ["", "", "", "", "", "", ""],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: " cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: " kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: " kW @  rpm",
      },
    ],
    variants: [
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
    ],
    priceRange: `₹L - ₹L *`,
    brochure: "",
  },
  // Maruti ALTO 800
  {
    name: " ",
    subName: "",
    colors: [
      {
        img: "/images/car/arena/",
        colorCode: "#d51716",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#797a83",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#5e4923",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#9b9aa0",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#2249b5",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#e4e4e6",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#050505",
        colName: "",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: " Litres" },
      { label: "Seating Capacity", value: "" },
      { label: "Length", value: " mm" },
      { label: "Width", value: " mm" },
      { label: "Height", value: " mm" },
      {
        label: "Front Suspension",
        value: "",
      },
      { label: "Rear Suspension", value: "" },
      { label: "Fuel Type", value: "" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "" },
      { label: "Transmission Type", value: "" },
      { label: "Body Type", value: "" },
      { label: "Wheel Base", value: " mm" },
      { label: "Gearbox", value: "-Speed" },
    ],
    sliderImages: ["", "", "", "", "", "", ""],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: " cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: " kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: " kW @  rpm",
      },
    ],
    variants: [
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
    ],
    priceRange: `₹L - ₹L *`,
    brochure: "",
  },
  // Maruti ALTO 800
  {
    name: " ",
    subName: "",
    colors: [
      {
        img: "/images/car/arena/",
        colorCode: "#d51716",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#797a83",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#5e4923",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#9b9aa0",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#2249b5",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#e4e4e6",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#050505",
        colName: "",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: " Litres" },
      { label: "Seating Capacity", value: "" },
      { label: "Length", value: " mm" },
      { label: "Width", value: " mm" },
      { label: "Height", value: " mm" },
      {
        label: "Front Suspension",
        value: "",
      },
      { label: "Rear Suspension", value: "" },
      { label: "Fuel Type", value: "" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "" },
      { label: "Transmission Type", value: "" },
      { label: "Body Type", value: "" },
      { label: "Wheel Base", value: " mm" },
      { label: "Gearbox", value: "-Speed" },
    ],
    sliderImages: ["", "", "", "", "", "", ""],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: " cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: " kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: " kW @  rpm",
      },
    ],
    variants: [
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
    ],
    priceRange: `₹L - ₹L *`,
    brochure: "",
  },
  // Maruti ALTO 800
  {
    name: " ",
    subName: "",
    colors: [
      {
        img: "/images/car/arena/",
        colorCode: "#d51716",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#797a83",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#5e4923",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#9b9aa0",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#2249b5",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#e4e4e6",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#050505",
        colName: "",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: " Litres" },
      { label: "Seating Capacity", value: "" },
      { label: "Length", value: " mm" },
      { label: "Width", value: " mm" },
      { label: "Height", value: " mm" },
      {
        label: "Front Suspension",
        value: "",
      },
      { label: "Rear Suspension", value: "" },
      { label: "Fuel Type", value: "" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "" },
      { label: "Transmission Type", value: "" },
      { label: "Body Type", value: "" },
      { label: "Wheel Base", value: " mm" },
      { label: "Gearbox", value: "-Speed" },
    ],
    sliderImages: ["", "", "", "", "", "", ""],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: " cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: " kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: " kW @  rpm",
      },
    ],
    variants: [
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
    ],
    priceRange: `₹L - ₹L *`,
    brochure: "",
  },
  // Maruti ALTO 800
  {
    name: " ",
    subName: "",
    colors: [
      {
        img: "/images/car/arena/",
        colorCode: "#d51716",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#797a83",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#5e4923",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#9b9aa0",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#2249b5",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#e4e4e6",
        colName: "",
      },
      {
        img: "/images/car/arena/",
        colorCode: "#050505",
        colName: "",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: " Litres" },
      { label: "Seating Capacity", value: "" },
      { label: "Length", value: " mm" },
      { label: "Width", value: " mm" },
      { label: "Height", value: " mm" },
      {
        label: "Front Suspension",
        value: "",
      },
      { label: "Rear Suspension", value: "" },
      { label: "Fuel Type", value: "" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "" },
      { label: "Transmission Type", value: "" },
      { label: "Body Type", value: "" },
      { label: "Wheel Base", value: " mm" },
      { label: "Gearbox", value: "-Speed" },
    ],
    sliderImages: ["", "", "", "", "", "", ""],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: " cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: " kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: " kW @  rpm",
      },
    ],
    variants: [
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
      { variant: "", transmission: "", price: "₹  Lakh" },
    ],
    priceRange: `₹L - ₹L *`,
    brochure: "",
  },
];
