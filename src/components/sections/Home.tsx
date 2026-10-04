"use client";
import classes from "@/styles/home.module.css";
import landingImgLight from "@/public/img/landing.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { ease, hoverTap } from "@/src/components/motion";
import { useTheme } from "next-themes";
import { scroller } from "react-scroll";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
type HomeProps = {
  ready?: boolean;
  onHeroLoaded?: () => void;
};
const Home = ({ ready = true, onHeroLoaded }: HomeProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const t = useTranslations("hero");
  const locale = useLocale();
  const readMoreHandler = () => {
    scroller.scrollTo("about", {
      duration: 500,
      smooth: true,
      offset: -80,
    });
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className=" mx-auto md:h-screen  flex items-center  dark:text-white text-[#271C35] md:pt-17">
      <div className="flex items-center md:flex-row flex-col-reverse md:mt-1 ">
        <div
          className={`md:w-3/12 md:grow-0 w-full ${
            locale === "fa" ? "md:pr-12" : ""
          }`}
        >
          {locale === "fa" ? (
            <motion.h1
              className="font-black lg:text-9xl text-8xl  flex flex-col lg:-mt-5 mt-12"
              style={{ fontFamily: "serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: ready ? 1 : 0 }}
              transition={{ duration: 0.8, ease }}
            >
              {" "}
              <motion.span className="md:text-right md:-ml-60 md:-mt-28  md:text-8xl text-6xl">
                نوید
              </motion.span>
              <motion.span className="md:text-right md:-mt-3  md:text-8xl text-6xl md:mr-12">
                جابری
              </motion.span>
            </motion.h1>
          ) : (
            <motion.h1
              className="font-black lg:text-9xl text-8xl  flex flex-col lg:-mt-5 mt-12"
              style={{ fontFamily: "serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: ready ? 1 : 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <motion.span className="md:text-left md:ml-7 -ml-60 md:-mt-12 ">
                NA
              </motion.span>
              <motion.span
                className={classes.text_second_piece}
                initial={{ x: -60 }}
                animate={{ x: ready ? 0 : -60 }}
                transition={{ duration: 1.2, delay: 0.1, ease }}
              >
                VID
              </motion.span>
              <motion.span className={classes.text_third_piece}>JA</motion.span>
              <motion.span
                className={classes.text_forth_piece}
                initial={{ x: -60 }}
                animate={{ x: ready ? 0 : -60 }}
                transition={{ duration: 1.2, delay: 0.2, ease }}
              >
                BERI
              </motion.span>
            </motion.h1>
          )}
          <motion.div
            className=" md:ml-7 lg:mt-11 md:mt-4 mt-10"
            dir={locale === "fa" ? "rtl" : "ltr"}
          >
            <motion.p
              className="lg:text-lg md:text-md text-sm px-2  text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              {t("description")}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={
                ready
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.4, ease },
                    }
                  : { opacity: 0, y: 20 }
              }
              whileHover={hoverTap.whileHover}
              whileTap={hoverTap.whileTap}
              className="block border text-sm md:text-lg px-4 py-1 mt-5 mx-auto rounded-3xl  items-center bg-lightSecondary border-lightPrimary dark:bg-transparent dark:text-darkSecondary dark:border-darkSecondary "
              onClick={readMoreHandler}
            >
              {t("readMore")}{" "}
            </motion.button>
          </motion.div>
        </div>

        <div className="md:w-9/12 w-full  md:mt-0 md:flex-1 ">
          <motion.div
            className="md:px-12 px-3"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={
              ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }
            }
            transition={{ duration: 1, ease }}
          >
            <Image
              priority
              placeholder="blur"
              src={landingImgLight}
              sizes="(min-width: 768px) 75vw, 100vw"
              alt="landing"
              onLoad={() => onHeroLoaded?.()}
              style={
                mounted && resolvedTheme === "dark"
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
