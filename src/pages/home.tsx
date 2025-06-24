import backgroundVideo from "../assets/videos/Background_video.mp4";

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Header with logo and company name */}
      <header className="relative z-20 pt-8 pl-8">
        <div className="flex items-center gap-4">
          {/* Replace with your actual logo */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-bold">N</span>
          </div>
          <h1 className="text-white text-2xl font-bold">NEWA Digital Agency</h1>
        </div>
      </header>

      {/* Main content grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-4rem)] w-full px-8 pb-8">
        {/* Left column - text content */}
        <div className="flex flex-col justify-center h-full">
          <div className="space-y-8">
            <h2 className="text-5xl font-light">
              We
              <br />
              <span className="font-bold">BUILD</span>
              <br />
              DIGITAL
            </h2>

            <div className="max-w-md">
              <p className="font-bold mb-2">FOLLOW US</p>
              <p className="text-sm">
                By launching our commercial apps to create a brand for the
                latest products and services we can use in your online presence.
              </p>
            </div>
          </div>
        </div>

        {/* Right column - video container (red boundary area) */}
        <div className="relative h-full w-full flex items-center justify-center">
          <div className="relative w-full h-3/4 border-2 border-red-500 rounded-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="relative z-20 px-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-t border-gray-600 pt-4">
          <p className="font-bold">After</p>
          <ul className="text-sm space-y-2 mt-2">
            <li>
              Please do a tutorial on how you create this complex layout with
              wix studio
            </li>
            <li>@MustafaMehraab Subscribe</li>
            <li>Enhance Your Designs with Shape Dividers...</li>
          </ul>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <p>Before & After Effect: Transform Wirefr...</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
