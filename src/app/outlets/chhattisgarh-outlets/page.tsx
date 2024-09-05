import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ChhattisgarhOutlets = () => {
  const serviceBrands = [
    {
      name: "Maruti Suzuki Arena",
      locations: [
        {
          name: "Maruti Suzuki Arena ",
          address:
            "NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha 760010",
          map: "https://maps.app.goo.gl/RevmFwrWnB6Q6GKf9",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2457974530707!2d84.85388571098957!3d19.31513754434592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1724827802942!5m2!1sen!2sin",
          phone: "123456789",
          personName: "Mr. Bhartha",
          email: "email@xxxxxx.in",
        },
        {
          name: "Maruti Suzuki Nexa ",
          address:
            "NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha 760010",
          map: "https://maps.app.goo.gl/RevmFwrWnB6Q6GKf9",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2457974530707!2d84.85388571098957!3d19.31513754434592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1724827802942!5m2!1sen!2sin",
          phone: "123456789",
          personName: "Mr. Shaam Sudhakar",
          email: "email@xxxxxx.in",
        },
        {
          name: "Maruti Suzuki Nexa ",
          address:
            "NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha 760010",
          map: "https://maps.app.goo.gl/RevmFwrWnB6Q6GKf9",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2457974530707!2d84.85388571098957!3d19.31513754434592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1724827802942!5m2!1sen!2sin",
          phone: "123456789",
          personName: "Mr. Mohd Salman",
          email: "email@xxxxxx.in",
        },
        {
          name: "Maruti Suzuki Arena ",
          address:
            "NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha 760010",
          map: "https://maps.app.goo.gl/RevmFwrWnB6Q6GKf9",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2457974530707!2d84.85388571098957!3d19.31513754434592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1724827802942!5m2!1sen!2sin",
          phone: "123456789",
          personName: "Mr. Amar",
          email: "email@xxxxxx.in",
        },
        {
          name: "Maruti Suzuki Arena ",
          address:
            "NH-16, Jagannathpur-Gopalpur Jn, Dist, Brahmapur, Odisha 760010",
          map: "https://maps.app.goo.gl/RevmFwrWnB6Q6GKf9",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2457974530707!2d84.85388571098957!3d19.31513754434592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1724827802942!5m2!1sen!2sin",
          phone: "123456789",
          personName: "Mr. Akheel",
          email: "email@xxxxxx.in",
        },
      ],
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="min-h-screen ">
        <div className="pt-20 min-h-40 bg-primaryGray">
          {/* <img
            src="/images/other/sky-automobile-outlet-banner.jpg"
            alt=""
            className="object-cover w-full h-full -mt-1 max-h-[50vh]"
          /> */} <div className="h-full min-h-[40vh] flex justify-center items-center text-white text-3xl ">
          Required Banner Image
        </div>
        </div>
        <div className="container py-16 mx-auto xl:max-w-7xl lg:py-20">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Chhattisgarh <span className="text-primaryRed">Outlets</span>
          </h4>
          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3 ">
            {serviceBrands[0]?.locations.map((location, index) => (
              <div
                key={index}
                className="flex flex-col justify-between p-4 duration-300 border rounded-lg shadow-md cursor-default bg-secondaryGray4 group hover:scale-95 hover:bg-secondaryRed2 hover:text-white"
              >
                <div className="">
                  {" "}
                  <div className="mb-4 overflow-hidden rounded-lg bg-secondaryGray3 ">
                    <iframe
                      src={location.iframe}
                      width="100%"
                      height="200"
                      allowFullScreen
                      aria-hidden="false"
                      //   tabIndex="0"
                      loading="lazy"
                      title={location.name}
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <div className="lg:px-2">
                    <h2 className="mb-2 text-xl font-semibold">
                      {location.name}
                    </h2>
                    <div className="flex gap-2 pb-3 text-sm ">
                      {location.address}
                    </div>
                    {/* {location.personName && (
                    <p className="text-sm ">
                      <span className="mr-1">Manager:</span>{" "}
                      {location.personName}
                    </p>
                  )} */}
                    {location.phone && (
                      <div className="flex text-sm ">
                        <div className="mr-6">Phone:</div>
                        <div>{location.phone}</div>
                      </div>
                    )}
                    {location.email && (
                      <p className="text-sm ">
                        <span className="mr-7 ">Email:</span>
                        <span className="lowercase">{location.email}</span>
                      </p>
                    )}
                    <div className="flex pb-2 text-sm">
                      <div className="mr-2 ">Timming:</div>{" "}
                      <div className="">
                        9:30 AM to 8 PM - Mon to Sat <br /> 10.00 AM to 5 PM -
                        Sun
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 ">
                  <a
                    href={location.map}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 pt-3 pb-2 text-sm border rounded-lg group-hover:bg-white group-hover:text-primaryRed border-primaryRed "
                  >
                    <FaMapMarkerAlt className="text-secondaryRed2 " /> View in
                    Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChhattisgarhOutlets;
