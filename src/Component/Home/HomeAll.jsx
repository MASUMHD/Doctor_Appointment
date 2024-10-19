import { Helmet } from "react-helmet";
import Banner from "./Banner";
import OurServices from "./OurServices";
import Cards from "./Cards";
import Review from "./Review";
import ExpertDoc from "./ExpertDoc";
import ContactForm from "./ContactForm";

const HomeAll = () => {
  return (
    <div>
      <Helmet>
        <title>Doc | Home</title>
      </Helmet>
      <Banner />
      <div className="pl-3 lg:pl-32 pr-3 lg:pr-32">
        <OurServices />
        <Cards/>
        <Review/>
        <ExpertDoc/>
        <ContactForm/>
      </div>
    </div>
  );
};

export default HomeAll;

