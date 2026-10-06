"use client";
import { motion } from "framer-motion";
import { ease, fadeUp } from "@/src/components/motion";
import Link from "next/link";
import { getProjects } from "../base/projects/projectHelper";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const locale = useLocale();
  const t = useTranslations("projects");
  const projects = getProjects(locale);
  return (
    <div className=" mx-auto dark:text-white text-lightPrimary pt-5 ">
      <motion.div
        className="flex items-center justify-center md:mt-16 mt-10"
        {...fadeUp}
      >
        <div className="w-1/5 h-0.5  bg-lightPrimary dark:bg-white"></div>
        <h2
          className="md:text-4xl  text-2xl px-4 py-2 "
          style={{ fontFamily: "serif" }}
        >
          {t("title")}
        </h2>
        <div className="w-1/5 h-0.5  bg-lightPrimary dark:bg-white"></div>
      </motion.div>
      <div
        className="md:w-3/6 md:px-0 px-4 mx-auto"
        dir={locale === "fa" ? "rtl" : "ltr"}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="w-full dark:text-white text-black text-start rounded-xl p-4 md:p-6 mt-10 border border-darkPrimary/30 dark:border-darkSecondary/30 bg-[#DDD0C8] dark:bg-black hover:shadow-xl"
            {...fadeUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.25, ease } }}
          >
            <h3 className="md:text-2xl text-lg">{project.title}</h3>
            <p className="md:text-sm text-xs opacity-60 mt-1">
              {project.subtitle}
            </p>
            <ul className="md:text-base text-sm mt-4 leading-7 list-disc ps-5 space-y-1">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="mt-4" dir="ltr">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="inline-block border text-xs px-2 md:py-1 mt-2 rounded-3xl dark:text-darkSecondary dark:border-darkSecondary bg-darkPrimary text-lightSecondary border-lightPrimary me-1 md:me-2"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-5">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm md:text-base px-4 py-1 rounded-3xl border border-lightPrimary text-lightPrimary dark:border-darkSecondary dark:text-darkSecondary hover:bg-lightPrimary/5 dark:hover:bg-white/5"
                >
                  {t(link.label)}
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
