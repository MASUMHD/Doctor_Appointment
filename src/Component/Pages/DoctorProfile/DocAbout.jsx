import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const DocAbout = ({ doctor }) => {
  const [activeSection, setActiveSection] = useState(0);

  const handleClick = (index) => {
    setActiveSection(index);
  };

  return (
    <div className="py-14 lg:px-20 mb-20 rounded-xl shadow-md p-3">
      {/* Button Navigation */}
      <div className="flex mb-10 gap-1 md:gap-2 lg:gap-3 justify-center">
        <button
          className={`btn w-1/4 ${
            activeSection === 0 ? "bg-[#F7A582] text-white" : "bg-gray-300"
          }`}
          onClick={() => handleClick(0)}
        >
          Overview
        </button>
        <button
          className={`btn w-1/4 ${
            activeSection === 1 ? "bg-[#F7A582] text-white" : "bg-gray-300"
          }`}
          onClick={() => handleClick(1)}
        >
          Locations
        </button>
        <button
          className={`btn w-1/4 ${
            activeSection === 2 ? "bg-[#F7A582] text-white" : "bg-gray-300"
          }`}
          onClick={() => handleClick(2)}
        >
          Reviews
        </button>
        <button
          className={`btn w-1/4 ${
            activeSection === 3
              ? "bg-[#F7A582] text-white"
              : "bg-gray-300 "
          }`}
          onClick={() => handleClick(3)}
        >
          Business Hours
        </button>
      </div>

      {/* Conditionally Render Sections Based on Active Button */}
      {activeSection === 0 && (
        <div>
          {/* About Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              About Me
            </h2>
            <p className="text-gray-600">{doctor.doc_abouts}</p>
          </div>

          {/* Education and Awards - 2 Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Education
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {doctor.doc_education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Awards
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {doctor.doc_awards.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Specializations */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Specializations
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {doctor.doc_specializations.map((specialization, index) => (
                  <li key={index}>{specialization}</li>
                ))}
              </ul>
            </div>

            {/* Work & Experience (optional) */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Work & Experience
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Glowing Smiles Family Dental Clinic (2010 - Present)</li>
                <li>Comfort Care Dental Clinic (2007 - 2010)</li>
                <li>Dream Smile Dental Practice (2005 - 2007)</li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {doctor.doc_service.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Locations Section */}
      {activeSection === 1 && (
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center md:text-start">
            Locations
          </h2>
          <p className="text-gray-600">
            {/* Add real locations data here */}
            123 Medical Clinic Road, Dhaka City, Bangladesh
            <br />
            <div className="text-sm text-gray-500 flex justify-center md:justify-start items-center my-2">
              <IoLocationOutline className="mr-2" /> {doctor.location}
            </div>
          </p>
        </div>
      )}

      {/* Reviews Section */}
      {activeSection === 2 && (
        <div>
          <div className="mb-7 justify-between flex">
            <h2 className="text-3xl font-semibold text-gray-800 ">Reviews</h2>
            <div>
              <button
                className="btn w-full text-sm font-medium text-gray-800 hover:text-gray-900 border-2 border-[#07332f]"
                onClick={() => {
                  // Add modal or form to add review
                  alert("Review added successfully!");
                }}
              >
                <span>
                  <FaRegPenToSquare />
                </span>
                Add Review
              </button>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {/* Add dynamic reviews data here */}
            <li>Great experience! Highly recommended. (5/5)</li>
            <li>Very professional and caring. (4.5/5)</li>
            <li>Would definitely visit again! (5/5)</li>
          </ul>
        </div>
      )}

      {/* Business Hours Section */}
      {activeSection === 3 && (
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Business Hours
          </h2>
          <p className="text-gray-600">
            {/* Add real business hours here */}
            Monday - Friday: 9:00 AM - 5:00 PM
            <br />
            <span className="font-semibold">Saturday:</span> 10:00 AM - 3:00 PM
            <br />
            <span className="font-semibold">Sunday:</span> Open 24 hours
          </p>
        </div>
      )}
    </div>
  );
};

export default DocAbout;

DocAbout.propTypes = {
  doctor: PropTypes.shape({
    doc_abouts: PropTypes.string.isRequired,
    doc_education: PropTypes.arrayOf(PropTypes.string).isRequired,
    doc_awards: PropTypes.arrayOf(PropTypes.string).isRequired,
    doc_service: PropTypes.arrayOf(PropTypes.string).isRequired,
    doc_specializations: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};
