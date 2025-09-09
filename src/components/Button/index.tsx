import clsx from "clsx";
import type { VariantOptionsType } from "./types";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: VariantOptionsType;
  disabled?: boolean;
}

function getVariantClassName(variant?: VariantOptionsType) {
  switch (variant) {
    case "primary":
      return "bg-blue text-gray-10 hover:bg-blue/90 disabled:bg-gray-50 disabled:text-gray-80";
    case "success":
      return "bg-success text-gray-10 hover:bg-success/90 disabled:bg-gray-50 disabled:text-gray-80";
    case "error":
      return "bg-error text-white hover:bg-error/90 disabled:bg-gray-50 disabled:text-gray-80";
    case "warning":
      return "bg-warning text-warning-90 hover:bg-warning/90 disabled:bg-gray-50 disabled:text-gray-80";
    case "outlined":
      return "bg-transparent border border-blue text-blue hover:bg-blue/10 disabled:border-gray-80 disabled:text-gray-80";
    case "info":
      return "bg-transparent text-blue hover:bg-blue/10 disabled:text-gray-80";
    default:
      return "bg-blue text-gray-10 hover:bg-blue/90 disabled:bg-gray-50 disabled:text-gray-80";
  }
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        `
      w-[70px] h-[40px] rounded-lg text-[14px] px-4 py-3 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed
      ${getVariantClassName(props.variant)}
    `,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonComponent({ children, ...props }: ButtonProps) {
  return <Button {...props}>{children}</Button>;
}
