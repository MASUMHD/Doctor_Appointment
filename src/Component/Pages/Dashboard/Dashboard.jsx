import DashNavBar from "./DashNavBar";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Dashboard = ({ SideBarToggle, setSideBarToggle }) => {
  return (
    <div
      className={`${
        SideBarToggle ? "ml-0" : "ml-64"
      } w-full transition-all duration-300`}
    >
      <DashNavBar
        SideBarToggle={SideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <div className="mt-8 text-center ">
        <Outlet />
      </div>
    </div>
  );
};
 
export default Dashboard;

Dashboard.propTypes = {
  SideBarToggle: PropTypes.bool,
  setSideBarToggle: PropTypes.func,
};
