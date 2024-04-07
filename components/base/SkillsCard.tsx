
const SkillsCard = ({fill,pathD,title,viewBox}) => {
  return (
    <div className="w-full text-white   items-center justify-center dark:hover:bg-darkPrimary dark:bg-transparent bg-lightPrimary hover:shadow-xl rounded-xl md:p-4 p-2 md:mt-10 border dark:border-darkSecondary/30 border-lightSecondary bg-lightPrimary hover:scale-105 opacity-80 hover:opacity-100 ease-in-out duration-500 mx-auto">
      <svg
        viewBox={viewBox}
        fill={fill}
        height="3em"
        width="3em"
        className="mx-auto"
      >
        <path d={pathD} />
      </svg>
      <p className="md:text-2xl text-sm  ">{title}</p>
    </div>
  );
};
export default SkillsCard;
