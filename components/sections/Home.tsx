"use client";
import classes from "@/styles/home.module.css";
import landingImgLight from "@/public/landing.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const readMoreHandler = () => {
    router.push("#about");
  };
  return (
    <div className=" mx-auto md:h-screen flex items-center  dark:text-white text-[#271C35] mb-16">
      <div className="flex items-center md:flex-row flex-col-reverse md:mt-1 mt-44">
        <div className="md:w-3/12 md:grow-0 w-full ">
          <div
            className="font-black lg:text-9xl text-8xl  flex flex-col lg:-mt-5 "
            style={{ fontFamily: "protest" }}
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
          </div>
          
          <motion.div className=" md:ml-7 lg:mt-11 md:mt-4 ">
            <motion.p
              className="lg:text-lg md:text-md text-sm px-2  text-black dark:text-white"
              
              animate={{ x: 0 }}
              initial={{ x: -500 }}
              transition={{ delay: 3, duration: 1 }}
            >
              Hello my name is Navid,
              <br />A 26 years old frontend Developer.
              <br />I like to craft solid and scalable frontend products <br />with
              great user experiences.
            </motion.p>
            <motion.button
         
              animate={{ x: 0,transition:{
                delay: 3,duration: 1 
              }}}
              whileHover={{scale:1.2}}
              whileTap={{ scale: 0.8 }}
              initial={{ x: -500 }}
              className="border text-xs md:text-lg px-4 py-1 mt-5 rounded-3xl d-flex items-center bg-lightSecondary border-lightPrimary dark:bg-transparent dark:text-darkSecondary dark:border-darkSecondary "
              onClick={readMoreHandler}
            >
              read more
            </motion.button>
          </motion.div>
        </div>
        <div className="md:w-9/12 w-full -mt-36 md:mt-0 md:flex-1 ">
          <motion.div
            className="md:px-12 px-3"
            initial={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
         
          >
            <Image
              priority={true}
              src={landingImgLight}
              alt="landing"
              style={theme==='dark' ?  {filter:'grayscale(100%)',WebkitFilter:'grayscale(100%)'} : {}}
    
            ></Image>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Home;
