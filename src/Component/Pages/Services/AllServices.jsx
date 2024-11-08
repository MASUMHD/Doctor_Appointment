import { Helmet } from "react-helmet";
import ServicesBanner from "./ServicesBanner";

const AllServices = () => {
  return (
    <div>
      <Helmet>
        <title>Doc | Services</title>
      </Helmet>
      <div className="">
        <ServicesBanner />
      </div>
    </div>
  );
};

export default AllServices;
