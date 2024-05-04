import { useContext } from "react";
import { JobContext } from "../context/JobProvidor";
import { MdOutlineClose } from "react-icons/md";

const Filtering = () => {
  const { filteredItems, reset, removeFilterItem } = useContext(JobContext);
  return (
    <div
      className={`bg-white flex justify-between ${
        filteredItems.length > 0 ? "visible" : "invisible"
      } items-center shadow-lg rounded-lg p-5 translate-y-[-50%]`}
    >
      <div className="flex gap-5 flex-grow flex-wrap">
        {filteredItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <h3 className="tab rounded-lg h-full grid place-content-center rounded-e-none">
              {item}
            </h3>
            <button
              onClick={() => removeFilterItem(item)}
              className="text-white rounded-e-lg bg-main hover:bg-very-dark-grayish-cyan p-3"
            >
              <MdOutlineClose />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={reset}
        className="text-main w-fit text-xl border-b-main border-solid font-semibold hover:border-b"
      >
        Clear
      </button>
    </div>
  );
};

export default Filtering;
