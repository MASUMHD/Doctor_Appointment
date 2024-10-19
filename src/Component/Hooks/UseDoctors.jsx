import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseDoctors = () => {
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axios("/doctors.json"); 
      return res.data;
    },
  });

  return { doctors, isLoading }; 
};

export default UseDoctors;
