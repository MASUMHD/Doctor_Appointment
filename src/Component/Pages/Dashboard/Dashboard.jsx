import DashNavBar from "./DashNavBar";
import PropTypes from 'prop-types';

const Dashboard = ({ SideBarToggle, setSideBarToggle }) => {
  return (
    <div className={`${SideBarToggle ? "ml-0" : "ml-64"} w-full transition-all duration-300`}>
      <DashNavBar SideBarToggle={SideBarToggle} setSideBarToggle={setSideBarToggle} />
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Welcome Back, Dashboard</h1>
        {/* Other dashboard content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  SideBarToggle: PropTypes.bool,
  setSideBarToggle: PropTypes.func
}
