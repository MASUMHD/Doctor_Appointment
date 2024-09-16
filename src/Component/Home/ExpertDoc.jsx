import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";


const ExpertDoc = () => {

  const [Doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("../../../public/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.log('Doctors Errors',error));
  }, []);


  return (
    <div className="mb-16 md:mb-32">
      <div className="">
        <h1 className="text-center text-5xl font-bold">Our Expert Doctors</h1>
        <p className="text-center mt-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
          <br /> quae ab illo inve ntore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 mt-10
      ">
        {Doctors.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ExpertDoc;
