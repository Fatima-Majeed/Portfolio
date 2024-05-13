import React from "react";

import image from "../assets/pic.PNG";

import { FaGithub, FaYoutube, FaDribbble, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[5vh] lg:min-h-[8vh] flex items-center"
      id="home"
    >
      <div className="container  mx-auto">
        <div className="flex flex-col gap-y-9 lg:flex-row lg:items-center">
          <div className="flex-1 text-center lg:text-left font-secondary">
            <motion.h1
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.9] lg:text-[60px]"
            >
              Fatima <span> Majeed</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-9 text-[30px] lg:text-[35px]
             font-secondary font-semibold  leading-[1]"
            >
              <span className="mr-4 mb-8 text-white">I Am Learning</span>
              <TypeAnimation
                sequence={[
                  "Web   Development",
                  2000,
                  "Graphic   Designing",
                  2000,
                  "AI And Machine Learning",
                  2000,
                ]}
                speed={70}
                className=" text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg max-auto lg:mx-0"
            >
              Direction is more important than speed.
               Had I been traveling in the right direction, I could have reduced my speed, and still arrived sooner than I did.
                Speed was not my ally when I was going the wrong direction. Increased speed in the wrong direction will not end well.
                 I needed to re-learn this lesson.
               Our direction is more important than our speed.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 max-w-max  items-center mx-auto mb-12 lg:mx-0"
            >
              <button className="btn btn-lg">Contact me </button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]"
          >
                  <img src={image} alt="" />
          </motion.div>
        </div>
       
      </div>
     
    </section>
 
  );
};

export default Banner;
