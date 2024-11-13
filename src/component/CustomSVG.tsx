import React from "react";
import { Svg, Rect, Path } from "react-native-svg";

interface CustomSVGProps {
  color?: string;
  opacity?: number;
  width?: number;
  height?: number;
}

const CustomSVG: React.FC<CustomSVGProps> = ({
  color = "white",
  opacity = 0.8,
  width = 274,
  height = 159,
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 274 159"
      fill="none"
      {...props}
    >
      <Rect
        width="274"
        height="136"
        rx="22"
        fill={color}
        fillOpacity={opacity}
      />
      <Path
        d="M94.5 159L81.0766 135.75L107.923 135.75L94.5 159Z"
        fill={color}
        fillOpacity={opacity}
      />
    </Svg>
  );
};

export default CustomSVG;
