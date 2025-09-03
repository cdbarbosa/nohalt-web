import type { IconType } from "../../utils/types/icon-type";

export function MenuIcon(props: IconType) {
  const { height = 24, width = 24, color = "#000000" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}
