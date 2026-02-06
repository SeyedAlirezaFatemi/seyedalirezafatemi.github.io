export default function WorkLoading() {
  return (
    <main>
      <div className="skeleton mx-auto mb-4 h-8 w-32" />
      <ul className="list-disc px-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <li key={i} className="mb-6">
            <div className="skeleton mb-1 h-5 w-48" />
            <div className="skeleton mb-1 h-4 w-32" />
            <div className="skeleton mb-1 h-4 w-64" />
            <div className="skeleton h-4 w-24" />
          </li>
        ))}
      </ul>
    </main>
  );
}
