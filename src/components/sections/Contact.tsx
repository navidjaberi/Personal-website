"use client";
import ContactCard from "@/src/components/base/contact/ContactCard";
import { contacts } from "@/src/components/base/contact/ContactContent";
import Image from "next/image";
import contactImg from "@/public/img/contact-img.jpg";
import contactImgDark from "@/public/img/contact-img-dark.jpg";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className=" mx-auto dark:text-white text-lightPrimary h-dvh"
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
          Contact
        </h1>
        <div className="w-1/5 h-0.5 bg-lightPrimary dark:bg-white"></div>
      </div>
      <div className="md:w-3/6 md:px-0 px-4 mx-auto text-lg leading-6 md:text-xs mt-32">
        <div className="w-full   dark:text-white text-black  dark:bg-darkPrimary bg-lightSecondary hover:shadow-xl rounded-xl p-4 mt-10 border border-darkPrimary/30 dark:border-darkSecondary/30 md:hover:scale-105  ease-in-out duration-500 ">
          <motion.div animate={{ opacity: [null, 0, 100] }}>
            <Image
              src={theme === "dark" ? contactImgDark : contactImg}
              className="w-32 rounded-full border-darkPrimary/30 border-2 mx-auto -mt-5 shadow-xl contact-animation "
              alt="Avatar"
            />
          </motion.div>
          <div className="mt-8 md:text-xl text-xs">
            <p>Thanks for visiting!</p>
            <p className="mt-3">
              If you&apos;d like to contact,feel free to reach me by social
              media or Email
            </p>
          </div>
          <div className=" grid grid-cols-5 gap-1 mx-auto mt-3">
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
