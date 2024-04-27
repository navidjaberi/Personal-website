import { motion } from "framer-motion";
import ExperiencesCardProps  from "../../types/ExperiencesCard";
const ExperiencesCard: React.FC<ExperiencesCardProps> = ({
  date,
  title,
  description,
  skills,
}) => {
  return (
    <motion.div
      className="w-full dark:text-white text-black flex dark:hover:bg-darkPrimary hover:bg-lightSecondary hover:shadow-xl rounded-xl p-4 mt-10 border border-darkPrimary/30 dark:border-darkSecondary/30   "
      initial={{ opacity: 0, y: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
      transition={{ type: "spring", stiffness: 400, damping: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="w-1/4 ">
        <p className="uppercase md:text-xs text-xs  text-gray-100 opacity-50 mt-1">
          {date}
        </p>
      </div>
      <div className="w-3/4 text-left">
        <h1 className="md:text-xl text-xs ">{title}</h1>
        <p className="md:text-base text-xs mt-3 leading-7">{description}</p>
        {skills.map((i) => (
          <button
            key={i}
            className="border md:text-xs text-xs px-2 md:py-1  md:mt-5 rounded-3xl d-flex items-center dark:text-darkSecondary dark:border-darkSecondary  bg-darkPrimary text-lightSecondary border-lightPrimary cursor-default md:mr-2 mr-1"
          >
            {i}
          </button>
        ))}
      </div>
    </motion.div>
  );
};
export default ExperiencesCard;
