import Lottie from "lottie-react";
import bannerImg from "../assets/Animation - 1703217078537.json"
import Btn from "./Btn";
const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-bannerBg ">
        <div className="text-center font-bold mt-48">
            <h2 className="text-4xl mb-7 text-white">Manage Your Tasks</h2>
            <Btn text={'Let’s Explore'} />
        </div>
      <div>
        <Lottie animationData={bannerImg} />
      </div>
    </div>
  );
};

export default Banner;