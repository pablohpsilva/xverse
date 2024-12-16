import { FC, InputHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import Text from "@/components/Text";

const textFieldVariants = tv({
  base: "flex flex-col gap-1",
});

const displayVariants = tv({
  base: "bg-inputBackground w-full px-3 py-2 border border-background break-words rounded-md focus:outline-none",
});

export type TextFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof textFieldVariants>;

const TextField: FC<TextFieldProps> = ({ label, className, ...props }) => {
  return (
    <div className={textFieldVariants({ className })}>
      <Text variant="span" size="xs" disabled>
        {label}
      </Text>
      <Text className={displayVariants()}>{props.value}</Text>
    </div>
  );
};

export default TextField;
