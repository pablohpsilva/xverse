import { FC, InputHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import Text from "@/components/Text";

const textFieldVariants = tv({
  base: "flex flex-col gap-1",
  variants: {
    error: {
      true: "border-red-500",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
  },
});

const inputVariants = tv({
  base: "bg-inputBackground w-full px-3 py-2 border border-background rounded-sm focus:outline-none",
  variants: {
    error: {
      true: "border-red-500 focus:ring-red-500",
    },
    disabled: {
      true: "",
    },
  },
});

export type TextFieldProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof textFieldVariants>;

const TextField: FC<TextFieldProps> = ({
  label,
  error,
  disabled,
  className,
  ...props
}) => {
  return (
    <div className={textFieldVariants({ error: !!error, disabled, className })}>
      <Text variant="span" size="sm" disabled={disabled}>
        {label}
      </Text>
      <input
        disabled={disabled}
        className={inputVariants({ error: !!error, disabled })}
        {...props}
      />
      {error && (
        <Text size="xs" className="text-red-500">
          {error}
        </Text>
      )}
    </div>
  );
};

export default TextField;
