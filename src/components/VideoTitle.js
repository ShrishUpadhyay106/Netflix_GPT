const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute z-20 w-full aspect-video  pt-[18%] px-24 text-white bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-sm font-medium w-1/3">{overview}</p>
      <div className="flex items-center gap-4 mt-4">
        <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-opacity-80">
          ▶︎ Play
        </button>
        <button className="bg-gray-500 text-white px-8 py-3 rounded-lg bg-opacity-45 hover:bg-opacity-85">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
