"use client";
import classes from "@/styles/home.module.css";
import landingImgLight from "@/public/img/landing.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { animateScroll } from "react-scroll";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
type HomeProps = {
  onHeroLoaded?: () => void;
};
const Home = ({ onHeroLoaded }: HomeProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const t = useTranslations("hero");
  const locale = useLocale();
  const readMoreHandler = () => {
    animateScroll.scrollTo(850, {
      duration: 500,
      smooth: true,
    });
  };
  useEffect(() => {
    animateScroll.scrollTo(50, {
      duration: 100,
    });
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className=" mx-auto md:h-screen  flex items-center  dark:text-white text-[#271C35] md:pt-17">
      <div className="flex items-center md:flex-row flex-col-reverse md:mt-1 ">
        <div className="md:w-3/12 md:grow-0 w-full ">
          {locale === "fa" ? (
            <motion.div
              className="font-black lg:text-9xl text-8xl  flex flex-col lg:-mt-5 mt-12"
              style={{ fontFamily: "protest" }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
            >
              {" "}
              <motion.span className="md:text-right md:-ml-60 md:-mt-28  md:text-8xl text-6xl">
                نوید
              </motion.span>
              <motion.span className="md:text-right md:-mt-3  md:text-8xl text-6xl md:mr-12">
                جابری
              </motion.span>
            </motion.div>
          ) : (
            <motion.div
              className="font-black lg:text-9xl text-8xl  flex flex-col lg:-mt-5 mt-12"
              style={{ fontFamily: "protest" }}
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 2 }}
            >
              <motion.span className="md:text-left md:ml-7 -ml-60 md:-mt-12 ">
                NA
              </motion.span>
              <motion.span
                className={classes.text_second_piece}
                animate={{ x: 0 }}
                initial={{ x: -200 }}
                transition={{ duration: 3 }}
              >
                VID
              </motion.span>
              <motion.span className={classes.text_third_piece}>JA</motion.span>
              <motion.span
                className={classes.text_forth_piece}
                animate={{ x: 0 }}
                initial={{ x: -200 }}
                transition={{ duration: 3 }}
              >
                BERI
              </motion.span>
            </motion.div>
          )}
          <motion.div
            className=" md:ml-7 lg:mt-11 md:mt-4 mt-10"
            dir={locale === "fa" ? "rtl" : "ltr"}
          >
            <motion.p
              className="lg:text-lg md:text-md text-sm px-2  text-black dark:text-white"
              animate={{ x: 0 }}
              initial={{ x: -500 }}
              transition={{ delay: 3, duration: 1 }}
            >
              {t("description")}
            </motion.p>
            <motion.button
              animate={{
                x: 0,
                transition: {
                  delay: 3,
                  duration: 1,
                },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              initial={{ x: -500 }}
              className="hidden md:block border text-xs md:text-lg px-4 py-1 mt-5 mx-auto rounded-3xl  items-center bg-lightSecondary border-lightPrimary dark:bg-transparent dark:text-darkSecondary dark:border-darkSecondary "
              onClick={readMoreHandler}
            >
              {t("readMore")}{" "}
            </motion.button>
          </motion.div>
        </div>

        <div className="md:w-9/12 w-full  md:mt-0 md:flex-1 ">
          <motion.div
            className="md:px-12 px-3"
            initial={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Image
              priority
              src={landingImgLight}
              alt="landing"
              onLoad={() => onHeroLoaded?.()}
              style={
                mounted && theme === "dark"
                  ? {
                      filter: "grayscale(100%)",
                      WebkitFilter: "grayscale(100%)",
                    }
                  : {}
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Home;
