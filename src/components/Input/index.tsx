import clsx from "clsx";
import { Label } from "../Label";

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  disabled?: boolean;
  value?: string;
  endIcon?: React.ReactNode;
  type?: string;
}

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  disabled?: boolean;
}

const Input = ({ hasError, disabled, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        `appearance-none w-[100%] px-4 py-2 border-1 ${hasError ? "border-error" : "border-gray-30"} ${disabled ? "text-gray-60 bg-gray-30" : "text-gray-100"} rounded-lg focus:border-blue-30 placeholder:text-gray-70 placeholder:text-[14px]`,
        className,
      )}
    />
  );
};

export const TextInput = ({
  label,
  hasError,
  errorMessage,
  disabled,
  endIcon,
  ...props
}: TextInputProps & InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label
          className={`${hasError ? "text-error" : disabled ? "text-gray-60" : "text-gray-100"} text-[12px]`}
        >
          {label}
        </Label>
      )}
      <div className="relative">
        <Input disabled={disabled} hasError={hasError} {...props} />
        {endIcon && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {endIcon}
          </div>
        )}
      </div>
      {hasError && errorMessage && (
        <p className="text-error text-[14px]">*{errorMessage}</p>
      )}
    </div>
  );
};
