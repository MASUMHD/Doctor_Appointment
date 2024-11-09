import { Helmet } from "react-helmet";
import ServicesBanner from "./ServicesBanner";
import ServicesCalendar from "./ServicesCalendar";
import ServicesBooking from "./ServicesBooking";

const AllServices = () => {
  return (
    <div>
      <Helmet>
        <title>Doc | Services</title>
      </Helmet>
      <ServicesBanner />
      <div className="pl-3 lg:pl-32 pr-3 lg:pr-32">
        <ServicesCalendar/>
        <ServicesBooking/>
      </div>
    </div>
  );
};

export default AllServices;
