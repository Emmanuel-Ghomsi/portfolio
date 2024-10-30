export function CalendlySkeleton() {
  return (
    <section className="px-4 py-10 md:px-0">
      <div className="container mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse shadow-lg">
          <div className="w-full h-[500px] bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
    </section>
  );
}
