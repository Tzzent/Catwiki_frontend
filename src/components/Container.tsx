import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode,
  className?: string,
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={`
      container 
      m-auto
      py-4
      px-5
      lg:px-20
      ${className}
      `}
    >
      {children}
    </div>
  )
}
