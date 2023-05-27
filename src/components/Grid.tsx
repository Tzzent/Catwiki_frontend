import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode
  className?: string,
}

export default function Grid({
  className,
  children,
}: GridProps) {
  return (
    <div
      className={`
      grid
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-4
      gap-5
      lg:gap-14
      ${className}
      `}
    >
      {children}
    </div>
  )
}
