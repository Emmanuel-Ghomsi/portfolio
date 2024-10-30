export function ApproachSkeleton() {
  return (
    <div className="py-20 animate-pulse">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="h-6 bg-gray-300 rounded w-1/4 mx-auto"></div>
          <div className="w-1/6 mx-auto border-2 border-gray-300 my-4"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
