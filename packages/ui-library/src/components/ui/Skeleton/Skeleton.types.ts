import { VariantProps } from "@/lib/tailwind-variant";

import { skeletonStyles } from "./Skeleton.styles";

type SkeletonStylesProps = VariantProps<typeof skeletonStyles>;

export interface SkeletonProps extends SkeletonStylesProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  count?: number;
}
