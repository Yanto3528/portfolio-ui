import { SyntheticEvent } from "react";

import { avatarStyles } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

export default function Avatar({
  src,
  size,
  className,
  defaultImage,
  ...props
}: AvatarProps) {
  const onErrorLoadImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    if (defaultImage) {
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.src = defaultImage;
    }
  };

  return (
    <div className="w-fit rounded-full bg-gray-100">
      <img
        onError={onErrorLoadImage}
        className={avatarStyles({ size, className })}
        src={src || defaultImage}
        {...props}
      />
    </div>
  );
}
