import { motion } from "framer-motion";
const ContactCard = ({ pathD, color, viewBox }) => {
  return (
    <div className="w-full text-white items-center justify-center rounded-xl p-4 md:mt-10   ease-in-out duration-500 mx-auto">
      <motion.svg
        viewBox={viewBox}
        fill="currentColor"
        height="4em"
        width="4em"
        className={`mx-auto dark:opacity-50 dark:hover:opacity-100 cursor-pointer ${color}`}
 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 60,duration:2}}
      >
        <path d={pathD} />
      </motion.svg>
    </div>
  );
};
export default ContactCard;
