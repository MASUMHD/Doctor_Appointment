import { useEffect, useState } from "react";
import { format } from "date-fns";
import ServiceCard from "./ServiceCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ServicesBooking = () => {
  const currentDate = format(new Date(), "MMMM dd, yyyy");
  const [services, setServices] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosPublic.get("/services"); // Update the URL path as needed
        setServices(response.data);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, [axiosPublic]);

  return (
    <div>
      <div className="my-8">
        <div className="text-center mb-8">
          <p className="text-[#F7A582] text-base">
            Available Services on {currentDate}
          </p>
          <h1 className="text-4xl font-bold mt-2">Please select a service.</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 mb-28">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesBooking;
