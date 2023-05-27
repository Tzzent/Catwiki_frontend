import { times } from 'lodash';

export default function SkeletonList() {
  return (
    <div role="status" className="space-y-9 animate-pulse mt-7">
      <div className="flex items-center gap-5 h-3">
        <div className="w-32 h-full bg-gray-600 rounded-full"></div>
        <div className="h-full bg-gray-600 rounded-full w-80"></div>
      </div>
      <div className="flex items-center gap-5 h-3">
        <div className="w-20 h-full bg-gray-600 rounded-full"></div>
        <div className="h-full bg-gray-600 rounded-full w-60"></div>
      </div>
      <div className="flex items-center gap-5 h-3">
        <div className="w-24 h-full bg-gray-600 rounded-full"></div>
        <div className="h-full bg-gray-600 rounded-full w-52"></div>
      </div>
      {times(8, (index) => (
        <div key={index} className="flex items-center justify-between gap-5 h-3">
          <div className="w-28 h-full bg-gray-600 rounded-full"></div>
          <div className="flex items-center gap-2 w-full max-w-xs">
            {times(5, index => (
              <div
                key={index}
                className={`
                w-full
                max-w-[10em]
                h-3
                rounded-full
                bg-gray-600
                `}
              >
              </div>))}
          </div>
        </div>))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
