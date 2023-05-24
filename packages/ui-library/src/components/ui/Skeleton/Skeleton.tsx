import { twMerge } from "tailwind-merge";
import { skeletonStyles, skeletonAnimationStyles } from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";

export default function Skeleton({
  radius,
  width,
  height,
  count,
  className,
}: SkeletonProps) {
  if (count && count > 1) {
    const elements = new Array(count).fill(null);
    return (
      <>
        {elements.map((_, index) => (
          <div
            style={{ width, height }}
            className={skeletonStyles({
              radius,
              className: twMerge("mb-2 last:mb-0", className),
            })}
            key={`skeleton-${index}`}
            aria-label="skeleton loading"
          >
            <div className={skeletonAnimationStyles({ radius })} />
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      style={{ width, height }}
      className={skeletonStyles({ radius, className })}
    >
      <div className={skeletonAnimationStyles({ radius })} />
    </div>
  );
}
