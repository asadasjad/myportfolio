const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/dark_background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-16">
        {/* Left column: text */}
        <div className="text-left max-w-lg text-gray-900 dark:text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Heading Here
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your subheading or description goes here. Make it concise and catchy.
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
            Call to Action
          </button>
        </div>

        {/* Right column is empty because video already has hero figure on right */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default VideoBackground;
