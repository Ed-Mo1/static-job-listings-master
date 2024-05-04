import deskTopBg from "./assets/images/bg-header-desktop.svg";
import mobileBg from "./assets/images/bg-header-mobile.svg";
import { useContext } from "react";
import { JobContext } from "./context/JobProvidor";
import Filtering from "./components/Filtering";
import Job from "./components/Job";
const App = () => {
  const { data } = useContext(JobContext);
  return (
    <div>
      <div className="bg-desaturated-dark-cyan">
        <img src={deskTopBg} alt="bg" className="w-full hidden md:block" />
        <img src={mobileBg} alt="bg" className="w-full  block md:hidden " />
      </div>
      <div className="container">
        <Filtering />
        <div className="space-y-10 my-10">
          {data.map((job) => (
            <Job key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
