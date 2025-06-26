import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo_cropped.png";

const quotes = [
  {
    text: "We Are Medical Devices",
    arabic: "مرحبًا بكم في ميديكال ديفايسز",
    author: "",
    isIntro: true,
  },
  {
    text: "Al-Zahrawi invented over 200 surgical instruments still in use today.",
    arabic: "الزهراوي اخترع أكثر من 200 أداة جراحية لا تزال تستخدم حتى اليوم.",
    author: "Al-Zahrawi (Abulcasis)",
  },
  {
    text: "The first detailed illustrations of surgical tools came from Muslim scholars.",
    arabic: "أول رسومات مفصلة للأدوات الجراحية جاءت من العلماء المسلمين.",
    author: "Islamic Golden Age",
  },
  {
    text: "Ibn Sina described the use of catheters, scalpels, and forceps in surgery.",
    arabic:
      "وصف ابن سينا استخدام القساطر والمشارط والملقطات في العمليات الجراحية.",
    author: "Ibn Sina (Avicenna)",
  },
  {
    text: "Muslim physicians designed forceps, syringes, and surgical scissors centuries ago.",
    arabic: "صمم الأطباء المسلمون الملقط والمحاقن والمقصات الجراحية منذ قرون.",
    author: "Historical Record",
  },
];

export default function HeroSection() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleManualNav = (direction: "next" | "prev") => {
    setQuoteIndex((prev) =>
      direction === "next"
        ? (prev + 1) % quotes.length
        : (prev - 1 + quotes.length) % quotes.length
    );
  };

  const { text, arabic, author, isIntro } = quotes[quoteIndex];

  return (
    <section className="flex items-center justify-center text-white px-6 text-center mt-28">
      <div className="relative max-w-3xl w-full px-8 sm:px-12">
        {/* Left Arrow */}
        <button
          onClick={() => handleManualNav("prev")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.7)] transition"
          aria-label="Previous Quote"
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => handleManualNav("next")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:shadow-[0_0_20px_3px_rgba(255,255,255,0.7)] transition"
          aria-label="Next Quote"
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          >
            <div className="min-h-[220px] flex flex-col justify-center items-center relative">
              {isIntro ? (
                <>
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="h-12 w-auto mb-4"
                  />
                  <h1 className="text-3xl md:text-4xl">
                    We Are{" "}
                    <span className="font-bold">
                      Medical Devices (Pvt) LTD.
                    </span>
                  </h1>
                </>
              ) : (
                <>
                  <p className="text-lg md:text-2xl font-arabic text-white mb-4 text-right leading-relaxed w-full">
                    {arabic}
                  </p>
                  <p className="text-lg md:text-2xl italic mb-6">{text}</p>
                  <p className="absolute bottom-2 right-0 text-sm md:text-base text-gray-300 font-semibold">
                    — {author}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
