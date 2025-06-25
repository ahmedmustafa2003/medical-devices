import React from "react";

interface GlassBallProps {
  size: number;
  top: number;
  left: number;
  animationDelay: number;
  blur: number;
  color?: string;
  opacity?: number;
}

const GlassBall: React.FC<GlassBallProps> = ({
  size,
  top,
  left,
  animationDelay,
  blur,
  color = "255, 255, 255",
  opacity = 0.9,
}) => {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        background: `radial-gradient(circle at 30% 30%, 
                      rgba(${color}, ${opacity}) 0%, 
                      rgba(${color}, ${opacity * 0.4}) 50%, 
                      rgba(${color}, 0) 70%)`,
        backdropFilter: `blur(${blur}px) brightness(110%)`,
        border: `1px solid rgba(${color}, 0.3)`,
        boxShadow: `inset 0 0 25px rgba(${color}, 0.2),
                   0 0 40px rgba(${color}, 0.4)`,
        transform: `translate(-50%, -50%)`,
        animation: `float 8s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
        zIndex: 1,
      }}
    />
  );
};

interface GlassBallsProps {
  count?: number;
  colors?: string[];
  brightness?: number;
}

const GlassBalls: React.FC<GlassBallsProps> = ({
  count = 5,
  colors = [
    "255, 255, 255", // Bright white
    "220, 255, 255", // Ice blue
    "255, 220, 255", // Bright pink
    "255, 255, 220", // Bright yellow
    "220, 255, 220", // Mint green
  ],
  brightness = 1.1,
}) => {
  // Default ball configurations with slightly brighter appearance
  const defaultBalls = [
    { size: 180, top: 20, left: 80, delay: 0, blur: 8, opacity: 0.95 },
    { size: 120, top: 70, left: 15, delay: 1.5, blur: 6, opacity: 0.9 },
    { size: 220, top: 60, left: 60, delay: 2.5, blur: 10, opacity: 0.85 },
    { size: 90, top: 30, left: 25, delay: 3.5, blur: 4, opacity: 0.95 },
    { size: 150, top: 80, left: 75, delay: 4, blur: 7, opacity: 0.9 },
  ];

  const ballsToRender =
    count <= defaultBalls.length
      ? defaultBalls.slice(0, count)
      : [
          ...defaultBalls,
          ...Array(count - defaultBalls.length)
            .fill(null)
            .map((_, i) => ({
              size: Math.random() * 100 + 80,
              top: Math.random() * 80 + 10,
              left: Math.random() * 80 + 10,
              delay: Math.random() * 5,
              blur: Math.random() * 6 + 4,
              opacity: Math.random() * 0.2 + 0.8,
            })),
        ];

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        filter: `brightness(${brightness})`,
      }}
    >
      {ballsToRender.map((ball, index) => (
        <GlassBall
          key={index}
          size={ball.size}
          top={ball.top}
          left={ball.left}
          animationDelay={ball.delay}
          blur={ball.blur}
          color={colors[index % colors.length]}
          opacity={ball.opacity}
        />
      ))}
    </div>
  );
};

export default GlassBalls;
