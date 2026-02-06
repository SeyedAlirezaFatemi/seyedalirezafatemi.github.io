export default function BlogLoading() {
  return (
    <div className="container mx-auto">
      <div className="skeleton mx-auto mb-4 h-8 w-24" />
      <ul>
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i} className="mb-8">
            <div className="flex">
              <div className="skeleton mr-4 h-[150px] w-[150px] rounded-md" />
              <div className="flex flex-1 flex-col gap-2">
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
