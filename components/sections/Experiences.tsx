import { motion } from "framer-motion";
import ExperiencesCard from "../base/ExperienceCard";
import { experiences } from "../../components/base/ExperiencesContent";
const Experiences = () => {
  return (
    <motion.div
      className=" mx-auto dark:text-white text-lightPrimary mt-10"
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center">
        <div className="w-1/5 h-0.5  bg-lightPrimary dark:bg-white"></div>
        <h1
          className="md:text-4xl  text-2xl px-4 py-2 "
          style={{ fontFamily: "protest" }}
        >
          Experiences
        </h1>
        <div className="w-1/5 h-0.5  bg-lightPrimary dark:bg-white"></div>
      </div>
      <div className="md:w-3/6 md:px-0 px-4 mx-auto text-lg leading-8 mt-5">
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
