import { motion } from "framer-motion";

const portfolioItems = [
  {
    category: "Diagnostic",
    title: "Advanced MRI Machines",
    image: "/mri-machine.jpg",
  },
  {
    category: "Surgical",
    title: "Laparoscopic Equipment",
    image: "/surgical-equipment.jpg",
  },
  {
    category: "Monitoring",
    title: "Patient Vital Monitors",
    image: "/patient-monitor.jpg",
  },
  {
    category: "Therapy",
    title: "Physiotherapy Devices",
    image: "/therapy-device.jpg",
  },
  {
    category: "Hospital",
    title: "Medical Furniture",
    image: "/medical-furniture.jpg",
  },
  {
    category: "Innovation",
    title: "AI Diagnostic Tools",
    image: "/ai-medical.jpg",
  },
];

export const PortfolioSection = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">PORTFOLIO</h2>
        <h3 className="text-2xl text-blue-600 font-semibold">
          WHAT WE'VE DONE
        </h3>
      </motion.div>

      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          {[
            "All",
            "Diagnostic",
            "Surgical",
            "Monitoring",
            "Therapy",
            "Hospital",
          ].map((filter, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 text-sm font-medium ${index === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700"} ${index === 0 ? "rounded-l-lg" : ""} ${index === 5 ? "rounded-r-lg" : ""} hover:bg-gray-50`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <span className="text-blue-300 text-sm">{item.category}</span>
                <h4 className="text-white text-xl font-semibold">
                  {item.title}
                </h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
