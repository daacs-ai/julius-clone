export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="p-4 flex items-center justify-between px-10">
        <div className="font-semibold text-xs">Use Cases</div>
        <div className="flex lg:w-[53%] w-[60%] justify-between items-center">
          <button className="text-2xl font-bold text-blue-600">Julius</button>
          <div className="flex w-1/2 justify-around items-center text-xs font-semibold hidden sm:flex">
            <button className="hover:bg-gray-100 p-2 lg:w-[20%] rounded-md text-semibold">
              Docs
            </button>
            <button className="hover:bg-gray-100 p-2 lg:w-[25%] rounded-md text-semibold">
              Community
            </button>
            <button className="bg-blue-600 p-2 w-[25%] rounded-md text-white text-semibold hover:bg-blue-500">
              Sign Up
            </button>
            <button className="border border-gray-200 w-[20%] rounded-md p-2 hover:bg-gray-100">
              Log In
            </button>
          </div>
          <div className="font-semibold sm:hidden">
            <button className="bg-blue-600 p-2 rounded-md text-white text-xs text-semibold hover:bg-blue-500">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
