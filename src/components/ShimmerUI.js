export const ShimmerCard = () => (
  <div className="animate-pulse border w-60 m-4 p-4 rounded-md border-solid border-black shimmer-card bg-gray-200 h-80 mx-auto">
    <div className="">
      <div className="animate-pulse flex ">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ShimmerUI = () => (
  <div data-testid="shimmer" className="flex flex-wrap justify-center m-10">
    {Array(20)
      .fill("")
      .map((e, index) => (
        <ShimmerCard key={index} />
      ))}
  </div>
);
export default ShimmerUI;
