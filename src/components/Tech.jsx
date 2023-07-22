import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "./Tech.scss";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <motion.div
          className="techCont"
          key={technology.name}
          whileHover={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          {/* <BallCanvas icon={technology.icon} /> */}
          <img src={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
