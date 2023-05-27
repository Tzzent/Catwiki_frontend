interface CardBreedProps {
  labelVisible?: boolean,
  label?: string,
  image: string,
  className?: string,
}

export default function CardBreed({
  label,
  image,
  className,
  labelVisible = true,
}: CardBreedProps) {
  return (
    <div
      className={`
      flex 
      flex-col
      gap-2
      ${className}
      `}
    >
      <div className="w-full h-full rounded-xl overflow-hidden aspect-square">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover"
        />
      </div>
      {labelVisible && (<span className="font-semibold truncate">{label}</span>)}
    </div>
  )
}
