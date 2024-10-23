import { useParams } from "react-router-dom";
import UseDoctors from "../../Hooks/UseDoctors";
import DocBanner from "./DocBanner";
import DocProfileCard from "./DocProfileCard";
import DocAbout from "./DocAbout";

const DoctorProfile = () => {
  const { id } = useParams();
  const { doctors, isLoading } = UseDoctors();

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-3xl"></span>
      </div>
    );
  }

  const doctor = doctors.find((doctor) => doctor.doc_id === id);

  if (!doctor) {
    return (
      <div className="text-4xl font-bold text-center mt-10 text-red-500 justify-center border-2 border-red-500 p-10">
        Doctor not found!
      </div>
    );
  }

  return (
    <div>
      <DocBanner doctor={doctor} />
      <div className="pl-3 lg:pl-32 pr-3 lg:pr-32">
        <DocProfileCard doctor={doctor} />
        <DocAbout doctor={doctor} />
      </div>
    </div>
  );
};

export default DoctorProfile;
