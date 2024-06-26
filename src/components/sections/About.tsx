"use client";
import { motion } from "framer-motion";
const About = () => {
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
            About Me
          </h1>
          <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
        </div>
        <div className="md:w-3/6 mx-auto md:px-0 px-3 md:text-lg text-xs leading-6 md:leading-8 md:mt-10 text-black dark:text-white mt-10">
          <p>
            Welcome to my corner of the web! I&apos;m Navid. a passionate
            26-year-old software engineer hailing from the beautiful land of
            Iran. With nearly three years of experience under my belt, I
            specialize in crafting captivating digital experiences as a frontend
            developer.
          </p>

          <p>
            My journey in the realm of technology has been nothing short of
            exhilarating. I thrive on bringing visions to life, whether
            it&apos;s designing sleek websites or developing robust web
            applications. Armed with my expertise in JavaScript and proficiency
            in frameworks like Vue.js, Nuxt.js, React.js, and Next.js, I pride
            myself on creating responsive user interfaces that seamlessly adapt
            to any device.
          </p>
          <p>
            {" "}
            But my skills extend beyond coding. I have a keen eye for design,
            thanks to my background in UI/UX, Adobe Photoshop, and Figma. This
            enables me to not only build functional websites but also ensure
            they are aesthetically pleasing and user-friendly. Additionally, my
            stint as a WordPress designer has equipped me with the ability to
            tailor content management systems to suit diverse needs. When
            I&apos;m not immersed in lines of code or refining design elements,
            you can find me exploring the latest tech trends, honing my skills,
            or simply soaking in the beauty of nature. My mission is to continue
            pushing boundaries, creating innovative solutions, and making a
            meaningful impact in the digital landscape.
          </p>
        </div>
      
    </motion.div>
  );
};
export default About;
