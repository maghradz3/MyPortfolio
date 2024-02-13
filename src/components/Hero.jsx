import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Cube } from "../helper/Cube";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(400px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        viewport={{ once: true }}
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5
         `}
      >
        <div className="flex flex-col justify-center items-center mt-t">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Levan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Front-End <br className="sm:block hidden" /> Javascript React
            Developer
          </p>
        </div>
      </motion.div>

      <Cube />

      <motion.div></motion.div>

      {/* <ComputersCanvas /> */}

      <div className=" absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
