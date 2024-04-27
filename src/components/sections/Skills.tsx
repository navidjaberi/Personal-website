"use client";
import SkillsCard from "@/src/components/base/skills/SkillsCard";
import { skills } from "@/src/components/base/skills/SkillsContent";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div
      className=" mx-auto h-dvh md:h-auto dark:text-white text-lightPrimary pt-5 items-center"
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center md:pt-14 md:mt-8 mt-10 ">
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
        <h1
          className="md:text-4xl text-2xl px-4 py-2 "
          style={{ fontFamily: "protest" }}
        >
          Skills
        </h1>
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
      </div>
      <div className="md:w-3/5 md:px-0 px-2 grid grid-cols-4 md:grid-cols-5 gap-3 mx-auto mt-16 md:mt-0 md:gap-2">
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
