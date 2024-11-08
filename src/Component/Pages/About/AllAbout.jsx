import { Helmet } from "react-helmet";

const AllAbout = () => {
    return (
        // background img set
        <div className=" mb-96 md:mb-0 pl-3 lg:pl-32 pr-3 lg:pr-32">
            <Helmet>
                <title>Doc | About</title>
            </Helmet>
            <section className="h-screen -mt-0 lg:-mt-16 flex  gap-12 md:gap-0 flex-col md:flex-row items-center md:justify-between  py-10 space-y-8 md:space-y-0 ">
                {/* Left Side - Doctor's About Section */}
                <div className="flex flex-col space-y-4 md:space-y-8 md:w-1/2 text-center md:text-left ">
                    <h1 className="text-3xl md:text-5xl font-bold uppercase text-[#07332F]">Doctor's House</h1>
                    <p className="text-lg md:text-xl text-gray-600 ">
                        Welcome to the Doctor's House! Here, we provide world-class medical care to ensure your health is our top priority.
                        Our experienced medical team is dedicated to offering personalized services and guidance tailored to your unique needs.
                    </p>
                    <p className="text-gray-600">
                        From routine check-ups to specialized treatments, our facility is equipped with the latest technology and expertise.
                        Discover more about our services, the dedicated doctors, and our approach to holistic healthcare.
                    </p>
                </div>

                {/* Right Side - YouTube Video Embed */}
                <div className="md:w-1/2 flex justify-end  items-center  w-full p-10 bg">
                    <iframe 
                        width="100%" 
                        height="315" 
                        src="https://www.youtube.com/embed/bwx2Z69S0YA" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture form-control border-2 border-gray-600 rounded-lg shadow-lg  shadow-gray-600/50" 
                        allowFullScreen
                        className="rounded-lg shadow-lg  w-full ml-5 "
                    ></iframe>
                </div>
            </section>
            
        </div>
    );
};

export default AllAbout;
