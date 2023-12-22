import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const useBenefits = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: benefits = [] } = useQuery({
      queryKey: ["benefits"],
      queryFn: async () => {
        const res = await axiosPublic.get(
          '/benefit'
        );
        return res.data;
      },
    });
  
    return [benefits, refetch];
  };

export default useBenefits;