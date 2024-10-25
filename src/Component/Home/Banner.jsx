import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section className="bg-[#07332F] text-white pl-3 lg:pl-24 pr-3 lg:pr-24">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-20 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-3xl  font-bold leading-none sm:text-7xl">
              Your Best Medical Help Center
            </h1>
            <p className="mt-6 mb-8 text-sm lg:text-base sm:mb-12 ">
              Lorem Ipsum is simply dummy text they are <br /> has been the
              industry’s stardard.
            </p>
            <Link to="/services">
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <button
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 lg:w-1/3 w-2/3 lg:mx-0 mx-auto text-lg font-semibold rounded bg-[#F7A582] text-white hover:bg-[#f2936a] hover:text-black"
                >
                  All Service
                </button>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="../../../public/image/Group 34991.png"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[550px] xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
