import { CSSProperties } from 'react';

interface LogoProps {
  className?: string,
  style?: CSSProperties
}

export default function Logo({
  className,
  style,
}: LogoProps) {
  return (
    <div className={className}>
      <img
        src="/assets/images/CatwikiLogo.svg"
        alt="LogoCatWiki"
        className={`
        w-full
        h-full
        object-cover
      `}
        style={style}
      />
    </div>
  )
}
