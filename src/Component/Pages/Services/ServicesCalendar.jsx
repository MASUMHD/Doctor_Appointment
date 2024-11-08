import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import chairImage from "../../../../public/image/chair 1.png"; // Adjust the path accordingly

const ServicesCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-10 lg:mt-20 mb-10 lg:mb-20">
      <div className="flex flex-col md:flex-row items-center justify-around space-y-16 md:space-y-0 md:space-x-4 lg:space-x-10">
        <style >
          {`
            .react-calendar {
              border: none;
              border-radius: 0.5rem;
              overflow: hidden;
              width: 100%;
            }
            .react-calendar__tile--now {
              background: #3b82f6; 
              color: white;
            }
            .react-calendar__tile--active {
              background: #F7A582; 
              color: white;
            }
            .react-calendar__tile {
              padding: 1rem;
              border-radius: 0.25rem;
            }
            .react-calendar__navigation__label {
              font-weight: 600;
            }
          `}
        </style>
        <div className="w-full md:w-1/3  bg-white rounded-lg shadow-lg p-4">
          <Calendar onChange={setDate} value={date} className="w-full" />
        </div>
        <div className="w-full md:w-[50%] ">
          <img
            src={chairImage}
            alt="Dental Chair"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCalendar;
