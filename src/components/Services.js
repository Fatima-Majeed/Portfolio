import React from "react";
// icons
import { BsArrowRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// services data

const services = [
  {
    name: "Flyer/Post Design",
    Description:
      "This design features a modern and dynamic layout, combining  visuals with concise text to grab attention and convey information effectively. Perfect for promoting events, products, or services, this design stands out and leaves a lasting impression on viewers.",
    Link: "Learn More",
  },
  {
    name: "Web Development",
    Description:
      "Web development refers to the process of creating websites or web applications, involving tasks such as coding, designing, and deploying digital content on the internet. It encompasses various technologies and frameworks to build functional and visually appealing.",
    Link: "Learn More",
  },
  {
    name: "AI and ML",
    Description:
      "AI (Artificial Intelligence) and ML (Machine Learning) are cutting-edge technologies that enable computers to perform tasks traditionally requiring human intelligence. AI focuses on creating systems capable of mimicking human cognitive functions.",
    Link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-0">
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}

          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            <h2 className="h2 text-accent  mb-16"><u>What I Do</u></h2>
            <h3 className="h3 max-w-[395px] mb-16">
               Currently learning AI and Data Science side by side  Web
              development
            </h3>
            <button className="btn btn-sm mb-8">See my work</button>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            <div>
              {services.map((service, index) => {
                const { name, Description, Link } = service;
                return (
                  <div
                    className="border-b black border-white/20 h-[200px] mb-[25px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {" "}
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {Description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {Link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
