import { PropsWithTestId } from "@/types/common";
import withTestId from "../WithTestId";
import { FC } from "react";

import Text from "@/components/Text";
import Link from "next/link";
import ChevronLeftIcon from "../Icon/ChevronLeft";
import clsx from "clsx";

export type HeaderProps = PropsWithTestId<{
  title: string;
  hasBackButton?: boolean;
  backButtonHref?: string;
}>;

const Header: FC<HeaderProps> = ({
  title,
  hasBackButton,
  backButtonHref,
  testId,
}) => {
  return (
    <nav
      className={clsx(
        "h-20 flex flex-row p-4 page-wrapper",
        hasBackButton ? "items-end justify-between" : "items-end justify-center"
      )}
      data-testid={testId}
    >
      {hasBackButton && (
        <Link
          className="px-2"
          href={backButtonHref ?? "/"}
          data-testid={`${testId}.backLink`}
        >
          <ChevronLeftIcon />
        </Link>
      )}
      <Text variant="span" data-testid={`${testId}.title`}>
        {title}
      </Text>
      {hasBackButton && <div className="px-4" />}
    </nav>
  );
};

export default withTestId(Header);
