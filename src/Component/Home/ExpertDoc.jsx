import ProfileCard from "./ProfileCard";
import UseDoctors from "../Hooks/UseDoctors";


const ExpertDoc = () => {

  const { doctors, isPending } = UseDoctors();

  if (isPending) {
    return ( 
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-3xl"></span>
      </div>
    )
  }


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
        {doctors.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default ExpertDoc;
