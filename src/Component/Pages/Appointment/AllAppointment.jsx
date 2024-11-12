import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AppointmentCard from "./AppointmentCard";
import AppointmentBanner from "./AppointmentBanner";
import UseAuth from "../../Hooks/UseAuth";

const AllAppointment = () => {
  const axiosPublic = useAxiosPublic();
  const [appointments, setAppointments] = useState([]);
  const { user } = UseAuth();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (user?.email) {
          const response = await axiosPublic.get(`/bookings/${user.email}`);
          setAppointments(response.data);  
        } else {
          console.log("No user logged in.");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [axiosPublic, user?.email]);  

  return (
    <div>
      <Helmet>
        <title>Doc | Appointment</title>
      </Helmet>
      <div>
        <AppointmentBanner />
      </div>
      <div className="pl-3 lg:pl-32 pr-3 lg:pr-32">
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-12 p-4">
          {appointments.length === 0 ? (
            <p>No appointments found for this user.</p>
          ) : (
            appointments.map((appointment) => (
              <AppointmentCard key={appointment._id} appointment={appointment} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllAppointment;
