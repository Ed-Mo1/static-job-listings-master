const Details = ({
  company,
  postedAt,
  location,
  isNew,
  featured,
  contract,
  position,
}) => {
  return (
    <div>
      <div className="flex max-md:mt-6 items-center gap-5 max-md:flex-wrap">
        <h3 className="text-desaturated-dark-cyan text-lg font-semibold">
          {company}
        </h3>
        <div className="flex gap-2 text-sm">
          {isNew && (
            <h3 className="text-white py-1 px-3 font-bold bg-desaturated-dark-cyan rounded-full">
              NEW!
            </h3>
          )}
          {featured && (
            <h3 className="text-white py-1 px-3 font-bold bg-black rounded-full">
              FEATURED
            </h3>
          )}
        </div>
      </div>
      <h2 className="mt-2 text-xl font-semibold">{position}</h2>
      <div className="flex gap-1 flex-wrap">
        <p className="other_info">{postedAt}</p>
        <span className="text-dark-grayish-cyan">•</span>
        <p className="other_info">{contract}</p>
        <span className="text-dark-grayish-cyan">•</span>
        <p className="other_info">{location}</p>
      </div>
    </div>
  );
};

export default Details;
