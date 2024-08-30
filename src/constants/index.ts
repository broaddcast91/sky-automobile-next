// const { BsFuelPump } = require("react-icons/bs");
// const { GiSpeedometer } = require("react-icons/gi");
// const { PiEngine } = require("react-icons/pi");

export const models = [
  //0- Maruti ALTO K10
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

    exterior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/exterior/exterior_web_01.webp",
        title: "Honeycomb Grille",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/exterior/exterior_web_02.webp",
        title: "Peppy Headlamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/exterior/exterior_web_03.webp",
        title: "Trendy Rear Combination Lamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/exterior/exterior_web_04.webp",
        title: "13''(33.02cm) Wheels with Honeycomb-Themed Covers",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/exterior/exterior_web_05.webp",
        title: "Reverse Parking Sensors",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/interior/interior_web_01.webp",
        title: "Lively and Spacious Interior",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/interior/interior_web_02.webp",
        title: "Smartplay Studio with Smartphone Navigation",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/interior/interior_web_03.webp",
        title: "Steering-Mounted Audio and Voice Control",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/highlights/highlight_web_01.webp",
        title: "Auto Gear Shift Technology",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/topgun-launch-2022/highlights/highlight_web_05.webp",
        title: "1st in Segment 4 Speakers",
      },
      // {
      //   img: "",
      //   title: "",
      // },
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

  //1- Maruti Swift
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

    exterior: [
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-2.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-3.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-4.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-5.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/exterior/ex-6.webp",
        title: "",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-1.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-2.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-4.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-5.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-7.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-6.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-8.webp",
        title: "",
      },
      {
        img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/cars/swift-2024/slider/interior/in-9.webp",
        title: "",
      },
      // {
      //   img: "",
      //   title: "",
      // },
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
  //2- Maruti Brezza
  {
    name: " Maruti Brezza ",
    subName: "Brezza",
    colors: [
      {
        img: "/images/car/arena/brezza/brave_khaki.webp",
        colorCode: "#5D5135",
        colName: "Brave Khaki",
      },
      {
        img: "/images/car/arena/brezza/exuberant_blue.webp",
        colorCode: "#264B9C",
        colName: "Exuberant Blue",
      },
      {
        img: "/images/car/arena/brezza/magna_grey.webp",
        colorCode: "#8D8D8D",
        colName: "Magna Grey",
      },
      {
        img: "/images/car/arena/brezza/pearl+_arctic_white_roof.webp",
        colorCode: "#655A3E",
        colName: "Brave Khaki Pearl Artic White",
      },
      {
        img: "/images/car/arena/brezza/pearl_arctic_white.webp",
        colorCode: "#F7F7F7",
        colName: "Pearl Arctic White",
      },
      {
        img: "/images/car/arena/brezza/sizzling_red.webp",
        colorCode: "#E62924",
        colName: "Sizzling Red",
      },
      {
        img: "/images/car/arena/brezza/sizzling_red_black_roof.webp",
        colorCode: "#C70E1E",
        colName: "Sizzling Red Black Roof",
      },
      {
        img: "/images/car/arena/brezza/splendid_silver_black_roof.webp",
        colorCode: "#B8BBC0",
        colName: "Splendid Silver Mid Night Black Roof",
      },
      {
        img: "/images/car/arena/brezza/splendid_silver.webp",
        colorCode: "#C5C5C5",
        colName: "Splendid Silver",
      },
      {
        img: "/images/car/arena/brezza/brezza-black.webp",
        colorCode: "#000",
        colName: "Midnight Black",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "48 Litres" },
      { label: "Seating Capacity", value: "5" },
      { label: "Length", value: "3995 mm" },
      { label: "Width", value: "1790 mm" },
      { label: "Height", value: "1685 mm" },
      {
        label: "Front Suspension",
        value: "MacPherson Strut ",
      },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Fuel Type", value: "Petrol/CNG" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "136.8 Nm @ 4400 rpm" },
      { label: "Transmission Type", value: "Manual & Automatic" },
      { label: "Body Type", value: "SUVS" },
      { label: "Wheel Base", value: "2500 mm" },
      { label: "Gearbox", value: "-Speed" },
    ],

    exterior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/exterior/exterior_web_01.webp",
        title: "Dual LED Projector Headlamps with LED DRLs",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/exterior/exterior_web_02.webp",
        title: "LED Tail Lamp",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/exterior/exterior_web_03.webp",
        title: "Chrome Accentuated Front Grille",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/exterior/exterior_web_04.webp",
        title: "Shark fin Antenna",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/exterior/exterior_web_05.webp",
        title: "Bold Geometric Alloy Wheels",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/interiors/interior_web_01.webp",
        title: "Interior Ambient Lighting",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/interiors/interior_web_02.webp",
        title: "Black and Brown Interiors",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/interiors/interior_web_03.webp",
        title: "Rear AC Vents",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/interiors/interior_web_04.webp",
        title: "Wide Cabin Space",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/new-brezza-launch-2022/interiors/interior_web_05.webp",
        title: "Flat Bottom Steering Wheel",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      {
        // icon: <GiSpeedometer className="text-4xl" />,
        label: "Engine",
        value: "1462 cc",
      },
      {
        // icon: <BsFuelPump className="text-4xl" />,
        label: "Mileage",
        value: "20.15 kmpl",
      },
      {
        // icon: <PiEngine className="text-4xl" />,
        label: "Power",
        value: "75.8 kW @ 6000 rpm",
      },
    ],
    variants: [
      { variant: "Brezza LXI", transmission: "Manual", price: "₹ 8.34 Lakh" },
      { variant: "Brezza VXI", transmission: "Manual", price: "₹ 8.34 Lakh" },
      {
        variant: "Brezza VXI AT",
        transmission: "Automatic",
        price: "₹ 8.34 Lakh",
      },
      { variant: "Brezza ZXI", transmission: "Manual", price: "₹ 8.34 Lakh" },
      {
        variant: "Brezza ZXI (D)",
        transmission: "Manual",
        price: "₹ 8.34 Lakh",
      },
      {
        variant: "Brezza ZXI AT",
        transmission: "Automatic",
        price: "₹ 8.34 Lakh",
      },
      {
        variant: "Brezza ZXI AT (D)",
        transmission: "Automatic",
        price: "₹ 8.34 Lakh",
      },
      { variant: "Brezza ZXI+", transmission: "Manual", price: "₹ 8.34 Lakh" },
      {
        variant: "Brezza ZXI+ (D)",
        transmission: "Manual",
        price: "₹ 8.34 Lakh",
      },
      {
        variant: "Brezza ZXI+ AT",
        transmission: "Automatic",
        price: "₹ 8.34 Lakh",
      },
      {
        variant: "Brezza ZXI+ AT (D)",
        transmission: "Automatic",
        price: "₹ 8.34 Lakh",
      },

      {
        variant: "Brezza LXI (O) CNG",
        transmission: "Manual",
        price: "₹ 8.34 Lakh",
      },
      {
        variant: "Brezza VXI (O) CNG",
        transmission: "Manual",
        price: "₹ 8.34 Lakh",
      },
      {
        variant: "Brezza ZXI (O) CNG (D)",
        transmission: "Manual",
        price: "₹ 8.34 Lakh",
      },
      {
        variant: "Brezza ZXI (O) CNG",
        transmission: "Manual",
        price: "₹ 8.34 Lakh",
      },
    ],
    priceRange: `₹ 8.34 - 14.14 Lakh *`,
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/9299_S_Brezza_6_Page_CNG_Brochure.pdf",
  },
  //3- Maruti Dzire  (pending gallery)
  {
    name: "Maruti Dzire",
    subName: "Dzire",
    colors: [
      {
        img: "/images/car/arena/dzire/dzire-oxford-blue.png",
        colorCode: "#293d6c",
        colName: "Oxford Blue",
      },
      {
        img: "/images/car/arena/dzire/dzire-artic-white.png",
        colorCode: "#ffffff",
        colName: "Arctic White",
      },
      {
        img: "/images/car/arena/dzire/dzire-phoenix-red.png",
        colorCode: "#8d2c34",
        colName: "Gallant Red",
      },
      {
        img: "/images/car/arena/dzire/dzire-magma-grey.png",
        colorCode: "#2d3137",
        colName: "Magma Grey",
      },
      {
        img: "/images/car/arena/dzire/dzire-sherwood-brown.png",
        colorCode: "#524134",
        colName: "Sherwood Brown",
      },
      {
        img: "/images/car/arena/dzire/dzire-splendid-sliver.png",
        colorCode: "#7c8488",
        colName: "Silky Silver",
      },
    ],
    // colors: [
    //   {
    //     img: "/images/car/arena/dzire/silky_silver.webp",
    //     colorCode: "#C0C0C0",
    //     colName: "Silky Silver",
    //   },
    //   {
    //     img: "/images/car/arena/dzire/space_silver.webp",
    //     colorCode: "#BEBEBE",
    //     colName: "Space Silver",
    //   },
    //   {
    //     img: "/images/car/arena/dzire/premium_silver.webp",
    //     colorCode: "#D3D3D3",
    //     colName: "Premium Silver",
    //   },
    //   {
    //     img: "/images/car/arena/dzire/phoenix_red.webp",
    //     colorCode: "#C8102E",
    //     colName: "Phoenix Red",
    //   },
    //   {
    //     img: "/images/car/arena/dzire/serene_blue.webp",
    //     colorCode: "#003C6C",
    //     colName: "Serene Blue",
    //   },
    //   {
    //     img: "/images/car/arena/dzire/arctic_white.webp",
    //     colorCode: "#F7F7F7",
    //     colName: "Arctic White",
    //   },
    //   {
    //     img: "/images/car/arena/dzire/midnight_black.webp",
    //     colorCode: "#000000",
    //     colName: "Midnight Black",
    //   },
    //   {
    //     img: "/images/car/arena/dzire/sangria_red.webp",
    //     colorCode: "#C8102E",
    //     colName: "Sangria Red",
    //   },
    // ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "37 Litres" },
      { label: "Seating Capacity", value: "5" },
      { label: "Length", value: "3995 mm" },
      { label: "Width", value: "1735 mm" },
      { label: "Height", value: "1555 mm" },
      { label: "Front Suspension", value: "MacPherson Strut" },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Fuel Type", value: "Petrol/CNG" },
      { label: "No. of Cylinders", value: "4" },
      { label: "Max Torque", value: "113 Nm @ 4200 rpm" },
      { label: "Transmission Type", value: "Manual & Automatic" },
      { label: "Body Type", value: "Sedan" },
      { label: "Wheel Base", value: "2450 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],

    exterior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/exterior/exterior_web_01.webp",
        title: "Auto-Foldable ORVMs",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/exterior/exterior_web_02.webp",
        title: " Premium Single Aperture Grille For Striking Appearance",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/exterior/exterior_web_04.webp",
        title: "  Fog Lamps With Bold Chrome Accents",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/exterior/exterior_web_03.webp",
        title: "Precision-Cut Two-Tone Alloy Wheels",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/exterior/exterior_web_05.webp",
        title: "LED Projector Headlamps & DRLs",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/interior/interior_web_01.webp",
        title: "Premium Trims with Champagne Accents",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/interior/interior_web_04.webp",
        title: "Exclusive Wood Finish With Natural Gloss Effect",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/interior/interior_web_02.webp",
        title: "Rear AC Vent",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/interior/interior_web_05.webp",
        title: "Rear Armrest with Cupholder",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/dzire-launch-2022/interior/interior_web_03.webp",
        title: "Coloured Multi-Information Display",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: "Engine", value: "1197 cc" },
      { label: "Mileage", value: "23.26 kmpl" },
      { label: "Power", value: "66.7 kW @ 6000 rpm" },
    ],
    variants: [
      { variant: "Dzire LXI", transmission: "Manual", price: "₹ 6.80 Lakh" },
      { variant: "Dzire VXI", transmission: "Manual", price: "₹ 7.30 Lakh" },
      {
        variant: "Dzire VXI AT",
        transmission: "Automatic",
        price: "₹ 8.00 Lakh",
      },
      { variant: "Dzire ZXI", transmission: "Manual", price: "₹ 8.30 Lakh" },
      {
        variant: "Dzire ZXI AT",
        transmission: "Automatic",
        price: "₹ 8.80 Lakh",
      },
      { variant: "Dzire ZXI+ ", transmission: "Manual", price: "₹ 8.90 Lakh" },
      {
        variant: "Dzire ZXI+ AT",
        transmission: "Automatic",
        price: "₹ 9.50 Lakh",
      },
      {
        variant: "Dzire LXI (O) CNG",
        transmission: "Manual",
        price: "₹ 7.00 Lakh",
      },
      {
        variant: "Dzire VXI (O) CNG",
        transmission: "Manual",
        price: "₹ 7.50 Lakh",
      },
    ],
    priceRange: "₹ 6.80 - 9.50 Lakh *",
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Dzire_6_Pages_Vertical_Web_Brochure_Updated_with_S_CNG.pdf",
  },

  //4- Maruti S-Presso
  {
    name: "Maruti S-Presso",
    subName: "S-Presso",
    colors: [
      {
        img: "/images/car/arena/spresso/s-presso-pearl-starry-blue.png",
        colorCode: "#0159c3",
        colName: "Pearl Starry Blue",
      },
      {
        img: "/images/car/arena/spresso/s-presso-solid-sizzle-orange.png",
        colorCode: "#e95a12",
        colName: "Solid Sizzle Orange",
      },
      {
        img: "/images/car/arena/spresso/s-presso-solid-fire-red.png",
        colorCode: "#f40419",
        colName: "Solid Fire Red",
      },
      {
        img: "/images/car/arena/spresso/s-presso-solid-white.png",
        colorCode: "#f5f8fa",
        colName: "Solid White",
      },
      {
        img: "/images/car/arena/spresso/s-presso-metallic-granite-grey.png",
        colorCode: "#5f6166",
        colName: "Metallic Granite Grey",
      },
      {
        img: "/images/car/arena/spresso/s-presso-metallic-sliky-sliver.png",
        colorCode: "#838487",
        colName: "Metallic Silky Silver",
      },
      {
        img: "/images/car/arena/spresso/s-presso-pearl-midnight-black.png",
        colorCode: "#0f0f0f",
        colName: "Midnight Black",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "27 Litres" },
      { label: "Seating Capacity", value: "5" },
      { label: "Length", value: "3445 mm" },
      { label: "Width", value: "1495 mm" },
      { label: "Height", value: "1495 mm" },
      { label: "Front Suspension", value: "MacPherson Strut" },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Fuel Type", value: "Petrol/CNG" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "90 Nm @ 3500 rpm" },
      { label: "Transmission Type", value: "Manual" },
      { label: "Body Type", value: "Hatchback" },
      { label: "Wheel Base", value: "2360 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],

    exterior: [
      // {
      //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/highlights/highlight_web_01.webp",
      //   title: "Dynamic Center Console with Smartplay Studio",
      // },
      // {
      //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/highlights/highlight_web_02.webp",
      //   title: "Strong Heartect Platform",
      // },
      // {
      //   img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/highlights/highlight_web_05.webp",
      //   title: "Auto-Gear Shift Technology",
      // },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/exterior/exterior_web_01.webp",
        title: "Signature C-Shaped Tail Lamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/exterior/exterior_web_02.webp",
        title: "Twin Chamber Headlamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/exterior/exterior_web_05.webp",
        title: "Squarish Wheel Arches with 14'' Tyres",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/exterior/exterior_web_03.webp",
        title: "Electrically Adjustable Body Coloured ORVMs",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/exterior/exterior_web_04.webp",
        title: "SUV-Inspired Bold Front Fascia",
      },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/interior/interior_web_01.webp",
        title: "Best-in-its-Class Rear Legroom",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/interior/interior_web_02.webp",
        title: "Wide and Spacious Boot",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/interior/interior_web_03.webp",
        title: "Higher Seating for a Commanding Position",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/interior/interior_web_04.webp",
        title: "Front Utility Spaces",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/s-presso-launch-2022/interior/interior_web_05.webp",
        title: "Rear Utility Spaces",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: "Engine", value: "998 cc" },
      { label: "Mileage", value: "21.4 kmpl" },
      { label: "Power", value: "50 kW @ 5500 rpm" },
    ],
    variants: [
      { variant: "S-Presso STD", transmission: "Manual", price: "₹ 4.27 Lakh" },
      { variant: "S-Presso LXI", transmission: "Manual", price: "₹ 4.48 Lakh" },
      { variant: "S-Presso VXI", transmission: "Manual", price: "₹ 4.85 Lakh" },
      {
        variant: "S-Presso VXI+ ",
        transmission: "Manual",
        price: "₹ 5.24 Lakh",
      },
      {
        variant: "S-Presso VXI AT",
        transmission: "Automatic",
        price: "₹ 5.51 Lakh",
      },
      {
        variant: "S-Presso VXI+ AT",
        transmission: "Automatic",
        price: "₹ 5.90 Lakh",
      },
      {
        variant: "S-Presso LXI (O) CNG",
        transmission: "Manual",
        price: "₹ 5.08 Lakh",
      },
      {
        variant: "S-Presso VXI (O) CNG",
        transmission: "Manual",
        price: "₹ 5.39 Lakh",
      },
    ],
    priceRange: "₹ 4.27 - 5.90 Lakh *",
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/SpressoBrochure_Spresso_6_pager_brochure_Red_car_A4_Digital_new.pdf",
  },

  // Maruti WagonR 5
  {
    name: "Maruti WagonR",
    subName: "Wagon R",
    colors: [
      {
        img: "/images/car/arena/wagonr/wagonr-poolside-blue.png",
        colorCode: "#789ec9",
        colName: "Poolside Blue",
      },
      {
        img: "/images/car/arena/wagonr/wagonr-silky-silver.png",
        colorCode: "#6b6d74",
        colName: "Silky Silver",
      },
      {
        img: "/images/car/arena/wagonr/wagonr-midnight-black-plus-gallant-red1.png",
        colorCode: "#b7272b",
        colName: "Prime Gallant Red Dual",
      },
      {
        img: "/images/car/arena/wagonr/wagonr-gallant-red1.png",
        colorCode: "#bd282c",
        colName: "Premium Gallant Red",
      },
      {
        img: "/images/car/arena/wagonr/wagonr-midnight-black-plus-magma-grey.png",
        colorCode: "#6b6b6b",
        colName: "Metallic Megma Grey Dual",
      },
      {
        img: "/images/car/arena/wagonr/wagonr-nutmeg-brown.png",
        colorCode: "#342214",
        colName: "Nutmeg Brown",
      },

      {
        img: "/images/car/arena/wagonr/wagonr-superior-white.png",
        colorCode: "#fafbff",
        colName: "Solid White",
      },

      {
        img: "/images/car/arena/wagonr/wagonr-magma-grey.png",
        colorCode: "#858080",
        colName: "Metallic Grey",
      },
      {
        img: "/images/car/arena/wagonr/wagonr-midnight-black.png",
        colorCode: "#000",
        colName: "Midnight Black",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "32 Litres" },
      { label: "Seating Capacity", value: "5" },
      { label: "Length", value: "3655 mm" },
      { label: "Width", value: "1620 mm" },
      { label: "Height", value: "1675 mm" },
      { label: "Front Suspension", value: "MacPherson Strut" },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Fuel Type", value: "Petrol/CNG" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "90 Nm @ 3500 rpm" },
      { label: "Transmission Type", value: "Manual & Automatic" },
      { label: "Body Type", value: "Hatchback" },
      { label: "Wheel Base", value: "2435 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],

    carDetails: [
      { label: "Engine", value: "998 cc" },
      { label: "Mileage", value: "24.35 kmpl" },
      { label: "Power", value: "49.0 kW @ 5500 rpm" },
    ],
    exterior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/exterior/exterior_web_01.webp",
        title: "Robust Design Language with a wide stance",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/exterior/exterior_web_02.webp",
        title: "Sporty Floating Roof Design",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/exterior/exterior_web_04.webp",
        title: "Dynamic Alloy Wheels",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/exterior/exterior_web_03.webp",
        title: "Electrical Retractable ORVMs",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/exterior/exterior_web_05.webp",
        title: "Unique Dual-Split Headlamps",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/interior/interior_web_1.webp",
        title: "Spacious Boot",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/interior/interior_web_2.webp",
        title: "Spacious Cabin",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/interior/interior_web_4.webp",
        title: "Smartplay Studio with Smartphone Navigation and 4 Speakers",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/interior/interior_web_3.webp",
        title: "Modern Grey Melange Fabric",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/wagonr-launch-2022/interior/interior_web_5.webp",
        title: "Steering Mounted Controls",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],

    variants: [
      { variant: "WagonR LXI", transmission: "Manual", price: "₹ 5.54 Lakh" },
      { variant: "WagonR VXI", transmission: "Manual", price: "₹ 5.84 Lakh" },
      {
        variant: "WagonR VXI AT",
        transmission: "Automatic",
        price: "₹ 6.34 Lakh",
      },
      { variant: "WagonR ZXI", transmission: "Manual", price: "₹ 6.74 Lakh" },
      {
        variant: "WagonR ZXI AT",
        transmission: "Automatic",
        price: "₹ 7.14 Lakh",
      },
      {
        variant: "WagonR LXI CNG",
        transmission: "Manual",
        price: "₹ 6.07 Lakh",
      },
      {
        variant: "WagonR VXI CNG",
        transmission: "Manual",
        price: "₹ 6.37 Lakh",
      },
    ],
    priceRange: "₹ 5.54 - 7.14 Lakh *",
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/WagonR%20MMC%20Brochure_NEW_1.pdf",
  },
  // Maruti Ertiga -6
  {
    name: "Maruti Ertiga",
    subName: "Ertiga",
    colors: [
      {
        img: "/images/car/arena/ertiga/ertiga-pearl-metallic-arctic-white.png",
        colorCode: "#d2d2d2",
        colName: "Pearl Metallic Artic White",
      },
      {
        img: "/images/car/arena/ertiga/ertiga-auburn-red.png",
        colorCode: "#df1f24",
        colName: "Auburn Red",
      },
      {
        img: "/images/car/arena/ertiga/ertiga-pearl-metallic-diginity-brown.png",
        colorCode: "#633f2f",
        colName: "Pearl Metallic Dignity Brown",
      },
      {
        img: "/images/car/arena/ertiga/ertiga-magma-grey.png",
        colorCode: "#5d5d5d",
        colName: "Magma Grey",
      },
      {
        img: "/images/car/arena/ertiga/ertiga-prime-oxford-blue.png",
        colorCode: "#29427b",
        colName: "Prime Oxford Blue",
      },
      {
        img: "/images/car/arena/ertiga/ertiga-splendid-silver.png",
        colorCode: "#4f5457",
        colName: "Splendid Silver",
      },
      {
        img: "/images/car/arena/ertiga/ertiga-pearl-midnight-black.png",
        colorCode: "#000",
        colName: "Midnight Black",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "45 Litres" },
      { label: "Seating Capacity", value: "7" },
      { label: "Length", value: "4395 mm" },
      { label: "Width", value: "1735 mm" },
      { label: "Height", value: "1690 mm" },
      { label: "Front Suspension", value: "MacPherson Strut" },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Fuel Type", value: "Petrol/CNG" },
      { label: "No. of Cylinders", value: "4" },
      { label: "Max Torque", value: "138 Nm @ 4400 rpm" },
      { label: "Transmission Type", value: "Manual & Automatic" },
      { label: "Body Type", value: "MPV" },
      { label: "Wheel Base", value: "2740 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],

    exterior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/exterior/ext_web_01.webp",
        title: "New Dynamic Chrome Winged Front Grille",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/exterior/ext_web_02.webp",
        title: "New Back Door Garnish with Chrome Insert",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/exterior/ext_web_03.webp",
        title: "3D Origami Style LED Tail Lamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/exterior/ext_web_04.webp",
        title: "Machined Two-tone Alloy Wheels",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/exterior/ext_web_05.webp",
        title: "Retractable ORVMs",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/interior/int_web_01.webp",
        title: "Sculpted Dashboard with Metallic Teak-Wooden Finish",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/interior/int_web_02.webp",
        title: "Plush Dual Tone Interiors",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/interior/int_web_04.webp",
        title: "Air Cooled Twin Cup Holders",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/interior/int_web_03.webp",
        title: "17.78cm SmartPlay Pro",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/ertiga-launch-2022/interior/int_web_05.webp",
        title: "2nd Row roof mounted AC ",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: "Engine", value: "1462 cc" },
      { label: "Mileage", value: "20.51 kmpl" },
      { label: "Power", value: "75.8 kW @ 6000 rpm" },
    ],
    variants: [
      { variant: "Ertiga LXI", transmission: "Manual", price: "₹ 8.64 Lakh" },
      { variant: "Ertiga VXI", transmission: "Manual", price: "₹ 9.26 Lakh" },
      {
        variant: "Ertiga VXI AT",
        transmission: "Automatic",
        price: "₹ 10.00 Lakh",
      },
      { variant: "Ertiga ZXI", transmission: "Manual", price: "₹ 10.10 Lakh" },
      {
        variant: "Ertiga ZXI AT",
        transmission: "Automatic",
        price: "₹ 10.70 Lakh",
      },
      {
        variant: "Ertiga ZXI+ ",
        transmission: "Manual",
        price: "₹ 10.80 Lakh",
      },
      {
        variant: "Ertiga ZXI+ AT",
        transmission: "Automatic",
        price: "₹ 11.50 Lakh",
      },
      {
        variant: "Ertiga LXI (O) CNG",
        transmission: "Manual",
        price: "₹ 9.00 Lakh",
      },
      {
        variant: "Ertiga VXI (O) CNG",
        transmission: "Manual",
        price: "₹ 9.62 Lakh",
      },
    ],
    priceRange: "₹ 8.64 - 11.50 Lakh *",
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Updated-Ertiga-Brochure-60Pgs.pdf",
  },
  // Maruti Celerio -7
  {
    name: "Maruti Celerio",
    subName: "Celerio",
    colors: [
      {
        img: "/images/car/arena/celerio/celerio-artic-white.png",
        colorCode: "#f1f2f3",
        colName: "White",
      },
      {
        img: "/images/car/arena/celerio/celerio-speedy-blue.png",
        colorCode: "#4d7fe0",
        colName: "Speedy Blue",
      },
      {
        img: "/images/car/arena/celerio/celerio-silky-silver.png",
        colorCode: "#8e9395",
        colName: "Silky Silver",
      },
      {
        img: "/images/car/arena/celerio/celerio-glistering-grey.png",
        colorCode: "#9a9a9a",
        colName: "Glistening Grey",
      },
      {
        img: "/images/car/arena/celerio/celerio-solid-fire-red.png",
        colorCode: "#bd2822",
        colName: "Fire Red",
      },
      {
        img: "/images/car/arena/celerio/celerio-caffeine-brown.png",
        colorCode: "#6f4e37",
        colName: "Caffine Brown",
      },
      {
        img: "/images/car/arena/celerio/celerio-pearl-midnight-black.png",
        colorCode: "#000",
        colName: "Midnight Black",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "35 Litres" },
      { label: "Seating Capacity", value: "5" },
      { label: "Length", value: "3495 mm" },
      { label: "Width", value: "1495 mm" },
      { label: "Height", value: "1565 mm" },
      { label: "Front Suspension", value: "MacPherson Strut" },
      { label: "Rear Suspension", value: "Torsion Beam" },
      { label: "Fuel Type", value: "Petrol/CNG" },
      { label: "No. of Cylinders", value: "3" },
      { label: "Max Torque", value: "89 Nm @ 3500 rpm" },
      { label: "Transmission Type", value: "Manual & Automatic" },
      { label: "Body Type", value: "Hatchback" },
      { label: "Wheel Base", value: "2425 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],

    exterior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/exterior/exterior_web_01.webp",
        title: "Animated Sweeping Headlamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/exterior/exterior_web_02.webp",
        title: "Urbane Black 15” (38.02cm) Alloy Wheels​",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/exterior/exterior_web_04.webp",
        title: "Radiant Grille With Sharp Chrome assets",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/exterior/exterior_web_05.webp",
        title: "Droplet Styled Tail lamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/exterior/exterior_web_03.webp",
        title: "Electrically-Foldable ORVMs with Turn Indicators​",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/interior/interior_web_01.webp",
        title: "Strereoscopic Instrument Cluster",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/interior/interior_web_02.webp",
        title: "Auto Gear Shift Technology",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/interior/interior_web_05.webp",
        title: "Premium All Black Interiors",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/interior/interior_web_04.webp",
        title: "Contemporary Dashboard",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/celerio-launch-2022/interior/interior_web_03.webp",
        title: "Energetic & Spacious Cabin",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: "Engine", value: "998 cc" },
      { label: "Mileage", value: "25.24 kmpl" },
      { label: "Power", value: "49 kW @ 5500 rpm" },
    ],
    variants: [
      { variant: "Celerio LXI", transmission: "Manual", price: "₹ 5.35 Lakh" },
      { variant: "Celerio VXI", transmission: "Manual", price: "₹ 5.75 Lakh" },
      {
        variant: "Celerio VXI AT",
        transmission: "Automatic",
        price: "₹ 6.27 Lakh",
      },
      { variant: "Celerio ZXI", transmission: "Manual", price: "₹ 6.37 Lakh" },
      {
        variant: "Celerio ZXI AT",
        transmission: "Automatic",
        price: "₹ 6.87 Lakh",
      },
      {
        variant: "Celerio LXI CNG",
        transmission: "Manual",
        price: "₹ 6.02 Lakh",
      },
      {
        variant: "Celerio VXI CNG",
        transmission: "Manual",
        price: "₹ 6.42 Lakh",
      },
    ],
    priceRange: "₹ 5.35 - 6.87 Lakh *",
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/15_Page_Brochure_Celerio_Digital.pdf",
  },
  // Maruti Eeco -8
  {
    name: "Maruti Eeco",
    subName: "Eeco",
    colors: [
      {
        img: "/images/car/arena/eeco/eeco-cerulean-blue.png",
        colorCode: "#0088ce",
        colName: "Blue",
      },
      {
        img: "/images/car/arena/eeco/eeco-solid-white.png",
        colorCode: "#e5e4e6",
        colName: "Superior White",
      },
      {
        img: "/images/car/arena/eeco/eeco-metallic-glistening-grey.png",
        colorCode: "#a09694",
        colName: "Mettalic grey",
      },
      {
        img: "/images/car/arena/eeco/eeco-pearl-midnight-black.png",
        colorCode: "#141614",
        colName: "Midnight black",
      },
      {
        img: "/images/car/arena/eeco/eeco-metallic-silky-silver.png",
        colorCode: "#a6a5a5",
        colName: "Silky silver",
      },
    ],
    keySpecifications: [
      { label: "Fuel Tank Capacity", value: "40 Litres" },
      { label: "Seating Capacity", value: "5/7" },
      { label: "Length", value: "3675 mm" },
      { label: "Width", value: "1495 mm" },
      { label: "Height", value: "1825 mm" },
      { label: "Front Suspension", value: "Independent, McPherson Strut" },
      { label: "Rear Suspension", value: "Rigid Axle" },
      { label: "Fuel Type", value: "Petrol/CNG" },
      { label: "No. of Cylinders", value: "4" },
      { label: "Max Torque", value: "104.4 Nm @ 3000 rpm" },
      { label: "Transmission Type", value: "Manual" },
      { label: "Body Type", value: "Van" },
      { label: "Wheel Base", value: "2350 mm" },
      { label: "Gearbox", value: "5-Speed" },
    ],

    exterior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/exteriors/exterior_web_01.webp",
        title: "Exciting new color",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/exteriors/exterior_web_03.webp",
        title: "Stylish Clear Lens Headlamps and Tail Lamps",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/exteriors/exterior_web_05.webp",
        title: "Reverse Parking Sensors",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/exteriors/exterior_web_02.webp",
        title: "Outside Rear View Mirror",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/exteriors/exterior_web_04.webp",
        title: "Front Mud Flaps",
      },

      // {
      //   img: "",
      //   title: "",
      // },
    ],
    interior: [
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/interiors/interior_web_01.webp",
        title: "5 & 7 Seater Options ",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/interiors/interior_web_02.webp",
        title: "Matching Seat Covers with Interior Colour",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/interiors/interior_web_05.webp",
        title: "Sunvisor",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/interiors/interior_web_03.webp",
        title: "Assist Grips ",
      },
      {
        img: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-detail/eeco-launch-nov-2022-new/interiors/interior_web_04.webp",
        title: "Large Boot Space ",
      },
      // {
      //   img: "",
      //   title: "",
      // },
    ],
    carDetails: [
      { label: "Engine", value: "1196 cc" },
      { label: "Mileage", value: "19.711 kmpl" },
      { label: "Power", value: "59.4 kW @ 6000 rpm" },
    ],
    variants: [
      {
        variant: "Eeco 5 Seater",
        transmission: "Manual",
        price: "₹ 5.40 Lakh",
      },
      {
        variant: "Eeco 7 Seater",
        transmission: "Manual",
        price: "₹ 5.80 Lakh",
      },
      {
        variant: "Eeco CNG 5 Seater",
        transmission: "Manual",
        price: "₹ 6.27 Lakh",
      },
      {
        variant: "Eeco CNG 7 Seater",
        transmission: "Manual",
        price: "₹ 6.67 Lakh",
      },
    ],
    priceRange: "₹ 5.40 - 6.67 Lakh *",
    brochure:
      "https://marutistoragenew.blob.core.windows.net/msilintiwebpdf/Eeco-Passenger-BRAND-Leaflet.pdf",
  },
];
