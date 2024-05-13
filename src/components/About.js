import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CountUp from "react-countup";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <motion.section
      className="section"
      id="about"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn} 
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20  h-screen">
          <motion.div
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
        
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          
          className="flex-1">
            <h1  
            className="h2 text-accent"><u>About me</u></h1>
            <h3 className="h3 mb-4">
              I’m building a foundation in web development, with a side of
              graphic design for creativity. Meanwhile, AI and data science are
              on my radar as exciting new fields to understand.
            </h3>
           
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font tertiary text-gradient font-bold mb-3">
                  {inView ? <CountUp start={0} end={13} duration={4} /> : null}
                </div>
                <div className="text-[19px]  font primary text-sm tracking-[2px]">
                  {" "}
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font tertiary text-gradient font-bold mb-3">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className="text-[19px]  font primary text-sm tracking-[2px]">
                  
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font tertiary text-gradient font-bold mb-3">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className="text-[19px]  font primary text-sm tracking-[2px]">
                  {" "}
                  Number of <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
