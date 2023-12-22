import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";

const UseTask = () => {
    const axiosPublic = useAxiosPublic();
    const { refetch, data: tasks = [] } = useQuery({
      queryKey: ["tasks"],
      queryFn: async () => {
        const res = await axiosPublic.get(
          '/tasks'
        );
        return res.data;
      },
    });
  
    return [tasks, refetch];
  };

export default UseTask;