import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.div 
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col lg:flex-row gap-x-10" >
          <div className="flex-1 flex-col flex gap-y-13 mb-10 lg:mb-0 ">
            <div>
              <h2 className="h2 leading-relaxed text-accent">My Latest Work</h2>
              <p className="max-w-sm mb-16">
                This is not my work. Soon i will post my own work here. Dont know work is related to Graphic Designing or related to AI.
              </p>
              <button className="btn btn-sm mb-11">View All Projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
               <span className="text-gradient"> UI/UX Design</span>
              </div>
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700">
                <span className="text-3xl">Project Title</span>
              </div>
              <div className="group relative overflow-hidden border-2 border-white-50 rounded-xl"></div>
            </div>
          </div>
          <motion.div
             variants={fadeIn("left", 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex flex-col gap-y-10">

          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
               <span className="text-gradient"> UI/UX Design</span>
              </div>
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700">
                <span className="text-3xl">Project Title</span>
              </div>
              <div className="group relative overflow-hidden border-2 border-white-50 rounded-xl"></div>
            </div>


            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
               <span className="text-gradient"> UI/UX Design</span>
              </div>
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700">
                <span className="text-3xl">Project Title</span>
              </div>
              <div className="group relative overflow-hidden border-2 border-white-50 rounded-xl"></div>
            </div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
