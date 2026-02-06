export default function BlogLoading() {
  return (
    <div className="container mx-auto">
      <div className="skeleton mx-auto mb-4 h-8 w-24" />
      <ul>
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="mb-8">
            <div className="flex flex-col sm:flex-row">
              <div className="skeleton h-[150px] w-full rounded-md sm:mr-4 sm:w-[150px]" />
              <div className="mt-3 flex flex-1 flex-col gap-2 sm:mt-0">
                <div className="skeleton h-7 w-3/4" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-2/3" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
