export function HeroSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center animate-pulse">
      <div className="container mx-auto flex flex-col items-center px-6 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-8 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="mt-10 flex items-center justify-center md:mt-0 md:w-1/2">
          <div className="rounded-full bg-gray-300 w-40 h-40"></div>
        </div>
      </div>
    </div>
  );
}
