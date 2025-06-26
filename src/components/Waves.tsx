import { motion } from "framer-motion";

export const Waves = () => (
  <>
    <div className="hero relative w-full z-10 pointer-events-none">
      {/* Waves section */}
      <svg
        className="hero-waves w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18
               58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3" />
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0" />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" />
        </g>
      </svg>

      {/* Content section */}
      <div className="relative z-20 bg-white pt-10 pb-6">
        <div className="text-left mx-36">
          <div className="flex items-center mb-2">
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
    </div>

    <style>
      {`
        .hero {
          height: auto;
        }
        
        .hero-waves {
          display: block;
          width: 100%;
          height: 40px;
        }

        .hero .wave1 use {
          animation: move-forever1 10s linear infinite;
          animation-delay: -2s;
          fill: rgb(214, 214, 214);
          opacity: 0.6;
        }

        .hero .wave2 use {
          animation: move-forever2 8s linear infinite;
          animation-delay: -2s;
          fill: rgb(104, 107, 107);
          opacity: 0.4;
        }

        .hero .wave3 use {
          animation: move-forever3 6s linear infinite;
          animation-delay: -2s;
          fill: rgb(255, 255, 255);
        }

        @keyframes move-forever1 {
          0% {
            transform: translate(85px, 0%);
          }
          100% {
            transform: translate(-90px, 0%);
          }
        }

        @keyframes move-forever2 {
          0% {
            transform: translate(-90px, 0%);
          }
          100% {
            transform: translate(85px, 0%);
          }
        }

        @keyframes move-forever3 {
          0% {
            transform: translate(-90px, 0%);
          }
          100% {
            transform: translate(85px, 0%);
          }
        }
      `}
    </style>
  </>
);
