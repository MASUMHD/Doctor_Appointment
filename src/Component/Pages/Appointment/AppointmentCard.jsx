import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AppointmentCard = ({ appointment, onDelete }) => {
  const axiosPublic = useAxiosPublic();
  const { serviceTitle, date, time, status, _id } = appointment;
  const doctorName = appointment.serviceInfo.doctorName;
  const patient = appointment.userInfo.name;
  const image = appointment.serviceInfo.imageUrl;
  const doctorFees = appointment.serviceInfo.doctorFees;

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axiosPublic.delete(`/bookings/${_id}`);
        onDelete(_id); 
        Swal.fire("Deleted!", "Your appointment has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting appointment:", error);
        Swal.fire("Error", "Could not delete the appointment.", "error");
      }
    }
  };

  const statusColor =
    status === "Confirmed"
      ? "bg-green-500"
      : status === "Pending"
      ? "bg-cyan-500"
      : status === "Cancelled"
      ? "bg-red-500"
      : "bg-gray-500";

  const topHadar =
    status === "Confirmed"
      ? "bg-green-300"
      : status === "Pending"
      ? "bg-cyan-300"
      : status === "Cancelled"
      ? "bg-red-300"
      : "bg-gray-300";

  return (
    <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow bg-white p-4 relative border-l-4 border-b-4 border-[#F7A582] transform hover:scale-105 transition-transform duration-300">
      <div className={`${topHadar} text-white text-center py-2 rounded-t-lg`}>
        <h2 className="text-lg font-semibold">{serviceTitle}</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
        <div className="border rounded-lg p-2 mt-5">
          <img src={image} className="w-full h-44 object-cover" alt="" />
        </div>

        <div className="p-4 space-y-2 border-l-2 border-dashed rounded-lg mt-5">
          <div className="space-y-2">
            <p className="text-gray-700 "><strong>Doctor:</strong> {doctorName}</p>
            <p className="text-gray-700"><strong>Patient:</strong> {patient}</p>
            <p className="text-gray-700"><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
            <p className="text-gray-700"><strong>Time:</strong> {time}</p>
            <p className="text-gray-700"><strong>Doctor Fees:</strong> ${doctorFees}</p>
          </div>
        </div>
      </div>

      <span className={`${statusColor} text-white px-3 py-1 text-xs font-semibold rounded-full absolute top-3 right-3`}>
        {status}
      </span>

      <button
        className="absolute bottom-3 right-3 bg-gray-500 text-white p-2 rounded-full hover:bg-red-700 transition-all"
        onClick={handleDelete}
        aria-label="Delete Appointment"
      >
        <FaTrashAlt size={15} />
      </button>
    </div>
  );
};

AppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    serviceTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    _id: PropTypes.string,
    serviceInfo: PropTypes.shape({
      doctorName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      doctorFees: PropTypes.number.isRequired,
    }).isRequired,
    userInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired, 
};

export default AppointmentCard;
