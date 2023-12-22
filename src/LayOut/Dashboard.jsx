import { Outlet } from "react-router-dom";
import CustomNavLink from "../components/CustomNavLink";
import Navbar from "../Shared/Navbar";
import { FaPlus, FaTasks, FaUser } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-3 flex flex-col gap-5 items-center pt-12 bg-customBlue">

                  <CustomNavLink className="flex items-center gap-3" to="/dashboard">
                    <FaUser /> Profile
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex  items-center gap-3" 
                    to="/dashboard/task"
                  > 
                   <FaTasks /> My Task
                  </CustomNavLink>
                  <CustomNavLink
                    className="flex  items-center gap-3" 
                    to="/dashboard/createTask"
                  > 
                   <FaPlus /> Create Task
                  </CustomNavLink>
                
                  
                  
                  
               
            
              
            </div>
            <div className="col-span-9 text-center pt-20 bg-customSalmon">
              <Outlet />
            </div>
          </div>
        <div className="mt-20 w-11/12 mx-auto text-black">
          
        </div>
    </div>
  );
};

export default Dashboard;