"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <motion.div
      className=" mx-auto  h-dvh dark:text-white text-lightPrimary md:h-auto "
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center md:pt-28 pt-16">
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
        <h1
          className="md:text-4xl  text-2xl px-4 py-2 "
          style={{ fontFamily: "protest" }}
        >
          {" "}
          {t("title")}{" "}
        </h1>
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
      </div>
      <div
        className="md:w-3/6 mx-auto md:px-0 px-3 md:text-lg text-xs leading-6 md:leading-8 md:mt-10 text-black dark:text-white mt-10"
        dir={locale === "fa" ? "rtl" : "ltr"}
      >
        <p className="whitespace-pre-line">{t("description")}</p>
      </div>
    </motion.div>
  );
};
export default About;
