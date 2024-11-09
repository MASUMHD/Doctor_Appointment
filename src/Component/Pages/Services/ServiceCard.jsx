import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
    
    const handelBookings = () => {
        alert("Bookings are coming soon")
    }

    return (
        <div className="shadow-lg rounded-lg p-6 text-center bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
                <img src={service.imageUrl} alt={service.title} className="w-16 h-16 rounded-full" />
            </div>
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="text-gray-500 my-2">
                {service.startTime} - {service.endTime}
            </p>
            <button onClick={handelBookings} className="bg-[#F7A582] text-white px-4 py-2 rounded-full mt-4 transform transition-transform duration-200 hover:bg-[#07332F] hover:scale-105 hover:shadow-lg">
                Book Appointment
            </button>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
    }).isRequired,
};
