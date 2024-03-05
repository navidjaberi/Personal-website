
import ExperiencesCard from "../base/ExperienceCard";
import { experiences } from "../../components/base/ExperiencesContent";
const Experiences = () => {
  return (
    <div className=" mx-auto  text-white">
      <div className="flex items-center justify-center">
        <div className="w-1/5 h-0.5 bg-white"></div>
        <h1 className="text-4xl px-4 py-2 " style={{ fontFamily: "protest" }}>
          Experiences
        </h1>
        <div className="w-1/5 h-0.5 bg-white"></div>
      </div>
      <div className="w-3/6 mx-auto text-lg leading-8 mt-5">
        {experiences.map((i) => (
          <ExperiencesCard
            key={i.id}
            date={i.date}
            title={i.title}
            description={i.description}
            skills={i.skills}
          />
        ))}
      </div>
    </div>
  );
};
export default Experiences;
