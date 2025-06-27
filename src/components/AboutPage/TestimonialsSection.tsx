import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chief Surgeon, City Hospital",
    rating: 5,
    content:
      "The medical devices provided by Medical Devices (Pvt) Limited have significantly improved our surgical outcomes. Their equipment is reliable, precise, and meets all our clinical requirements.",
  },
  {
    name: "Michael Brown",
    position: "Hospital Administrator",
    rating: 5,
    content:
      "We've been using their patient monitoring systems for over 3 years with zero downtime. The after-sales support is exceptional, which is crucial in healthcare settings.",
  },
  {
    name: "Dr. Lisa Wong",
    position: "Radiology Department Head",
    rating: 5,
    content:
      "Their diagnostic imaging equipment provides superior image quality while maintaining patient safety. The training provided to our staff was comprehensive and professional.",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">TESTIMONIALS</h2>
        <h3 className="text-2xl text-blue-600 font-semibold">
          WHAT THEY ARE SAYING ABOUT US
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
            <div>
              <h4 className="font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
