import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Logo from "../assets/images/logo_cropped.png";
import bgVideo from "../assets/videos/intro video.mp4";

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
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(wordTimer);
          setTimeout(() => setShowLogo(true), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(wordTimer);
  }, []);

  useEffect(() => {
    if (showLogo) {
      const transitionTimer = setTimeout(() => {
        setStartTransition(true);
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
      {/* Background video */}
      <video
        className="intro-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Optional dark overlay */}
      <div className="intro-overlay" />

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
