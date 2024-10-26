import { Helmet } from "react-helmet";
import DashboardNavBar from "./DashboardNavBar";

const AllDashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard</title>
      </Helmet>
      <div>
        <DashboardNavBar/>
      </div>
    </div>
  );
};

export default AllDashboard;
