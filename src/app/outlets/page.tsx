import Footer from '@/components/others/Footer';
import Header from '@/components/others/Header';
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';

const Outlets = () => {
      const serviceBrands = [
        {
          name: "Maruti Suzuki Arena",
          locations: [
            {
              name: "Maruti Suzuki Arena ",
              address:
                "Old Mumbai Hwy, Rahul Colony, Aziz Bagh Colony, Toli Chowki, Hyderabad, Telangana 500008",
              map: "https://maps.app.goo.gl/ZGA9u4tc6yZvj1kW9",
              iframe:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.173533444041!2d78.40631007597905!3d17.403457783486434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96c0f133d3bb%3A0xbf781bacc118db32!2sOld%20Mumbai%20Highway%20%26%20Rahul%20Colony%2C%20Rahul%20Colony%2C%20Aravind%20Nagar%20Colony%2C%20Toli%20Chowki%2C%20Hyderabad%2C%20Telangana%20500008!5e0!3m2!1sen!2sin!4v1716988239290!5m2!1sen!2sin",
              phone: "7032097111",
              personName: "Mr. Bhartha",
              email: "crm.service@orangeauto.in",
            },
            {
              name: "Maruti Suzuki Nexa ",
              address:
                "10-5-2/1/8/3, Mehdipatnam - Banjara Hills Rd, Opposite Paradise Hotel, Owaisi Pura, Masab Tank, Hyderabad, Telangana 500028",
              map: "https://maps.app.goo.gl/eJXKeMwWTkvCXooC7",
              iframe:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.171548544171!2d78.44988557505934!3d17.403553083486457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9740066d76db%3A0xc65e5977ef927ceb!2sOrange%20Maruti Suzuki Arena!5e0!3m2!1sen!2sin!4v1711003368659!5m2!1sen!2sin",
              phone: "9052382345",
              personName: "Mr. Shaam Sudhakar",
              email: "crm.service@orangeauto.in",
            },
            {
              name: "Maruti Suzuki Nexa ",
              address:
                "Krishna Plaza 1-5/31, near Indian Oil Petrol Bunk, Manikonda, Telangana 500089",
              map: "https://maps.app.goo.gl/uGjsLCS4XzDPxPcVA",
              iframe:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1896330295485!2d78.37195907505925!3d17.402684783487118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb941995a23143%3A0x675f12362e6c26d6!2sOrange%20Maruti Suzuki Arena!5e0!3m2!1sen!2sin!4v1711003582070!5m2!1sen!2sin",
              phone: "8886672154",
              personName: "Mr. Mohd Salman",
              email: "crm.service@orangeauto.in",
            },
            {
              name: "Maruti Suzuki Arena ",
              address: "Main Rd, Chevella, Telangana 501503",
              map: "https://maps.app.goo.gl/ccuhWxGn4nG9nkvQA",
              iframe:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.002314227614!2d78.13098757505725!3d17.315437483559553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbe82019db7a21%3A0x7d44011f29cb3307!2sorange%20Maruti Suzuki Arena%20showroom!5e0!3m2!1sen!2sin!4v1711003704174!5m2!1sen!2sin",
              phone: "9949768623",
              personName: "Mr. Amar",
              email: "crm.service@orangeauto.in",
            },
            {
              name: "Maruti Suzuki Arena ",
              address:
                "DHYAN SHIVA COLONY KABIR COTTAGE, K-2, beside INDIAN PETROL BUNK, Moinabad, Telangana 501504",
              map: "https://maps.app.goo.gl/87neYhi9gCv9ZfEb6",
              iframe:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6959231331466!2d78.27358807505753!3d17.330214483547245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbebb55ee5883d%3A0xa6d4677dbf46db2d!2sOrange%20Maruti Suzuki Arena%20Moinabad!5e0!3m2!1sen!2sin!4v1711003813602!5m2!1sen!2sin",
              phone: "7981229979",
              personName: "Mr. Akheel",
              email: "crm.service@orangeauto.in",
            },
          ],
        },
      ];

  return (
    <div className="">
      <Header />
      <div className="min-h-screen ">
        <div className="pt-20 min-h-40 bg-primaryGray">
          <img
            src="https://saboonexa.in/static/media/Website_Maruti_Suzuki_Nexa_August_Independence_Day_Service_Saboo_RKS_Nexa.d9fdfa3802240e43c5ec.webp"
            alt=""
          
            className="object-cover w-full h-full -mt-1"
          />
        </div>
        <div className="container py-16 mx-auto xl:max-w-7xl lg:py-20">
          <h4 className="text-3xl font-bold text-primaryGray lg:mb-6">
            Our <span className="text-primaryRed">Outlets</span>
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
}

export default Outlets