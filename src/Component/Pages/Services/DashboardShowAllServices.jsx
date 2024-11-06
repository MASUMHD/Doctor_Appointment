import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DashboardShowAllServices = () => {
    const [services, setServices] = useState([]);
    const axiosPublic = useAxiosPublic();

    // Fetch data when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosPublic.get("/services"); // Fetch services from the backend
                console.log("Services data:", response.data); // Log the data to console
                setServices(response.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchData(); // Call the fetch function
    }, [axiosPublic]);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">All Services</h1>
            {/* Render the services if needed */}
        </div>
    );
};

export default DashboardShowAllServices;
