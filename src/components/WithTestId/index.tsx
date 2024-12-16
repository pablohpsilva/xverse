import { FC } from "react";

import { PropsWithTestId } from "@/types/common";

/**
 * A Higher Order Component (HOC) that automatically adds test IDs to components.
 * It takes a component that accepts a testId prop and enhances it by:
 *
 * 1. Accepting an optional testId prop from the parent
 * 2. Combining the parent testId (if provided) with the wrapped component's name
 * 3. Passing the combined testId to the wrapped component
 *
 * Example usage:
 * const Button = withTestId(BaseButton);
 * <Button testId="header" /> // Results in testId="header.BaseButton"
 * <Button /> // Results in testId="BaseButton"
 */

function withTestId<T>(
  WrappedComponent: FC<PropsWithTestId<T>>
): FC<PropsWithTestId<T>> {
  const WithTestIdWrappedComponent: FC<PropsWithTestId<T>> = (
    props: PropsWithTestId<T>
  ) => {
    const componentName = `${props?.testId ? `${props?.testId}.` : ""}${
      WrappedComponent?.name
    }`;
    return <WrappedComponent {...(props as T)} testId={componentName} />;
  };

  return WithTestIdWrappedComponent;
}

export default withTestId;
