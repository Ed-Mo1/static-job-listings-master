import { useContext } from "react";
import { JobContext } from "../context/JobProvidor";
const Tabs = ({ data }) => {
  const { setFilter, filteredItems } = useContext(JobContext);
  const handleFilter = (item) => {
    !filteredItems.includes(item) && setFilter((prev) => [...prev, item]);
  };
  return (
    <div className="flex gap-5 flex-wrap flex-1 justify-end max-md:justify-start">
      {data.map((item) => (
        <button
          onClick={() => handleFilter(item)}
          key={item}
          className="tab rounded-lg"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
