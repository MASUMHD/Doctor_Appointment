import PropTypes from "prop-types";

const AppointmentCard = ({ appointment }) => {
  const { serviceTitle, date, time, status } = appointment;
  const doctorName = appointment.serviceInfo.doctorName;
  const patient = appointment.userInfo.name;
  const image = appointment.serviceInfo.imageUrl;
  const doctorFees = appointment.serviceInfo.doctorFees;

  // Set color for status badge based on appointment status
  const statusColor =
    status === "Confirmed"
      ? "bg-green-500"
      : status === "Pending"
      ? "bg-yellow-500"
      : status === "Cancelled"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <div className="w-full md:w-1/2  rounded-lg overflow-hidden shadow bg-white p-4 relative border-l-4 border-b-4 border-[#F7A582] transform hover:scale-105 transition-transform duration-300">
      {/* Header Section with Background */}
      <div className="bg-[#a4adadcc] text-white text-center py-2 rounded-t-lg">
        <h2 className="text-lg font-semibold">{serviceTitle}</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
        {/* Service Image */}
        <div className="border rounded-lg p-2 mt-5  ">
          <img src={image} className="w-full h-44 object-cover" alt="" />
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-2 border-l-2 border-dashed rounded-lg  mt-5   ">
          <div className="space-y-2">
          <p className="text-gray-700">
            <strong>Doctor:</strong> {doctorName}
          </p>
          <p className="text-gray-700">
            <strong>Patient:</strong> {patient}
          </p>
          <p className="text-gray-700">
            <strong>Date:</strong> {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong>Time:</strong> {time}
          </p>
          <p className="text-gray-700">
            <strong>Doctor Fees:</strong> ${doctorFees}
          </p>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <span
        className={`${statusColor} text-white px-3 py-1 text-xs font-semibold rounded-full absolute top-3 right-3`}
      >
        {status}
      </span>
    </div>
  );
};

export default AppointmentCard;

AppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    serviceTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    serviceInfo: PropTypes.shape({
      doctorName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      doctorFees: PropTypes.number.isRequired,
    }).isRequired,
    userInfo: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
