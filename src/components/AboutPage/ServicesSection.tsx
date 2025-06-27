import { motion } from "framer-motion";

const services = [
  {
    title: "Medical Equipment Manufacturing",
    description:
      "We design and manufacture state-of-the-art medical devices that meet international quality standards.",
  },
  {
    title: "Equipment Maintenance",
    description:
      "Comprehensive maintenance services to ensure your medical equipment operates at peak performance.",
  },
  {
    title: "Training & Support",
    description:
      "Specialized training programs for healthcare professionals on proper equipment usage.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Assistance with regulatory approvals and compliance documentation for medical devices.",
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored medical device solutions designed to meet specific clinical requirements.",
  },
  {
    title: "Research & Development",
    description:
      "Collaborative R&D services to develop innovative medical technologies.",
  },
];

export const ServicesSection = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">SERVICES</h2>
        <h3 className="text-2xl text-blue-600 font-semibold">
          WHAT WE DO OFFER
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="text-blue-600 text-3xl mb-4">{index + 1}.</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              {service.title}
            </h4>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
