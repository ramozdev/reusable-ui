export default function CardSkeleton() {
  return (
    <div
      className={`relative h-80 overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-200" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
        <div className="h-7 w-20 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 px-10 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 16 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
