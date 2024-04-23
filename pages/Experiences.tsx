"use client";
import { motion } from "framer-motion";
import ExperiencesCard from "@/components/base/experience/ExperienceCard";
import { experiences } from "@/components/base/experience/ExperiencesContent";
const Experiences = () => {
  return (
    <motion.div
      className=" mx-auto dark:text-white text-lightPrimary pt-5"
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center mt-20">
        <div className="w-1/5 h-0.5  bg-lightPrimary dark:bg-white"></div>
        <h1
          className="md:text-4xl  text-2xl px-4 py-2 "
          style={{ fontFamily: "protest" }}
        >
          Experiences
        </h1>
        <div className="w-1/5 h-0.5  bg-lightPrimary dark:bg-white"></div>
      </div>
      <div className="md:w-3/6 md:px-0 px-4 mx-auto text-lg leading-6 md:text-xsmt-5">
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
    </motion.div>
  );
};
export default Experiences;
