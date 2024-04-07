import SkillsCard from "../base/SkillsCard";
import { skills } from "../base/SkillsContent";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div className=" mx-auto dark:text-white text-lightPrimary mt-24"
    initial={{opacity:0,y:200}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{ once: true }}
    >
      <div className="flex items-center justify-center">
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
        <h1 className="md:text-4xl text-2xl px-4 py-2 " style={{ fontFamily: "protest" }}>
          Skills
        </h1>
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
      </div>
      <div className="md:w-3/5 md:px-0 px-2 grid grid-cols-4 gap-2 mx-auto ">
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
    </motion.div>
  );
};
export default Skills;
