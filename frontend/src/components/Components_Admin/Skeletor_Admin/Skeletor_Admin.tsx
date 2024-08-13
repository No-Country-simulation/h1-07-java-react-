
const SkeletonLoader = () => (
  <>
    <h2 className="font-inter font-bold text-xl ml-2 mb-5">
      <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
    </h2>
    <section className="mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 py-2 px-1">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2 animate-pulse"
        >
          {/* Placeholder for the Icon */}
          <div className="bg-gray-400 h-16 w-16 rounded-lg"></div>

          <div className="ml-4 w-[75%]">
            <div className="bg-gray-300 h-5 w-1/2 mb-2 rounded"></div>
            <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
          </div>
        </div>
      ))}
    </section>
  </>
);

export default SkeletonLoader;