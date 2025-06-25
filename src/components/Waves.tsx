import Wave from "react-wavify";

export const Waves = () => (
  <div className="absolute bottom-0 left-0 w-full pointer-events-none">
    {/* Wave 1 - Deepest layer with strongest color */}
    <div
      className="relative z-30 animate-wave"
      style={{ animationDelay: "1.4s" }}
    >
      <Wave
        fill="rgba(30, 110, 210, 0.7)" // Deeper medical blue
        options={{ height: 50, amplitude: 30, speed: 0.2, points: 2 }}
      />
    </div>
    {/* Wave 2 - Middle layer */}
    <div
      className="absolute bottom-0 left-0 w-full z-20 animate-wave"
      style={{ animationDelay: "1.6s" }}
    >
      <Wave
        fill="rgba(70, 150, 240, 0.6)" // Medium medical blue
        options={{ height: 60, amplitude: 20, speed: 0.15, points: 3 }}
      />
    </div>
    {/* Wave 3 - Top layer with most transparency */}
    <div
      className="absolute bottom-0 left-0 w-full z-10 animate-wave"
      style={{ animationDelay: "1.8s" }}
    >
      <Wave
        fill="rgba(120, 190, 255, 0.5)" // Light medical blue
        options={{ height: 70, amplitude: 10, speed: 0.1, points: 4 }}
      />
    </div>
  </div>
);
