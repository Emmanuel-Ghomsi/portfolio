export function ProjectsSkeleton() {
  return (
    <div className="py-20 animate-pulse">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="h-6 bg-gray-300 rounded w-1/4 mx-auto"></div>
          <div className="w-1/6 mx-auto border-2 border-gray-300 my-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
