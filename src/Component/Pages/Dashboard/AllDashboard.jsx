import { Helmet } from "react-helmet";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import { useState } from "react";

const AllDashboard = () => {
  const [SideBarToggle, setSideBarToggle] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard</title>
      </Helmet>

      <div className="flex">
        <SideBar SideBarToggle={SideBarToggle} />
        <Dashboard SideBarToggle={SideBarToggle} setSideBarToggle={setSideBarToggle} />
      </div>
    </div>
  );
};

export default AllDashboard;
