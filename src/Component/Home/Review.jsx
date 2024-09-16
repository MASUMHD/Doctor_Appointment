import TestimonialSlider from "./TestimonialSlider"; 

const Review = () => {
  return (
    <div className="mb-16 md:mb-28">
      <div className="mb-10">
        <h1 className="text-center text-5xl font-bold">What Our Patients Says</h1>
        <p className="text-center mt-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
          <br /> quae ab illo inve ntore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
      </div>
      <TestimonialSlider />
    </div>
  );
};

export default Review;
