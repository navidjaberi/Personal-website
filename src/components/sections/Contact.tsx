"use client";
import ContactCard from "@/src/components/base/contact/ContactCard";
import { contacts } from "@/src/components/base/contact/ContactContent";
import Image from "next/image";
import contactImg from "@/public/img/contact-img.jpg";
import contactImgDark from "@/public/img/contact-img-dark.jpg";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
const Contact = () => {
  const locale = useLocale();
  const t = useTranslations("contact");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <motion.div
      className=" mx-auto dark:text-white text-lightPrimary h-dvh "
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center md:pt-14">
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
        <h1
          className="md:text-4xl text-2xl px-4 py-2 "
          style={{ fontFamily: "protest" }}
        >
          {t("title")}
        </h1>
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
      </div>
      <div className="md:w-3/6 md:px-0 px-4 mx-auto text-lg leading-6 md:text-xs mt-32">
        <div
          className="w-full   dark:text-white text-black  dark:bg-darkPrimary bg-lightSecondary hover:shadow-xl rounded-xl p-4 mt-10 border border-darkPrimary/30 dark:border-darkSecondary/30 md:hover:scale-105  ease-in-out duration-500 "
          dir={locale === "fa" ? "rtl" : "ltr"}
        >
          <motion.div animate={{ opacity: [null, 0, 100] }}>
            <Image
              src={mounted && theme === "dark" ? contactImgDark : contactImg}
              className="w-32 rounded-full border-darkPrimary/30 border-2 mx-auto -mt-5 shadow-xl contact-animation "
              alt="Avatar"
            />
          </motion.div>
          <div className="mt-8 md:text-xl text-xs">
            <p> {t("thanks")}</p>
            <p className="mt-3">{t("description")}</p>
          </div>
          <div className="mt-5">
            <motion.a
              className=" border text-xs md:text-lg px-4 py-1  mx-auto rounded-3xl  items-center bg-lightSecondary border-lightPrimary dark:bg-transparent dark:text-darkSecondary dark:border-darkSecondary "
              href="/resume/resume.july.pdf"
              download
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {t("cv")}
            </motion.a>
          </div>

          <div className=" grid grid-cols-4 gap-1 mx-auto mt-3 ">
            {contacts.map((i) => (
              <ContactCard
                key={i.id}
                pathD={i.pathD}
                viewBox={i.viewBox}
                color={i.color}
                link={i.link}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
