"use client";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import { cgOutlets } from "@/constants";
import { useAppContext } from "@/context";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Location {
  name: string;
  channel: string;
  address: string;
  map: string;
  iframe: string;
  phone?: string;
  salesPersonName?: string;
  servicePersonName?: string;
  servicePhone?: string;
  email?: string;
}

interface ServiceBrand {
  name: string;
  locations: Location[];
}

const ChhattisgarhOutlets: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const { selectedState } = useAppContext();

  const serviceBrands: ServiceBrand[] = [
    {
      name: "Maruti Suzuki ",
      locations: [
        {
          name: "SKY AUTOMOBILES - RAIPUR",
          channel: "Arena",
          address:
            "Great Eastern Rd, Maruti Vihar, Kota, Raipur, Chhattisgarh 492001",
          map: "https://maps.app.goo.gl/jBXrQK86hU4sDmDk8",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14873.575748626132!2d81.5938016!3d21.2558686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0522595e83%3A0x9b53881314481416!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Raipur%2C%20Mohaba%20Bazar)!5e0!3m2!1sen!2sin!4v1726030050436!5m2!1sen!2sin",
          phone: "9893307422",
          salesPersonName: "Mr. Ustav Goswami",
          email: "sales@skyautomobiles.in",
          servicePersonName: "Mr. Jai Singh Madwar",
          servicePhone: "9584433150",
        },
        {
          name: "SKY AUTOMOBILES - JAGDALPUR",
          channel: "Arena",
          address: "Geedam Rd, Jagdalpur, Chhattisgarh 494001",
          map: "https://maps.app.goo.gl/uJ9uULnbxpT9kKbUA",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.817684755998!2d81.98698901098479!3d19.071751852031007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3013ae37b5a953%3A0x5bb8be0455abd258!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Jagdalpur%2C%20Geedam%20Road)!5e0!3m2!1sen!2sin!4v1726032668769!5m2!1sen!2sin",
          salesPersonName: "Mr. Dhananjay Swain",
          phone: "9584433110",
          servicePersonName: "Mr. Sohan Singh Choudhary",
          servicePhone: "9893000043",
          email: "sales.jdp@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - Avanti Vihar ",
          channel: "Arena",
          address:
            "Avanti Vihar, Geetanjali Colony, Shankar Nagar, Raipur, Chhattisgarh 492001",
          map: "https://maps.app.goo.gl/zZeuyBL7Jxtm2dW66",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8113557967727!2d81.6664485110296!3d21.23932788043111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd1600edd2a3%3A0x791bcbba4df232c9!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Raipur%2C%20Avanti%20Vihar)!5e0!3m2!1sen!2sin!4v1726033303248!5m2!1sen!2sin",
          salesPersonName: "Mr. Anil Mishra",
          phone: "9109900120",
          servicePersonName: "Mr. Hitesh Sharma",
          servicePhone: "9584465293",
          email: "sales.megnato@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - BHATAGAON ",
          channel: "Arena",
          address:
            "Ring Road No: 1, beside Walfort City, Bhatagaon, Raipur, Chhattisgarh 492013",
          map: "https://maps.app.goo.gl/mh2avC1KaWpauPD48",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14877.113409625104!2d81.6179656!3d21.220808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddcce8998e51%3A0x8b959a717e58f52a!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726034177313!5m2!1sen!2sin",
          salesPersonName: "Mr. Bharat Yadu ",
          phone: "9893303282",
          servicePersonName: "Mr. Vivek Dewangan ",
          servicePhone: "9109969073",
          email: "skybhatagaon@gmail.com",
        },
        {
          name: "SKY AUTOMOBILES - DHAMTARI",
          channel: "Arena",
          address:
            "Kasra No.238/2 Sehara Dabri, Raipur Rd, Dhamtari, Chhattisgarh 492009",
          map: "https://maps.app.goo.gl/QHf1zrQRmGkqqEkL8",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.202978453152!2d81.5759785110188!3d20.742565497466607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2f29745ccaded5%3A0x9e1b18ca6780297f!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726034449515!5m2!1sen!2sin",
          salesPersonName: "Mr. Santosh Singh",
          phone: "9893307417",
          servicePersonName: "Mr. Rajesh Vishwakarma",
          servicePhone: "8889998612",
          email: "sales.dhamtari@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - BALODA BAZAAR",
          channel: "Arena",
          address:
            "M547+FP9, Ambedkar Chowk, Raipur Rd, Baloda Bazar, Chhattisgarh 493332",
          map: "https://maps.app.goo.gl/TjGXALPwd6JNrg4q6",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.8468887026147!2d82.17568717556416!3d21.63088918017342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28808ee8817f3f%3A0x99a6617344ab4a70!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Baloda%20Bazar%2C%20Raipur%20Road)!5e0!3m2!1sen!2sin!4v1726035214037!5m2!1sen!2sin",
          salesPersonName: "Mr. Jitendra Sahoo",
          phone: "9584433123",
          servicePersonName: "Mr. Deepak Pandey",
          servicePhone: "9893307429",
          email: "baloda@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - KANKER ",
          channel: "Arena",
          address:
            "NH30 up & down road, Civil Line Mahurband Para Rd, Udaynagar Colony, Kanker, Chhattisgarh 494334",
          map: "https://maps.app.goo.gl/5zPCH6EYksiKGYsv7",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14969.81170199055!2d81.4871876!3d20.2815114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2efda8d0168e35%3A0xc2bfe94b00edced1!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Kanker%2C%20Udaynagar%20Colony)!5e0!3m2!1sen!2sin!4v1726035498173!5m2!1sen!2sin",
          salesPersonName: "Mr. Amit Kumar Dalai ",
          phone: "8889998604",
          servicePersonName: "Mr. Navneet Kumar Ajay",
          servicePhone: "9329149400",
          email: "skymarutikanker5001@gmail.com",
        },
        {
          name: "SKY AUTOMOBILES - KASDOL ",
          channel: "Arena",
          address:
            "Raipur - Baloda Bazar Marg, near Bus Stand, Kasdol, Chhattisgarh 493335",
          map: "https://maps.app.goo.gl/p7JZTsKvSA9iT3fM8",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14836.649294940033!2d82.4257419!3d21.6185975!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26332d92a6732d%3A0x1615ae0d15da03fb!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Baloda%20Bazar%2C%20Kasdol)!5e0!3m2!1sen!2sin!4v1726035599768!5m2!1sen!2sin",
          salesPersonName: "Mr. Bhuneshwar Gupta",
          phone: "9584433135",
          servicePersonName: "",
          servicePhone: "",
          email: "sales.kasdol@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - KHARORA",
          channel: "Arena",
          address: "Tilda Simga Rd, Kharora, Chhattisgarh 493225",
          map: "https://maps.app.goo.gl/Kp45JVSc5CeZhVPbA",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14859.462725630197!2d81.934238!3d21.3951928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2893eb779b8ee1%3A0x379978946c0332e0!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Tilda%2C%20Kharora)!5e0!3m2!1sen!2sin!4v1726036188333!5m2!1sen!2sin",
          salesPersonName: "Mr. Saket Chichkhade",
          phone: "9584465301",
          servicePersonName: "",
          servicePhone: "",
          email: "skyautomobilstilda123@gmail.com",
        },
        {
          name: "SKY AUTOMOBILES - ABHANPUR",
          channel: "Arena",
          address: "WARD NO 14, Abhanpur, Chhattisgarh 493661",
          map: "https://maps.app.goo.gl/npZsawrLExdsGk2z8",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14893.597430501439!2d81.7477511!3d21.0567061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28cfcc2fc3b04b%3A0xbba6568b0cddd24f!2sSKY%20AUTOMOBILES%20ABHANPUR!5e0!3m2!1sen!2sin!4v1726036410059!5m2!1sen!2sin",
          salesPersonName: "Mr. Saket Chichkhade",
          phone: "9584465301",
          servicePersonName: "",
          servicePhone: "",
          email: "skyabhanpur@gmail.com",
        },
        {
          name: "SKY AUTOMOBILES - SARSIWA",
          channel: "Arena",
          address:
            "Sarsiwa, Raipur, NH-200, Bilaspur Road, Baloda Bazar, Baloda Bazar, Chhattisgarh 493559",
          map: "https://maps.app.goo.gl/77bsx39SX3fCeyqG9",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14835.20294122274!2d82.9177825!3d21.6326871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26ff5d346314b1%3A0x91892320deb34c45!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Raipur%2C%20Sarsiwa)!5e0!3m2!1sen!2sin!4v1726036838663!5m2!1sen!2sin",
          salesPersonName: "Mr. Joginder Choudhary",
          phone: "9584433874",
          servicePersonName: "",
          servicePhone: "",
          email: "skyabhanpur@gmail.com",
        },
        {
          name: "SKY AUTOMOBILES - SARAIPALI ",
          channel: "Arena",
          address:
            "Harratar, Mahasamund Nh 53,Bhawanipatna- Raipur Hwy, Basna road, Saraipali, Chhattisgarh 493558",
          map: "https://maps.app.goo.gl/wqKVaapNfTJGrsJE6",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.0829309385745!2d82.96745677555582!3d21.307739180412423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a268b3f8140d70d%3A0x1cf0b7d9486c9c57!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Saraipali%2C%20Basna%20Road)!5e0!3m2!1sen!2sin!4v1726037321364!5m2!1sen!2sin",
          salesPersonName: "Mr. Joginder Choudhary",
          phone: "9584433874",
          servicePersonName: "Mr. Himanshu Chouhan",
          servicePhone: "9109996511",
          email: "sales.saraipali@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - TILDA ",
          channel: "Arena",
          address: "Bahesar, Chhattisgarh 493114",
          map: "https://maps.app.goo.gl/MvoByr1b9qQ3mePo7",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.003803245586!2d81.80224567556101!3d21.507570980264326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28f3f3a7b12741%3A0xeea79c915fada04c!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Tilda%2C%20Bahesar)!5e0!3m2!1sen!2sin!4v1726037635748!5m2!1sen!2sin",
          salesPersonName: "Mr. Saket Chichkhade",
          phone: "9584465301",
          servicePersonName: "Mr. Balram Neti",
          servicePhone: "9109900117",
          email: "skyautomobilstilda123@gmail.com",
        },
        {
          name: "SKY AUTOMOBILES - KONDAGAON",
          channel: "Arena",
          address:
            "NH 30, beside Indian Oil Petrol Pump, Kondagaon, Chhattisgarh 494226",
          map: "https://maps.app.goo.gl/5jwP3RipT7CfcUPJ9",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.288016841051!2d81.6635051755138!3d19.61498068170378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2fcf49dc1ca279%3A0x8136d187923f162a!2sMaruti%20Suzuki%20Arena%20(Sky%20Automobiles%2C%20Kondagaon%2C%20NH%2030)!5e0!3m2!1sen!2sin!4v1726037796381!5m2!1sen!2sin",
          salesPersonName: "Mr. Sanjeev Karla",
          phone: "7909903505",
          servicePersonName: "Mr. Mulchand Newala",
          servicePhone: "9109969062",
          email: "bm.kondagaon@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - MAGARLOAD",
          channel: "Arena",
          address: "",
          map: "",
          iframe: "",
          salesPersonName: "Mr. Santosh Singh",
          phone: "9893307417",
          servicePersonName: "",
          servicePhone: "",
          email: "sales.dhamtari@skyautomobiles.in",
        },
        {
          name: "SKY AUTOMOBILES - MAGNETO MALL  ",
          channel: "Nexa",
          address:
            "Beside Magneto The Mall, National Highway, Street Number 6, Labhandih, Chhattisgarh 492001",
          map: "https://maps.app.goo.gl/sbg569Z6cp6JMfkM8",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.289415715275!2d81.6848154!3d21.2388919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd21064997cb%3A0xcfc08d5e3f679793!2sNEXA%20(Sky%20Automobiles%2C%20Raipur%2C%20Magneto)!5e0!3m2!1sen!2sin!4v1726038467745!5m2!1sen!2sin",
          salesPersonName: "Mr. Abhishek  ",
          phone: "9111107017",
          servicePersonName: "Mr. Srijan Gupta",
          servicePhone: "7470778082",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - JAGDALPUR",
          channel: "Nexa",
          address:
            "Ganga Nagar, Ward, Geedam Rd, Hikmipara, Jagdalpur, Chhattisgarh 494001",
          map: "https://maps.app.goo.gl/HPHaJ3kJZ6H33qxG8",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.258693451746!2d81.9894603!3d19.0718842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a301334ac7f5107%3A0xafb4e93610c07b40!2sNEXA%20(Sky%20Automobiles%2C%20Jagdalpur%2C%20Geedam%20Road)!5e0!3m2!1sen!2sin!4v1726038754903!5m2!1sen!2sin",
          salesPersonName: "Mr. Kanchan",
          phone: "9584433160",
          servicePersonName: "Mr. Abrar Khan",
          servicePhone: "9111107446",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - BALODA BAZAAR",
          channel: "Nexa",
          address: "",
          map: "",
          iframe: "",
          salesPersonName: "Mr. Rajneesh",
          phone: "9111107013",
          servicePersonName: "Mr. Deepak Pandey ",
          servicePhone: "9893307429",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - DHAMTARI",
          channel: "Nexa",
          address: "",
          map: "",
          iframe: "",
          salesPersonName: "Mr. Pramod ",
          phone: "9111107014",
          servicePersonName: "Mr. Rajesh Vishwakarma",
          servicePhone: "8889998612",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - Sarona",
          channel: "Workshop",
          address: "",
          map: "",
          iframe: "",
          salesPersonName: "",
          phone: "",
          servicePersonName: "Mr. Yogesh Sahu",
          servicePhone: "9584433070",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - Maudhapara ",
          channel: "Workshop",
          address:
            "Mahavir Gaushala Complex, KK Rd, Janak Bada, Station Road, Moudhapara, Raipur, Chhattisgarh 492001",
          map: "https://maps.app.goo.gl/UN9oHUmghSvQ66d19",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.497504078807!2d81.63270277555439!3d21.251765780453958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd909238419d%3A0xc0813fa489e8695b!2sMaruti%20Suzuki%20Service%20(Sky%20Automobiles)!5e0!3m2!1sen!2sin!4v1726039881106!5m2!1sen!2sin",
          salesPersonName: "",
          phone: "",
          servicePersonName: "Mr. Simalu Rao",
          servicePhone: "9584433147",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - Mahoba Bazar",
          channel: "True Value ",
          address:
            "Maruti Heights Commercial Complex, Mohaba Bazar Great Eastern Road NH 6, near Ambika Rly Crossing, Raipur, Chhattisgarh 492001",
          map: "https://maps.app.goo.gl/J82JQAyo91wE2hss7",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.400185799678!2d81.59120527555443!3d21.255621080451128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de0522f7a7af%3A0x329f8a757d9f4500!2sMaruti%20Suzuki%20True%20Value%20(Sky%20Automobiles%2C%20Raipur%2C%20Mohaba%20Bazar)!5e0!3m2!1sen!2sin!4v1726040077387!5m2!1sen!2sin",
          salesPersonName: "Mr. Ajit Biswas",
          phone: "9584433005",
          servicePersonName: "",
          servicePhone: "",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - Udhyog Bhawan",
          channel: "True Value ",
          address:
            "Ring Road No. 1, near Udyog Bhawan, MAHAVIR NAGAR, Telibandha, Raipur, Chhattisgarh 492001",
          map: "https://maps.app.goo.gl/MgBraXYNRfVwKQ5N6",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9186361760258!2d81.6643385755539!3d21.23507478046641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd17a2333ca7%3A0xfe8b892c661899c0!2sMaruti%20Suzuki%20TRUE%20VALUE%20(Sky%20Automobiles%2C%20Raipur%2C%20Ring%20Road%20One)!5e0!3m2!1sen!2sin!4v1726040300507!5m2!1sen!2sin",
          salesPersonName: "Mr. Naman Dave",
          phone: "9584333066",
          servicePersonName: "",
          servicePhone: "",
          email: "",
        },
        {
          name: "SKY AUTOMOBILES - JAGDALPUR ",
          channel: "True Value ",
          address: "",
          map: "",
          iframe: "",
          salesPersonName: "Mr. Ramdas Mukharjee",
          phone: "6260288613",
          servicePersonName: "",
          servicePhone: "",
          email: "",
        },
      ],
    },
  ];

  // Convert Set to array to avoid TypeScript iteration issue
  const uniqueChannels: string[] = [
    "All",
    ...Array.from(
      new Set(serviceBrands[0].locations.map((loc) => loc.channel))
    ),
  ];

  // Function to handle filter change
  const handleFilterChange = (channel: string) => {
    setFilter(channel);
  };

  const filteredLocations = cgOutlets.flatMap((category) =>
    category.locations.filter((location) => {
      const isChannelMatch = filter === "All" || location.channel === filter;

      return isChannelMatch;
    })
  );
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <div className="pt-20 min-h-40 bg-primaryGray">
          <div className="h-full min-h-[40vh] flex justify-center items-center text-white text-3xl">
            Required Banner Image
          </div>
        </div>
        <div className="container py-16 mx-auto xl:max-w-7xl lg:py-20">
          <h4 className="text-3xl font-bold text-primaryGray mb-6 ">
            Chhattisgarh{" "}
            <span
              className={`   ${
                selectedState === "Odisha"
                  ? "text-primaryBlue"
                  : "text-primaryRed"
              }`}
            >
              Outlets{" "}
            </span>{" "}
          </h4>
          <div className="flex gap-4 mb-6 flex-wrap">
            {uniqueChannels.map((channel, index) => (
              <button
                key={index}
                onClick={() => handleFilterChange(channel)}
                className={`py-2 px-4 rounded-lg border lg:min-w-28 ${
                  filter === channel && selectedState === "Odisha"
                    ? "bg-primaryBlue text-white"
                    : filter === channel && selectedState === "Chhattisgarh"
                    ? "bg-primaryRed text-white"
                    : selectedState === "Odisha"
                    ? "bg-secondaryGray4 text-primaryBlue"
                    : "bg-secondaryGray4 text-primaryRed"
                }`}
              >
                {channel}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-between p-4 duration-300 border rounded-lg shadow-md cursor-default bg-secondaryGray4 group hover:scale-95  hover:text-white ${
                    selectedState === "Odisha"
                      ? "hover:bg-primaryBlue"
                      : "hover:bg-primaryRed"
                  } `}
                >
                  <div>
                    <div className="mb-4 overflow-hidden rounded-lg bg-secondaryGray3">
                      <iframe
                        src={location.iframe}
                        width="100%"
                        height="200"
                        allowFullScreen
                        aria-hidden="false"
                        loading="lazy"
                        title={location.name}
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="lg:px-2">
                      <h2 className="mb-2 text-lg font-semibold">
                        {location.name}
                      </h2>
                      <div className="flex gap-2 pb-3 text-sm">
                        {location.address}
                      </div>
                      <table className="w-full text-sm">
                        <tbody>
                          {location.salesPersonName && (
                            <tr>
                              <td className="font-semibold pr-4">Sale:</td>
                              <td>{location.salesPersonName}</td>
                            </tr>
                          )}
                          {location.phone && (
                            <tr className="border-b">
                              <td className="font-semibold pr-4 pb-2 ">
                                Contact:
                              </td>
                              <td className="pb-2">{location.phone}</td>
                            </tr>
                          )}
                          {location.servicePersonName && (
                            <tr>
                              <td className="font-semibold pr-4 pt-2">
                                Service:
                              </td>
                              <td>{location.servicePersonName}</td>
                            </tr>
                          )}
                          {location.servicePhone && (
                            <tr>
                              <td className="font-semibold pr-4 pb-2">
                                Contact:
                              </td>
                              <td className="pb-2">{location.servicePhone}</td>
                            </tr>
                          )}
                          {location.email && (
                            <tr className="border-t ">
                              <td className="font-semibold pr-4 pt-1">
                                Email:
                              </td>
                              <td className="lowercase pt-1">
                                {location.email}
                              </td>
                            </tr>
                          )}
                          {/* <tr>
                          <td className="font-semibold pr-4">Timing:</td>
                          <td>
                            9:30 AM to 8 PM - Mon to Sat <br />
                            10.00 AM to 5 PM - Sun
                          </td>
                        </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-6">
                    <a
                      href={location.map}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center justify-center gap-2 pt-3 pb-2 text-sm border rounded-lg group-hover:bg-white  ${
                        selectedState === "Odisha"
                          ? "group-hover:text-primaryBlue border-primaryBlue"
                          : "group-hover:text-primaryRed border-primaryRed"
                      } `}
                    >
                      <FaMapMarkerAlt className="text-secondaryRed2" /> View in
                      Google Maps
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No locations match your filters.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChhattisgarhOutlets;
