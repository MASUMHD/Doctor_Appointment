import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const ServicesBookConfirm = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [serviceInfo, setServiceInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { register, handleSubmit } = useForm();
  const { user } = UseAuth();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axiosPublic.get(`/services/${id}`);
        setService(response.data);

        // Storing service information
        const serviceData = {
          title: response.data.title,
          imageUrl: response.data.imageUrl,
          startTime: response.data.startTime,
          endTime: response.data.endTime,
          doctorFees: response.data.doctor_fees,
          doctorName: response.data.doctorName,
        };

        // You can store this data in serviceInfo
        setServiceInfo(serviceData);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };
    fetchService();
  }, [id, axiosPublic]);

  const onSubmit = async (data) => {
    // User info
    const userInfo = {
      name: user.displayName,
      email: user.email,
      userImageUrl: user.photoURL,
    };
    const status = "pending";
    const formData = { ...data, paymentMethod, serviceInfo, userInfo, status };

    if (paymentMethod === "online") {
      console.log("Form Data:", formData);
      alert("uff online payment is not available");
    } else if (paymentMethod === "cash") {
      try {
        const response = await axiosPublic.post("/bookings", formData);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Booking Confirmed!",
            text: "Your booking has been successfully confirmed.",
            confirmButtonText: "OK",
          });
        }
        navigate("/appointment");
      } catch (error) {
        console.error("Error confirming booking:", error);
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "There was an issue confirming your booking. Please try again.",
        });
      }
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
            <h1 className="text-3xl font-semibold mb-5 text-center">
              {service.title}
            </h1>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-44 h-44 rounded-full mx-auto mb-5"
            />
            <p className="text-gray-500 mt-10 text-center">
              Available Time: {service.startTime} - {service.endTime}
            </p>
            {service.doctorName && (
              <p className="text-gray-700 mt-3">
                <span className="font-semibold text-lg">Doctor Name :</span>
                <span className="text-gray-500 text-xl ml-1">
                   {service.doctorName}
                </span>
              </p>
            )}
            {service.description && (
              <p className="text-gray-700 my-2 ">
                <span className="font-semibold text-lg">Description :</span>
                <span className="text-gray-500 ml-1">{service.description}</span>
              </p>
            )}
            {service.doctor_fees && (
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-lg">Doctor Fees :</span>
                <span className="text-gray-500 text-xl ml-1">
                  ${service.doctor_fees}
                </span>
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
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium"
              >
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
              <label
                htmlFor="doctorFees"
                className="block text-gray-700 font-medium"
              >
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
                  className="mr-2 hidden"
                />
                <label htmlFor="online" className="text-gray-700 hidden">
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
