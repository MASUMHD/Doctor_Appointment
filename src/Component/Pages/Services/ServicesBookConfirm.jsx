import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const ServicesBookConfirm = () => {
  const { id } = useParams();
//   const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [service, setService] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axiosPublic.get(`/services/${id}`);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };
    fetchService();
  }, [id, axiosPublic]);

  const onSubmit = (data) => {
    // Include the payment method in the form data for logging
    const formData = { ...data, paymentMethod };

    if (paymentMethod === "online") {
      console.log("Form Data:", formData);
    //   navigate("/payment");
    } else if (paymentMethod === "cash") {
      console.log("Form Data:", formData);
    }
  };

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 lg:p-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-7xl h-auto p-12 lg:flex lg:flex-row lg:space-x-10">
        {/* Service Information Section */}
        <div className="lg:w-1/2 border-gray-300 border-r-0 lg:border-r-2 border-dashed">
          <div className="pr-0 lg:pr-10">
            <h1 className="text-3xl font-semibold mb-5 text-center">{service.title}</h1>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-44 h-44 rounded-full mx-auto mb-5"
            />
            <p className="text-gray-500 mt-10 text-center">
              Available Time: {service.startTime} - {service.endTime}
            </p>
            {service.description && (
              <p className="text-gray-700 my-4 mt-6 ">
                <span className="font-semibold text-lg">Description :</span>
                <span className="text-gray-500">{service.description}</span>
              </p>
            )}
            {service.doctor_fees && (
              <p className="text-gray-700 mt- mb-4">
                <span className="font-semibold text-lg">Doctor Fees :</span>
                <span className="text-gray-500 text-xl">${service.doctor_fees}</span>
              </p>
            )}
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium">
                Date :
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#07332F]"
                required
                {...register("date")}
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-gray-700 font-medium">
                Time :
              </label>
              <input
                type="time"
                id="time"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#07332F]"
                required
                {...register("time")}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium">
                Description :
              </label>
              <textarea
                id="description"
                rows="3"
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#07332F]"
                placeholder="Additional details"
                {...register("description")}
              />
            </div>

            <div>
              <label htmlFor="doctorFees" className="block text-gray-700 font-medium">
                Doctor Fees :
              </label>
              <input
                type="number"
                id="doctorFees"
                value={service.doctor_fees || ""}
                readOnly
                className="w-full px-4 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#07332F] bg-gray-100"
                {...register("doctorFees")}
              />
            </div>

            {/* Payment Options */}
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="mr-2"
                />
                <label htmlFor="cash" className="text-gray-700">
                  Cash Payment
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="online"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                  className="mr-2"
                />
                <label htmlFor="online" className="text-gray-700">
                  Online Payment
                </label>
              </div>
            </div>

            {/* Booking Confirm Button */}
            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-semibold transition-transform duration-200 mt-4 ${
                paymentMethod
                  ? "bg-[#F7A582] text-white hover:bg-[#07332F] hover:scale-105"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!paymentMethod}
            >
              Booking Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicesBookConfirm;
