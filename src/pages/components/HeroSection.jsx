export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-y-5 lg:w-1/2 mt-4 sm:p-6">
      <p className="text-4xl font-extrabold text-center sm:text-5xl md:text-5xl">
        Analyze your data with computational AI.
      </p>
      <p className="text-base font-light text-gray-500 sm:text-lg md:text-lg text-center">
        Chat with your files and get expert-level insights in seconds.
      </p>
      <button className="bg-blue-600 text-white text-sm rounded-3xl w-3/4 p-3 font-semibold hover:bg-blue-500 sm:w-2/4 md:w-1/3">
        Start a chat
      </button>
      <p className="text-gray-500 text-sm sm:text-base">
        Loved by over 1,000,000 users worldwide
      </p>
    </div>
  );
};
