export default function BlogPostLoading() {
  return (
    <article className="container mx-auto">
      <div className="skeleton h-[400px] w-full rounded" />
      <div className="mb-4">
        <div className="skeleton mt-2 mb-4 h-10 w-3/4" />
        <div className="flex items-center gap-4">
          <div className="skeleton h-4 w-20" />
          <div className="skeleton h-4 w-32" />
        </div>
        <div className="my-2 h-1 w-full rounded bg-gray-500 opacity-50" />
      </div>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="skeleton h-4 w-full" />
        ))}
        <div className="skeleton h-4 w-2/3" />
      </div>
    </article>
  );
}
