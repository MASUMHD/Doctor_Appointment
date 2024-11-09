import { useState } from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="mt-16 mb-16 md:mt-32 md:mb-32">
      <div className="flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-20">
        <div className="flex ">
          <img
            className="w-full h-auto md:w-[520px] md:h-[920px]"
            src="../../../public/image/Rectangle 20078.png"
            alt="Our Services"
          />
        </div>
        <div className="md:w-1/2">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-sm md:text-base mt-3 md:mt-5 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
              <br /> accusantium doloremque laudantium, totam rem aperiam, eaque
              dicta <br /> ipsa quae ab illo inve ntore veritatis et quasi
              architecto beatae vitae sunt explicabo.
            </p>
          </div>
          <div className="flex mt-3 gap-2 md:gap-3 justify-start">
            <button
              className={`btn ${
                activeButton === 0 ? "bg-[#F7A582] text-white" : "bg-gray-300"
              }`}
              onClick={() => handleClick(0)}
            >
              Cavity Protection
            </button>
            <button
              className={`btn ${
                activeButton === 1 ? "bg-[#F7A582] text-white" : "bg-gray-300"
              }`}
              onClick={() => handleClick(1)}
            >
              Cosmetic Dentistry
            </button>
            <button
              className={`btn ${
                activeButton === 2
                  ? "bg-[#F7A582] text-white"
                  : "bg-gray-300 hidden lg:block"
              }`}
              onClick={() => handleClick(2)}
            >
              Oral Surgery
            </button>
          </div>

          <div>
            <img
              className="mt-5 w- h-auto"
              src="../../../public/image/Rectangle 10.png"
              alt=""
            />
          </div>
          <div className="mt-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              Electro Gastrology Therapy
            </h1>
            <p className="text-sm md:text-base mt-4 md:mt-5 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium <br /> doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inve <br /> veritatis et quasi architecto beatae
              vitae dicta sunt explicabo. <br /> unde omnis iste natus error
            </p>
            <p className="text-sm md:text-base mt-5 text-gray-500">
              Sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, <br /> eaque ipsa quae ab illo inve ntore veritatis et
              quasi architecto beatae vitae <br /> dicta sunt explicabo.
            </p>
            <Link to="/about">
              <button className="btn btn-outline border-[#F7A582] border-2 text-sm md:text-lg text-[#F7A582] mt-5">
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
