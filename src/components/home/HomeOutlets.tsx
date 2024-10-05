import React from "react";

const HomeOutlets = () => {
  return (
    <div className="container py-10 mx-auto xl:max-w-6xl lg:pt-20 px-1">
      <h4 className="mb-6 text-3xl font-bold text-center text-primaryGray lg:mb-10">
        Our Outlets
      </h4>
      <div className="grid md:grid-cols-3 gap-2 md:gap-4">
        <div className=" border rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.9206376940115!2d85.82146437603774!3d20.34489698113881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909dd9bca2089%3A0xa54f9d01703c8849!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Bhubaneswar%2C%20Patia)!5e0!3m2!1sen!2sin!4v1727083042435!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen
            aria-hidden="false"
            loading="lazy"
            title=""
            className="rounded-lg"
          />
          <a
            href="https://maps.app.goo.gl/7kujYmyGs5NnRUys6"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full "
          >
            <div className="min-h-10 p-4 text-center">
              {" "}
              {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
              <h5 className=" text-primaryGray text-lg ">
                {" "}
                Arena Patia - Bhubhneshwar
              </h5>
            </div>
          </a>
        </div>
        <div className=" border rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5645908400693!2d85.87805527603712!3d20.31828188115911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c4e7c351c5%3A0xc70e6896ae439b35!2sNEXA%20(Sky%20Automobiles%2C%20Bhubaneshwar%2C%20Twin%20City)!5e0!3m2!1sen!2sin!4v1727091501886!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen
            aria-hidden="false"
            loading="lazy"
            title=""
            className="rounded-lg"
          />
          <a
            href="https://maps.app.goo.gl/74tEX5Gj7Lx4Y12D9"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full "
          >
            <div className="min-h-10 p-4 text-center">
              {" "}
              {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
              <h5 className=" text-primaryGray text-lg ">
                {" "}
                Nexa - Bhubhneshwar
              </h5>
            </div>
          </a>
        </div>
        <div className=" border rounded-xl p-1 bg-primaryBlue text-white group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.245914054893!2d84.85389107601618!3d19.315132481939383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f3686400d%3A0x4c3cae13a22d5210!2sMaruti%20Suzuki%20ARENA%20(Sky%20Automobiles%2C%20Berhampur)!5e0!3m2!1sen!2sin!4v1728035521580!5m2!1sen!2sin"
            width="100%"
            height="200"
            allowFullScreen
            aria-hidden="false"
            loading="lazy"
            title=""
            className="rounded-xl"
          />{" "}
          <a
            href="https://maps.app.goo.gl/bU3rxP3DMBuuamm19"
            target="_blank"
            rel="noreferrer"
            className="w-full h-full "
          >
            <div className="min-h-10 p-4 text-center">
              {" "}
              {/* <h4 className="  text-secondaryGray2">Sky Automobiles</h4> */}
              <h5 className="  text-lg  "> Arena Behrampur</h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeOutlets;
