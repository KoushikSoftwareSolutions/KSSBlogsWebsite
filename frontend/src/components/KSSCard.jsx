import React from "react";
import logo from "../assets/logo.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const KSSCard = () => {
  return (
    <motion.div
      className="bg-white px-10 py-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex bg-sky-200 p-8 rounded-2xl shadow-2xl items-center max-md:flex-col mb-10">
        <div>
          <div className="group cursor-pointer flex">
            <a
              href="https://koushiksoftwaresolutions.in"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block font-semibold text-6xl max-md:text-xl md:text-2xl lg:text-6xl text-sky-950 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-sky-950 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"
            >
              Koushik Software Solutions
            </a>
            <FaExternalLinkAlt className="inline ml-2 text-4xl text-sky-950 max-md:text-lg md:text-xl lg:text-4xl transition-transform duration-300 group-hover:translate-x-1" />
          </div>

          <p className="mt-10 max-md:text-sm md:text-sm text-justify max-lg:text-sm lg:text-lg">
            Koushik Software Solutions, based in India, specializes in web and
            mobile app development, transforming ideas into impactful digital
            solutions. We combine creativity, technical expertise, and agile
            methodologies to deliver secure, user-friendly, and future-ready
            applications tailored to businesses of all sizes. Our services
            include web development, mobile app development, and maintenance,
            ensuring top-notch quality and performance. We prioritize
            professional communication with dedicated email channels for
            careers, sales, feedback, and more. Driven by a client-centric
            philosophy, we value innovation, collaboration, and continuous
            learning. Choose us for tailored solutions, timely delivery, and
            reliable post-deployment support. Let's build the future together!
            Contact
          </p>
        </div>
        <img
          src={logo}
          alt="logo"
          className="size-120 max-md:size-60 md:size-80 lg:size-100 2xl:size-120"
        />
      </div>
    </motion.div>
  );
};

export default KSSCard;
