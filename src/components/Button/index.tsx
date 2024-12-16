import { FC, ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import LoadingIcon from "../Icon/Loading";

const buttonVariants = tv({
  base: "flex flex-row justify-center items-center gap-4 px-4 py-2 rounded-lg transition-colors duration-200 bg-[#465AE9] text-white hover:bg-white hover:text-[#465AE9] border border-[#465AE9]",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed hover:bg-[#465AE9] hover:text-white",
    },
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };

const Button: FC<ButtonProps> = ({
  children,
  disabled,
  className,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={buttonVariants({ disabled, className })}
      {...props}
    >
      {isLoading && <LoadingIcon />}
      {children}
    </button>
  );
};

export default Button;
