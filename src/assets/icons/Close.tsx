import type { IconType } from "../../utils/types/icon-type";

export function CloseIcon(props: IconType) {
  const { height = 24, width = 24, color = "#000000" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
}
