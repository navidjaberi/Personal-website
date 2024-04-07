const ExperiencesCard = ({ date, title, description, skills }) => {
  return (
    <div className="w-full dark:text-white text-black flex dark:hover:bg-darkPrimary hover:bg-lightSecondary hover:shadow-xl rounded-xl p-4 mt-10 border border-darkPrimary/30 dark:border-darkSecondary/30 hover:scale-105 opacity-80 hover:opacity-100 ease-in-out duration-500 ">
      <div className="w-1/4 ">
        <p className="uppercase md:text-sm text-xs  text-gray-100 opacity-50 mt-1">
          {date}
        </p>
      </div>
      <div className="w-3/4 text-left">
        <h1 className="md:text-xl text-sm ">{title}</h1>
        <p className="md:text-base text-sm mt-3 leading-7">{description}</p>
        {skills.map((i) => (
          <button
            key={i.id}
            className="border md:text-sm text-xs px-2 md:py-1  md:mt-5 rounded-3xl d-flex items-center dark:text-darkSecondary dark:border-darkSecondary  bg-darkPrimary text-lightSecondary border-lightPrimary cursor-default md:mr-2 mr-1"
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ExperiencesCard;
