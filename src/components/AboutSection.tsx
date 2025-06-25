import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      className="container mx-auto px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ABOUT
        </motion.h2>
        <motion.h3
          className="text-2xl text-blue-600 font-semibold"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          WHO WE ARE
        </motion.h3>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          className="md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/about-medical.jpg"
            alt="About Medical Devices"
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">
            Innovative Medical Solutions for Modern Healthcare
          </h4>
          <p className="text-gray-600 mb-6">
            Medical Devices (Pvt) Limited is a leading manufacturer and supplier
            of high-quality medical equipment. We combine cutting-edge
            technology with clinical expertise to deliver solutions that improve
            patient outcomes.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Advanced diagnostic equipment",
              "Surgical instruments and devices",
              "Patient monitoring systems",
              "Rehabilitation and therapy equipment",
              "Hospital furniture and accessories",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <span className="mr-2 text-blue-500">✓</span> {item}
              </motion.li>
            ))}
          </ul>

          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
