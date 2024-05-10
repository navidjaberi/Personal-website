import { motion } from "framer-motion";
import SkillsCardProps from "../../types/SkillsCard"
const SkillsCard: React.FC<SkillsCardProps>  = ({fill,pathD,title,viewBox}) => {
  return (
    <motion.div className="w-full text-white   items-center justify-center dark:hover:bg-darkPrimary dark:bg-transparent hover:shadow-xl rounded-xl md:p-4 p-2 md:mt-10 border dark:border-darkSecondary/30 border-lightSecondary  bg-lightPrimary mx-auto"
    initial={{opacity:0.8}}
    whileHover={{ opacity:1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    
    >
      <svg
        viewBox={viewBox}
        fill={fill}
        height="3em"
        width="3em"
        className="mx-auto"
      >
        <path d={pathD} />
      </svg>
      <p className="md:text-2xl text-xs  ">{title}</p>
    </motion.div>
  );
};
export default SkillsCard;
