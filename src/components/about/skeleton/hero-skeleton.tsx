export function HeroSkeleton() {
  return (
    <div className="flex min-h-[50vh] animate-pulse items-center justify-center bg-gray-200 py-20 dark:bg-gray-700 md:py-0">
      <div className="h-6 w-3/4 bg-gray-400 rounded dark:bg-gray-600"></div>
    </div>
  );
}
