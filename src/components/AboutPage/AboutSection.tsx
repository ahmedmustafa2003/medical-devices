import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="relative z-20 bg-white pt-10">
      <div className="text-left mx-36">
        <div className="flex items-center">
          <motion.h2
            className="text-sm text-gray-400 mr-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ABOUT
          </motion.h2>
          {/* Horizontal bar */}
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <motion.h1
          className="text-2xl text-black"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          WHO WE ARE
        </motion.h1>
      </div>
    </div>
  );
}
