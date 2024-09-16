import { CiClock2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-7 text-center mb-16 md:mb-28">
      <div className="h-48 w-full text-white border rounded-lg bg-[#07332F] flex gap-5 justify-center items-center">
        <h1 className="text-5xl font-extrabold -mt-9">
          <CiClock2 />
        </h1>
        <div>
          <h1 className="text-2xl text-start font-bold">Opening Hours</h1>
          <p className="mt-2 text-start">
            Open 9.00 am to 5.00pm <br /> Everyday
          </p>
        </div>
      </div>
      <div className="h-48 w-full text-white border rounded-lg bg-[#F7A582] flex  gap-5 justify-center items-center">
        <h1 className="text-5xl font-extrabold -mt-9">
          <IoLocationOutline />
        </h1>
        <div>
          <h1 className="text-2xl text-start font-bold">Our Locations</h1>
          <p className="mt-2 text-start">
            Dhanmondi 17, Dhaka <br /> -1200, Bangladesh
          </p>
        </div>
      </div>
      <div className="h-48 w-full text-white border rounded-lg bg-[#07332F] flex  gap-5 justify-center items-center">
        <h1 className="text-5xl font-extrabold -mt-9">
          <VscCallOutgoing />
        </h1>
        <div>
          <h1 className="text-2xl text-start font-bold">Contact Us</h1>
          <p className="mt-2 text-start">
            +88 01750 00 00 00 <br />
            +88 01750 00 00 00{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
