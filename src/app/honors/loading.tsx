export default function HonorsLoading() {
  return (
    <main>
      <div className="skeleton mx-auto mb-4 h-8 w-32" />
      <ul className="list-disc px-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="mb-6">
            <div className="skeleton mb-1 h-4 w-64" />
            <div className="skeleton mb-1 h-4 w-32" />
            <div className="skeleton h-4 w-48" />
          </li>
        ))}
      </ul>
    </main>
  );
}
