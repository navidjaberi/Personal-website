"use client"
import { motion } from "framer-motion";
import Spinner from "@/src/components/base/Spinner";
export default function Loading() {
  return (
    <div className="loading-container" >
      <motion.div
        className="spinner spinner-1"
        initial={{ rotate: 45 }}
        animate={{ rotate: -315 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <Spinner
          text="LO A D IN G    LO A D IN G    LO A D IN G    LO A D IN G"
          radius={800}
          fontSize="130px"
          letterSpacing={4}
        />
      </motion.div>
      <motion.div
        className="spinner spinner-2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <Spinner
          text="LO A D IN G    LO A D IN G    LO A D IN G    LO A D IN G"
          radius={810}
          fontSize="130px"
          letterSpacing={5}
        />
      </motion.div>
      <motion.div
        className="spinner spinner-3"
        initial={{ rotate: -5 }}
        animate={{ rotate: -365 }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      >
        <Spinner
          text="LO A D IN G    LO A D IN G    LO A D IN G    LO A D IN G "
          radius={550}
          fontSize="130px"
          letterSpacing={6}
        />
      </motion.div>
    </div>
  );
}
