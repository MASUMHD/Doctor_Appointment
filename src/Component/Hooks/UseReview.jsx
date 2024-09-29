import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseReview = () => {
  const { data: reviews = [], isPending } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios("review.json");
      return res.data;
    },
  });

  return {
    reviews,
    isPending,
  };
};

export default UseReview;
