import { PropsWithTestId } from "@/types/common";
import type { FC, PropsWithChildren } from "react";

import type { HTMLAttributes } from "react";

export type IconProps = PropsWithTestId<
  HTMLAttributes<HTMLOrSVGElement> & {
    width?: number | string;
    className?: string;
    viewBox?: string;
    mRef?: React.Ref<HTMLAttributes<HTMLOrSVGElement>> | null;
    fill?: string;
    isSelected?: boolean;
  }
>;

const _BlankIcon: FC<PropsWithChildren<IconProps>> = ({
  className = "cursor-pointer",
  width = 24,
  viewBox,
  style = {},
  fill = "currentColor",
  children,
  testId,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      className={className}
      width={width}
      height={width}
      viewBox={viewBox}
      fill={fill}
      style={{
        fillRule: "evenodd",
        ...style,
      }}
      {...props}
      data-testid={testId}
    >
      {children}
    </svg>
  );
};

export default _BlankIcon;
