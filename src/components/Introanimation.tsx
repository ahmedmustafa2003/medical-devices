import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Logo from "../assets/images/logo_cropped.png";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [startTransition, setStartTransition] = useState(false);
  const navigate = useNavigate();

  const message = "Built For Care, Made To Last";
  const words = message.split(" ");

  useEffect(() => {
    // ==============================================
    // WORD-BY-WORD ANIMATION CONTROL
    // ==============================================
    // Each word appears every 300ms (adjust this value to change speed)
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(wordTimer);
          // After last word, wait 1s then show logo
          setTimeout(() => setShowLogo(true), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 300); // <-- THIS CONTROLS DELAY BETWEEN WORDS
    // ==============================================

    return () => clearInterval(wordTimer);
  }, []);

  useEffect(() => {
    if (showLogo) {
      // After logo shows, wait 3s then start fade out
      const transitionTimer = setTimeout(() => {
        setStartTransition(true);
        // After fade out completes, go to homepage
        setTimeout(() => {
          onComplete();
          navigate("/home");
        }, 2000);
      }, 3000);

      return () => clearTimeout(transitionTimer);
    }
  }, [showLogo, navigate, onComplete]);

  return (
    <div className={`intro-container ${startTransition ? "fade-out" : ""}`}>
      <div className="intro-content">
        {!showLogo ? (
          <div className="intro-message">
            {words.map((word, index) => (
              <span
                key={index}
                className={`intro-word ${
                  index <= currentWord ? "word-visible" : ""
                }`}
                style={{ "--word-index": index } as React.CSSProperties}
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
        ) : (
          <div className="intro-logo-container">
            <img src={Logo} className="intro-logo" alt="Company Logo" />
            <div className="intro-subtitle">Medical Devices</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroAnimation;
