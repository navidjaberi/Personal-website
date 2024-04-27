"use client";
import { motion } from "framer-motion";
import SpinnerProps from "../types/Spinner";
const Spinner: React.FC<SpinnerProps> = ({
  text,
  radius,
  fontSize,
  letterSpacing,
}) => {
  const characters = text.split("");
  return (
    <motion.div className="circle" style={{ width: radius * 2 }}>
      <p aria-label={text} />
      <p aria-hidden="true" className="text">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            className={`letter letter-${i}`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize,
            }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};
export default Spinner;
