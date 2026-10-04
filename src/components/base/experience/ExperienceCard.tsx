import { motion } from "framer-motion";
import { ease, fadeUp } from "@/src/components/motion";
import Link from "next/link";
import ExperiencesCardProps from "../../types/ExperiencesCard";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
const ExperiencesCard: React.FC<ExperiencesCardProps> = ({
  date,
  title,
  description,
  skills,
  link,
}) => {
  const locale = useLocale();
  const t = useTranslations("experiences");
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      className="w-full dark:text-white text-black flex flex-col md:flex-row dark:hover:bg-darkPrimary hover:bg-lightSecondary hover:shadow-xl rounded-xl p-4 mt-10 border border-darkPrimary/30 dark:border-darkSecondary/30  bg-[#DDD0C8] dark:bg-black"
      {...fadeUp}
      whileHover={{ scale: 1.02, transition: { duration: 0.25, ease } }}
    >
      <div className="md:w-1/4 mb-2 md:mb-0">
        <p className="uppercase md:text-xs text-xs  text-black dark:text-white opacity-50 mt-1">
          {date}
        </p>
      </div>
      <div className={`md:w-3/4 ${locale === "fa" ? "text-right" : "text-left"}`}>
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-1 hover:text-lightPrimary dark:hover:text-darkSecondary"
        >
          <h3 className="md:text-xl text-base ">{title}</h3>
          <ArrowUpRightIcon className="w-4 h-4 shrink-0" />
        </Link>
        <p
          className={`md:text-base text-sm mt-3 leading-7 ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs md:text-sm mt-2 text-lightPrimary dark:text-darkSecondary hover:underline"
        >
          {expanded ? t("less") : t("more")}
        </button>
        <div>
          {skills.map((i) => (
            <span
              key={i}
              className="inline-block border md:text-xs text-xs px-2 md:py-1 mt-2 md:mt-3 rounded-3xl d-flex items-center dark:text-darkSecondary dark:border-darkSecondary  bg-darkPrimary text-lightSecondary border-lightPrimary cursor-default md:mr-2 mr-1"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default ExperiencesCard;
