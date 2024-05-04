import Deatails from "./Details";
import Logo from "./Logo";
import Tabs from "./Tabs";
const Job = ({
  company,
  logo,
  new: isNew,
  featured,
  languages,
  tools,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
}) => {
  return (
    <div
      className={`py-5 flex justify-between gap-5 max-md:items-start max-md:flex-col relative ${
        featured &&
        "before:absolute before:left-0 before:top-0 before:h-full before:w-1"
      } before:bg-main items-center px-3 md:px-10 rounded-md bg-white shadow-xl`}
    >
      <div className="flex gap-5 flex-1 max-md:flex-col">
        <div className="md:flex-shrink-0 max-md:absolute max-md:top-[-20px] max-md:lef-0 max-md:w-[60px] ">
          <Logo logo={logo} />
        </div>
        <Deatails
          company={company}
          postedAt={postedAt}
          location={location}
          contract={contract}
          isNew={isNew}
          featured={featured}
          position={position}
        />
      </div>
      <div className="max-md:block hidden border border-dark-grayish-cyan w-full my-2"/>
      <Tabs data={[...languages, ...tools, role, level]} />
    </div>
  );
};

export default Job;
