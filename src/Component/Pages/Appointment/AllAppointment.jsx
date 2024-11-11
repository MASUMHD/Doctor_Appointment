import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AppointmentCard from './AppointmentCard'; // Import AppointmentCard

const AllAppointment = () => {
  const axiosPublic = useAxiosPublic();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axiosPublic.get('/bookings'); 
        setAppointments(response.data); 
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [axiosPublic]);

  return (
    <div className='pl-3 lg:pl-32 pr-3 lg:pr-32'>
      <Helmet>
        <title>Doc | Appointment</title>
      </Helmet>
      <div className="">
        <h1 className="text-3xl font-bold uppercase">All Appointment</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12 p-4">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment._id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default AllAppointment;
