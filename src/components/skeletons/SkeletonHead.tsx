interface SkeletonHeadProps {
  hasTitle?: boolean,
  hasDecription?: boolean,
}

export default function SkeletonHead({
  hasTitle,
  hasDecription,
}: SkeletonHeadProps) {
  return (
    <div role="status" className="animate-pulse flex flex-col mb-5 gap-5">
      {hasTitle && (
        <div className="h-6 bg-gray-600 rounded-full w-48"></div>
      )}
      {hasDecription && (
        <div className="space-y-2.5">
          <div className="h-3 bg-gray-600 rounded-full"></div>
          <div className="h-3 bg-gray-600 rounded-full max-w-lg"></div>
          <div className="h-3 bg-gray-600 rounded-full max-w-md"></div>
          <div className="h-3 bg-gray-600 rounded-full max-w-lg"></div>
          <div className="h-3 bg-gray-600 rounded-full max-w-sm"></div>
          <div className="h-3 bg-gray-600 rounded-full max-w-md"></div>
        </div>)}
      <span className="sr-only">Loading...</span>
    </div>
  )
}