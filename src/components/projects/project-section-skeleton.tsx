export function ProjectSectionSkeleton() {
  return (
    <section className="px-4 pb-20 pt-10 md:px-0">
      <div className="container mx-auto">
        {/* Boutons de filtre */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-10 w-24 bg-gray-300 rounded dark:bg-gray-600 animate-pulse"
            ></div>
          ))}
        </div>

        {/* Cartes de projet */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"
            >
              <div className="h-48 w-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="p-4">
                <div className="h-6 w-3/4 bg-gray-300 rounded mb-2 dark:bg-gray-600"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded dark:bg-gray-600"></div>
              </div>
              <div className="p-4 flex flex-wrap items-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
