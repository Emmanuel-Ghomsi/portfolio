export function TimelineSkeleton() {
  return (
    <div className="py-20 bg-gray-200 dark:bg-gray-700 animate-pulse">
      <div className="container mx-auto px-6">
        <div className="h-8 w-1/3 bg-gray-400 rounded mb-4 dark:bg-gray-600"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-6 w-full bg-gray-300 rounded dark:bg-gray-500"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
