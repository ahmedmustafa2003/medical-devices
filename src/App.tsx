import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import IntroAnimation from "./components/Introanimation";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  return (
    <BrowserRouter>
      {showIntro ? (
        <IntroAnimation onComplete={handleAnimationComplete} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
