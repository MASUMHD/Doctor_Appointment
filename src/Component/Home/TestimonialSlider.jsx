import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UseReview from "../Hooks/UseReview";
import PropTypes from 'prop-types';



const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[-10px] md:right-[-30px] top-1/2 transform -translate-y-1/2 bg-orange-200 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-orange-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[-20px] md:left-[-30px] top-1/2 transform -translate-y-1/2 bg-orange-200 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-orange-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const TestimonialSlider = () => {

  const { reviews, isPending } = UseReview();
  // console.log("testimonials:::::", reviews);

  if (isPending) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-3xl"></span>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {reviews.map((testimonial, index) => (
          <div key={index} className="p-4 ">
            <div className="bg-white rounded-lg shadow-lg p-6  max-w-screen-lg h-64 items-center border">
              <div className="flex justify-between items-center">
                <div className=" flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-2  border-[#F7A582] object-cover mb-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 mb-2">{testimonial.role}</p>
                  </div>
                </div>
                <div>
                  <img src="../../../public/image/Group 17.png" alt="" />
                </div>
              </div>

              <p className="italic text-gray-700">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

TestimonialSlider.propTypes = {
  reviews: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    quote: PropTypes.string,
  }).isRequired,
};

