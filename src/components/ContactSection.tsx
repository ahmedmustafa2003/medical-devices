import { motion } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export const ContactSection = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">CONTACT</h2>
        <h3 className="text-2xl text-blue-600 font-semibold">CONTACT US</h3>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
          className="lg:w-1/3"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  123 Medical Avenue, Healthcare City, HC 12345
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">Call Us</h4>
                <p className="text-gray-600">+1 234 567 8900</p>
                <p className="text-gray-600">+1 234 567 8901</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Email Us
                </h4>
                <p className="text-gray-600">info@medicaldevices.com</p>
                <p className="text-gray-600">support@medicaldevices.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-2/3"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
