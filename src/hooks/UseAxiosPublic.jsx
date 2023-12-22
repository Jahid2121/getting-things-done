import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://getting-things-done-server.vercel.app'
})
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;