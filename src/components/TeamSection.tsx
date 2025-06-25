import { motion } from "framer-motion";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chief Executive Officer",
    bio: "Board-certified physician with 20+ years in medical technology leadership.",
    image: "/team/ceo.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Michael Chen",
    position: "Chief Technology Officer",
    bio: "Biomedical engineer specializing in diagnostic imaging technologies.",
    image: "/team/cto.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "Dr. Lisa Rodriguez",
    position: "Medical Director",
    bio: "Cardiologist with expertise in clinical device validation and testing.",
    image: "/team/medical-director.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  {
    name: "David Park",
    position: "Head of Manufacturing",
    bio: "Operations leader with 15 years in medical device production.",
    image: "/team/manufacturing.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

export const TeamSection = () => {
  return (
    <div className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TEAM</h2>
          <h3 className="text-2xl text-blue-600 font-semibold">
            OUR HARDWORKING TEAM
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet our leadership team with decades of combined experience in
            medical technology and healthcare innovation.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Team Member Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Social Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={member.social.linkedin}
                      className="bg-white p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <LinkedinIcon className="h-5 w-5 text-blue-600" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      className="bg-white p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <TwitterIcon className="h-5 w-5 text-blue-400" />
                    </motion.a>
                    <motion.a
                      href={member.social.facebook}
                      className="bg-white p-2 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FacebookIcon className="h-5 w-5 text-blue-700" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Team Member Info */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>

                {/* View Profile Button */}
                <motion.button
                  className="mt-4 text-blue-600 text-sm font-semibold flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View Full Profile
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h4 className="text-2xl font-bold text-gray-800 mb-3">
            Join Our Team
          </h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented professionals passionate about
            advancing medical technology.
          </p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Current Openings
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
