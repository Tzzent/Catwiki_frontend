import SkeletonHead from "./skeletons/SkeletonHead";

interface HeadProps {
  loading?: boolean,
  title?: string,
  description?: string,
  className?: string,
}

export default function Head({
  loading = false,
  title,
  description,
  className,
}: HeadProps) {
  return (
    <>
      {loading ? (
        <SkeletonHead
          hasTitle={title ? true : false}
          hasDecription={description ? true : false}
        />
      ) : (
        <div className={`flex flex-col gap-5 mb-5 ${className}`}>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm lg:text-base">{description}</p>
        </div>
      )}
    </>
  )
}