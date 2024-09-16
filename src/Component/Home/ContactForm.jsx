import { IoLocationOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";

const ContactForm = () => {
  return (
    <div className="mb-16 md:mb-32">
      <section className="bg-[#07332F] text-white py-20 px-4 rounded-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="flex flex-col justify-center pl-0 lg:pl-16">
            <h2 className="text-4xl font-bold mb-4">Contact With Us</h2>
            <p className="mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit <br />{" "}
              voluptatem accusantium doloremque laudantium, <br /> totam rem
              aperiam, eaque ipsa quae ab illo inve <br /> ntore veritatis et
              quasi.
            </p>
            <div className="flex items-center mb-4">
              <i className="fas fa-phone-alt mr-4 text-3xl  ">
                <VscCallOutgoing />
              </i>
              <span>+88 01750 14 14 14</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt mr-4 text-3xl  ">
                <IoLocationOutline />
              </i>
              <span>Dhanmondi, Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Form Section */}
          <div className=" pr-0 lg:pr-16 ">
            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-md bg-[#204D44] text-white placeholder-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-md bg-[#204D44] text-white placeholder-gray-300"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="p-3 rounded-md bg-[#204D44] text-white placeholder-gray-300"
              />
              <input
                type="text"
                placeholder="Doctor Name"
                className="p-3 rounded-md bg-[#204D44] text-white placeholder-gray-300"
              />
              <input
                type="date"
                className="p-3 rounded-md bg-[#204D44] text-white placeholder-gray-300"
              />
              <input
                type="time"
                className="p-3 rounded-md bg-[#204D44] text-white placeholder-gray-300"
              />
              <div className="col-span-1 md:col-span-2">
                <button className="w-full p-3 bg-[#F7A582] text-white rounded-md font-semibold hover:bg-orange-300">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
