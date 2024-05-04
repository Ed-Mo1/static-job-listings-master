import { createContext, useEffect, useState } from "react";
import jobs from "./data.json";

export const JobContext = createContext();
const JobProvidor = ({ children }) => {
  const [data, setData] = useState(jobs);
  const [filteredItems, setFilter] = useState([]);
  const reset = () => {
    setFilter([]);
  };
  const removeFilterItem = (item) => {
    setFilter((prev) => prev.filter((i) => i !== item));
  };
  useEffect(() => {
    filteredItems.length > 0
      ? setData(
          jobs.filter(({ languages, tools, role, level }) =>
            filteredItems.every(
              (filter) =>
                languages.includes(filter) ||
                tools.includes(filter) ||
                role === filter ||
                level === filter
            )
          )
        )
      : setData(jobs);
  }, [filteredItems]);
  return (
    <JobContext.Provider
      value={{ reset, removeFilterItem, data, filteredItems, setFilter }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvidor;
