import Navbar from "../../Shared/Navbar";
import Banner from "../../components/Banner";
import Benefit from "../../components/Benefit/Benefit";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="">
      <Navbar />
      <Banner />
      <Benefit />
      <Footer />
      </div>
    </div>
  );
};

export default Home;