
const SkillsCard = ({fill,pathD,title,viewBox}) => {
  return (
    <div className="w-1/2 text-white items-center justify-center hover:bg-[#181828] hover:shadow-xl rounded-xl p-4 mt-10 border border-blue-300/30 hover:scale-105 opacity-80 hover:opacity-100 ease-in-out duration-500">
      <svg
        viewBox={viewBox}
        fill={fill}
        height="3em"
        width="3em"
        className="mx-auto"
      >
        <path d={pathD} />
      </svg>
      <p className="text-2xl mx-auto">{title}</p>
    </div>
  );
};
export default SkillsCard;
