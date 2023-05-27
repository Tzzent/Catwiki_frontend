import { times } from 'lodash';

interface RatingProps {
  rate?: number,
}

export default function Raiting({
  rate = 2,
}: RatingProps) {
  return (
    <div className="flex items-center gap-2 w-full max-w-xs">
      {times(5, index => (
        <div
          key={index}
          className={`
          w-full
          max-w-[10em]
          h-3
          rounded-full
          bg-[#544439]
          ${index < rate ? 'bg-[#544439]' : 'bg-[#E0E0E0]'}
          `}
        >
        </div>))}
    </div>
  )
}
