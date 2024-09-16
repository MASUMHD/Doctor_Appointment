const Footer = () => {
  return (
    <div className="">
      <footer className="footer justify-center gap-12 lg:gap-36 items-center bg-[#F3F3F3] text-base-content p-16 pl-3 lg:pl-32 pr-3 lg:pr-32">
        <aside>
          <img
            className="w-60 h-16 mx-auto lg:mx-0"
            src="../../../public/image/Group 36.png"
            alt=""
          />

          <p className="mt-5 text-center lg:text-start">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. has been <br /> since the printer took.
          </p>
          <div className="mt-6 mx-auto lg:mx-0">
            <button className="btn btn-outline border-[#F7A582] text-[#F7A582] font-bold ">
              Appointment
            </button>
          </div>
        </aside>
        <ul className="mx-auto">
          <li className="text-xl mb-6 font-bold text-black mx-auto lg:mx-0">Quick Links</li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            About Us
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Service
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Doctors
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Departments
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Online payment
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Contact Us
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            My Account
          </li>
        </ul>
        <ul className="mx-auto">
          <li className="text-xl mb-6 font-bold text-black mx-auto lg:mx-0">
            Doc House Services
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Pediatric Clinic
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Diagnosis Clinic
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Cardiac Clinic
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Laboratory Analysis{" "}
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Gynecological Clinic
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Personal Counseling
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Dental Clinic
          </li>
        </ul>
        <ul className="mx-auto">
          <li className="text-xl mb-6 font-bold text-black mx-auto lg:mx-0">Working Hours</li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Monday - 10 am to 7 pm
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Tuesday - 10 am to 7 pm{" "}
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Wednesday - 10 am to 7 pm{" "}
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Thursday - 10 am to 7 pm{" "}
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Friday - 10 am to 7 pm{" "}
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Saturday - 10 am to 7 pm{" "}
          </li>
          <li className="link link-hover text-base text-gray-500 font-semibold mx-auto lg:mx-0">
            Sunday - 10 am to 7 pm
          </li>
        </ul>
      </footer>

        <div className="bg-[#F3F3F3]">
          <hr className="border-2 border-[#F7A582] w-4/5 mx-auto " />

        </div>

      <footer className="footer footer-center p-10 bg-[#F3F3F3] text-base-content">
        <div>
          <p className="text-gray-500">Copyright © 2024 - All right reserved by Doc House Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
