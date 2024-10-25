import { Helmet } from "react-helmet";

const AllDashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold uppercase">All Dashboard</h1>
      </div>
    </div>
  );
};

export default AllDashboard;
