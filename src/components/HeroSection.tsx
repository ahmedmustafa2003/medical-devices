import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo_cropped.png"; // update the path if needed

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

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  const currentQuote = quotes[quoteIndex];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white px-6 text-center">
      <div className="z-20 max-w-3xl relative -mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1 }}
          >
            {currentQuote.isIntro ? (
              <div className="flex flex-col items-center justify-center mb-20">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-auto h-16 mb-4"
                />
                <h1 className="text-3xl md:text-4xl text-white">
                  We Are{" "}
                  <span className="font-bold">Medical Devices (Pvt) LTD.</span>
                </h1>
              </div>
            ) : (
              <div className="relative min-h-[150px]">
                <p className="text-lg md:text-2xl font-arabic text-white mb-4 text-right leading-relaxed">
                  {currentQuote.arabic}
                </p>
                <p className="text-lg md:text-2xl italic mb-6">
                  {currentQuote.text}
                </p>
                <p className="absolute right-0 bottom-0 text-sm md:text-base text-gray-300 font-semibold">
                  — {currentQuote.author}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
