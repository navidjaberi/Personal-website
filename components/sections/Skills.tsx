import SkillsCard from "../base/SkillsCard";
import { skills } from "../base/SkillsContent"
const Skills = () => {
  return (
    <div className=" mx-auto h-screen text-white mt-24">
      <div className="flex items-center justify-center">
        <div className="w-1/5 h-0.5 bg-white"></div>
        <h1 className="text-4xl px-4 py-2 " style={{ fontFamily: "protest" }}>
          Skills
        </h1>
        <div className="w-1/5 h-0.5 bg-white"></div>
           </div>
          <div className="w-full grid grid-cols-4 gap-4">

    
    
        {skills.map((i) => (
          <SkillsCard
            key={i.id}
            fill={i.fill}
            pathD={i.pathD}
            title={i.name}
            viewBox={i.viewBox}
          />
        ))}
           </div>
        </div>
   

  );
};
export default Skills;
