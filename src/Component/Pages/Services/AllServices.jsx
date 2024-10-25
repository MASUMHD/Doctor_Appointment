import { Helmet } from "react-helmet";

const AllServices = () => {
  return (
    <div>
      <Helmet>
        <title>Doc | Services</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold uppercase">All Services</h1>
      </div>
    </div>
  );
};

export default AllServices;
