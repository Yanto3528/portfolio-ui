import { skeletonStyles, skeletonAnimationStyles } from "./Skeleton.styles";
import { SkeletonProps } from "./Skeleton.types";

export default function Skeleton({ rounded, className }: SkeletonProps) {
  return (
    <div className={skeletonStyles({ rounded, className })}>
      <div className={skeletonAnimationStyles({ rounded })} />
    </div>
  );
}
