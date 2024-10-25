import { Helmet } from "react-helmet";

const AllAppointment = () => {
  return (
    <div>
      <Helmet>
        <title>Doc | Appointment</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold uppercase">All Appointment</h1>
      </div>
    </div>
  );
};

export default AllAppointment;
