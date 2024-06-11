import { motion } from "framer-motion";
import Link from "next/link";
import ContactCardProps from "../../types/ContactCard";
const ContactCard: React.FC<ContactCardProps> = ({
  pathD,
  color,
  viewBox,
  link,
}) => {
  return (
    <div className="w-full text-white items-center justify-center rounded-xl p-2 md:mt-10   ease-in-out duration-500 mx-auto">
      <Link href={link} target="_blank">
        <motion.svg
          viewBox={viewBox}
          fill="currentColor"
          className={`mx-auto dark:opacity-50 dark:hover:opacity-100 cursor-pointer ${color} w-11 h-11 md:w-20 md:h-20 focus:outline-none`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 60,
            duration: 2,
          }}
        >
          <path d={pathD} />
        </motion.svg>
      </Link>
    </div>
  );
};
export default ContactCard;
