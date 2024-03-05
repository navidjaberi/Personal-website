import { Fragment } from "react";

const ExperiencesCard = ({ date, title, description, skills }) => {
  return (

      <div className="w-full text-white flex hover:bg-[#181828] hover:shadow-xl rounded-xl p-4 mt-10 border border-blue-300/30 hover:scale-105 opacity-80 hover:opacity-100 ease-in-out duration-500">
        <div className="w-1/4 ">
          <p className="uppercase text-sm text-gray-100 opacity-50 mt-1" >{date}</p>
        </div>
        <div className="w-3/4 text-left">
          <h1 className="text-xl ">{title}</h1>
          <p className="text-base mt-3 leading-7">{description}</p>
          {skills.map((i) => (
            <button key={i.id} className="border text-sm px-2 py-1 mt-5 rounded-3xl d-flex items-center text-blue-300 border-blue-300  cursor-default mr-2">
              {i}
            </button>
          ))}
        </div>
      </div>

  );
};
export default ExperiencesCard;
