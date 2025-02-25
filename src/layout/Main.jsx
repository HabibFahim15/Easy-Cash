
import { Outlet } from "react-router-dom";

import Navbar from "../shared/navbar";



const Main = () => {
  return (
    <div className="dark:bg-[#010313] dark:text-white">
    <div>
      <Navbar />
    </div>
    <div className="min-h-[calc(100vh-145px)] max-w-[300px] md:max-w-2xl lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1450px]  mx-auto ">
    <Outlet />
    </div>
    <div className="dark:bg-[#010313]">
      
      {/* footer */}
    </div>
    </div>
  );
};

export default Main;