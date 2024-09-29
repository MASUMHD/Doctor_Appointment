import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseDoctors = () => {

    const { data: doctors = [], isPending } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await axios("doctors.json");
            return res.data;
        },
    })

    return { doctors, isPending };
};

export default UseDoctors;