import PropTypes from "prop-types";

const AppointmentCard = ({ appointment }) => {
    const { doctorName, name, serviceTitle, date, startTime, endTime, status } = appointment;
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
        <h2 className="text-xl font-bold mb-2">{serviceTitle}</h2>
        <p><strong>Doctor:</strong> {doctorName}</p>
        <p><strong>Patient:</strong> {name}</p>
        <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {startTime} - {endTime}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
    );
  };
  
  export default AppointmentCard;

  AppointmentCard.propTypes = {
    appointment: PropTypes.shape({
      doctorName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      serviceTitle: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
  };

