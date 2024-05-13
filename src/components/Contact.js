import React from "react";

import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <h4 className="text-xl uppercase text-accent  font-medium mb-6  tracking-wide">
              <u>
              Get in Touch
              </u>
            <h2 className="text-[35px] text-white lg:text-[70px] leading-none mb-12">
              Let's Work Together!
            </h2>
            </h4>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none 
              w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Email"
            />

            <input
              type="text"
              className="bg-transparent border-b py-3 w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your Name"
            />

            <textarea
              className="bg-transparent border-b py-3 w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
