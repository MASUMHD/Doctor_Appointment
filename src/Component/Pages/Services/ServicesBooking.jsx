import { format } from "date-fns";

const ServicesBooking = () => {
  const currentDate = format(new Date(), "MMMM dd, yyyy");

  return (
    <div className="">
      <div className="text-center my-8 ">
        <p className="text-[#F7A582] text-base">
          Available Services on {currentDate}
        </p>
        <h1 className="text-4xl font-bold mt-2">Please select a service.</h1>
      </div>

        {/* services booking */}

        <dir>
            
        </dir>
    </div>
  );
};

export default ServicesBooking;
