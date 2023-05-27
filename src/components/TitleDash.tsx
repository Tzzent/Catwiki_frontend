interface TitleDashProps {
  label: string,
  color?: string,
  size?: number | string,
  className?: string,
}

export default function TitleDash({
  label,
  color,
  size,
  className,
}: TitleDashProps) {
  return (
    <div
      className={`
      py-5
      relative
      ${className}
      `}
    >
      <span
        className={`
        absolute
        w-14
        h-1
        top-0
        rounded-xl
        ${color || 'bg-amber-950'}
        `}
      ></span>
      <h3
        style={{ fontSize: size }}
        className="
        font-bold
        text-amber-950
        "
      >{label}</h3>
    </div>
  )
}
