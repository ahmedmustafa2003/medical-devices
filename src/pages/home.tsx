import videoSrc from "../assets/videos/Background_video.mp4";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Backdrop overlay - adjust opacity with bg-opacity-* */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content - positioned above the backdrop */}
      <div className="relative z-20 flex flex-col">
        <Navbar />
        <p className="text-xl max-w-2xl text-center">
          Add your content over the video background
        </p>
      </div>
    </div>
  );
}
