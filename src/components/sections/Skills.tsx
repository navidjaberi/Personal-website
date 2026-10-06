"use client";
import SkillsCard from "@/src/components/base/skills/SkillsCard";
import { skills, skillGroups } from "@/src/components/base/skills/SkillsContent";
import { motion } from "framer-motion";
import { fadeUp } from "@/src/components/motion";
import { useLocale, useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("nav");
  const tSkills = useTranslations("skills");
  const locale = useLocale();

  return (
    <motion.div
      className=" mx-auto dark:text-white text-lightPrimary pt-5 items-center"
      {...fadeUp}
    >
      <div className="flex items-center justify-center md:pt-14 md:mt-8 mt-10 ">
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
        <h2
          className="md:text-4xl text-2xl px-4 py-2 "
          style={{ fontFamily: "serif" }}
        >
          {t('skills')}
        </h2>
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
      </div>
      <div className="md:w-3/5 md:px-0 px-2 grid grid-cols-5 gap-2 mx-auto mt-16 md:mt-0 md:gap-2">
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
      <div
        className="md:w-3/5 md:px-0 px-4 mx-auto mt-10 text-start text-black dark:text-white md:text-base text-sm leading-7"
        dir={locale === "fa" ? "rtl" : "ltr"}
      >
        {skillGroups.map((group) => (
          <p key={group.id} className="mt-2">
            <span className="font-semibold text-lightPrimary dark:text-darkSecondary">
              {tSkills(group.id)}:
            </span>{" "}
            <bdi>{group.items}</bdi>
          </p>
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
